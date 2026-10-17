'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useStore } from '@/store/useStore';
import { useTranslation } from '@/hooks/useTranslation';
import { PRODUCTS } from '@/data/products';
import { Product } from '@/types';
import { Search, X, Clock, ArrowRight, Sparkles, Tag } from 'lucide-react';
import Link from 'next/link';
import { ImageWithFallback } from '@/components/ui/ImageWithFallback';

export function SearchOverlay() {
  const { t, language } = useTranslation();
  const {
    isSearchOpen,
    setSearchOpen,
    recentSearches,
    addRecentSearch,
    removeRecentSearch,
    clearRecentSearches,
  } = useStore();

  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  // Suggested quick tags
  const popularTags = [
    'Jordan',
    'Samba',
    '9060',
    'Kayano',
    'Air Max',
    'Retro',
    'Running',
  ];

  const handleClose = React.useCallback(() => {
    setQuery('');
    setDebouncedQuery('');
    setSearchOpen(false);
  }, [setSearchOpen]);

  // Focus on open
  useEffect(() => {
    if (isSearchOpen) {
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isSearchOpen]);

  // Debounce input
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 200);
    return () => clearTimeout(handler);
  }, [query]);

  // Close on Escape & trigger on Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isSearchOpen) {
        handleClose();
      }
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isSearchOpen) {
          handleClose();
        } else {
          setSearchOpen(true);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen, setSearchOpen, handleClose]);

  if (!isSearchOpen) return null;

  // Search matching algorithm
  const trimmed = debouncedQuery.trim().toLowerCase();
  const matchedProducts: Product[] = trimmed
    ? PRODUCTS.filter((p) => {
        return (
          p.name.toLowerCase().includes(trimmed) ||
          p.brand.toLowerCase().includes(trimmed) ||
          p.category.toLowerCase().includes(trimmed) ||
          p.availableColors.some((c) => c.name.toLowerCase().includes(trimmed)) ||
          p.tags.some((t) => t.toLowerCase().includes(trimmed))
        );
      }).slice(0, 8)
    : [];

  const handleSelectProduct = (p: Product) => {
    addRecentSearch(p.name);
    handleClose();
  };

  const handleTagClick = (tag: string) => {
    setQuery(tag);
    addRecentSearch(tag);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="search-dialog-title"
      className="fixed inset-0 z-50 flex flex-col bg-slate-950/70 dark:bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={handleClose}
    >
      <div
        className="search-modal-container w-full max-w-4xl mx-auto mt-6 sm:mt-12 p-4 sm:p-6 bg-[#111116] border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden transition-colors"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 id="search-dialog-title" className="sr-only">
          Search Silhouettes and Brands
        </h2>

        {/* Search Input Bar */}
        <div className="relative flex items-center border-b border-zinc-800 pb-4">
          <Search className="w-5 h-5 text-vault-lime mr-3 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && query.trim()) {
                addRecentSearch(query.trim());
              }
            }}
            placeholder={t.nav.searchPlaceholder}
            className="flex-1 bg-transparent text-white placeholder-zinc-500 font-sans text-base sm:text-lg focus:outline-none"
            aria-label="Search query"
          />
          {query && (
            <button
              onClick={() => {
                setQuery('');
                setDebouncedQuery('');
              }}
              className="p-1.5 text-zinc-400 hover:text-white mr-2 transition-colors"
              aria-label="Clear search input"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={handleClose}
            className="px-2.5 py-1 rounded-lg bg-zinc-800 text-zinc-400 hover:text-white font-mono text-xs uppercase tracking-wider transition-colors border border-zinc-700/60"
          >
            ESC
          </button>
        </div>

        {/* Popular Tags Strip */}
        <div className="py-3 flex items-center gap-2 overflow-x-auto border-b border-zinc-800/60 text-xs font-mono scrollbar-none">
          <span className="text-zinc-400 flex items-center gap-1.5 flex-shrink-0 font-medium">
            <Tag className="w-3.5 h-3.5 text-vault-lime" />
            {language === 'id' ? 'Populer:' : 'Trending:'}
          </span>
          {popularTags.map((tag) => (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)}
              className="px-3 py-1 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-vault-lime/40 text-zinc-300 hover:text-white transition-colors flex-shrink-0 font-medium"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Results Area */}
        <div className="max-h-[60vh] overflow-y-auto py-4">
          {trimmed ? (
            matchedProducts.length > 0 ? (
              <div className="space-y-3">
                <p className="font-mono text-xs uppercase tracking-wider text-zinc-400 mb-2 font-medium">
                  {language === 'id'
                    ? `Ditemukan ${matchedProducts.length} siluet yang cocok`
                    : `Found ${matchedProducts.length} matching silhouettes`}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {matchedProducts.map((product) => (
                    <Link
                      key={product.id}
                      href={`/product/${product.slug}`}
                      onClick={() => handleSelectProduct(product)}
                      className="flex items-center gap-3.5 p-3 rounded-xl bg-zinc-900/60 hover:bg-zinc-800/80 border border-zinc-800 hover:border-vault-lime/50 transition-all group shadow-xs"
                    >
                      <div className="relative w-16 h-16 rounded-lg bg-zinc-950 overflow-hidden flex-shrink-0 border border-zinc-800">
                        <ImageWithFallback
                          src={product.images[0]}
                          alt={product.name}
                          fill
                          sizes="64px"
                          className="object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="font-mono text-[10px] text-vault-lime uppercase tracking-wider block font-bold">
                          {product.brand} • {product.category}
                        </span>
                        <h4 className="font-display text-sm font-bold text-white uppercase truncate group-hover:text-vault-lime transition-colors">
                          {product.name}
                        </h4>
                        <span className="font-mono text-xs font-bold text-zinc-300">
                          ${product.price}
                        </span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-zinc-500 group-hover:text-vault-lime group-hover:translate-x-1 transition-all" />
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <div className="py-12 text-center">
                <p className="font-display text-lg uppercase text-white mb-2 font-black">
                  {language === 'id'
                    ? `Siluet Tidak Ditemukan Untuk "${query}"`
                    : `No Silhouettes Found For "${query}"`}
                </p>
                <p className="text-xs text-zinc-400 max-w-sm mx-auto mb-4 font-sans">
                  {language === 'id'
                    ? 'Coba cari Nike, Jordan, Samba, 9060, atau jelajahi katalog terkurasi kami.'
                    : 'Try searching for Nike, Jordan, Samba, 9060, or browse our curated catalog.'}
                </p>
                <Link
                  href="/sneakers"
                  onClick={handleClose}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#ccff00] text-black font-mono text-xs uppercase font-bold rounded-lg transition-transform active:scale-95 shadow-sm"
                >
                  <span>{language === 'id' ? 'Buka Semua Katalog' : 'Browse Full Catalog'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            )
          ) : (
            /* Recent searches state */
            <div className="space-y-5">
              {recentSearches.length > 0 && (
                <div>
                  <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-zinc-800">
                    <span className="font-mono text-xs uppercase tracking-wider text-zinc-400 flex items-center gap-1.5 font-bold">
                      <Clock className="w-3.5 h-3.5 text-vault-lime" />
                      {language === 'id' ? 'Pencarian Terakhir' : 'Recent Searches'}
                    </span>
                    <button
                      onClick={clearRecentSearches}
                      className="font-mono text-[11px] text-zinc-400 hover:text-white transition-colors underline"
                    >
                      {language === 'id' ? 'Hapus' : 'Clear'}
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {recentSearches.map((term) => (
                      <div
                        key={term}
                        className="flex items-center gap-1.5 pl-3 pr-2 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300 shadow-xs"
                      >
                        <button
                          onClick={() => handleTagClick(term)}
                          className="hover:text-white font-medium"
                        >
                          {term}
                        </button>
                        <button
                          onClick={() => removeRecentSearch(term)}
                          className="text-zinc-500 hover:text-zinc-300 p-0.5 transition-colors"
                          aria-label={`Remove search term ${term}`}
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Quick Picks */}
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-1.5 font-bold">
                  <Sparkles className="w-3.5 h-3.5 text-vault-lime" />
                  {language === 'id' ? 'Rekomendasi Pilihan Kurator' : 'Curator Recommended Drops'}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {PRODUCTS.slice(0, 3).map((product) => (
                    <Link
                      key={product.id}
                      href={`/product/${product.slug}`}
                      onClick={() => handleSelectProduct(product)}
                      className="p-3 rounded-xl bg-zinc-900/60 hover:bg-zinc-800/80 border border-zinc-800/80 transition-colors group flex items-center gap-3 shadow-xs"
                    >
                      <div className="relative w-12 h-12 rounded-lg bg-zinc-950 overflow-hidden flex-shrink-0 border border-zinc-800">
                        <ImageWithFallback
                          src={product.images[0]}
                          alt={product.name}
                          fill
                          sizes="48px"
                          className="object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <span className="font-mono text-[10px] text-vault-lime font-bold block truncate">
                          {product.brand}
                        </span>
                        <p className="font-display text-xs font-bold text-white uppercase truncate group-hover:text-vault-lime transition-colors">
                          {product.name}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
