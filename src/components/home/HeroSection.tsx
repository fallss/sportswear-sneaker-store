'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, ChevronDown, ArrowUpRight } from 'lucide-react';
import { ImageWithFallback } from '@/components/ui/ImageWithFallback';
import { useTranslation } from '@/hooks/useTranslation';

export function HeroSection() {
  const { t } = useTranslation();

  const heroSneakers = [
    {
      name: 'Air Max 95 OG "Neon"',
      brand: 'Nike',
      price: '$185',
      sku: 'NK-AM95-NEON',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1400&q=85',
      tag: 'HERO DROP',
      slug: 'nike-air-max-95-og-neon',
    },
    {
      name: 'Air Jordan 1 High "Chicago"',
      brand: 'Jordan',
      price: '$190',
      sku: 'DZ5485-612',
      image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1400&q=85',
      tag: 'OG GRAIL',
      slug: 'jordan-1-retro-high-og-chicago',
    },
    {
      name: '9060 "Rain Cloud"',
      brand: 'New Balance',
      price: '$150',
      sku: 'U9060ECA',
      image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=1400&q=85',
      tag: 'Y2K TECH',
      slug: 'new-balance-9060-rain-cloud',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const currentSneaker = heroSneakers[activeIndex];

  return (
    <section className="relative min-h-[88vh] flex flex-col justify-between overflow-hidden bg-vault-black border-b border-zinc-800/80 bg-grid-pattern pt-6 pb-12">
      {/* Subtle radial ambient atmosphere */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-[#ccff00]/[0.035] blur-[150px] pointer-events-none rounded-full" />

      {/* Top Editorial Archive Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-2">
        <div className="flex items-center justify-between text-xs font-mono border-b border-zinc-800/60 pb-3">
          <div className="flex items-center gap-2 text-[#ccff00]">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="font-bold tracking-widest uppercase">{t.hero.season}</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-zinc-500 font-mono text-[11px] tracking-widest">
            <span>TOKYO</span>
            <span>•</span>
            <span>LONDON</span>
            <span>•</span>
            <span>NEW YORK</span>
          </div>
        </div>
      </div>

      {/* Main Hero Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-6 md:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Editorial Copy (7 cols: ample breathing room, zero collision) */}
          <div className="lg:col-span-7 z-10 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-zinc-300 text-xs font-mono uppercase tracking-wider w-fit mb-5">
              <span className="w-2 h-2 rounded-full bg-[#ccff00] animate-pulse" />
              <span>{t.hero.pill}</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-black uppercase tracking-tight text-white leading-[1.04]">
              <span>{t.hero.title1}</span> <br />
              <span className="text-zinc-200">
                {t.hero.title2}
              </span> <br />
              <span className="text-[#ccff00]">{t.hero.titleHighlight}</span>
            </h1>

            <p className="mt-5 text-zinc-400 text-sm sm:text-base max-w-xl leading-relaxed font-sans font-normal">
              {t.hero.subtitle}
            </p>

            {/* CTAs */}
            <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Link
                href="/sneakers"
                className="px-7 py-3.5 bg-[#ccff00] hover:bg-[#dcff33] text-black font-mono text-xs font-bold uppercase tracking-widest rounded-xl flex items-center justify-center gap-2.5 transition-transform active:scale-95 glow-lime-sm shadow-md"
              >
                <span>{t.hero.exploreCta}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/sneakers?sort=newest"
                className="px-7 py-3.5 bg-zinc-900/90 hover:bg-zinc-800 text-white border border-zinc-700/80 font-mono text-xs font-bold uppercase tracking-widest rounded-xl flex items-center justify-center gap-2.5 transition-colors backdrop-blur-sm"
              >
                <span>{t.hero.dropsCta}</span>
                <Sparkles className="w-4 h-4 text-[#ccff00]" />
              </Link>
            </div>

            {/* Micro Stats */}
            <div className="mt-8 pt-6 border-t border-zinc-800/60 grid grid-cols-3 gap-6 font-mono text-xs">
              <div>
                <span className="text-xl sm:text-2xl font-bold text-white font-display block">
                  100%
                </span>
                <span className="text-zinc-500 uppercase tracking-wider text-[11px]">
                  {t.hero.stat1Label}
                </span>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-bold text-white font-display block">
                  7
                </span>
                <span className="text-zinc-500 uppercase tracking-wider text-[11px]">
                  {t.hero.stat2Label}
                </span>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-bold text-[#ccff00] font-display block">
                  SS26
                </span>
                <span className="text-zinc-500 uppercase tracking-wider text-[11px]">
                  {t.hero.stat3Label}
                </span>
              </div>
            </div>
          </div>

          {/* Right Editorial Focal Sneaker Showcase (5 cols) */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
            {/* Visual Frame */}
            <div className="relative w-full aspect-square max-w-md rounded-3xl overflow-hidden bg-[#111116] border border-zinc-800 p-4 shadow-2xl flex items-center justify-center">
              
              {/* Corner Watermarks */}
              <div className="absolute top-4 left-4 z-10 font-mono text-[10px] text-zinc-400 uppercase tracking-widest">
                ARCHIVE REF // {currentSneaker.sku}
              </div>
              <div className="absolute top-4 right-4 z-10 font-mono text-[10px] text-[#ccff00] font-bold uppercase tracking-widest bg-[#ccff00]/10 px-2.5 py-0.5 rounded border border-[#ccff00]/30">
                {currentSneaker.tag}
              </div>

              {/* Sneaker Image */}
              <div className="relative w-full h-full transform hover:scale-105 transition-transform duration-500">
                <ImageWithFallback
                  src={currentSneaker.image}
                  alt={currentSneaker.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-contain p-6 drop-shadow-[0_20px_30px_rgba(0,0,0,0.65)]"
                />
              </div>

              {/* Bottom Sneaker Details Card */}
              <div className="absolute inset-x-4 bottom-4 p-4 rounded-2xl bg-[#09090b]/95 border border-zinc-800 backdrop-blur-md flex items-center justify-between shadow-xl">
                <div>
                  <span className="text-[#ccff00] font-mono text-[10px] uppercase tracking-wider font-bold block">
                    {currentSneaker.brand}
                  </span>
                  <h3 className="font-display text-sm sm:text-base font-bold text-white uppercase truncate">
                    {currentSneaker.name}
                  </h3>
                  <span className="font-mono text-sm font-bold text-zinc-300">
                    {currentSneaker.price}
                  </span>
                </div>

                <Link
                  href={`/product/${currentSneaker.slug}`}
                  className="p-3 bg-[#ccff00] hover:bg-[#dcff33] text-black rounded-xl transition-transform active:scale-90"
                  aria-label={`View ${currentSneaker.name}`}
                >
                  <ArrowUpRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Sneaker Switcher Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
              {heroSneakers.map((snk, idx) => (
                <button
                  key={snk.name}
                  onClick={() => setActiveIndex(idx)}
                  className={`px-3 py-1.5 rounded-lg font-mono text-xs transition-all ${
                    activeIndex === idx
                      ? 'bg-[#ccff00] text-black font-bold shadow-md shadow-[#ccff00]/20'
                      : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
                  }`}
                >
                  0{idx + 1}{' // '}{snk.brand}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Animated Scrolling Indicator */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-center pt-4">
        <a
          href="#featured-brands"
          className="flex flex-col items-center gap-1.5 text-zinc-500 hover:text-[#ccff00] transition-colors group"
          aria-label="Scroll down to featured brands"
        >
          <span className="font-mono text-[10px] uppercase tracking-widest group-hover:text-white">
            {t.hero.scrollExplore}
          </span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
}

