'use client';

import React from 'react';
import Link from 'next/link';
import { COLLECTIONS } from '@/data/collections';
import { ArrowRight, Layers } from 'lucide-react';
import { ImageWithFallback } from '@/components/ui/ImageWithFallback';
import { useTranslation } from '@/hooks/useTranslation';

const COLLECTIONS_ID: Record<string, { title: string; subtitle: string; description: string; tag: string }> = {
  'built-for-the-streets': {
    title: 'DIRANCANG UNTUK JALANAN',
    subtitle: 'RILISAN EDITORIAL SS26',
    description:
      'Pertemuan antara kultur jalanan autentik dan presisi busana modern. Jelajahi siluet terrace ramping, tekstur tegas, dan corak warna monokrom abadi untuk melangkah di aspal kota.',
    tag: 'EDITORIAL',
  },
  'y2k-tech-runners': {
    title: 'ARSIP PELARI TEKNOLOGI Y2K',
    subtitle: 'RANGKA METALIK & MATRIKS BANTALAN GEL',
    description:
      'Kelahiran kembali arsitektur lari era milenium baru. Lapisan perak berkilau, jaring ventilasi terbuka, dan bantalan responsif yang terpampang nyata.',
    tag: 'TREN POPULER',
  },
  'hardcourt-royalty': {
    title: 'LEGENDA LAPANGAN BASKET',
    subtitle: 'SILUET BASKET KLASIK ERA 80-AN',
    description:
      'Kualitas kulit berstandar juara, perlindungan pergelangan kaki tinggi, dan warisan legendaris. Siluet bersejarah yang mendominasi lapangan basket dan menaklukkan kultur streetwear.',
    tag: 'IKONIK',
  },
  'the-minimalist-rotation': {
    title: 'ROTASI MINIMALIS ELEGAN',
    subtitle: 'KEMEWAHAN BERSAHAJA & KERAJINAN HARIAN',
    description:
      'Garis desain bersih, palet warna netral yang tenang, dan kulit premium pilihan. Siluet fleksibel yang menyempurnakan setiap gaya busana harian.',
    tag: 'ESENSIAL',
  },
};

export default function CollectionsPage() {
  const { language } = useTranslation();
  const isId = language === 'id';

  return (
    <div className="min-h-screen bg-vault-black text-zinc-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="border-b border-zinc-800 pb-8 mb-12">
          <div className="flex items-center gap-2 text-[#ccff00] text-xs font-mono font-bold uppercase tracking-widest mb-2">
            <Layers className="w-4 h-4" />
            <span>{isId ? 'RILISAN MUSIMAN TERKURASI' : 'SEASONAL EDITORIAL DROPS'}</span>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl font-black uppercase tracking-tight text-white">
            {isId ? 'Koleksi Terkurasi' : 'Curated Collections'}
          </h1>
          <p className="mt-4 text-zinc-400 text-sm sm:text-base max-w-2xl font-sans leading-relaxed">
            {isId
              ? 'Setiap koleksi menceritakan kisah arsitektural dan kultural sneaker. Temukan siluet yang disatukan oleh pergerakan estetika, inovasi material, dan momen bersejarah.'
              : 'Every collection tells an architectural and cultural story. Discover silhouettes unified by aesthetic movements, historic moments, and subcultural movements.'}
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {COLLECTIONS.map((col) => {
            const filterUrl = col.category
              ? `/sneakers?category=${col.category}`
              : '/sneakers?featured=true';
            
            const localized = isId && COLLECTIONS_ID[col.id] ? COLLECTIONS_ID[col.id] : col;

            return (
              <div
                key={col.id}
                className="group relative rounded-3xl overflow-hidden bg-[#101015] border border-zinc-800 hover:border-zinc-700 transition-all duration-300 shadow-2xl flex flex-col justify-between"
              >
                {/* Visual Imagery */}
                <div className="relative aspect-[16/10] w-full bg-zinc-950 overflow-hidden">
                  <ImageWithFallback
                    src={col.image}
                    alt={localized.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  
                  <div className="absolute top-4 left-4 font-mono text-[10px] text-[#d4ff00] font-bold uppercase tracking-widest bg-black/70 px-3 py-1 rounded backdrop-blur-sm border border-zinc-800">
                    {localized.tag}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col justify-between flex-1">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-widest text-[#d4ff00] font-bold block mb-1">
                      {localized.subtitle}
                    </span>
                    <h2 className="font-display text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
                      {localized.title}
                    </h2>
                    <p className="text-zinc-400 text-xs sm:text-sm mt-3 leading-relaxed font-sans">
                      {localized.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-zinc-800/80">
                    <Link
                      href={filterUrl}
                      className="inline-flex items-center gap-2 px-6 py-3.5 bg-zinc-900 hover:bg-[#d4ff00] text-white hover:text-black font-mono text-xs font-bold uppercase tracking-widest rounded-xl transition-all shadow-md group-hover:bg-[#d4ff00] group-hover:text-black"
                    >
                      <span>{isId ? 'Jelajahi Koleksi' : 'Explore Collection'}</span>
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
