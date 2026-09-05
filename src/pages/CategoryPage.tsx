import { Link, useParams } from 'react-router-dom';
import {
  Phone,
  ArrowRight,
  Crown,
  Camera,
  Heart,
  GraduationCap,
  User,
  Star,
  Plane,
  Sparkles,
  ShieldCheck,
  Lock,
  Clock,
  MapPin,
} from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumb from '@/components/Breadcrumb';
import CTASection from '@/components/CTASection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { siteConfig } from '@/data/siteConfig';
import { getCategory } from '@/data/categories';

const categoryImageMap: Record<string, string> = {
  'russian-call-girls': '/images/categories/russian-escorts.jpg',
  'russian-escorts': '/images/categories/russian-escorts.jpg',
  'vip-call-girls': '/images/categories/vip-escorts.jpg',
  'vip-escorts': '/images/categories/vip-escorts.jpg',
  'high-profile-girls': '/images/categories/high-profile-girls.jpg',
  'model-escorts': '/images/categories/model-escorts.jpg',
  'college-girls': '/images/categories/college-girls.jpg',
  'housewife-escorts': '/images/categories/housewife-escorts.jpg',
  'independent-girls': '/images/categories/independent-escorts.jpg',
  'independent-escorts': '/images/categories/independent-escorts.jpg',
  'air-hostess': '/images/categories/air-hostess.jpg',
  'celebrity-escorts': '/images/categories/celebrity-escorts.jpg',
  'travel-escorts': '/images/categories/travel-escorts.jpg',
};

const categoryIconMap: Record<string, React.ElementType> = {
  'russian-call-girls': Crown,
  'russian-escorts': Crown,
  'vip-call-girls': Crown,
  'vip-escorts': Crown,
  'high-profile-girls': Star,
  'model-escorts': Camera,
  'college-girls': GraduationCap,
  'housewife-escorts': Heart,
  'independent-girls': User,
  'independent-escorts': User,
  'air-hostess': Plane,
  'celebrity-escorts': Sparkles,
  'travel-escorts': Plane,
};

