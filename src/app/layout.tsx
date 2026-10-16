import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Space_Mono, Syne } from 'next/font/google';
import './globals.css';
import { AnnouncementBar } from '@/components/layout/AnnouncementBar';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CartDrawer } from '@/components/layout/CartDrawer';
import { SearchOverlay } from '@/components/layout/SearchOverlay';
import { QuickViewModal } from '@/components/ui/QuickViewModal';
import { SizeGuideModal } from '@/components/ui/SizeGuideModal';
import { ToastContainer } from '@/components/ui/ToastContainer';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'SOLEVAULT — Premium Sneaker Store',
    template: '%s | SOLEVAULT',
  },
  description:
    'Curated sneaker boutique showcasing iconic silhouettes from Nike, Jordan, Adidas, New Balance, ASICS, Puma, and Converse.',
  keywords: [
    'sneakers',
    'sneaker store',
    'Nike',
    'Jordan 1',
    'Adidas Samba',
    'New Balance 9060',
    'ASICS Kayano',
    'streetwear',
    'footwear',
  ],
  authors: [{ name: 'SOLEVAULT' }],
  openGraph: {
    title: 'SOLEVAULT — An Interactive Premium Sneaker Store',
    description:
      'Curated sneaker boutique showcasing iconic silhouettes from Nike, Jordan, Adidas, New Balance, ASICS, Puma, and Converse.',
    url: 'https://solevault.demo',
    siteName: 'SOLEVAULT',
    type: 'website',
  },
};

import { ThemeLocaleSync } from '@/components/layout/ThemeLocaleSync';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`dark ${plusJakartaSans.variable} ${spaceMono.variable} ${syne.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const stored = localStorage.getItem('solevault-storage');
                if (stored) {
                  const parsed = JSON.parse(stored);
                  if (parsed && parsed.state) {
                    if (parsed.state.theme === 'light') {
                      document.documentElement.classList.remove('dark');
                      document.documentElement.classList.add('light');
                      document.documentElement.setAttribute('data-theme', 'light');
                    }
                    if (parsed.state.language) {
                      document.documentElement.setAttribute('lang', parsed.state.language);
                    }
                  }
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="bg-vault-black text-zinc-100 min-h-screen flex flex-col antialiased selection:bg-[#ccff00] selection:text-black">
        <ThemeLocaleSync />

        {/* Accessible skip link */}
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>

        <AnnouncementBar />
        <Navbar />

        <main id="main-content" tabIndex={-1} className="flex-1 flex flex-col focus:outline-none">
          {children}
        </main>

        <Footer />

        {/* Global Drawers & Modals */}
        <CartDrawer />
        <SearchOverlay />
        <QuickViewModal />
        <SizeGuideModal />
        <ToastContainer />
      </body>
    </html>
  );
}
