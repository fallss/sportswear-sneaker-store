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
            ? 'bg-[#09090b]/95 backdrop-blur-md border-b border-[#262632] py-3.5 shadow-2xl'
            : 'bg-[#09090b] border-b border-[#1c1c24] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Mobile Menu Button */}
            <div className="flex items-center lg:hidden">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2.5 text-zinc-300 hover:text-white rounded-lg hover:bg-zinc-850 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ccff00] transition-colors"
                aria-label="Open mobile navigation menu"
                aria-expanded={isMobileMenuOpen}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>

            {/* Logo */}
            <div className="flex items-center gap-8">
              <Link
                href="/"
                className="group flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ccff00] rounded-md px-1 py-0.5"
                aria-label="SOLEVAULT Home"
              >
                <span className="font-display text-2xl sm:text-3xl font-black tracking-tighter text-white transition-colors group-hover:text-zinc-200">
                  SOLE<span className="text-[#ccff00]">VAULT</span>
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00] mb-2 animate-pulse" />
              </Link>

              {/* Desktop Nav Links */}
              <nav className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">
                <Link
                  href="/sneakers?sort=newest"
                  className={`px-3.5 py-2 text-xs font-mono uppercase tracking-widest transition-colors rounded-md ${
                    pathname === '/sneakers' && !activeMegaMenu
                      ? 'text-vault-lime font-semibold'
                      : 'text-zinc-300 hover:text-white hover:bg-zinc-900/60'
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
                    className="flex items-center gap-1 px-3.5 py-2 text-xs font-mono uppercase tracking-widest text-zinc-300 hover:text-white hover:bg-zinc-900/60 rounded-md transition-colors"
                    aria-expanded={activeMegaMenu === 'sneakers'}
                    aria-haspopup="true"
                  >
                    <span>{t.nav.sneakers}</span>
                    <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                  </Link>

                  {/* Mega Menu Dropdown: Sneakers */}
                  {activeMegaMenu === 'sneakers' && (
                    <div className="absolute top-full left-0 w-[580px] p-6 bg-[#111116] border border-zinc-800 rounded-2xl shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-150">
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <p className="font-mono text-[11px] uppercase tracking-wider text-zinc-400 mb-3 pb-1 border-b border-zinc-800">
                            {language === 'id' ? 'Berdasarkan Siluet' : 'By Silhouettes'}
                          </p>
                          <ul className="space-y-2">
                            {ALL_CATEGORIES.map((cat) => (
                              <li key={cat}>
                                <Link
                                  href={`/sneakers?category=${cat}`}
                                  className="flex items-center justify-between text-xs text-zinc-300 hover:text-[#ccff00] py-1 transition-colors group"
                                >
                                  <span>{language === 'id' ? `Siluet ${cat}` : `${cat} Icons`}</span>
                                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-[#ccff00]" />
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-zinc-900/80 p-4 rounded-xl border border-zinc-800 flex flex-col justify-between">
                          <div>
                            <div className="flex items-center gap-1.5 text-[#ccff00] text-xs font-mono font-bold uppercase mb-1">
                              <Flame className="w-3.5 h-3.5 text-amber-400" />
                              <span>{language === 'id' ? 'Kurasi Pilihan Vault' : 'Vault Selection'}</span>
                            </div>
                            <h4 className="font-display text-sm font-bold text-white uppercase">
                              {language === 'id' ? 'Pelari Teknologi Y2K & Retro Air' : 'Y2K Tech Runners & Retro Air'}
                            </h4>
                            <p className="text-[11px] text-zinc-400 mt-1 leading-relaxed">
                              {language === 'id'
                                ? 'Jelajahi overlay perak metalik, bantalan bersegmen responsif, dan arsip siluet basket legendaris.'
                                : 'Explore metallic silver overlays, responsive segmented cushioning, and archival basketball staples.'}
                            </p>
                          </div>
                          <Link
                            href="/sneakers?featured=true"
                            className="mt-4 inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#ccff00] hover:underline"
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
                    className="flex items-center gap-1 px-3.5 py-2 text-xs font-mono uppercase tracking-widest text-zinc-300 hover:text-white hover:bg-zinc-900/60 rounded-md transition-colors"
                    aria-expanded={activeMegaMenu === 'brands'}
                    aria-haspopup="true"
                  >
                    <span>{t.nav.brands}</span>
                    <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                  </Link>

                  {/* Mega Menu Dropdown: Brands */}
                  {activeMegaMenu === 'brands' && (
                    <div className="absolute top-full left-0 w-[620px] p-6 bg-[#111116] border border-zinc-800 rounded-2xl shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-150">
                      <div className="flex items-center justify-between pb-3 mb-4 border-b border-zinc-800">
                        <span className="font-mono text-xs uppercase tracking-wider text-zinc-400">
                          {t.catalog.brands}
                        </span>
                        <Link
                          href="/brands"
                          className="font-mono text-xs text-vault-lime hover:underline flex items-center gap-1"
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
                            className="p-3 rounded-xl bg-zinc-900/60 hover:bg-zinc-800/80 border border-zinc-800/80 hover:border-vault-lime/40 transition-all group"
                          >
                            <p className="font-display text-sm font-bold text-white group-hover:text-vault-lime transition-colors">
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

                <Link
                  href="/collections"
                  className={`px-3.5 py-2 text-xs font-mono uppercase tracking-widest transition-colors rounded-md ${
                    pathname === '/collections'
                      ? 'text-vault-lime font-semibold'
                      : 'text-zinc-300 hover:text-white hover:bg-zinc-900/60'
                  }`}
                >
                  {t.nav.collections}
                </Link>

                <Link
                  href="/about"
                  className={`px-3.5 py-2 text-xs font-mono uppercase tracking-widest transition-colors rounded-md ${
                    pathname === '/about'
                      ? 'text-vault-lime font-semibold'
                      : 'text-zinc-300 hover:text-white hover:bg-zinc-900/60'
                  }`}
                >
                  {t.nav.about}
                </Link>

                <Link
                  href="/sneakers?sale=true"
                  className="px-3.5 py-2 text-xs font-mono uppercase tracking-widest text-red-400 hover:text-red-300 hover:bg-red-950/20 rounded-md transition-colors flex items-center gap-1.5"
                >
                  <span>{t.common.sale}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-ping" />
                </Link>
              </nav>
            </div>

            {/* Right Action Icons: Language, Theme, Search, Wishlist, Bag */}
            <div className="flex items-center gap-1.5 sm:gap-2.5">
              {/* Language Switcher Pill */}
              <button
                type="button"
                onClick={toggleLanguage}
                className="px-2.5 py-1.5 rounded-lg border border-zinc-800 hover:border-zinc-600 bg-zinc-900/60 text-xs font-mono font-bold uppercase transition-all flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vault-lime text-zinc-200 hover:text-white"
                aria-label={language === 'en' ? 'Ganti ke Bahasa Indonesia' : 'Switch to English'}
                title={language === 'en' ? 'Bahasa Indonesia (IDN)' : 'English (ENG)'}
              >
                <Globe className="w-3.5 h-3.5 text-vault-lime" />
                <span>{language === 'en' ? 'IDN' : 'ENG'}</span>
              </button>

              {/* Theme Toggle Button */}
              <button
                type="button"
                onClick={toggleTheme}
                className="p-2 text-zinc-300 hover:text-white rounded-lg hover:bg-zinc-900/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vault-lime"
                aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                title={theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-amber-300 hover:rotate-45 transition-transform" />
                ) : (
                  <Moon className="w-4 h-4 text-zinc-700 hover:-rotate-12 transition-transform" />
                )}
              </button>

              {/* Search Trigger */}
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                className="p-2 text-zinc-300 hover:text-vault-lime rounded-lg hover:bg-zinc-900/80 transition-colors flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vault-lime"
                aria-label="Search catalog (Press Command K)"
              >
                <Search className="w-4 h-4 transition-transform group-hover:scale-110" />
                <span className="hidden xl:inline font-mono text-xs text-zinc-500 group-hover:text-zinc-300">
                  {t.common.search} [⌘K]
                </span>
              </button>

              {/* Wishlist Icon */}
              <Link
                href="/wishlist"
                className="relative p-2 text-zinc-300 hover:text-white rounded-lg hover:bg-zinc-900/80 transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vault-lime"
                aria-label={`${t.nav.wishlist}, ${wishlistCount} items`}
              >
                <Heart className="w-4 h-4 transition-transform group-hover:scale-110" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 min-w-[17px] h-[17px] px-1 bg-vault-lime text-black font-mono text-[9px] font-bold rounded-full flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </Link>

              {/* Shopping Bag Button (Opens Cart Drawer) */}
              <button
                type="button"
                onClick={openCart}
                className="relative p-2 text-zinc-300 hover:text-white rounded-lg hover:bg-zinc-900/80 transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vault-lime"
                aria-label={`${t.nav.bag}, ${cartCount} items`}
              >
                <ShoppingBag className="w-4 h-4 transition-transform group-hover:scale-110" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 min-w-[17px] h-[17px] px-1 bg-vault-lime text-black font-mono text-[9px] font-bold rounded-full flex items-center justify-center glow-lime-sm">
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
