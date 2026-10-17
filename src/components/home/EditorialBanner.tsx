'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { ImageWithFallback } from '@/components/ui/ImageWithFallback';
import { useTranslation } from '@/hooks/useTranslation';

export function EditorialBanner() {
  const { t } = useTranslation();

  return (
    <section className="relative py-24 bg-[#0a0a0d] border-b border-zinc-800/80 overflow-hidden">
      {/* Background Grid Accent */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl overflow-hidden border border-zinc-800/90 bg-[#101015] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8),0_0_35px_rgba(204,255,0,0.05)] hover:border-zinc-700 transition-colors duration-500">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
            {/* Left Campaign Imagery */}
            <div className="lg:col-span-7 relative min-h-[360px] lg:min-h-full overflow-hidden bg-zinc-950">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1400&q=85"
                alt="Editorial campaign"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/80 via-black/30 to-transparent" />
              
              <div className="absolute bottom-6 left-6 z-10 font-mono text-[10px] text-white font-bold uppercase tracking-widest bg-black/80 px-3.5 py-1.5 rounded-lg border border-white/20 backdrop-blur-md shadow-lg">
                <span className="text-white drop-shadow-sm">{t.editorial.campaign}</span>
              </div>
            </div>

            {/* Right Campaign Copy & CTA */}
            <div className="lg:col-span-5 p-8 sm:p-12 lg:p-16 flex flex-col justify-between bg-[#111116] border-t lg:border-t-0 lg:border-l border-zinc-800">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4ff00]/10 border border-[#d4ff00]/30 text-[#d4ff00] text-xs font-mono font-bold uppercase tracking-wider mb-6">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{t.editorial.tag}</span>
                </div>

                <h2 className="font-display text-4xl sm:text-5xl font-black uppercase text-white tracking-tighter leading-[0.95]">
                  {t.editorial.title1} <br />
                  <span className="text-[#d4ff00]">{t.editorial.title2}</span>
                </h2>

                <p className="mt-6 text-zinc-400 text-sm leading-relaxed font-sans">
                  {t.editorial.desc}
                </p>

                <div className="mt-6 space-y-2.5 font-mono text-xs text-zinc-300">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4ff00]" />
                    <span>{t.editorial.bullet1}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4ff00]" />
                    <span>{t.editorial.bullet2}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4ff00]" />
                    <span>{t.editorial.bullet3}</span>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-zinc-800/80">
                <Link
                  href="/collections"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#d4ff00] hover:bg-[#e2ff40] text-black font-mono text-xs font-bold uppercase tracking-widest rounded-xl transition-all duration-200 active:scale-95 glow-lime-sm"
                >
                  <span>{t.editorial.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
