'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, ShieldCheck, Truck, RefreshCw, Lock } from 'lucide-react';
import { ALL_BRANDS } from '@/data/products';
import { useTranslation } from '@/hooks/useTranslation';

export function Footer() {
  const { t, language } = useTranslation();
  const isId = language === 'id';

  return (
    <footer className="bg-[#060608] border-t border-[#1e1e24] pt-16 pb-12 text-zinc-400">
      {/* Value Badges Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 border-b border-zinc-800/80">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex items-center gap-3.5">
            <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-vault-lime">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h5 className="font-mono text-xs font-bold uppercase text-white">
                {t.footer.authTitle}
              </h5>
              <p className="text-[11px] text-zinc-500">{t.footer.authSub}</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-vault-lime">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h5 className="font-mono text-xs font-bold uppercase text-white">
                {t.footer.deliveryTitle}
              </h5>
              <p className="text-[11px] text-zinc-500">{t.footer.deliverySub}</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-vault-lime">
              <RefreshCw className="w-5 h-5" />
            </div>
            <div>
              <h5 className="font-mono text-xs font-bold uppercase text-white">
                {t.footer.returnsTitle}
              </h5>
              <p className="text-[11px] text-zinc-500">{t.footer.returnsSub}</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-vault-lime">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h5 className="font-mono text-xs font-bold uppercase text-white">
                {t.footer.vaultTitle}
              </h5>
              <p className="text-[11px] text-zinc-500">{t.footer.vaultSub}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Links Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          {/* Col 1: Shop */}
          <div>
            <h4 className="font-mono text-xs font-bold uppercase text-white tracking-wider mb-4">
              {t.footer.catalogCol}
            </h4>
            <ul className="space-y-2.5 text-xs font-mono">
              <li>
                <Link href="/sneakers?sort=newest" className="hover:text-vault-lime transition-colors">
                  {isId ? 'Rilis Baru' : 'New Arrivals'}
                </Link>
              </li>
              <li>
                <Link href="/sneakers?category=Retro" className="hover:text-vault-lime transition-colors">
                  {isId ? 'Klasik Retro' : 'Retro Classics'}
                </Link>
              </li>
              <li>
                <Link href="/sneakers?category=Basketball" className="hover:text-vault-lime transition-colors">
                  {isId ? 'Sepatu Basket' : 'Hardcourt Basketball'}
                </Link>
              </li>
              <li>
                <Link href="/sneakers?category=Running" className="hover:text-vault-lime transition-colors">
                  {isId ? 'Tech Runners' : 'Tech Runners'}
                </Link>
              </li>
              <li>
                <Link href="/sneakers?category=Lifestyle" className="hover:text-vault-lime transition-colors">
                  {isId ? 'Rotasi Harian' : 'Everyday Rotation'}
                </Link>
              </li>
              <li>
                <Link href="/sneakers?sale=true" className="text-red-400 hover:text-red-300 transition-colors">
                  {isId ? 'Diskon Arsip' : 'Vault Archive Sale'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Brands */}
          <div>
            <h4 className="font-mono text-xs font-bold uppercase text-white tracking-wider mb-4">
              {t.footer.brandsCol}
            </h4>
            <ul className="space-y-2.5 text-xs font-mono">
              {ALL_BRANDS.map((brand) => (
                <li key={brand}>
                  <Link
                    href={`/sneakers?brand=${encodeURIComponent(brand)}`}
                    className="hover:text-vault-lime transition-colors"
                  >
                    {brand}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Editorial */}
          <div>
            <h4 className="font-mono text-xs font-bold uppercase text-white tracking-wider mb-4">
              {t.footer.editorialCol}
            </h4>
            <ul className="space-y-2.5 text-xs font-mono">
              <li>
                <Link href="/about" className="hover:text-vault-lime transition-colors">
                  {isId ? 'Tentang Kami' : 'About SOLEVAULT'}
                </Link>
              </li>
              <li>
                <Link href="/collections" className="hover:text-vault-lime transition-colors">
                  {isId ? 'Koleksi Pilihan' : 'Curated Collections'}
                </Link>
              </li>
              <li>
                <Link href="/about#authenticity" className="hover:text-vault-lime transition-colors">
                  {isId ? 'Protokol Keaslian' : 'Authentication Process'}
                </Link>
              </li>
              <li>
                <Link href="/about#concept-stores" className="hover:text-vault-lime transition-colors">
                  {isId ? 'Galeri Konsep' : 'Concept Destinations'}
                </Link>
              </li>
              <li>
                <Link href="/wishlist" className="hover:text-vault-lime transition-colors">
                  {isId ? 'Favorit Saya' : 'Saved Rotation'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Support */}
          <div>
            <h4 className="font-mono text-xs font-bold uppercase text-white tracking-wider mb-4">
              {t.footer.careCol}
            </h4>
            <ul className="space-y-2.5 text-xs font-mono">
              <li>
                <span className="hover:text-vault-lime cursor-pointer">
                  {t.footer.trackOrder}
                </span>
              </li>
              <li>
                <span className="hover:text-vault-lime cursor-pointer">
                  {t.footer.shippingSpecs}
                </span>
              </li>
              <li>
                <span className="hover:text-vault-lime cursor-pointer">
                  {t.footer.exchangeProtocol}
                </span>
              </li>
              <li>
                <span className="hover:text-vault-lime cursor-pointer">
                  {t.footer.sizeConversion}
                </span>
              </li>
              <li>
                <span className="hover:text-vault-lime cursor-pointer">
                  support@solevault.demo
                </span>
              </li>
            </ul>
          </div>

          {/* Col 5: Streetwear Newsletter summary & socials */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-mono text-xs font-bold uppercase text-white tracking-wider mb-4">
              {t.footer.colNetwork}
            </h4>
            <p className="text-xs text-zinc-400 mb-4 leading-relaxed">
              {t.footer.networkDesc}
            </p>
            <div className="flex items-center gap-3 text-xs font-mono">
              <Link
                href="/#newsletter"
                className="inline-flex items-center gap-1 text-vault-lime hover:underline"
              >
                <span>{t.footer.newsletterLink}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              <span className="text-zinc-700">•</span>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                IG
              </a>
              <span className="text-zinc-700">•</span>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                X
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Giant SOLEVAULT Wordmark Visual Anchor */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 select-none overflow-hidden flex justify-center">
        <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[7rem] font-black uppercase tracking-tight text-zinc-900/40 hover:text-zinc-900/70 transition-colors leading-none text-center whitespace-nowrap">
          SOLE<span className="text-zinc-800">VAULT</span>
        </h2>
      </div>

      {/* Copyright & Demo Disclaimer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-zinc-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
        <div>
          © {new Date().getFullYear()} SOLEVAULT. {t.footer.rights}
        </div>
        <div className="flex items-center gap-4 text-[11px]">
          <span>{t.footer.demoDisclaimer}</span>
          <span>•</span>
          <span className="text-zinc-400">{t.footer.deployedWith}</span>
        </div>
      </div>
    </footer>
  );
}
