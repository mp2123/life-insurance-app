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
import { Mail, Lock, Loader2 } from 'lucide-react';

export function AuthDialog({ trigger }: { trigger: React.ReactNode }) {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulating auth for now, will integrate Supabase fully in next step
    setTimeout(() => {
      setLoading(false);
      alert('Check your email for a magic link! (Demo Mode)');
    }, 1500);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[400px] border-border/40 bg-background/95 backdrop-blur-xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-black uppercase tracking-tight">The Bar Book</DialogTitle>
          <DialogDescription>
            Sign in to save your favorite recipes and tutorials.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleAuth} className="space-y-6 pt-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-primary">Email Address</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                className="pl-10 bg-muted/20 border-border/40"
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
            We use passwordless magic links for maximum security and simplicity.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
