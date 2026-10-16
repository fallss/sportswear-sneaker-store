'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Compass, MapPin, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '@/components/ui/ImageWithFallback';
import { useTranslation } from '@/hooks/useTranslation';

export default function AboutPage() {
  const { t } = useTranslation();

  const conceptSpaces = [
    {
      city: 'Tokyo',
      district: 'Daikanyama',
      address: '2-14 Sarugakucho, Shibuya-ku',
      focus: t.aboutPage.spaceTokyoFocus,
      image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=1000&q=85',
    },
    {
      city: 'London',
      district: 'Shoreditch',
      address: '42 Redchurch Street, E2 7DD',
      focus: t.aboutPage.spaceLondonFocus,
      image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=1000&q=85',
    },
    {
      city: 'New York',
      district: 'SoHo',
      address: '118 Mercer Street, NY 10012',
      focus: t.aboutPage.spaceNyFocus,
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=85',
    },
  ];

  return (
    <div className="min-h-screen bg-[#08080a] text-zinc-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="border-b border-zinc-800 pb-8 mb-12">
          <div className="flex items-center gap-2 text-vault-lime text-xs font-mono font-bold uppercase tracking-widest mb-2">
            <Compass className="w-4 h-4" />
            <span>{t.aboutPage.badge}</span>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl font-black uppercase tracking-tight text-white">
            {t.aboutPage.title}
          </h1>
          <p className="mt-4 text-zinc-400 text-sm sm:text-base max-w-2xl font-sans leading-relaxed">
            {t.aboutPage.subtitle}
          </p>
        </div>

        {/* Hero Editorial Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-display text-3xl sm:text-4xl font-black uppercase text-white tracking-tight leading-tight">
              {t.aboutPage.statement1} <br />
              <span className="text-vault-lime">{t.aboutPage.statement2}</span>
            </h2>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-sans">
              {t.aboutPage.p1}
            </p>

            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-sans">
              {t.aboutPage.p2}
            </p>

            <div className="pt-4 grid grid-cols-2 gap-4 font-mono text-xs">
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <span className="text-2xl font-bold text-vault-lime font-display block">
                  {t.aboutPage.verificationStat}
                </span>
                <span className="text-zinc-400 uppercase text-[11px]">
                  {t.aboutPage.verificationLabel}
                </span>
              </div>
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <span className="text-2xl font-bold text-white font-display block">
                  {t.aboutPage.spacesStat}
                </span>
                <span className="text-zinc-400 uppercase text-[11px]">
                  {t.aboutPage.spacesLabel}
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative aspect-[4/3] rounded-3xl overflow-hidden bg-zinc-950 border border-zinc-800 shadow-2xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1512374382149-233c42b6a83b?auto=format&fit=crop&w=1200&q=85"
              alt="SOLEVAULT studio"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 font-mono text-xs text-vault-lime uppercase tracking-wider font-bold">
              {t.aboutPage.studioTag}
            </div>
          </div>
        </div>

        {/* Authentication Protocol Section */}
        <div id="authenticity" className="p-8 sm:p-12 rounded-3xl bg-[#0f0f14] border border-zinc-800 shadow-2xl mb-24">
          <div className="flex items-center gap-2 text-vault-lime text-xs font-mono font-bold uppercase tracking-widest mb-2">
            <ShieldCheck className="w-4 h-4" />
            <span>{t.aboutPage.authBadge}</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-black uppercase text-white tracking-tight mb-4">
            {t.aboutPage.authTitle}
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm max-w-2xl mb-8 leading-relaxed font-sans">
            {t.aboutPage.authSubtitle}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
            <div className="p-5 rounded-xl bg-zinc-900/50 border border-zinc-800">
              <span className="text-vault-lime font-bold block mb-1">{t.aboutPage.step1Title}</span>
              <p className="text-zinc-400 font-sans text-xs">
                {t.aboutPage.step1Desc}
              </p>
            </div>
            <div className="p-5 rounded-xl bg-zinc-900/50 border border-zinc-800">
              <span className="text-vault-lime font-bold block mb-1">{t.aboutPage.step2Title}</span>
              <p className="text-zinc-400 font-sans text-xs">
                {t.aboutPage.step2Desc}
              </p>
            </div>
            <div className="p-5 rounded-xl bg-zinc-900/50 border border-zinc-800">
              <span className="text-vault-lime font-bold block mb-1">{t.aboutPage.step3Title}</span>
              <p className="text-zinc-400 font-sans text-xs">
                {t.aboutPage.step3Desc}
              </p>
            </div>
            <div className="p-5 rounded-xl bg-zinc-900/50 border border-zinc-800">
              <span className="text-vault-lime font-bold block mb-1">{t.aboutPage.step4Title}</span>
              <p className="text-zinc-400 font-sans text-xs">
                {t.aboutPage.step4Desc}
              </p>
            </div>
            <div className="p-5 rounded-xl bg-zinc-900/50 border border-zinc-800">
              <span className="text-vault-lime font-bold block mb-1">{t.aboutPage.step5Title}</span>
              <p className="text-zinc-400 font-sans text-xs">
                {t.aboutPage.step5Desc}
              </p>
            </div>
            <div className="p-5 rounded-xl bg-zinc-900/50 border border-zinc-800">
              <span className="text-vault-lime font-bold block mb-1">{t.aboutPage.step6Title}</span>
              <p className="text-zinc-400 font-sans text-xs">
                {t.aboutPage.step6Desc}
              </p>
            </div>
          </div>
        </div>

        {/* Physical Concept Destinations */}
        <div id="concept-stores" className="mb-16">
          <div className="flex items-center gap-2 text-vault-lime text-xs font-mono font-bold uppercase tracking-widest mb-2">
            <MapPin className="w-4 h-4" />
            <span>{t.aboutPage.spacesBadge}</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-black uppercase text-white tracking-tight mb-8">
            {t.aboutPage.spacesTitle}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {conceptSpaces.map((space) => (
              <div
                key={space.city}
                className="group rounded-2xl overflow-hidden bg-[#111116] border border-zinc-800 hover:border-zinc-700 transition-all duration-300"
              >
                <div className="relative aspect-video w-full bg-zinc-950 overflow-hidden">
                  <ImageWithFallback
                    src={space.image}
                    alt={`${space.city} concept space`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-black/70 font-mono text-[10px] text-vault-lime font-bold px-2.5 py-1 rounded">
                    {space.city.toUpperCase()}
                  </div>
                </div>

                <div className="p-6">
                  <span className="font-mono text-xs text-vault-lime uppercase font-bold block">
                    {space.district}
                  </span>
                  <h3 className="font-display text-xl font-bold uppercase text-white mt-1">
                    SOLEVAULT {space.city}
                  </h3>
                  <p className="font-mono text-xs text-zinc-500 mt-1">
                    {space.address}
                  </p>
                  <p className="text-xs text-zinc-400 mt-3 font-sans leading-relaxed">
                    {space.focus}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#121217] border border-zinc-800 text-center shadow-xl">
          <h2 className="font-display text-2xl sm:text-3xl font-black uppercase text-white mb-3">
            {t.aboutPage.ctaTitle}
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm max-w-md mx-auto mb-6">
            {t.aboutPage.ctaSubtitle}
          </p>
          <Link
            href="/sneakers"
            className="inline-flex items-center gap-2 px-8 py-4 bg-vault-lime hover:bg-[#dcff33] text-black font-mono text-xs font-bold uppercase tracking-widest rounded-xl transition-all shadow-lg glow-lime-sm"
          >
            <span>{t.aboutPage.ctaButton}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
