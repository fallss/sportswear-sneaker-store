'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Compass } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

export default function NotFound() {
  const { language } = useTranslation();
  const isId = language === 'id';

  return (
    <div className="min-h-[75vh] bg-vault-black text-zinc-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center bg-[#111116] border border-zinc-800 p-8 sm:p-12 rounded-3xl shadow-2xl">
        <div className="w-16 h-16 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mx-auto mb-5 text-[#ccff00]">
          <Compass className="w-8 h-8" />
        </div>
        <span className="font-mono text-xs uppercase tracking-widest text-[#ccff00] font-bold">
          {isId ? 'KESALAHAN 404 // ARSIP TIDAK DITEMUKAN' : 'ERROR 404 // VAULT MISSING'}
        </span>
        <h1 className="font-display text-3xl sm:text-4xl font-black uppercase text-white mt-2 mb-3">
          {isId ? 'Siluet Tidak Ditemukan' : 'Silhouette Not Found'}
        </h1>
        <p className="text-zinc-400 text-xs sm:text-sm font-sans mb-8 leading-relaxed">
          {isId
            ? 'Halaman arsip atau model sneaker yang Anda cari tidak tersedia dalam repositori aktif atau telah ditarik.'
            : 'The requested archive page or sneaker model does not exist in the active repository or has been retired.'}
        </p>
        <Link
          href="/sneakers"
          className="inline-flex items-center gap-2 px-8 py-4 bg-[#ccff00] hover:bg-[#dcff33] text-black font-mono text-xs font-bold uppercase tracking-widest rounded-xl transition-all shadow-md glow-lime-sm active:scale-95"
        >
          <span>{isId ? 'KEMBALI KE KATALOG VAULT' : 'RETURN TO SNEAKER VAULT'}</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
