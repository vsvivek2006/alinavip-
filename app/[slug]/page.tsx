import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, MessageCircle, Shield, CheckCircle, BookOpen } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import CTASection from '@/components/CTASection';
import { siteConfig } from '@/data/siteConfig';
import { escortModels } from '@/data/models';
import pagesData from '@/data/roshni_pages.json';
import postsData from '@/data/roshni_posts.json';

interface Section {
  heading: string;
  level: number;
  paragraphs: string[];
  listItems: string[];
}

interface ContentItem {
  slug: string;
  url: string;
  title: string;
  metaDescription: string;
  h1: string;
  type: string;
  sections: Section[];
  images?: { src: string; alt: string }[];
}

function cleanBrandText(text: string): string {
  if (!text) return '';
  return text
    .replace(/roshnikhanna\.in/gi, 'escort.alinavip.com')
    .replace(/alinavip\.in/gi, 'escort.alinavip.com')
    .replace(/Roshni\s*Khanna/gi, siteConfig.name)
    .replace(/RoshniKhanna/gi, siteConfig.name)
    .replace(/Roshnikhanna/gi, siteConfig.name)
    .replace(/At Roshni\b/gi, `At ${siteConfig.name}`)
    .replace(/Roshni agency/gi, `${siteConfig.name} agency`)
    .replace(/Roshni escorts/gi, `${siteConfig.name} escorts`)
    .replace(/Roshni's/gi, `${siteConfig.name}'s`)
    .replace(/\+?91[\s-]?9971819077/g, siteConfig.phone)
    .replace(/9971819077/g, siteConfig.phoneDisplay)
    .replace(/\+?91[\s-]?9811111111/g, siteConfig.phone)
    .replace(/9811111111/g, siteConfig.phoneDisplay)
    .replace(/\+?91[\s-]?9876543210/g, siteConfig.phone)
    .replace(/9876543210/g, siteConfig.phoneDisplay);
}

const reserved = new Set([
  'about', 'about-us', 'blog', 'categories', 'category', 'contact', 'contact-us', 'disclaimer',
  'erotic-massage-in-gurgaon', 'escort-service-for-1-2-3-hours', 'escort-service-full-night',
  'escort-service-in-gurgaon', 'escorts', 'escorts-categories', 'faq', 'faqs',
  'full-body-sensual-massage', 'gallery', 'girlfriend-experience-in-gurgaon',
  'gurgaon-escorts-phone-number', 'gurgaon-escorts-rates', 'hotels',
  'in-out-call-girls-gurgaon', 'locations', 'phone-number', 'privacy-policy',
  'rates', 'services', 'terms', 'shop'
]);

const validPages = (pagesData as ContentItem[]).filter(
  (p) => !p.slug.includes('/') && !reserved.has(p.slug) && p.slug !== ''
);

const validPosts = (postsData as ContentItem[]).filter(
  (p) => !p.slug.includes('/') && !reserved.has(p.slug) && p.slug !== ''
);

const allItems = [...validPages, ...validPosts];
const itemsBySlug = new Map(allItems.map((item) => [item.slug, item]));

export function generateStaticParams() {
  return allItems.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = itemsBySlug.get(slug);

  if (!item) {
    return {
      title: 'Gurgaon Escorts – ALINA VIP',
    };
  }

  const title = cleanBrandText(item.title) || `${cleanBrandText(item.h1)} – ALINA VIP`;
  const description = cleanBrandText(item.metaDescription) || `${cleanBrandText(item.h1)} – 24/7 Verified In-Call & Out-Call Escort Service in Gurgaon with ALINA VIP.`;

  return {
    title,
    description,
    alternates: {
      canonical: `${siteConfig.url}/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}/${slug}`,
      type: item.type === 'post' ? 'article' : 'website',
      siteName: siteConfig.name,
      images: [
        {
          url: `${siteConfig.url}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: `${cleanBrandText(item.h1)} | ALINA VIP`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${siteConfig.url}/og-image.jpg`],
    },
  };
}

export default async function DynamicSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = itemsBySlug.get(slug);

  if (!item) {
    notFound();
  }

  const isPost = item.type === 'post';
  const availableModels = escortModels.slice(0, 4);
  const cleanH1 = cleanBrandText(item.h1);

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    isPost ? { label: 'Blog', href: '/blog' } : { label: 'Escorts', href: '/escorts' },
    { label: cleanH1 },
  ];

  const breadcrumbSchema = {
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems.map((b, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: b.label,
      item: b.href ? `${siteConfig.url}${b.href}` : `${siteConfig.url}/${slug}`,
    })),
  };

  const articleOrWebpageSchema = isPost
    ? {
        '@type': 'BlogPosting',
        headline: cleanH1,
        description: cleanBrandText(item.metaDescription),
        url: `${siteConfig.url}/${slug}`,
        author: {
          '@type': 'Organization',
          name: siteConfig.name,
          url: siteConfig.url,
        },
        publisher: {
          '@type': 'Organization',
          name: siteConfig.name,
          url: siteConfig.url,
          logo: {
            '@type': 'ImageObject',
            url: `${siteConfig.url}/og-image.jpg`,
          },
        },
        image: `${siteConfig.url}/og-image.jpg`,
      }
    : {
        '@type': 'WebPage',
        name: cleanH1,
        description: cleanBrandText(item.metaDescription),
        url: `${siteConfig.url}/${slug}`,
        isPartOf: {
          '@type': 'WebSite',
          name: siteConfig.name,
          url: siteConfig.url,
        },
      };

  const pageSchema = {
    '@context': 'https://schema.org',
    '@graph': [breadcrumbSchema, articleOrWebpageSchema],
  };

  return (
    <div className="min-h-screen bg-[#FFFDF6] text-[#333333]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      {/* 1. Header Hero Banner */}
      <div className="bg-[#671725] text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-rose-900/40">
        <div className="max-w-6xl mx-auto">
          <div className="mb-4">
            <Breadcrumb items={breadcrumbItems} />
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#FFD700] text-xs font-semibold uppercase tracking-wider mb-3">
            {isPost ? (
              <>
                <BookOpen size={14} /> VIP Escort &amp; Dating Guide
              </>
            ) : (
              <>
                <Shield size={14} /> 100% Real &amp; Verified Service
              </>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            {cleanH1}
          </h1>

          <p className="mt-3 text-sm sm:text-base text-rose-100/90 font-light max-w-3xl leading-relaxed">
            {isPost
              ? 'Expert advice, romantic tips, and insider knowledge from Gurgaon’s premier escort agency.'
              : 'Top-class female escort service in Gurgaon with doorstep outcalls to luxury hotels and residences.'}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%20ALINA%20VIP,%20I%20am%20inquiring%20about%20${encodeURIComponent(cleanH1)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#22bf5b] hover:to-[#0f7569] text-white shadow-md shadow-emerald-900/20 hover:shadow-lg hover:shadow-emerald-900/30 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 text-xs sm:text-sm font-bold rounded-xl flex items-center gap-2"
            >
              <MessageCircle size={16} />
              <span>Book via WhatsApp</span>
            </a>
            <a
              href={`tel:${siteConfig.phone}`}
              className="px-6 py-2.5 bg-white/90 hover:bg-white text-[#671725] border border-rose-200/90 hover:border-[#671725] shadow-xs hover:shadow-md hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 text-xs sm:text-sm font-bold rounded-xl flex items-center gap-2"
            >
              <Phone size={16} />
              <span>Direct Call: {siteConfig.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Content Layout */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Article Body (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            {item.sections.map((sec, idx) => {
              const cleanHeading = cleanBrandText(sec.heading);
              return (
                <div
                  key={idx}
                  className="bg-white p-6 sm:p-8 rounded-xl border border-gray-100 shadow-sm space-y-4"
                >
                  {cleanHeading && (
                    <h2 className="text-xl sm:text-2xl font-bold text-[#111827] border-b border-gray-100 pb-3">
                      {cleanHeading}
                    </h2>
                  )}

                  {sec.paragraphs.map((p, pIdx) => (
                    <p
                      key={pIdx}
                      className="text-gray-700 text-sm sm:text-base leading-relaxed"
                    >
                      {cleanBrandText(p)}
                    </p>
                  ))}

                  {sec.listItems && sec.listItems.length > 0 && (
                    <ul className="space-y-2 pt-2">
                      {sec.listItems.map((li, lIdx) => (
                        <li
                          key={lIdx}
                          className="flex items-start gap-2.5 text-sm sm:text-base text-gray-700"
                        >
                          <CheckCircle
                            size={17}
                            className="text-[#671725] shrink-0 mt-0.5"
                          />
                          <span>{cleanBrandText(li)}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}

            {/* Rates Table (if location/service page) */}
            {!isPost && (
              <div className="bg-white p-6 sm:p-8 rounded-xl border border-gray-100 shadow-sm space-y-4">
                <h3 className="text-xl font-bold text-[#111827]">
                  Gurgaon Escort Service Rates &amp; Packages
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  <div className="bg-[#FFFDF6] p-4 rounded-lg border border-gray-200 text-center">
                    <span className="block text-xs text-gray-500 font-medium">1 - 2 Hours</span>
                    <span className="text-lg font-black text-[#671725]">₹15,000</span>
                  </div>
                  <div className="bg-[#FFFDF6] p-4 rounded-lg border border-gray-200 text-center">
                    <span className="block text-xs text-gray-500 font-medium">2 - 4 Hours</span>
                    <span className="text-lg font-black text-[#671725]">₹20,000</span>
                  </div>
                  <div className="bg-[#FFFDF6] p-4 rounded-lg border border-gray-200 text-center">
                    <span className="block text-xs text-gray-500 font-medium">5 - 6 Hours</span>
                    <span className="text-lg font-black text-[#671725]">₹25,000</span>
                  </div>
                  <div className="bg-[#FFFDF6] p-4 rounded-lg border border-gray-200 text-center">
                    <span className="block text-xs text-gray-500 font-medium">Full Night</span>
                    <span className="text-lg font-black text-[#671725]">₹30,000+</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* VIP Guarantee Box */}
            <div className="bg-[#671725] text-white p-6 rounded-xl shadow-md space-y-4">
              <h3 className="text-lg font-bold text-[#FFD700] flex items-center gap-2">
                <Shield size={18} /> Why Choose ALINA VIP?
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-gray-100">
                <li className="flex items-start gap-2">
                  <CheckCircle size={15} className="text-[#FFD700] shrink-0 mt-0.5" />
                  <span>100% Genuine, verified profile pictures</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={15} className="text-[#FFD700] shrink-0 mt-0.5" />
                  <span>No upfront payment required (Pay on arrival)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={15} className="text-[#FFD700] shrink-0 mt-0.5" />
                  <span>Doorstep 5-star hotel delivery in 20-30 mins</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={15} className="text-[#FFD700] shrink-0 mt-0.5" />
                  <span>Absolute privacy and client confidentiality</span>
                </li>
              </ul>

              <div className="pt-2 border-t border-white/10">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="w-full block py-2.5 bg-white text-[#671725] hover:bg-rose-50 text-center text-xs font-bold rounded shadow transition-all"
                >
                  Call 24/7 Concierge Hotline
                </a>
              </div>
            </div>

            {/* Featured Companions */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm space-y-4">
              <h4 className="text-base font-bold text-[#111827]">
                Featured Escorts in Gurgaon
              </h4>
              <div className="space-y-3">
                {availableModels.map((m) => (
                  <Link
                    key={m.slug}
                    href={`/escorts/${m.slug}`}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100 group"
                  >
                    <div className="relative w-14 h-16 rounded overflow-hidden bg-gray-100 shrink-0">
                      <Image
                        src={m.image}
                        alt={`${m.name} – Luxury VIP Escort in Gurgaon`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h5 className="font-bold text-sm text-[#111827] truncate group-hover:text-[#671725]">
                        {m.name}
                      </h5>
                      <span className="text-xs text-gray-500 block truncate">
                        {m.category} • {m.age} Yrs
                      </span>
                      <span className="text-xs font-bold text-[#671725]">
                        {m.rates.oneShot}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Bottom CTA Section */}
      <CTASection />
    </div>
  );
}
