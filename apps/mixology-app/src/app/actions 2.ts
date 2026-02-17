'use server';

import { createServerClient, type CookieOptions } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function toggleFavoriteAction(recipeId: number) {
  // The fix is to await the cookies() call here.
  const cookieStore = await cookies(); 

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          cookieStore.set({ name, value, ...options });
        },
        remove(name: string, options: CookieOptions) {
          cookieStore.delete({ name, ...options });
        },
      },
    }
  );

  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return { error: 'You must be logged in to favorite recipes.' };
  }

  try {
    const existingFavorite = await prisma.favorite.findFirst({
      where: {
        userId: user.id,
        recipeId: recipeId,
      },
    });

    if (existingFavorite) {
      await prisma.favorite.delete({
        where: {
          id: existingFavorite.id,
        },
      });
    } else {
      await prisma.favorite.create({
        data: {
          userId: user.id,
          recipeId: recipeId,
        },
      });
    }

    revalidatePath('/');
    return { success: true };
  } catch (error) {
    console.error('Toggle favorite failed:', error);
    return { error: 'Database error.' };
  }
}
