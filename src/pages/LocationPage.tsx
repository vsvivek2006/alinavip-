import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  MapPin,
  Navigation,
  Phone,
  ShieldCheck,
  Clock,
  Star,
  MessageCircle,
  Building2,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Hotel,
  Compass,
} from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumb from '@/components/Breadcrumb';
import CTASection from '@/components/CTASection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { siteConfig } from '@/data/siteConfig';
import { getLocation, locations } from '@/data/locations';

export default function LocationPage() {
  const { slug } = useParams<{ slug: string }>();
  const location = getLocation(slug || '');

  const [formSubmitted, setFormSubmitted] = useState(false);

  if (!location) {
    return (
      <div className="pt-32 pb-20 text-center bg-white text-gray-800">
        <h1 className="section-title mb-4 text-[#1a1a2e]">Location Not Found</h1>
        <p className="text-gray-600 mb-6">The location page you are looking for does not exist.</p>
        <Link
          to="/locations"
          className="inline-block bg-gold-600 hover:bg-gold-700 text-white px-8 py-3.5 rounded-full font-semibold transition-all shadow-md"
        >
          View All 100+ Locations
        </Link>
      </div>
    );
  }

  // Resolve nearby location links
  const nearbyLocationLinks = location.nearbyAreas
    .map((area) => {
      const match = locations.find(
        (l) =>
          l.name.toLowerCase() === area.toLowerCase() ||
          l.area.toLowerCase() === area.toLowerCase() ||
          l.slug.toLowerCase() === area.toLowerCase().replace(/\s+/g, '-')
      );
      return match || null;
    })
    .filter(Boolean);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: location.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const placeSchema = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: location.name,
    address: {
      '@type': 'PostalAddress',
      addressLocality: location.city,
      addressRegion:
        location.region === 'Delhi'
          ? 'Delhi'
          : location.region === 'Noida' || location.region === 'Greater Noida' || location.region === 'Ghaziabad'
          ? 'Uttar Pradesh'
          : 'Haryana',
      addressCountry: 'IN',
    },
  };

  return (
    <>
      <SEO
        title={location.metaTitle}
        description={location.metaDescription}
        keywords={`escorts in ${location.name}, ${location.name} call girls, luxury escorts ${location.name}, VIP call girls ${location.name}`}
        canonical={`${siteConfig.url}/locations/${location.slug}`}
        jsonLd={[faqSchema, placeSchema]}
        breadcrumbs={[
          { name: 'Home', url: siteConfig.url },
          { name: 'Locations', url: `${siteConfig.url}/locations` },
          { name: location.name, url: `${siteConfig.url}/locations/${location.slug}` },
        ]}
      />

      <Breadcrumb
        items={[
          { name: 'Home', path: '/' },
          { name: 'Locations', path: '/locations' },
          { name: location.name },
        ]}
      />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#0a0a1a] via-[#1a1a2e] to-[#2d1b0e] overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px]" />
        </div>
        <div className="container-luxury relative z-10 text-center">
          <span className="inline-block px-6 py-2 border border-gold-500/30 rounded-full text-gold-400 text-sm font-semibold tracking-wider uppercase mb-6 bg-gold-500/10 backdrop-blur-sm">
            ★ {location.city} • {location.region}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-serif tracking-wide">
            Escorts in <span className="text-gradient-gold">{location.name}</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            {location.shortDescription} ALINA VIP provides verified, discreet, and premium{' '}
            <Link to="/services" className="text-gold-400 hover:underline font-medium">
              escort service in {location.name}
            </Link>{' '}
            and surrounding Gurgaon corridors.
          </p>
          <div className="gold-divider mx-auto mt-8 mb-8" />

          {/* Quick Trust Bar */}
          <div className="flex flex-wrap justify-center gap-4 text-xs font-semibold uppercase tracking-wider text-charcoal-300">
            <span className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gold-400">
              <ShieldCheck size={16} /> 100% Verified Profiles
            </span>
            <span className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gold-400">
              <Clock size={16} /> 20-30 Min Outcall Dispatch
            </span>
            <span className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gold-400">
              <Hotel size={16} /> 5-Star Hotel Outcalls
            </span>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-neutral-900 px-8 py-4 rounded-full font-bold text-base transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <Phone className="w-5 h-5" /> Call Concierge: {siteConfig.phoneDisplay}
            </a>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 border-2 border-gold-500/50 hover:bg-gold-500/10 text-gold-400 px-8 py-4 rounded-full font-bold text-base transition-all"
            >
              Explore Profiles <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content (2-Column Editorial with Sticky Sidebar) */}
      <section className="py-16 md:py-24 bg-white text-gray-800">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Comprehensive Local Guide */}
            <div className="lg:col-span-8 space-y-10">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-5 font-serif">
                  Premium Luxury Escort Service in {location.name}
                </h2>
                <div className="gold-divider mb-6" />

                <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                  {location.about?.intro ? (
                    <>
                      <p>{location.about.intro}</p>
                      <p>{location.about.historyVibe}</p>
                      <p>{location.about.commercialProfile}</p>
                    </>
                  ) : (
                    <>
                      <p>
                        <strong>ALINA VIP</strong> is proud to offer its premier luxury{' '}
                        <Link to="/services" className="text-gold-600 hover:underline font-semibold">
                          escort service in {location.name}
                        </Link>
                        , one of the most distinguished areas in {location.city}. Known for its upscale lifestyle and vibrant corporate landscape, {location.name} attracts discerning gentlemen who demand discretion, elegance, and authentic hospitality.
                      </p>
                      <p>
                        Whether staying at premier five-star luxury suites or hosting intimate corporate dinners, our verified{' '}
                        <Link to="/call-girls" className="text-gold-600 hover:underline font-semibold">
                          call girls in {location.name}
                        </Link>{' '}
                        provide charismatic companionship tailored to your highest expectations.
                      </p>
                    </>
                  )}
                </div>
              </div>

              {/* Key Landmarks */}
              {location.about?.landmarks && location.about.landmarks.length > 0 && (
                <div className="p-8 bg-[#faf6f2] rounded-2xl border border-gold-200/60 shadow-sm">
                  <h3 className="text-2xl font-bold text-[#1a1a2e] mb-4 font-serif flex items-center gap-2">
                    <MapPin className="text-gold-600 w-6 h-6" />
                    Key Landmarks &amp; Hotspots in {location.name}
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-3 mt-4">
                    {location.about.landmarks.map((landmark, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-sm text-gray-700 bg-white p-3 rounded-xl border border-gray-100">
                        <CheckCircle2 size={16} className="text-gold-600 flex-shrink-0" />
                        <span className="font-semibold">{landmark}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Why Choose Us in this location */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-6 font-serif">
                  Why Choose ALINA VIP in {location.name}?
                </h3>
                {location.whyChoose?.overview ? (
                  <div className="space-y-4">
                    <p className="text-gray-700 text-lg leading-relaxed">{location.whyChoose.overview}</p>
                    <div className="grid sm:grid-cols-2 gap-4 mt-6">
                      {location.whyChoose.reasons.map((r, idx) => (
                        <div key={idx} className="p-6 bg-[#faf6f2] rounded-2xl border border-gold-200/50">
                          <h4 className="text-base font-bold text-[#1a1a2e] mb-2">{r.title}</h4>
                          <p className="text-sm text-gray-600 leading-relaxed">{r.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="grid sm:grid-cols-3 gap-4">
                    {[
                      {
                        title: '100% Verified Profiles',
                        desc: 'Real untouched photos and in-person verification for all call girls in Gurgaon.',
                        icon: ShieldCheck,
                      },
                      {
                        title: 'Rapid 20-30m Arrival',
                        desc: `Quick discreet outcall to all luxury hotels and residences in ${location.name}.`,
                        icon: Clock,
                      },
                      {
                        title: 'Absolute Privacy',
                        desc: 'Complete confidentiality and client protection for all booking records.',
                        icon: Star,
                      },
                    ].map((item, idx) => {
                      const Icon = item.icon;
                      return (
                        <div key={idx} className="p-6 bg-[#faf6f2] rounded-2xl border border-gold-200/50">
                          <Icon className="w-8 h-8 text-gold-600 mb-3" />
                          <h4 className="text-base font-bold text-[#1a1a2e] mb-2">{item.title}</h4>
                          <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Companionship Options */}
              {location.companionshipOptions?.overview && (
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-4 font-serif">
                    Companionship Options in {location.name}
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">{location.companionshipOptions.overview}</p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {location.companionshipOptions.options.map((opt, idx) => (
                      <div key={idx} className="p-6 bg-white rounded-2xl border border-gray-200 hover:border-gold-300 transition-all shadow-sm">
                        <h4 className="text-lg font-bold text-[#1a1a2e] mb-2 font-serif">{opt.title}</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">{opt.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Local Area Connectivity & Hospitality */}
              {location.localCharacteristics?.connectivity && (
                <div className="p-8 bg-[#faf6f2] rounded-2xl border border-gold-200/60 shadow-sm">
                  <h3 className="text-2xl font-bold text-[#1a1a2e] mb-3 font-serif flex items-center gap-2">
                    <Navigation className="text-gold-600 w-6 h-6" />
                    Connectivity &amp; Five-Star Hotels Served
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed mb-6">{location.localCharacteristics.connectivity}</p>

                  <div className="grid sm:grid-cols-2 gap-6">
                    {location.localCharacteristics.hotels && location.localCharacteristics.hotels.length > 0 && (
                      <div>
                        <h4 className="text-xs uppercase tracking-wider text-gold-700 font-bold mb-3 flex items-center gap-1.5">
                          <Hotel size={16} /> Partner Hotels &amp; Outcall Venues
                        </h4>
                        <ul className="space-y-2">
                          {location.localCharacteristics.hotels.map((h, idx) => (
                            <li key={idx} className="text-xs text-gray-700 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 bg-gold-600 rounded-full" />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {location.localCharacteristics.metroStations && location.localCharacteristics.metroStations.length > 0 && (
                      <div>
                        <h4 className="text-xs uppercase tracking-wider text-gold-700 font-bold mb-3 flex items-center gap-1.5">
                          <Building2 size={16} /> Transit &amp; Metro Connectivity
                        </h4>
                        <ul className="space-y-2">
                          {location.localCharacteristics.metroStations.map((m, idx) => (
                            <li key={idx} className="text-xs text-gray-700 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 bg-gold-600 rounded-full" />
                              <span>{m}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Master Hub Links if Applicable */}
              {location.isHub && location.hubDetails && (
                <div className="space-y-6 pt-4 border-t border-gray-200">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] font-serif">
                    {location.name} Regional Master Directory
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{location.hubDetails.overview}</p>
                  {location.hubDetails.corridors.map((corridor, idx) => (
                    <div key={idx} className="mb-6 p-6 bg-[#faf6f2] rounded-2xl border border-gold-200/50">
                      <h4 className="text-lg font-bold text-[#1a1a2e] mb-2">{corridor.title}</h4>
                      <p className="text-sm text-gray-600 mb-4">{corridor.desc}</p>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
                        {corridor.slugs.map((subSlug) => {
                          const subLoc = locations.find((l) => l.slug === subSlug);
                          return (
                            <Link
                              key={subSlug}
                              to={`/locations/${subSlug}`}
                              className="flex items-center gap-2 p-2.5 bg-white border border-gray-200 hover:border-gold-500 rounded-lg text-xs text-gray-700 hover:text-gold-600 transition-colors font-medium"
                            >
                              <Navigation size={12} className="text-gold-600 flex-shrink-0" />
                              <span className="truncate">{subLoc ? subLoc.name : subSlug.replace(/-/g, ' ')}</span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Right Column: Sticky Concierge Showcase */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
              {/* Hotel Outcall Dispatch Card */}
              <div className="p-6 bg-gradient-to-br from-[#1a1a2e] to-[#2d1b0e] text-white rounded-3xl shadow-2xl border border-gold-500/20 text-center">
                <div className="w-12 h-12 rounded-full bg-gold-500/20 flex items-center justify-center mx-auto mb-4 border border-gold-500/40">
                  <Hotel className="w-6 h-6 text-gold-400" />
                </div>
                <span className="text-xs uppercase tracking-ultra text-gold-400 font-bold block mb-1">
                  Private Outcall Desk
                </span>
                <h3 className="font-serif text-2xl text-white font-medium mb-2">
                  {location.name} Dispatch
                </h3>
                <p className="text-gray-300 text-xs leading-relaxed mb-6">
                  Discreet arrival within 20 to 30 minutes to all major 5-star hotels and luxury residences in {location.name}.
                </p>

                <div className="space-y-3">
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="flex items-center justify-center gap-2 w-full py-3.5 bg-gradient-to-r from-gold-500 to-gold-600 text-neutral-950 font-bold rounded-xl text-sm shadow-lg hover:shadow-xl transition-all"
                  >
                    <Phone size={16} /> Call Now: {siteConfig.phoneDisplay}
                  </a>
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp}?text=Hello%20ALINA%20VIP,%20I%20would%20like%20to%20book%20an%20escort%20in%20${encodeURIComponent(location.name)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#25D366] text-white font-bold rounded-xl text-sm shadow-lg hover:shadow-xl transition-all"
                  >
                    <MessageCircle size={16} /> WhatsApp Booking
                  </a>
                </div>
              </div>

              {/* Rating Card */}
              <div className="bg-[#faf6f2] p-6 rounded-2xl border border-gold-200/80 text-center shadow-sm">
                <div className="flex justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-500 text-gold-500" />
                  ))}
                </div>
                <p className="font-bold text-[#1a1a2e] text-lg font-serif">Top Rated in {location.name}</p>
                <p className="text-gray-600 text-xs mt-1">
                  100% verified call girls and companions with complete privacy.
                </p>
              </div>

              {/* Quick Categories Navigation */}
              <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
                <h4 className="font-serif text-lg font-bold text-[#1a1a2e] mb-4">
                  Popular Categories
                </h4>
                <div className="space-y-2">
                  {[
                    { name: 'Russian Escorts', slug: 'russian-call-girls' },
                    { name: 'VIP Call Girls', slug: 'vip-call-girls' },
                    { name: 'Model Escorts', slug: 'model-escorts' },
                    { name: 'College Girls', slug: 'college-girls' },
                    { name: 'Independent Escorts', slug: 'independent-girls' },
                  ].map((cat) => (
                    <Link
                      key={cat.slug}
                      to={`/category/${cat.slug}`}
                      className="flex items-center justify-between p-2.5 rounded-xl hover:bg-gold-50 text-xs font-semibold text-gray-700 hover:text-gold-700 transition-colors"
                    >
                      <span>{cat.name}</span>
                      <ArrowRight size={14} className="text-gold-600" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Areas Section */}
      <section className="py-16 md:py-20 bg-[#faf6f2] text-gray-800 border-t border-gray-200">
        <div className="container-luxury">
          <div className="text-center mb-10">
            <p className="section-subtitle text-gold-600">Nearby Corridors</p>
            <h2 className="section-title mb-4 text-[#1a1a2e]">
              Locations Near <span className="text-gradient-gold">{location.name}</span>
            </h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
            {nearbyLocationLinks.map(
              (loc) =>
                loc && (
                  <Link
                    key={loc.slug}
                    to={`/locations/${loc.slug}`}
                    className="flex items-center gap-2.5 p-4 bg-white border border-gray-200 hover:border-gold-500 hover:shadow-md transition-all rounded-xl group"
                  >
                    <Navigation size={15} className="text-gold-600 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-xs text-gray-700 group-hover:text-gold-600 font-semibold transition-colors">
                      {loc.name}
                    </span>
                  </Link>
                )
            )}
          </div>
        </div>
      </section>

      {/* Local FAQ Section */}
      <section className="py-16 md:py-24 bg-white text-gray-800">
        <div className="container-luxury">
          <div className="text-center mb-14">
            <p className="section-subtitle text-gold-600">Local Area FAQ</p>
            <h2 className="section-title mb-4 text-[#1a1a2e]">
              Frequently Asked Questions – <span className="text-gradient-gold">{location.name}</span>
            </h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {location.faqs.map((faq, i) => (
              <details
                key={i}
                className="bg-[#faf6f2] rounded-2xl border border-gold-200/50 hover:border-gold-400 transition-all group overflow-hidden"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-semibold text-[#1a1a2e] text-base pr-4">
                    {faq.question}
                  </span>
                  <span className="text-gold-600 text-2xl font-light group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm text-gray-600 leading-relaxed border-t border-gold-200/40 pt-4">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-16 md:py-24 bg-[#faf6f2]">
        <div className="container-luxury max-w-2xl">
          <div className="text-center mb-10">
            <p className="section-subtitle text-gold-600">Direct Reservation</p>
            <h2 className="section-title mb-4 text-[#1a1a2e]">
              Book Escort Service in <span className="text-gradient-gold">{location.name}</span>
            </h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="bg-gradient-to-br from-[#1a1a2e] to-[#2d1b0e] p-8 md:p-10 rounded-3xl shadow-2xl border border-gold-500/20">
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                setFormSubmitted(true);
                alert(`Thank you for your inquiry for ${location.name}. Our concierge will contact you shortly.`);
              }}
            >
              <div>
                <label className="block text-xs tracking-wider uppercase text-gray-400 mb-2 font-semibold">Your Name</label>
                <input
                  type="text"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-gray-500 focus:border-gold-500 focus:outline-none transition-colors"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-xs tracking-wider uppercase text-gray-400 mb-2 font-semibold">Phone Number</label>
                <input
                  type="tel"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-gray-500 focus:border-gold-500 focus:outline-none transition-colors"
                  placeholder="+91 Your Phone Number"
                />
              </div>
              <div>
                <label className="block text-xs tracking-wider uppercase text-gray-400 mb-2 font-semibold">Service Location</label>
                <input
                  type="text"
                  readOnly
                  value={`${location.name}, ${location.city}`}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-3.5 text-gold-400 font-semibold focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs tracking-wider uppercase text-gray-400 mb-2 font-semibold">Special Requirements</label>
                <textarea
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-gray-500 focus:border-gold-500 focus:outline-none transition-colors resize-none"
                  placeholder={`Tell us about your preferences for ${location.name} (hotel, companion category, timing)...`}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gold-600 hover:bg-gold-700 text-white py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-gold-600/30 hover:shadow-gold-600/50 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" /> {formSubmitted ? 'Request Submitted' : `Book Escort in ${location.name}`}
              </button>
            </form>
          </div>
        </div>
      </section>

      <TestimonialsSection theme="light" />
      <CTASection />
    </>
  );
}
