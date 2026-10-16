'use client';

import React from 'react';
import { ALL_BRANDS, ALL_CATEGORIES, ALL_SIZES } from '@/data/products';
import { BrandName, ProductCategory } from '@/types';
import { X, Filter, RotateCcw, Check } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

interface CatalogFiltersProps {
  selectedBrands: BrandName[];
  selectedCategories: ProductCategory[];
  selectedSizes: number[];
  selectedColors: string[];
  priceRange: [number, number];
  inStockOnly: boolean;
  onSaleOnly: boolean;
  onToggleBrand: (brand: BrandName) => void;
  onToggleCategory: (cat: ProductCategory) => void;
  onToggleSize: (size: number) => void;
  onToggleColor: (color: string) => void;
  onChangePriceRange: (range: [number, number]) => void;
  onToggleInStock: () => void;
  onToggleOnSale: () => void;
  onResetFilters: () => void;
  isMobileDrawer?: boolean;
  onCloseMobileDrawer?: () => void;
}

const COLOR_OPTIONS = [
  { name: 'Black', hex: '#18181b' },
  { name: 'White', hex: '#ffffff' },
  { name: 'Grey', hex: '#71717a' },
  { name: 'Red', hex: '#dc2626' },
  { name: 'Blue', hex: '#2563eb' },
  { name: 'Green', hex: '#16a34a' },
  { name: 'Yellow', hex: '#ccff00' },
  { name: 'Brown', hex: '#78350f' },
];

