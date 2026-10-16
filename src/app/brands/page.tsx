'use client';

import React from 'react';
import Link from 'next/link';
import { BRANDS } from '@/data/brands';
import { ArrowRight, Compass } from 'lucide-react';
import { ImageWithFallback } from '@/components/ui/ImageWithFallback';
import { useTranslation } from '@/hooks/useTranslation';

const BRANDS_ID: Record<string, { tagline: string; description: string }> = {
  nike: {
    tagline: 'JUST DO IT. INOVASI MAKSIMAL UNTUK SETIAP ATLET.',
    description:
      'Pelopor teknologi alas kaki revolusioner sejak 1971. Dari bantalan udara Air yang terlihat hingga pelari futuristik, Nike terus mendefinisikan kultur olahraga dan estetika streetwear dunia.',
  },
  jordan: {
    tagline: 'KEMAMPUAN TERBANG & KEJAYAAN TANPA BATAS.',
    description:
      'Lahir di lapangan kayu keras basket dan diabadikan oleh Michael Jordan. Lambang Jumpman melambangkan dominasi kejuaraan tertinggi, keahlian kulit premium, dan kehormatan kultur street.',
  },
  adidas: {
    tagline: 'TIGA GARIS IKONIK DALAM INOVASI & KULTUR.',
    description:
      'Dari lapangan sepak bola Eropa era 1950-an hingga panggung peragaan busana modern, adidas memadukan siluet klasik terrace legendaris seperti Samba dan Gazelle dengan sepatu lari super pemecah rekor dunia.',
  },
  'new-balance': {
    tagline: 'KERAJINAN TANGAN INDEPENDEN & KENYAMANAN SEJATI.',
    description:
      'Terkenal dengan material bermutu tinggi, manufaktur lokal di USA dan UK, serta kenyamanan ortopedik tak tertandingi. Seri 990 dan siluet pahatan 9060 kini mendefinisikan streetwear mewah kontemporer.',
  },
  asics: {
    tagline: 'ANIMA SANA IN CORPORE SANO — JIWA SEHAT DALAM TUBUH SEHAT.',
    description:
      'Kekuatan rekayasa presisi dari Kobe, Jepang. ASICS kini memimpin gelombang sepatu lari teknologi global dengan bantalan GEL bersegmen, overlay metalik pahatan, dan arsitektur stabilitas terdepan.',
  },
  puma: {
    tagline: 'FOREVER FASTER. KULTUR KLASIK ABADI.',
    description:
      'Berakar dari keberanian Olimpiade 1968, kultur breakdance b-boy era 80-an, hingga tribun suporter sepak bola Eropa. Puma memadukan warisan suede abadi dengan kebangkitan ikon arsip seperti Palermo.',
  },
  converse: {
    tagline: 'IKON SEJATI BAGI GENERASI PEMBERONTAK & KREATIF.',
    description:
      'Sepatu basket orisinal yang bertransformasi menjadi seragam universal para musisi rock, perintis skateboard, dan seniman visioner. Chuck 70 dan Weapon CX terus melintasi batas zaman dan tren.',
  },
};

export default function BrandsPage() {
  const { language } = useTranslation();
  const isId = language === 'id';

  return (
    <div className="min-h-screen bg-vault-black text-zinc-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="border-b border-zinc-800 pb-8 mb-12">
          <div className="flex items-center gap-2 text-[#ccff00] text-xs font-mono font-bold uppercase tracking-widest mb-2">
            <Compass className="w-4 h-4" />
            <span>{isId ? 'BRAND SEPATU TERKEMUKA' : 'CURATED FOOTWEAR HOUSES'}</span>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl font-black uppercase tracking-tight text-white">
            {isId ? 'Brand & Warisan Sejarah' : 'Houses & Heritage'}
          </h1>
          <p className="mt-4 text-zinc-400 text-sm sm:text-base max-w-2xl font-sans leading-relaxed">
            {isId
              ? 'Merek-merek legendaris yang mengukir sejarah olahraga dan menjadi fondasi kultur street modern. Jelajahi siluet arsip, teknologi bantalan mutakhir, dan rilis eksklusif dari tujuh brand pilihan kami.'
              : 'The brands that forged sport history and anchored modern street culture. Explore archival silhouettes, signature cushioning innovations, and exclusive drops from our seven partner lineages.'}
          </p>
        </div>

        {/* Brands List / Grid */}
        <div className="space-y-8">
          {BRANDS.map((brand, idx) => {
            const localized = isId && BRANDS_ID[brand.slug] ? BRANDS_ID[brand.slug] : brand;

            return (
              <div
                key={brand.slug}
                className="group rounded-3xl overflow-hidden bg-[#111116] border border-zinc-800 hover:border-zinc-700 transition-all duration-300 shadow-2xl grid grid-cols-1 lg:grid-cols-12"
              >
                {/* Brand Imagery */}
                <div className="lg:col-span-5 relative aspect-[16/9] lg:aspect-auto min-h-[260px] bg-zinc-950 overflow-hidden">
                  <ImageWithFallback
                    src={brand.heroImage}
                    alt={brand.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/80 via-transparent to-transparent" />
                  
                  <div className="absolute top-4 left-4 font-mono text-[10px] text-[#ccff00] uppercase font-bold tracking-widest bg-black/70 px-3 py-1 rounded backdrop-blur-sm border border-zinc-800">
                    0{idx + 1}{' // '}{isId ? 'Est. ' : ''}{brand.founded}
                  </div>
                </div>

                {/* Brand Story & Link */}
                <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-2">
                      <span>{isId ? 'ASAL' : 'ORIGIN'}: {brand.origin.toUpperCase()}</span>
                      <span className="text-[#d4ff00]">{brand.featuredModel}</span>
                    </div>

                    <h2 className="font-display text-3xl sm:text-4xl font-black uppercase text-white tracking-tight">
                      {brand.name}
                    </h2>

                    <p className="text-xs font-mono text-[#d4ff00] uppercase tracking-wider mt-1 mb-4">
                      {localized.tagline}
                    </p>

                    <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed font-sans">
                      {localized.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-zinc-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <span className="font-mono text-xs text-zinc-500">
                      {isId ? 'Model unggulan' : 'Flagship models'}: {brand.featuredModel}
                    </span>

                    <Link
                      href={`/sneakers?brand=${encodeURIComponent(brand.name)}`}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#d4ff00] hover:bg-[#e2ff40] text-black font-mono text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md active:scale-95 flex-shrink-0"
                    >
                      <span>{isId ? `Lihat Koleksi ${brand.name}` : `Explore ${brand.name} Catalog`}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