export default function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const category = getCategory(slug || '');

  if (!category) {
    return (
      <div className="pt-32 pb-20 text-center bg-white text-gray-800">
        <h1 className="section-title mb-4 text-[#1a1a2e]">Category Not Found</h1>
        <p className="text-gray-600 mb-6">The escort service category you&apos;re looking for doesn&apos;t exist.</p>
        <Link
          to="/services"
          className="inline-block bg-gold-600 hover:bg-gold-700 text-white px-8 py-3.5 rounded-full font-semibold transition-all shadow-md"
        >
          View All Services
        </Link>
      </div>
    );
  }

  const IconComponent = categoryIconMap[category.slug] || Crown;
  const imageSrc = categoryImageMap[category.slug] || '/images/categories/default.jpg';

  return (
    <>
      <SEO
        title={`${category.name} | Escort Service in Gurgaon | VIP Call Girls`}
        description={`${category.shortDescription} ALINA VIP offers verified ${category.name.toLowerCase()} in Gurgaon. Premium escort service, 100% discreet. Call now for booking.`}
        keywords={`${category.name.toLowerCase()} Gurgaon, ${category.name.toLowerCase()} escorts, premium ${category.name.toLowerCase()}, call girls Gurgaon, VIP escort service Gurgaon`}
        canonical={`${siteConfig.url}/category/${category.slug}`}
        breadcrumbs={[
          { name: 'Home', url: siteConfig.url },
          { name: 'Services', url: `${siteConfig.url}/services` },
          { name: category.name, url: `${siteConfig.url}/category/${category.slug}` },
        ]}
      />

      <Breadcrumb
        items={[
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
          { name: category.name },
        ]}
      />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#0a0a1a] via-[#1a1a2e] to-[#2d1b0e] overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px]" />
        </div>
        <div className="container-luxury relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-6 py-2 border border-gold-500/30 rounded-full text-gold-400 text-sm font-semibold tracking-wider uppercase mb-6 bg-gold-500/10 backdrop-blur-sm">
                ★ Premium Escort Service
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif leading-tight">
                {category.name} <br />
                <span className="text-gradient-gold">in Gurgaon</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {category.shortDescription}
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="bg-gold-600 hover:bg-gold-700 text-white px-8 py-4 rounded-full font-bold text-base transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" /> Book Now
                </a>
                <Link
                  to="/contact"
                  className="border-2 border-gold-500 hover:bg-gold-500/10 text-gold-400 px-8 py-4 rounded-full font-bold text-base transition-all"
                >
                  Contact Us
                </Link>
                <a
                  href={siteConfig.url}
                  className="border-2 border-gold-500/40 hover:bg-gold-500/10 text-gold-300 px-8 py-4 rounded-full font-bold text-base transition-all"
                >
                  Visit {siteConfig.domain}
                </a>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-2xl border border-gold-200/50 bg-neutral-900 group">
              <img
                src={imageSrc}
                alt={`${category.name} - Escort Service in Gurgaon | Call Girls`}
                className="w-full h-80 md:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Sidebar */}
      <section className="py-16 md:py-24 bg-white text-gray-800">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Left Column (2 Cols): Editorial & Value Props */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-[#1a1a2e] mb-4 font-serif">
                  About Our {category.name}
                </h2>
                <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                  <p>{category.description}</p>
                  <p>
                    At <strong>ALINA VIP</strong>, we take pride in offering the finest{' '}
                    <Link to="/services" className="text-gold-600 hover:underline font-medium">
                      escort service in Gurgaon
                    </Link>
                    . Each {category.name.toLowerCase()} has been carefully selected through our rigorous verification process, which includes identity verification, photo authentication, and background screening. This ensures that every{' '}
                    <Link to="/call-girls" className="text-gold-600 hover:underline font-medium">
                      call girl
                    </Link>{' '}
                    profile is genuine and that our clients can book with complete confidence.
                  </p>
                  <p>
                    Our{' '}
                    <Link to={`/category/${category.slug}`} className="text-gold-600 hover:underline font-medium">
                      {category.name.toLowerCase()}
                    </Link>{' '}
                    are available for a variety of engagements, including dinner dates, social events, corporate functions, travel, and private engagements. They are discreet, professional, and committed to providing an exceptional{' '}
                    <Link to="/services" className="text-gold-600 hover:underline font-medium">
                      escort service
                    </Link>{' '}
                    experience.
                  </p>
                </div>
              </div>

              {/* 4 Feature Badges */}
              <div>
                <h3 className="text-2xl font-bold text-[#1a1a2e] mb-4 font-serif">
                  Why Choose Our {category.name}?
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 p-4 bg-[#faf6f2] rounded-2xl border border-gold-200/50">
                    <ShieldCheck className="w-5 h-5 text-gold-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-[#1a1a2e] text-sm">Verified Call Girls</h4>
                      <p className="text-gray-600 text-xs mt-1">
                        100% genuine <Link to="/call-girls" className="text-gold-600 hover:underline font-medium">call girls</Link> with photo authentication
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-[#faf6f2] rounded-2xl border border-gold-200/50">
                    <Lock className="w-5 h-5 text-gold-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-[#1a1a2e] text-sm">100% Discreet</h4>
                      <p className="text-gray-600 text-xs mt-1">
                        Complete privacy guaranteed for all <Link to="/escorts" className="text-gold-600 hover:underline font-medium">escorts</Link> bookings
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-[#faf6f2] rounded-2xl border border-gold-200/50">
                    <Clock className="w-5 h-5 text-gold-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-[#1a1a2e] text-sm">24/7 Availability</h4>
                      <p className="text-gray-600 text-xs mt-1">
                        Book <Link to="/call-girls" className="text-gold-600 hover:underline font-medium">call girls</Link> anytime, day or night
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-[#faf6f2] rounded-2xl border border-gold-200/50">
                    <MapPin className="w-5 h-5 text-gold-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-[#1a1a2e] text-sm">All Gurgaon Areas</h4>
                      <p className="text-gray-600 text-xs mt-1">
                        <Link to="/locations/cyber-city" className="text-gold-600 hover:underline font-medium">Cyber City</Link>,{' '}
                        <Link to="/locations/mg-road" className="text-gold-600 hover:underline font-medium">MG Road</Link>,{' '}
                        <Link to="/locations/golf-course-road" className="text-gold-600 hover:underline font-medium">Golf Course Road</Link> &amp; more
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Areas We Serve in Gurgaon */}
              <div>
                <h3 className="text-2xl font-bold text-[#1a1a2e] mb-4 font-serif">
                  Areas We Serve in Gurgaon
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  <Link
                    to="/locations/cyber-city"
                    className="px-4 py-2 bg-gray-100 hover:bg-gold-100 text-gray-700 hover:text-gold-800 rounded-full text-xs font-semibold transition-colors"
                  >
                    Cyber City Call Girls
                  </Link>
                  <Link
                    to="/locations/mg-road"
                    className="px-4 py-2 bg-gray-100 hover:bg-gold-100 text-gray-700 hover:text-gold-800 rounded-full text-xs font-semibold transition-colors"
                  >
                    MG Road Escorts
                  </Link>
                  <Link
                    to="/locations/golf-course-road"
                    className="px-4 py-2 bg-gray-100 hover:bg-gold-100 text-gray-700 hover:text-gold-800 rounded-full text-xs font-semibold transition-colors"
                  >
                    Golf Course Road Escorts
                  </Link>
                  <Link
                    to="/locations/dlf-phase-1"
                    className="px-4 py-2 bg-gray-100 hover:bg-gold-100 text-gray-700 hover:text-gold-800 rounded-full text-xs font-semibold transition-colors"
                  >
                    DLF City Call Girls
                  </Link>
                  <Link
                    to="/locations/sohna-road"
                    className="px-4 py-2 bg-gray-100 hover:bg-gold-100 text-gray-700 hover:text-gold-800 rounded-full text-xs font-semibold transition-colors"
                  >
                    Sohna Road Escorts
                  </Link>
                  <Link
                    to="/locations/sector-29"
                    className="px-4 py-2 bg-gray-100 hover:bg-gold-100 text-gray-700 hover:text-gold-800 rounded-full text-xs font-semibold transition-colors"
                  >
                    Sector 29 Call Girls
                  </Link>
                </div>
              </div>

              {/* Call Card */}
              <div className="p-6 bg-gradient-to-r from-gold-50 via-amber-50 to-gold-50 rounded-2xl border-2 border-gold-200 text-center shadow-sm">
                <p className="text-xl font-bold text-[#1a1a2e] font-serif">
                  📞 Book Your {category.name} Today
                </p>
                <p className="text-gray-600 mt-2 text-sm">
                  Call us 24/7 at{' '}
                  <a href={`tel:${siteConfig.phone}`} className="text-gold-600 hover:underline font-bold">
                    {siteConfig.phoneDisplay}
                  </a>
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  Official Portal:{' '}
                  <a href={siteConfig.url} className="text-gold-600 hover:underline font-semibold">
                    {siteConfig.domain}
                  </a>
                </p>
              </div>
            </div>

            {/* Right Column: Sticky Sidebar */}
            <div className="space-y-6 lg:sticky lg:top-24">
              {/* Category Highlight Card */}
              <div className="bg-gradient-to-br from-gold-50 to-amber-50 p-8 rounded-2xl text-center border-2 border-gold-200 shadow-sm">
                <div className="w-16 h-16 rounded-full bg-gold-500/10 flex items-center justify-center mx-auto mb-4 text-gold-600">
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#1a1a2e] font-serif">{category.name}</h3>
                <p className="text-gray-600 text-xs mt-2">
                  Premium{' '}
                  <Link to="/services" className="text-gold-600 hover:underline font-medium">
                    escort service
                  </Link>{' '}
                  in Gurgaon
                </p>
              </div>

              {/* Book Now Dark Card */}
              <div className="bg-[#1a1a2e] p-6 rounded-2xl text-center text-white shadow-md">
                <h4 className="text-white font-bold text-lg mb-3 font-serif">Book Now</h4>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="block bg-gold-600 hover:bg-gold-700 text-white py-3.5 rounded-full font-bold transition-all text-sm shadow-md"
                >
                  Call Now
                </a>
                <Link
                  to="/contact"
                  className="block text-gold-400 hover:text-gold-300 text-xs mt-3 font-semibold"
                >
                  Or Contact Us Online →
                </Link>
                <a
                  href={siteConfig.url}
                  className="block text-gray-400 hover:text-gold-300 text-[11px] mt-2"
                >
                  Visit {siteConfig.domain}
                </a>
              </div>

              {/* Other Escort Services */}
              <div className="bg-[#faf6f2] p-6 rounded-2xl border border-gold-200/60 shadow-sm">
                <h4 className="font-bold text-[#1a1a2e] mb-4 font-serif text-base">
                  Other Escort Services
                </h4>
                <div className="space-y-3">
                  <Link
                    to="/russian-escorts"
                    className="flex items-center justify-between text-gray-700 hover:text-gold-600 transition-colors text-sm"
                  >
                    <span className="flex items-center gap-2">
                      <Crown className="w-4 h-4 text-gold-600" /> Russian Escorts
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-gold-600" />
                  </Link>
                  <Link
                    to="/model-escorts"
                    className="flex items-center justify-between text-gray-700 hover:text-gold-600 transition-colors text-sm"
                  >
                    <span className="flex items-center gap-2">
                      <Camera className="w-4 h-4 text-gold-600" /> Model Escorts
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-gold-600" />
                  </Link>
                  <Link
                    to="/housewife-escorts"
                    className="flex items-center justify-between text-gray-700 hover:text-gold-600 transition-colors text-sm"
                  >
                    <span className="flex items-center gap-2">
                      <Heart className="w-4 h-4 text-gold-600" /> Housewife Escorts
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-gold-600" />
                  </Link>
                  <Link
                    to="/college-girls"
                    className="flex items-center justify-between text-gray-700 hover:text-gold-600 transition-colors text-sm"
                  >
                    <span className="flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-gold-600" /> College Girls
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-gold-600" />
                  </Link>
                  <Link
                    to="/independent-escorts"
                    className="flex items-center justify-between text-gray-700 hover:text-gold-600 transition-colors text-sm"
                  >
                    <span className="flex items-center gap-2">
                      <User className="w-4 h-4 text-gold-600" /> Independent Escorts
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-gold-600" />
                  </Link>
                  <Link
                    to="/vip-escorts"
                    className="flex items-center justify-between text-gray-700 hover:text-gold-600 transition-colors text-sm"
                  >
                    <span className="flex items-center gap-2">
                      <Crown className="w-4 h-4 text-gold-600" /> VIP Escorts
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-gold-600" />
                  </Link>
                </div>
              </div>

              {/* 4.9/5 Rating Card */}
              <div className="bg-gold-50 p-6 rounded-2xl border border-gold-200 text-center shadow-sm">
                <div className="flex justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-500 text-gold-500" />
                  ))}
                </div>
                <p className="font-bold text-[#1a1a2e] text-base font-serif">4.9/5 Rating</p>
                <p className="text-gray-600 text-xs mt-1">
                  500+ verified client reviews for our{' '}
                  <Link to="/services" className="text-gold-600 hover:underline">
                    escort service
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Action Card */}
          <div className="text-center mt-12 pt-8 border-t border-gray-100">
            <p className="text-gray-600 mb-4 text-base">
              To book our {category.name.toLowerCase()}, simply call us or fill out our contact form.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`tel:${siteConfig.phone}`}
                className="bg-gold-600 hover:bg-gold-700 text-white px-10 py-4 rounded-full font-bold text-base transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                <Phone className="w-5 h-5" /> Book Now
              </a>
              <Link
                to="/contact"
                className="border-2 border-gold-600 text-gold-700 hover:bg-gold-600 hover:text-white px-10 py-4 rounded-full font-bold text-base transition-all"
              >
                Contact Us
              </Link>
              <a
                href={siteConfig.url}
                className="border-2 border-gold-600 text-gold-700 hover:bg-gold-600 hover:text-white px-10 py-4 rounded-full font-bold text-base transition-all"
              >
                Visit {siteConfig.domain}
              </a>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection theme="light" />
      <CTASection />
    </>
  );
}
