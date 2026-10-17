'use client';

import React, { useState } from 'react';
import { X, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useTranslation } from '@/hooks/useTranslation';

export function AnnouncementBar() {
  const [isDismissed, setIsDismissed] = useState(false);
  const { t } = useTranslation();

  if (isDismissed) return null;

  return (
    <aside
      aria-label={t.announcement.badge}
      className="relative z-40 bg-[#0c0c10] text-zinc-300 py-2 px-4 text-xs font-mono tracking-wider uppercase border-b border-[#22222c]"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Left badge */}
        <div className="hidden md:flex items-center gap-1.5 text-[11px] text-[#ccff00]">
          <Sparkles className="w-3.5 h-3.5" />
          <span className="font-bold tracking-widest">{t.announcement.badge}</span>
        </div>

        {/* Center message */}
        <div className="flex-1 flex items-center justify-center gap-2 text-center text-[11px] sm:text-xs min-w-0 px-1">
          <span className="text-zinc-200 truncate">
            {t.announcement.shipping}
          </span>
          <Link
            href="/sneakers?sort=newest"
            className="hidden sm:inline-flex items-center gap-1 text-[#ccff00] hover:text-[#dcff33] font-bold tracking-wider hover:underline transition-colors ml-1 shrink-0"
          >
            <span>{t.announcement.action}</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        {/* Dismiss button */}
        <button
          onClick={() => setIsDismissed(true)}
          className="p-1 text-zinc-400 hover:text-white hover:bg-zinc-800/80 rounded transition-colors shrink-0"
          aria-label={t.announcement.dismiss}
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
}