export function CatalogFilters({
  selectedBrands,
  selectedCategories,
  selectedSizes,
  selectedColors,
  priceRange,
  inStockOnly,
  onSaleOnly,
  onToggleBrand,
  onToggleCategory,
  onToggleSize,
  onToggleColor,
  onChangePriceRange,
  onToggleInStock,
  onToggleOnSale,
  onResetFilters,
  isMobileDrawer = false,
  onCloseMobileDrawer,
}: CatalogFiltersProps) {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      {/* Mobile drawer header */}
      {isMobileDrawer && (
        <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-[#ccff00]" />
            <h3 className="font-display text-lg font-bold uppercase text-white">
              {t.catalog.filterCatalog}
            </h3>
          </div>
          <button
            onClick={onCloseMobileDrawer}
            className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors"
            aria-label="Close filters"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Filter Reset */}
      <div className="flex items-center justify-between pb-3 border-b border-zinc-800/80">
        <span className="font-mono text-xs uppercase tracking-wider text-zinc-400 font-bold">
          {t.catalog.refineSelection}
        </span>
        <button
          onClick={onResetFilters}
          className="font-mono text-[11px] text-[#ccff00] hover:underline flex items-center gap-1 transition-colors"
        >
          <RotateCcw className="w-3 h-3" />
          <span>{t.catalog.resetAll}</span>
        </button>
      </div>

      {/* Brands Filter */}
      <div>
        <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white mb-3">
          {t.catalog.brandHouse}
        </h4>
        <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
          {ALL_BRANDS.map((brand) => {
            const isChecked = selectedBrands.includes(brand);
            return (
              <label
                key={brand}
                className="flex items-center gap-2.5 text-xs font-mono text-zinc-300 hover:text-white cursor-pointer select-none group"
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => onToggleBrand(brand)}
                  className="sr-only"
                />
                <div
                  className={`w-4 h-4 rounded border flex items-center justify-center transition-all group-focus-within:ring-2 group-focus-within:ring-[#ccff00] ${
                    isChecked
                      ? 'bg-[#ccff00] border-[#ccff00] text-black font-bold'
                      : 'border-zinc-700 bg-zinc-900 group-hover:border-zinc-500'
                  }`}
                  aria-hidden="true"
                >
                  {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                </div>
                <span>{brand}</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Categories Filter */}
      <div className="pt-4 border-t border-zinc-800/80">
        <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white mb-3">
          {t.catalog.silhouetteCategory}
        </h4>
        <div className="space-y-2">
          {ALL_CATEGORIES.map((cat) => {
            const isChecked = selectedCategories.includes(cat);
            return (
              <label
                key={cat}
                className="flex items-center gap-2.5 text-xs font-mono text-zinc-300 hover:text-white cursor-pointer select-none group"
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => onToggleCategory(cat)}
                  className="sr-only"
                />
                <div
                  className={`w-4 h-4 rounded border flex items-center justify-center transition-all group-focus-within:ring-2 group-focus-within:ring-[#ccff00] ${
                    isChecked
                      ? 'bg-[#ccff00] border-[#ccff00] text-black font-bold'
                      : 'border-zinc-700 bg-zinc-900 group-hover:border-zinc-500'
                  }`}
                  aria-hidden="true"
                >
                  {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                </div>
                <span>{cat}</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Shoe Sizes Filter */}
      <div className="pt-4 border-t border-zinc-800/80">
        <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white mb-3">
          {t.catalog.sizeUsMen}
        </h4>
        <div className="grid grid-cols-4 gap-1.5">
          {ALL_SIZES.map((size) => {
            const isSelected = selectedSizes.includes(size);
            return (
              <button
                key={size}
                type="button"
                onClick={() => onToggleSize(size)}
                aria-pressed={isSelected}
                className={`py-1.5 text-xs font-mono rounded-lg border transition-all ${
                  isSelected
                    ? 'bg-[#ccff00] border-[#ccff00] text-black font-bold shadow-sm shadow-[#ccff00]/30'
                    : 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:border-zinc-600'
                }`}
              >
                {size}
              </button>
            );
          })}
        </div>
      </div>

      {/* Price Range Slider */}
      <div className="pt-4 border-t border-zinc-800/80">
        <div className="flex items-center justify-between mb-3">
          <label htmlFor="price-range-slider" className="font-mono text-xs font-bold uppercase tracking-wider text-white">
            {t.catalog.maxPrice}
          </label>
          <span className="font-mono text-xs font-bold text-[#ccff00]">
            ${priceRange[1]}
          </span>
        </div>
        <input
          id="price-range-slider"
          type="range"
          min="70"
          max="260"
          step="10"
          value={priceRange[1]}
          onChange={(e) => onChangePriceRange([priceRange[0], Number(e.target.value)])}
          className="w-full accent-[#ccff00] cursor-pointer bg-zinc-800 rounded-lg h-1.5"
          aria-label="Filter by maximum price"
        />
        <div className="flex justify-between font-mono text-[10px] text-zinc-500 mt-2">
          <span>$70</span>
          <span>$160</span>
          <span>$260+</span>
        </div>
      </div>

      {/* Color Swatches */}
      <div className="pt-4 border-t border-zinc-800/80">
        <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white mb-3">
          {t.catalog.colorTone}
        </h4>
        <div className="flex flex-wrap gap-2">
          {COLOR_OPTIONS.map((col) => {
            const isSelected = selectedColors.includes(col.name.toLowerCase());
            return (
              <button
                key={col.name}
                type="button"
                onClick={() => onToggleColor(col.name.toLowerCase())}
                aria-pressed={isSelected}
                className={`w-6 h-6 rounded-full border-2 transition-transform ${
                  isSelected
                    ? 'border-[#ccff00] scale-125 shadow-md shadow-[#ccff00]/30 ring-2 ring-[#ccff00]'
                    : 'border-zinc-700 hover:scale-110'
                }`}
                style={{ backgroundColor: col.hex }}
                title={col.name}
                aria-label={`Filter by ${col.name} color`}
              />
            );
          })}
        </div>
      </div>

      {/* Availability / Sale Toggles */}
      <div className="pt-4 border-t border-zinc-800/80 space-y-2.5 font-mono text-xs">
        <label className="flex items-center gap-2.5 text-zinc-300 hover:text-white cursor-pointer select-none group">
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={onToggleInStock}
            className="sr-only"
          />
          <div
            className={`w-4 h-4 rounded border flex items-center justify-center transition-all group-focus-within:ring-2 group-focus-within:ring-[#ccff00] ${
              inStockOnly
                ? 'bg-[#ccff00] border-[#ccff00] text-black font-bold'
                : 'border-zinc-700 bg-zinc-900 group-hover:border-zinc-500'
            }`}
            aria-hidden="true"
          >
            {inStockOnly && <Check className="w-3 h-3 stroke-[3]" />}
          </div>
          <span>{t.catalog.inStockOnly}</span>
        </label>

        <label className="flex items-center gap-2.5 text-zinc-300 hover:text-white cursor-pointer select-none group">
          <input
            type="checkbox"
            checked={onSaleOnly}
            onChange={onToggleOnSale}
            className="sr-only"
          />
          <div
            className={`w-4 h-4 rounded border flex items-center justify-center transition-all group-focus-within:ring-2 group-focus-within:ring-[#ccff00] ${
              onSaleOnly
                ? 'bg-[#ccff00] border-[#ccff00] text-black font-bold'
                : 'border-zinc-700 bg-zinc-900 group-hover:border-zinc-500'
            }`}
            aria-hidden="true"
          >
            {onSaleOnly && <Check className="w-3 h-3 stroke-[3]" />}
          </div>
          <span className="text-red-400">{t.catalog.onSaleOnly}</span>
        </label>
      </div>

      {isMobileDrawer && (
        <div className="pt-6">
          <button
            onClick={onCloseMobileDrawer}
            className="w-full py-3.5 bg-[#ccff00] hover:bg-[#dcff33] text-black font-mono font-bold text-xs uppercase tracking-wider rounded-xl transition-colors shadow-lg"
          >
            {t.catalog.applyFilters}
          </button>
        </div>
      )}
    </div>
  );
}

