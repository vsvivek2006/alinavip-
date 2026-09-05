import { Link } from 'react-router-dom';
import {
  Phone,
  ArrowRight,
  Crown,
  MapPin,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Star,
} from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumb from '@/components/Breadcrumb';
import CTASection from '@/components/CTASection';
import { siteConfig, generalFaqs } from '@/data/siteConfig';

export default function FAQPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: generalFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <SEO
        title="FAQ | Escort Service in Gurgaon | VIP Call Girls Questions"
        description="Find answers to frequently asked questions about escort service in Gurgaon. Learn about VIP call girls, Russian escorts, booking, verification, discretion, and more."
        keywords="escort service FAQ Gurgaon, call girls questions, VIP escort booking FAQ, Russian escorts Gurgaon, model escorts FAQ, discreet escort service"
        canonical={`${siteConfig.url}/faq`}
        jsonLd={faqSchema}
        breadcrumbs={[
          { name: 'Home', url: siteConfig.url },
          { name: 'FAQ', url: `${siteConfig.url}/faq` },
        ]}
      />

      <Breadcrumb items={[{ name: 'Home', path: '/' }, { name: 'FAQ' }]} />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#0a0a1a] via-[#1a1a2e] to-[#2d1b0e] overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px]" />
        </div>
        <div className="container-luxury relative z-10 text-center">
          <span className="inline-block px-6 py-2 border border-gold-500/30 rounded-full text-gold-400 text-sm font-semibold tracking-wider uppercase mb-6 bg-gold-500/10 backdrop-blur-sm">
            ★ FAQ
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-serif tracking-wide">
            Escort Service <span className="text-gradient-gold">FAQ</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about{' '}
            <strong className="text-gold-400 font-semibold">escort service in Gurgaon</strong>,{' '}
            <Link to="/call-girls" className="text-gold-400 hover:underline font-medium">
              VIP call girls
            </Link>
            ,{' '}
            <Link to="/russian-escorts" className="text-gold-400 hover:underline font-medium">
              Russian escorts
            </Link>
            , and{' '}
            <Link to="/services" className="text-gold-400 hover:underline font-medium">
              premium escort services
            </Link>
            .
          </p>
          <div className="gold-divider mx-auto mt-8" />
        </div>
      </section>

      {/* Main FAQ Section */}
      <section className="py-16 md:py-24 bg-white text-gray-800">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Left Column (2 Cols): FAQ Accordions */}
            <div className="lg:col-span-2">
              <div className="mb-10">
                <p className="section-subtitle text-gold-600">FAQ</p>
                <h2 className="section-title mb-4 text-[#1a1a2e]">
                  Frequently Asked <span className="text-gradient-gold">Questions</span>
                </h2>
                <div className="gold-divider" />
                <p className="text-gray-600 max-w-2xl mt-6 leading-relaxed">
                  Everything you need to know about our{' '}
                  <Link to="/services" className="text-gold-600 hover:underline font-medium">
                    escort service in Gurgaon
                  </Link>{' '}
                  and{' '}
                  <Link to="/call-girls" className="text-gold-600 hover:underline font-medium">
                    call girls
                  </Link>
                  .
                </p>
              </div>

              <div className="space-y-4">
                {generalFaqs.map((faq, i) => (
                  <details
                    key={i}
                    className="group bg-white rounded-2xl border border-gray-200 hover:border-gold-300 transition-all shadow-sm hover:shadow-md overflow-hidden"
                  >
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none hover:bg-gold-50/30 transition-colors">
                      <span className="font-semibold text-[#1a1a2e] text-lg pr-4 flex items-center gap-3">
                        <span className="w-8 h-8 bg-gold-100 rounded-full flex items-center justify-center text-gold-700 text-sm font-bold flex-shrink-0">
                          {i + 1}
                        </span>
                        {faq.question}
                      </span>
                      <span className="text-gold-600 text-3xl font-light group-open:rotate-45 transition-transform duration-300 flex-shrink-0">
                        +
                      </span>
                    </summary>

                    <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                      <p className="text-sm md:text-base leading-relaxed">{faq.answer}</p>
                      <div className="mt-4 flex flex-wrap gap-2 pt-3 border-t border-gray-100">
                        <Link
                          to="/services"
                          className="text-xs bg-gold-50 text-gold-700 px-3 py-1 rounded-full hover:bg-gold-100 transition-colors font-medium"
                        >
                          View Escort Services
                        </Link>
                        <Link
                          to="/call-girls"
                          className="text-xs bg-gold-50 text-gold-700 px-3 py-1 rounded-full hover:bg-gold-100 transition-colors font-medium"
                        >
                          Browse Call Girls
                        </Link>
                        <a
                          href={siteConfig.url}
                          className="text-xs bg-gold-50 text-gold-700 px-3 py-1 rounded-full hover:bg-gold-100 transition-colors font-medium"
                        >
                          Visit {siteConfig.domain}
                        </a>
                      </div>
                    </div>
                  </details>
                ))}
              </div>

              {/* Direct Call & Contact Card */}
              <div className="text-center mt-12 p-8 bg-[#faf6f2] rounded-2xl border border-gold-200/60 shadow-sm">
                <p className="text-gray-700 font-semibold mb-4 text-base">
                  Still have questions? We&apos;re here to help 24/7.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="bg-gold-600 hover:bg-gold-700 text-white px-8 py-3.5 rounded-full font-bold text-base transition-all shadow-md hover:shadow-xl flex items-center gap-2"
                  >
                    <Phone className="w-5 h-5" /> Call Now
                  </a>
                  <Link
                    to="/contact"
                    className="border-2 border-gold-600 text-gold-700 hover:bg-gold-600 hover:text-white px-8 py-3.5 rounded-full font-bold text-base transition-all"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column (1 Col): Sticky Information Sidebar */}
            <div className="space-y-6 lg:sticky lg:top-24">
              {/* Category Quick Links */}
              <div className="bg-gradient-to-br from-[#1a1a2e] to-[#2d1b0e] p-6 rounded-2xl border border-gold-500/20 text-white shadow-md">
                <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2 font-serif">
                  <Crown className="w-5 h-5 text-gold-500" /> Our Escort Services
                </h3>
                <div className="space-y-3">
                  <Link
                    to="/russian-escorts"
                    className="flex items-center justify-between text-gray-300 hover:text-gold-400 transition-colors py-2 border-b border-white/5 text-sm"
                  >
                    <span>Russian Escorts</span>
                    <ArrowRight className="w-4 h-4 text-gold-500" />
                  </Link>
                  <Link
                    to="/model-escorts"
                    className="flex items-center justify-between text-gray-300 hover:text-gold-400 transition-colors py-2 border-b border-white/5 text-sm"
                  >
                    <span>Model Escorts</span>
                    <ArrowRight className="w-4 h-4 text-gold-500" />
                  </Link>
                  <Link
                    to="/housewife-escorts"
                    className="flex items-center justify-between text-gray-300 hover:text-gold-400 transition-colors py-2 border-b border-white/5 text-sm"
                  >
                    <span>Housewife Escorts</span>
                    <ArrowRight className="w-4 h-4 text-gold-500" />
                  </Link>
                  <Link
                    to="/college-girls"
                    className="flex items-center justify-between text-gray-300 hover:text-gold-400 transition-colors py-2 border-b border-white/5 text-sm"
                  >
                    <span>College Girls</span>
                    <ArrowRight className="w-4 h-4 text-gold-500" />
                  </Link>
                  <Link
                    to="/independent-escorts"
                    className="flex items-center justify-between text-gray-300 hover:text-gold-400 transition-colors py-2 border-b border-white/5 text-sm"
                  >
                    <span>Independent Escorts</span>
                    <ArrowRight className="w-4 h-4 text-gold-500" />
                  </Link>
                  <Link
                    to="/vip-escorts"
                    className="flex items-center justify-between text-gray-300 hover:text-gold-400 transition-colors py-2 text-sm"
                  >
                    <span>VIP Escorts</span>
                    <ArrowRight className="w-4 h-4 text-gold-500" />
                  </Link>
                </div>
              </div>

              {/* Areas We Serve */}
              <div className="bg-[#faf6f2] p-6 rounded-2xl border border-gold-200/60 shadow-sm">
                <h3 className="font-bold text-[#1a1a2e] text-lg mb-4 flex items-center gap-2 font-serif">
                  <MapPin className="w-5 h-5 text-gold-600" /> Areas We Serve
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Link
                    to="/locations/cyber-city"
                    className="text-xs bg-white hover:bg-gold-100 text-gray-700 hover:text-gold-800 px-3 py-1.5 rounded-full border border-gray-200 hover:border-gold-300 transition-colors font-medium"
                  >
                    Cyber City
                  </Link>
                  <Link
                    to="/locations/mg-road"
                    className="text-xs bg-white hover:bg-gold-100 text-gray-700 hover:text-gold-800 px-3 py-1.5 rounded-full border border-gray-200 hover:border-gold-300 transition-colors font-medium"
                  >
                    MG Road
                  </Link>
                  <Link
                    to="/locations/golf-course-road"
                    className="text-xs bg-white hover:bg-gold-100 text-gray-700 hover:text-gold-800 px-3 py-1.5 rounded-full border border-gray-200 hover:border-gold-300 transition-colors font-medium"
                  >
                    Golf Course Road
                  </Link>
                  <Link
                    to="/locations/dlf-phase-1"
                    className="text-xs bg-white hover:bg-gold-100 text-gray-700 hover:text-gold-800 px-3 py-1.5 rounded-full border border-gray-200 hover:border-gold-300 transition-colors font-medium"
                  >
                    DLF Phase 1–5
                  </Link>
                  <Link
                    to="/locations/sohna-road"
                    className="text-xs bg-white hover:bg-gold-100 text-gray-700 hover:text-gold-800 px-3 py-1.5 rounded-full border border-gray-200 hover:border-gold-300 transition-colors font-medium"
                  >
                    Sohna Road
                  </Link>
                  <Link
                    to="/locations/sector-29"
                    className="text-xs bg-white hover:bg-gold-100 text-gray-700 hover:text-gold-800 px-3 py-1.5 rounded-full border border-gray-200 hover:border-gold-300 transition-colors font-medium"
                  >
                    Sector 29
                  </Link>
                </div>
              </div>

              {/* Trust Features Card */}
              <div className="bg-gold-50/80 p-6 rounded-2xl border border-gold-200/80 shadow-sm">
                <h3 className="font-bold text-[#1a1a2e] text-center mb-4 font-serif text-lg">
                  Why Choose ALINA VIP
                </h3>
                <div className="space-y-3 text-sm text-gray-700">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5 text-gold-600 flex-shrink-0" />
                    <span>100% Discreet Escort Service</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold-600 flex-shrink-0" />
                    <span>Verified Call Girls &amp; Escorts</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-gold-600 flex-shrink-0" />
                    <span>24/7 Rapid Concierge</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-gold-600 flex-shrink-0" />
                    <span>500+ Verified Client Reviews</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gold-200/60 text-center">
                  <a
                    href={siteConfig.url}
                    className="text-gold-700 hover:underline text-xs font-semibold"
                  >
                    Official Portal: {siteConfig.domain}
                  </a>
                </div>
              </div>

              {/* Sidebar Image */}
              <div className="rounded-2xl overflow-hidden shadow-xl border border-gold-200/60 bg-neutral-900">
                <img
                  src="/images/faq-sidebar.jpg"
                  alt="Escort Service in Gurgaon - VIP Call Girls FAQ"
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-16 bg-gradient-to-br from-[#faf6f2] to-white">
        <div className="container-luxury">
          <div className="bg-gradient-to-r from-gold-50 via-amber-50 to-gold-50 rounded-3xl p-8 md:p-12 border-2 border-gold-200 text-center max-w-4xl mx-auto shadow-sm">
            <h3 className="text-3xl font-bold text-[#1a1a2e] mb-4 font-serif">
              Still Have Questions About <span className="text-gold-600">Escort Service?</span>
            </h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto leading-relaxed">
              Our team is available 24/7 to answer all your questions about{' '}
              <Link to="/call-girls" className="text-gold-600 hover:underline font-semibold">
                call girls in Gurgaon
              </Link>
              ,{' '}
              <Link to="/russian-escorts" className="text-gold-600 hover:underline font-semibold">
                Russian escorts
              </Link>
              , and{' '}
              <Link to="/services" className="text-gold-600 hover:underline font-semibold">
                VIP escort services
              </Link>
              .
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`tel:${siteConfig.phone}`}
                className="bg-gold-600 hover:bg-gold-700 text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                <Phone className="w-5 h-5" /> Call {siteConfig.phoneDisplay}
              </a>
              <Link
                to="/contact"
                className="border-2 border-gold-600 text-gold-700 hover:bg-gold-600 hover:text-white px-10 py-4 rounded-full font-bold text-lg transition-all"
              >
                Contact Us
              </Link>
              <a
                href={siteConfig.url}
                className="border-2 border-gold-600 text-gold-700 hover:bg-gold-600 hover:text-white px-10 py-4 rounded-full font-bold text-lg transition-all"
              >
                Visit {siteConfig.domain}
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
