import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Jost } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { siteConfig } from '@/data/siteConfig';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-cormorant',
  display: 'swap',
});

const jost = Jost({
  subsets: ['latin'],
  variable: '--font-jost',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'ALINA VIP | Premium Luxury Escort Service in Gurgaon',
    template: '%s',
  },
  description:
    'ALINA VIP offers premium luxury escort service in Gurgaon. Verified profiles, VIP escorts, Russian call girls, 100% discreet hotel & residence outcalls. Available 24/7.',
  applicationName: 'ALINA VIP',
  authors: [{ name: 'ALINA VIP' }],
  generator: 'Next.js',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.svg',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteConfig.url,
    siteName: 'ALINA VIP',
    title: 'ALINA VIP | Premium Luxury Escort Service in Gurgaon',
    description:
      'ALINA VIP offers premium luxury escort service in Gurgaon. Verified profiles, VIP escorts, Russian call girls, 100% discreet hotel & residence outcalls.',
    images: [
      {
        url: `${siteConfig.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'ALINA VIP Luxury Escort Service in Gurgaon',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ALINA VIP | Premium Luxury Escort Service in Gurgaon',
    description:
      'ALINA VIP offers premium luxury escort service in Gurgaon. Verified profiles, VIP escorts, Russian call girls, 100% discreet hotel & residence outcalls.',
    images: [`${siteConfig.url}/og-image.jpg`],
  },
  verification: {
    other: {
      seobility: '01d67d85a0cff8389a0210729e64aead',
    },
  },
};

export const viewport: Viewport = {
  themeColor: '#0A0A0B',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body className="bg-charcoal-900 text-charcoal-100 font-sans antialiased">
        <div className="min-h-screen flex flex-col bg-luxury-gradient overflow-x-hidden">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
        </div>
      </body>
    </html>
  );
}
