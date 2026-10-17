'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useStore } from '@/store/useStore';
import { useIsMounted } from '@/hooks/useIsMounted';
import {
  Search,
  Heart,
  ShoppingBag,
  Menu,
  ChevronDown,
  ArrowRight,
  Flame,
  Sun,
  Moon,
  Globe,
} from 'lucide-react';
import { ALL_BRANDS, ALL_CATEGORIES } from '@/data/products';
import { MobileMenu } from './MobileMenu';
import { useTranslation } from '@/hooks/useTranslation';

export function Navbar() {
  const pathname = usePathname();
  const isMounted = useIsMounted();
  const { t, language, toggleLanguage } = useTranslation();
  const {
    openCart,
    getCartCount,
    getWishlistCount,
    setSearchOpen,
    theme,
    toggleTheme,
  } = useStore();

  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<'sneakers' | 'brands' | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cartCount = isMounted ? getCartCount() : 0;
  const wishlistCount = isMounted ? getWishlistCount() : 0;

  return (
    <>
      <header
        className={`sticky top-0 z-30 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#09090b]/90 backdrop-blur-xl border-b border-zinc-800/80 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8),0_0_15px_rgba(204,255,0,0.03)]'
            : 'bg-[#09090b]/95 backdrop-blur-md border-b border-zinc-800/50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-[68px]">
            {/* Left: Mobile Menu Toggle + Logo + Desktop Navigation */}
            <div className="flex items-center gap-3 sm:gap-4 xl:gap-6 2xl:gap-8 shrink-0">
              {/* Mobile Menu Button (< xl) */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(true)}
                className="xl:hidden p-2 -ml-1 text-zinc-300 hover:text-white rounded-xl hover:bg-zinc-800/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ccff00] transition-colors"
                aria-label="Open mobile navigation menu"
                aria-expanded={isMobileMenuOpen}
              >
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Brand Logo */}
              <Link
                href="/"
                className="group flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ccff00] rounded-md shrink-0 py-1"
                aria-label="SOLEVAULT Home"
              >
                <span className="font-display text-xl sm:text-2xl xl:text-3xl font-black tracking-tight text-white transition-colors group-hover:text-zinc-200">
                  SOLE<span className="text-[#ccff00]">VAULT</span>
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00] mb-2 animate-pulse shrink-0" />
              </Link>

              {/* Desktop Nav Links (xl+) */}
              <nav className="hidden xl:flex items-center gap-1 xl:gap-1.5 2xl:gap-2 text-[11px] xl:text-xs font-mono uppercase tracking-wider xl:tracking-widest" aria-label="Main Navigation">
                <Link
                  href="/sneakers?sort=newest"
                  className={`whitespace-nowrap px-2 xl:px-2.5 2xl:px-3 py-1.5 rounded-lg transition-colors ${
                    pathname === '/sneakers' && !activeMegaMenu
                      ? 'text-emerald-700 dark:text-vault-lime font-bold bg-emerald-500/10 dark:bg-vault-lime/10'
                      : 'text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10'
                  }`}
                >
                  {t.nav.newArrivals}
                </Link>

                {/* Sneakers Mega-Menu Trigger */}
                <div
                  className="relative"
                  onMouseEnter={() => setActiveMegaMenu('sneakers')}
                  onMouseLeave={() => setActiveMegaMenu(null)}
                >
                  <Link
                    href="/sneakers"
                    className={`whitespace-nowrap flex items-center gap-1 px-2.5 xl:px-3 py-1.5 rounded-lg transition-colors ${
                      activeMegaMenu === 'sneakers'
                        ? 'text-zinc-950 dark:text-white bg-black/5 dark:bg-white/10'
                        : 'text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10'
                    }`}
                    aria-expanded={activeMegaMenu === 'sneakers'}
                    aria-haspopup="true"
                  >
                    <span>{t.nav.sneakers}</span>
                    <ChevronDown className={`w-3.5 h-3.5 opacity-60 transition-transform duration-200 ${activeMegaMenu === 'sneakers' ? 'rotate-180 opacity-100 text-emerald-700 dark:text-vault-lime' : ''}`} />
                  </Link>

                  {/* Mega Menu Dropdown: Sneakers */}
                  {activeMegaMenu === 'sneakers' && (
                    <div className="absolute top-full left-0 w-[580px] p-6 bg-white dark:bg-[#111116] border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <p className="font-mono text-[11px] uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-3 pb-1 border-b border-zinc-200 dark:border-zinc-800 font-bold">
                            {language === 'id' ? 'Berdasarkan Siluet' : 'By Silhouettes'}
                          </p>
                          <ul className="space-y-1.5">
                            {ALL_CATEGORIES.map((cat) => (
                              <li key={cat}>
                                <Link
                                  href={`/sneakers?category=${cat}`}
                                  className="flex items-center justify-between text-xs text-zinc-600 hover:text-emerald-700 dark:text-zinc-300 dark:hover:text-[#ccff00] py-1.5 px-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800/40 transition-colors group"
                                >
                                  <span>{language === 'id' ? `Siluet ${cat}` : `${cat} Icons`}</span>
                                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-emerald-700 dark:text-[#ccff00]" />
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-zinc-50 dark:bg-zinc-900/80 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between">
                          <div>
                            <div className="flex items-center gap-1.5 text-emerald-700 dark:text-[#ccff00] text-xs font-mono font-bold uppercase mb-1">
                              <Flame className="w-3.5 h-3.5 text-amber-500" />
                              <span>{language === 'id' ? 'Kurasi Pilihan Vault' : 'Vault Selection'}</span>
                            </div>
                            <h4 className="font-display text-sm font-bold text-zinc-900 dark:text-white uppercase">
                              {language === 'id' ? 'Pelari Teknologi Y2K & Retro Air' : 'Y2K Tech Runners & Retro Air'}
                            </h4>
                            <p className="text-[11px] text-zinc-600 dark:text-zinc-400 mt-1 leading-relaxed">
                              {language === 'id'
                                ? 'Jelajahi overlay perak metalik, bantalan bersegmen responsif, dan arsip siluet basket legendaris.'
                                : 'Explore metallic silver overlays, responsive segmented cushioning, and archival basketball staples.'}
                            </p>
                          </div>
                          <Link
                            href="/sneakers?featured=true"
                            className="mt-4 inline-flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-700 dark:text-[#ccff00] hover:underline"
                          >
                            <span>{language === 'id' ? 'Jelajahi Ikon Vault' : 'Browse Vault Icons'}</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Brands Mega-Menu Trigger */}
                <div
                  className="relative"
                  onMouseEnter={() => setActiveMegaMenu('brands')}
                  onMouseLeave={() => setActiveMegaMenu(null)}
                >
                  <Link
                    href="/brands"
                    className={`whitespace-nowrap flex items-center gap-1 px-2 xl:px-2.5 2xl:px-3 py-1.5 rounded-lg transition-colors ${
                      activeMegaMenu === 'brands'
                        ? 'text-zinc-950 dark:text-white bg-black/5 dark:bg-white/10'
                        : 'text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10'
                    }`}
                    aria-expanded={activeMegaMenu === 'brands'}
                    aria-haspopup="true"
                  >
                    <span>{t.nav.brands}</span>
                    <ChevronDown className={`w-3.5 h-3.5 opacity-60 transition-transform duration-200 ${activeMegaMenu === 'brands' ? 'rotate-180 opacity-100 text-emerald-700 dark:text-vault-lime' : ''}`} />
                  </Link>

                  {/* Mega Menu Dropdown: Brands */}
                  {activeMegaMenu === 'brands' && (
                    <div className="absolute top-full left-0 w-[620px] p-6 bg-white dark:bg-[#111116] border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                      <div className="flex items-center justify-between pb-3 mb-4 border-b border-zinc-200 dark:border-zinc-800">
                        <span className="font-mono text-xs uppercase tracking-wider text-zinc-600 dark:text-zinc-400 font-bold">
                          {t.catalog.brands}
                        </span>
                        <Link
                          href="/brands"
                          className="font-mono text-xs text-emerald-700 dark:text-vault-lime hover:underline flex items-center gap-1"
                        >
                          <span>{t.common.viewAllHouses}</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>

                      <div className="grid grid-cols-3 gap-3">
                        {ALL_BRANDS.map((brand) => (
                          <Link
                            key={brand}
                            href={`/sneakers?brand=${encodeURIComponent(brand)}`}
                            className="p-3 rounded-xl bg-zinc-50 hover:bg-zinc-100 dark:bg-zinc-900/60 dark:hover:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-800/80 hover:border-emerald-600 dark:hover:border-vault-lime/40 transition-all group shadow-xs"
                          >
                            <p className="font-display text-sm font-bold text-zinc-900 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-vault-lime transition-colors">
                              {brand}
                            </p>
                            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                              {t.common.exploreSneakers}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Collections */}
                <Link
                  href="/collections"
                  className={`whitespace-nowrap px-2 xl:px-2.5 2xl:px-3 py-1.5 rounded-lg transition-colors ${
                    pathname === '/collections'
                      ? 'text-emerald-700 dark:text-vault-lime font-bold bg-emerald-500/10 dark:bg-vault-lime/10'
                      : 'text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10'
                  }`}
                >
                  {t.nav.collections}
                </Link>

                {/* About */}
                <Link
                  href="/about"
                  className={`whitespace-nowrap px-2 xl:px-2.5 2xl:px-3 py-1.5 rounded-lg transition-colors ${
                    pathname === '/about'
                      ? 'text-emerald-700 dark:text-vault-lime font-bold bg-emerald-500/10 dark:bg-vault-lime/10'
                      : 'text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10'
                  }`}
                >
                  {t.nav.about}
                </Link>

                {/* Sale Pill */}
                <Link
                  href="/sneakers?sale=true"
                  className="whitespace-nowrap px-2 xl:px-2.5 2xl:px-3 py-1.5 rounded-lg text-rose-600 hover:text-rose-700 dark:text-rose-400 dark:hover:text-rose-300 hover:bg-rose-500/10 transition-colors flex items-center gap-1.5 font-medium shrink-0"
                >
                  <span>{t.common.sale}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse shrink-0" />
                </Link>
              </nav>
            </div>

            {/* Right Action Icons: Language, Theme, Search, Wishlist, Bag */}
            <div className="flex items-center gap-1 sm:gap-1.5 xl:gap-2 shrink-0">
              {/* Language Switcher Pill (Hidden on mobile to preserve touch breathing room) */}
              <button
                type="button"
                onClick={toggleLanguage}
                className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 bg-zinc-50 dark:bg-zinc-900/60 text-xs font-mono font-bold uppercase transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vault-lime text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white shrink-0 whitespace-nowrap shadow-xs"
                aria-label={language === 'en' ? 'Ganti ke Bahasa Indonesia' : 'Switch to English'}
                title={language === 'en' ? 'Bahasa Indonesia (IDN)' : 'English (ENG)'}
              >
                <Globe className="w-3.5 h-3.5 text-emerald-700 dark:text-vault-lime shrink-0" />
                <span>{language === 'en' ? 'IDN' : 'ENG'}</span>
              </button>

              {/* Theme Toggle Button */}
              <button
                type="button"
                onClick={toggleTheme}
                className="p-2 text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vault-lime shrink-0"
                aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                title={theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-amber-300 hover:rotate-45 transition-transform" />
                ) : (
                  <Moon className="w-4 h-4 text-zinc-700 hover:-rotate-12 transition-transform" />
                )}
              </button>

              {/* Subtle Divider (Desktop) */}
              <span className="hidden sm:block h-4 w-px bg-zinc-200 dark:bg-zinc-800 mx-0.5" aria-hidden="true" />

              {/* Search Trigger */}
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                className="p-2 text-zinc-600 hover:text-emerald-700 dark:text-zinc-400 dark:hover:text-vault-lime rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vault-lime shrink-0"
                aria-label="Search catalog (Press Command K)"
              >
                <Search className="w-4 h-4 transition-transform group-hover:scale-110" />
                <span className="hidden 2xl:inline font-mono text-xs text-zinc-500 group-hover:text-zinc-700 dark:group-hover:text-zinc-300">
                  {t.common.search} [⌘K]
                </span>
              </button>

              {/* Wishlist Icon */}
              <Link
                href="/wishlist"
                className="relative p-2 text-zinc-600 hover:text-rose-600 dark:text-zinc-400 dark:hover:text-rose-400 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vault-lime shrink-0"
                aria-label={`${t.nav.wishlist}, ${wishlistCount} items`}
              >
                <Heart className="w-4 h-4 transition-transform group-hover:scale-110" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 min-w-[17px] h-[17px] px-1 bg-emerald-600 dark:bg-[#ccff00] text-white dark:text-black font-mono text-[9px] font-black rounded-full flex items-center justify-center ring-2 ring-white dark:ring-[#09090b] shadow-xs">
                    {wishlistCount}
                  </span>
                )}
              </Link>

              {/* Shopping Bag Button (Opens Cart Drawer) */}
              <button
                type="button"
                onClick={openCart}
                className="relative p-2 text-zinc-600 hover:text-emerald-700 dark:text-zinc-400 dark:hover:text-vault-lime rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vault-lime shrink-0"
                aria-label={`${t.nav.bag}, ${cartCount} items`}
              >
                <ShoppingBag className="w-4 h-4 transition-transform group-hover:scale-110" />
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 min-w-[17px] h-[17px] px-1 bg-emerald-600 dark:bg-[#ccff00] text-white dark:text-black font-mono text-[9px] font-black rounded-full flex items-center justify-center ring-2 ring-white dark:ring-[#09090b] shadow-xs">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
