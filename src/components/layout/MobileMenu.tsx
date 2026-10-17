'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ChevronDown, ChevronRight, Search, Heart, Sparkles, Globe, Sun, Moon } from 'lucide-react';
import { ALL_BRANDS, ALL_CATEGORIES } from '@/data/products';
import { useStore } from '@/store/useStore';
import { useTranslation } from '@/hooks/useTranslation';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { setSearchOpen, theme, toggleTheme } = useStore();
  const { t, language, toggleLanguage } = useTranslation();
  const [sneakersExpanded, setSneakersExpanded] = useState(false);
  const [brandsExpanded, setBrandsExpanded] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
      className="fixed inset-0 z-50 flex lg:hidden bg-slate-950/70 dark:bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-[85%] max-w-md bg-white dark:bg-[#0d0d10] h-full border-r border-zinc-200 dark:border-zinc-800 p-6 flex flex-col justify-between overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-5 border-b border-zinc-800">
            <span className="font-display text-xl font-black tracking-tighter text-white">
              SOLE<span className="text-vault-lime">VAULT</span>
            </span>
            <button
              type="button"
              onClick={onClose}
              className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vault-lime"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Preferences: Language & Theme Controls */}
          <div className="mt-4 grid grid-cols-2 gap-2 p-2 rounded-xl bg-zinc-900/80 border border-zinc-800/80">
            <button
              type="button"
              onClick={toggleLanguage}
              className="flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-mono font-medium text-zinc-300 hover:text-white hover:bg-zinc-800/80 transition-colors"
              aria-label={`Switch language. Current: ${language.toUpperCase()}`}
            >
              <Globe className="w-3.5 h-3.5 text-vault-lime" />
              <span>{language === 'en' ? 'Bahasa IDN' : 'English ENG'}</span>
            </button>

            <button
              type="button"
              onClick={toggleTheme}
              className="flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-mono font-medium text-zinc-300 hover:text-white hover:bg-zinc-800/80 transition-colors"
              aria-label={`Toggle theme. Current: ${theme}`}
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="w-3.5 h-3.5 text-amber-400" />
                  <span>Light</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5 text-vault-lime" />
                  <span>Dark</span>
                </>
              )}
            </button>
          </div>

          {/* Search Trigger */}
          <button
            type="button"
            onClick={() => {
              onClose();
              setSearchOpen(true);
            }}
            className="w-full mt-4 flex items-center justify-between p-3 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vault-lime"
          >
            <div className="flex items-center gap-2 text-xs font-mono">
              <Search className="w-4 h-4 text-vault-lime" />
              <span>{t.nav.searchPlaceholder}</span>
            </div>
            <span className="font-mono text-[10px] text-zinc-600">⌘K</span>
          </button>

          {/* Navigation Links */}
          <nav className="mt-6 space-y-1" aria-label="Mobile Navigation Links">
            <Link
              href="/sneakers?sort=newest"
              onClick={onClose}
              className="flex items-center justify-between py-3 text-sm font-mono uppercase tracking-wider text-zinc-200 hover:text-vault-lime border-b border-zinc-900 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-vault-lime"
            >
              <span>{t.nav.newArrivals}</span>
              <Sparkles className="w-3.5 h-3.5 text-vault-lime" />
            </Link>

            {/* Sneakers Accordion */}
            <div className="border-b border-zinc-900">
              <button
                type="button"
                onClick={() => setSneakersExpanded(!sneakersExpanded)}
                aria-expanded={sneakersExpanded}
                className="w-full flex items-center justify-between py-3 text-sm font-mono uppercase tracking-wider text-zinc-200 hover:text-vault-lime transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-vault-lime"
              >
                <span>{t.nav.sneakers}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    sneakersExpanded ? 'rotate-180 text-vault-lime' : ''
                  }`}
                />
              </button>

              {sneakersExpanded && (
                <div className="pl-4 pb-3 space-y-2 border-l-2 border-zinc-800 ml-2 animate-in slide-in-from-top-1">
                  <Link
                    href="/sneakers"
                    onClick={onClose}
                    className="block text-xs font-mono text-vault-lime py-1"
                  >
                    {t.nav.allSneakers} &rarr;
                  </Link>
                  {ALL_CATEGORIES.map((cat) => (
                    <Link
                      key={cat}
                      href={`/sneakers?category=${cat}`}
                      onClick={onClose}
                      className="block text-xs font-mono text-zinc-400 hover:text-white py-1"
                    >
                      {language === 'id' ? `Siluet ${cat}` : `${cat} Silhouettes`}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Brands Accordion */}
            <div className="border-b border-zinc-900">
              <button
                type="button"
                onClick={() => setBrandsExpanded(!brandsExpanded)}
                aria-expanded={brandsExpanded}
                className="w-full flex items-center justify-between py-3 text-sm font-mono uppercase tracking-wider text-zinc-200 hover:text-vault-lime transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-vault-lime"
              >
                <span>{t.nav.brands}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    brandsExpanded ? 'rotate-180 text-vault-lime' : ''
                  }`}
                />
              </button>

              {brandsExpanded && (
                <div className="pl-4 pb-3 space-y-2 border-l-2 border-zinc-800 ml-2 animate-in slide-in-from-top-1">
                  <Link
                    href="/brands"
                    onClick={onClose}
                    className="block text-xs font-mono text-vault-lime py-1"
                  >
                    {t.common.viewAllHouses} &rarr;
                  </Link>
                  {ALL_BRANDS.map((brand) => (
                    <Link
                      key={brand}
                      href={`/sneakers?brand=${encodeURIComponent(brand)}`}
                      onClick={onClose}
                      className="block text-xs font-mono text-zinc-400 hover:text-white py-1"
                    >
                      {brand}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/collections"
              onClick={onClose}
              className="flex items-center justify-between py-3 text-sm font-mono uppercase tracking-wider text-zinc-200 hover:text-vault-lime border-b border-zinc-900 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-vault-lime"
            >
              <span>{t.nav.collections}</span>
              <ChevronRight className="w-4 h-4 text-zinc-600" />
            </Link>

            <Link
              href="/sneakers?sale=true"
              onClick={onClose}
              className="flex items-center justify-between py-3 text-sm font-mono uppercase tracking-wider text-red-400 hover:text-red-300 border-b border-zinc-900 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-vault-lime"
            >
              <span>{t.nav.saleArchive}</span>
              <span className="font-mono text-[10px] bg-red-500/20 text-red-400 px-2 py-0.5 rounded">
                {language === 'id' ? 'HINGGA 30%' : 'UP TO 30%'}
              </span>
            </Link>

            <Link
              href="/wishlist"
              onClick={onClose}
              className="flex items-center justify-between py-3 text-sm font-mono uppercase tracking-wider text-zinc-200 hover:text-vault-lime border-b border-zinc-900 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-vault-lime"
            >
              <span>{t.nav.wishlist}</span>
              <Heart className="w-4 h-4 text-zinc-500" />
            </Link>

            <Link
              href="/about"
              onClick={onClose}
              className="flex items-center justify-between py-3 text-sm font-mono uppercase tracking-wider text-zinc-200 hover:text-vault-lime border-b border-zinc-900 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-vault-lime"
            >
              <span>{t.nav.about}</span>
              <ChevronRight className="w-4 h-4 text-zinc-600" />
            </Link>
          </nav>
        </div>

        {/* Footer info in drawer */}
        <div className="pt-6 border-t border-zinc-800">
          <div className="p-3 rounded-lg bg-zinc-900/60 border border-zinc-800 text-xs">
            <span className="text-vault-lime font-mono font-bold block mb-1">
              {t.product.authenticated}
            </span>
            <p className="text-zinc-400 text-[11px] leading-relaxed">
              {t.product.authenticityDesc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

