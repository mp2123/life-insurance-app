'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Mail, Loader2, CheckCircle2 } from 'lucide-react';
import { createClient } from '@/utils/supabase/client';

export function AuthDialog({ trigger }: { trigger: React.ReactNode }) {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const supabase = createClient();

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: window.location.origin,
      },
    });

    setLoading(false);
    if (error) {
      alert(error.message);
    } else {
      setSent(true);
    }
  };

  return (
    <Dialog onOpenChange={(open) => { if (!open) setSent(false); }}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[400px] border-border/40 bg-background/95 backdrop-blur-xl">
        {!sent ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-black uppercase tracking-tight text-primary">The Bar Book</DialogTitle>
              <DialogDescription className="text-muted-foreground">
                Sign in to save your favorite recipes and tutorials.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleAuth} className="space-y-6 pt-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-primary/70">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    className="pl-10 bg-muted/20 border-border/40 focus:border-primary/50"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <Button type="submit" className="w-full rounded-xl py-6 font-bold uppercase tracking-widest shadow-xl shadow-primary/20" disabled={loading}>
                {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Send Magic Link'}
              </Button>
              <p className="text-[10px] text-center text-muted-foreground px-6 leading-relaxed">
                We use passwordless magic links for maximum security and simplicity. Check your inbox after clicking.
              </p>
            </form>
          </>
        ) : (
          <div className="py-12 flex flex-col items-center text-center space-y-6">
            <div className="h-20 w-20 bg-primary/10 rounded-full flex items-center justify-center text-primary">
              <CheckCircle2 className="h-10 w-10" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-black uppercase">Check your mail!</h3>
              <p className="text-muted-foreground text-sm px-8">
                We sent a magic link to <span className="font-bold text-foreground">{email}</span>. Click it to log in.
              </p>
            </div>
            <Button variant="ghost" className="text-xs uppercase tracking-widest" onClick={() => setSent(false)}>
              Back to Sign In
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
