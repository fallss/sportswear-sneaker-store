'use client';

import React, { useState } from 'react';
import { Mail, CheckCircle2, AlertCircle, ArrowRight, Sparkles, Loader2 } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

export function NewsletterSection() {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email)) {
      setStatus('error');
      setErrorMessage(t.newsletter.errorInvalid);
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    // Simulate network submission delay
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 800);
  };

  return (
    <section id="newsletter" className="py-24 bg-[#0a0a0d] border-b border-zinc-800/80 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#d4ff00]/[0.04] blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4ff00]/10 border border-[#d4ff00]/30 text-[#d4ff00] text-xs font-mono font-bold uppercase tracking-wider mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{t.newsletter.badge}</span>
        </div>

        <h2 className="font-display text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-tight">
          {t.newsletter.title}
        </h2>

        <p className="mt-4 text-zinc-400 text-sm sm:text-base max-w-lg mx-auto font-sans leading-relaxed">
          {t.newsletter.subtitle}
        </p>

        {/* Signup Form */}
        <div className="mt-10 max-w-md mx-auto">
          {status === 'success' ? (
            <div className="p-6 rounded-2xl bg-[#111116] border border-[#d4ff00]/40 text-center animate-in zoom-in-95 duration-200">
              <div className="w-12 h-12 rounded-full bg-[#d4ff00]/10 text-[#d4ff00] flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="font-display text-lg font-bold uppercase text-white">
                {t.newsletter.successTitle}
              </h3>
              <p className="text-xs text-zinc-400 font-mono mt-1">
                {t.newsletter.successDesc}
              </p>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="mt-4 text-xs font-mono text-[#d4ff00] hover:underline"
              >
                {t.newsletter.registerAnother}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <label htmlFor="newsletter-email" className="sr-only">
                  {t.newsletter.placeholder}
                </label>
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                <input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === 'error') setStatus('idle');
                  }}
                  placeholder={t.newsletter.placeholder}
                  className="w-full bg-[#14141a] border border-zinc-800 text-white placeholder-zinc-500 font-mono text-xs pl-10 pr-4 py-3.5 rounded-xl focus:border-[#ccff00] focus:outline-none transition-colors"
                  disabled={status === 'loading'}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-6 py-3.5 bg-[#ccff00] hover:bg-[#dcff33] text-black font-mono text-xs font-bold uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 transition-transform active:scale-95 disabled:opacity-50 glow-lime-sm flex-shrink-0"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>{t.newsletter.verifying}</span>
                  </>
                ) : (
                  <>
                    <span>{t.newsletter.button}</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}

          {status === 'error' && (
            <div className="flex items-center justify-center gap-1.5 mt-3 text-xs text-red-400 font-mono">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errorMessage}</span>
            </div>
          )}

          <p className="mt-4 text-[11px] font-mono text-zinc-500">
            {t.newsletter.disclaimer}
          </p>
        </div>

      </div>
    </section>
  );
}
