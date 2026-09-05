import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Phone,
  UtensilsCrossed,
  Calendar,
  Plane,
  Sparkles,
  Briefcase,
  Lock,
  Crown,
  Camera,
  Star,
  GraduationCap,
  Heart,
  User,
  ShieldCheck,
  Clock,
  MapPin,
} from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumb from '@/components/Breadcrumb';
import CTASection from '@/components/CTASection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { siteConfig } from '@/data/siteConfig';
import { services } from '@/data/content';
import { categories } from '@/data/categories';

const serviceIcons: Record<string, React.ElementType> = {
  'dinner-escort-service': UtensilsCrossed,
  'event-escort-service': Calendar,
  'travel-escort-service': Plane,
  'party-escort-service': Sparkles,
  'business-escort-service': Briefcase,
  'private-escort-service': Lock,
};

const categoryImageMap: Record<string, string> = {
  'russian-call-girls': '/images/categories/russian-escorts.jpg',
  'vip-call-girls': '/images/categories/vip-escorts.jpg',
  'high-profile-girls': '/images/categories/high-profile-girls.jpg',
  'college-girls': '/images/categories/college-girls.jpg',
  'independent-girls': '/images/categories/independent-escorts.jpg',
  'air-hostess': '/images/categories/air-hostess.jpg',
  'model-escorts': '/images/categories/model-escorts.jpg',
  'celebrity-escorts': '/images/categories/celebrity-escorts.jpg',
  'travel-escorts': '/images/categories/travel-escorts.jpg',
  'housewife-escorts': '/images/categories/housewife-escorts.jpg',
  'premium-escorts': '/images/categories/default.jpg',
};

export default function ServicesPage() {
  return (
    <>
      <SEO
        title="Escort Service in Gurgaon | Call Girls Services | ALINA VIP"
        description="Explore ALINA VIP's premium escort service in Gurgaon. VIP call girls, Russian escorts, model escorts, party companions, travel companions, and more. Call +91-9996265679."
        keywords="escort service Gurgaon, call girls services Gurgaon, VIP escorts Gurgaon, Russian escorts Gurgaon, model escorts Gurgaon"
        canonical={`${siteConfig.url}/services`}
        breadcrumbs={[
          { name: 'Home', url: siteConfig.url },
          { name: 'Services', url: `${siteConfig.url}/services` },
        ]}
      />

      <Breadcrumb items={[{ name: 'Home', path: '/' }, { name: 'Our Services' }]} />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#0a0a1a] via-[#1a1a2e] to-[#2d1b0e] overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px]" />
        </div>
        <div className="container-luxury relative z-10 text-center">
          <span className="inline-block px-6 py-2 border border-gold-500/30 rounded-full text-gold-400 text-sm font-semibold tracking-wider uppercase mb-6 bg-gold-500/10 backdrop-blur-sm">
            ★ Our Services
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-serif tracking-wide">
            Escort Service <span className="text-gradient-gold">in Gurgaon</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            <strong className="text-gold-400 font-semibold">ALINA VIP</strong> offers premium{' '}
            <Link to="/services" className="text-gold-400 hover:underline font-medium">
              escort service in Gurgaon
            </Link>{' '}
            with verified{' '}
            <Link to="/call-girls" className="text-gold-400 hover:underline font-medium">
              call girls
            </Link>
            ,{' '}
            <Link to="/russian-escorts" className="text-gold-400 hover:underline font-medium">
              Russian escorts
            </Link>
            , and{' '}
            <Link to="/model-escorts" className="text-gold-400 hover:underline font-medium">
              model escorts
            </Link>
            . Each service is delivered with the highest standards of quality, discretion, and professionalism.
          </p>
          <div className="gold-divider mx-auto mt-8" />

          {/* Action CTAs */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-neutral-900 px-8 py-4 rounded-full font-bold text-base transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <Phone className="w-5 h-5" /> Book Now
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border-2 border-gold-500 hover:bg-gold-500/10 text-gold-400 px-8 py-4 rounded-full font-bold text-base transition-all"
            >
              Contact Us
            </Link>
            <a
              href={siteConfig.url}
              className="inline-flex items-center gap-2 border-2 border-gold-500/40 hover:bg-gold-500/10 text-gold-300 px-8 py-4 rounded-full font-bold text-base transition-all"
            >
              Visit {siteConfig.domain}
            </a>
          </div>
        </div>
      </section>

      {/* Section 1: Escort Services Grid */}
      <section className="py-16 md:py-24 bg-white text-gray-800">
        <div className="container-luxury">
          <div className="text-center mb-14">
            <p className="section-subtitle text-gold-600">Our Escort Services</p>
            <h2 className="section-title mb-4 text-[#1a1a2e]">
              Premium <span className="text-gradient-gold">Call Girls</span> Services
            </h2>
            <div className="gold-divider mx-auto" />
            <p className="text-gray-600 max-w-2xl mx-auto mt-6 leading-relaxed text-base">
              <strong className="text-[#1a1a2e]">ALINA VIP</strong> offers a comprehensive range of premium{' '}
              <Link to="/services" className="text-gold-600 hover:underline font-medium">
                escort service in Gurgaon
              </Link>{' '}
              designed to meet the diverse needs of our discerning clientele. Each service is delivered with the highest standards of quality, discretion, and professionalism.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {services.map((service) => {
              const IconComponent = serviceIcons[service.slug] || Sparkles;
              return (
                <div
                  key={service.slug}
                  className="bg-[#faf6f2] p-8 rounded-2xl border border-gold-200/50 hover:border-gold-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center mb-5 text-gold-600 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-[#1a1a2e] mb-3 group-hover:text-gold-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>
                  <Link
                    to="/contact"
                    className="text-xs text-gold-600 font-semibold tracking-wider uppercase flex items-center gap-2 group-hover:gap-3 transition-all pt-2 border-t border-gold-200/40"
                  >
                    Book Call Girls <ArrowRight size={14} />
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Section 2: Call Girls Categories */}
          <div className="text-center mb-14">
            <p className="section-subtitle text-gold-600">Call Girls Categories</p>
            <h2 className="section-title mb-4 text-[#1a1a2e]">
              Explore Our <span className="text-gradient-gold">Escort Categories</span>
            </h2>
            <div className="gold-divider mx-auto" />
            <p className="text-gray-600 max-w-2xl mx-auto mt-4 leading-relaxed text-base">
              Browse our verified{' '}
              <Link to="/call-girls" className="text-gold-600 hover:underline font-medium">
                call girls
              </Link>{' '}
              and{' '}
              <Link to="/escorts" className="text-gold-600 hover:underline font-medium">
                escorts
              </Link>{' '}
              categories. Find the perfect companion for your{' '}
              <Link to="/services" className="text-gold-600 hover:underline font-medium">
                escort service
              </Link>{' '}
              needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => {
              const imageSrc = categoryImageMap[cat.slug] || '/images/categories/default.jpg';
              return (
                <Link
                  key={cat.slug}
                  to={`/category/${cat.slug}`}
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl border border-gold-200/60 hover:border-gold-400 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-gray-900">
                    <img
                      src={imageSrc}
                      alt={`${cat.name} - Escort Service Gurgaon`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                    <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-gold-400 text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1 border border-gold-500/30">
                      <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
                      <span>Verified</span>
                    </div>
                    <div className="absolute bottom-3 left-4 right-4">
                      <h3 className="font-serif text-xl font-bold text-white group-hover:text-gold-300 transition-colors drop-shadow-sm">
                        {cat.name}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between bg-[#faf6f2]">
                    <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
                      {cat.description}
                    </p>
                    <span className="text-xs text-gold-700 font-bold tracking-wider uppercase flex items-center gap-2 group-hover:gap-3 transition-all pt-3 border-t border-gold-200/60">
                      View Call Girls Profiles <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 3: Popular Escort Services Badges */}
      <section className="py-16 bg-[#faf6f2]">
        <div className="container-luxury">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] font-serif">
              Popular <span className="text-gold-600">Escort Services</span>
            </h3>
            <div className="gold-divider mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <Link
              to="/russian-escorts"
              className="bg-white p-6 rounded-2xl text-center shadow-sm hover:shadow-xl transition-all border border-gray-100 hover:border-gold-300 group"
            >
              <Crown className="w-10 h-10 text-gold-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-semibold text-[#1a1a2e] group-hover:text-gold-600 block">
                Russian Escorts
              </span>
            </Link>

            <Link
              to="/model-escorts"
              className="bg-white p-6 rounded-2xl text-center shadow-sm hover:shadow-xl transition-all border border-gray-100 hover:border-gold-300 group"
            >
              <Camera className="w-10 h-10 text-gold-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-semibold text-[#1a1a2e] group-hover:text-gold-600 block">
                Model Escorts
              </span>
            </Link>

            <Link
              to="/vip-escorts"
              className="bg-white p-6 rounded-2xl text-center shadow-sm hover:shadow-xl transition-all border border-gray-100 hover:border-gold-300 group"
            >
              <Star className="w-10 h-10 text-gold-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-semibold text-[#1a1a2e] group-hover:text-gold-600 block">
                VIP Escorts
              </span>
            </Link>

            <Link
              to="/college-girls"
              className="bg-white p-6 rounded-2xl text-center shadow-sm hover:shadow-xl transition-all border border-gray-100 hover:border-gold-300 group"
            >
              <GraduationCap className="w-10 h-10 text-gold-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-semibold text-[#1a1a2e] group-hover:text-gold-600 block">
                College Girls
              </span>
            </Link>

            <Link
              to="/housewife-escorts"
              className="bg-white p-6 rounded-2xl text-center shadow-sm hover:shadow-xl transition-all border border-gray-100 hover:border-gold-300 group"
            >
              <Heart className="w-10 h-10 text-gold-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-semibold text-[#1a1a2e] group-hover:text-gold-600 block">
                Housewife Escorts
              </span>
            </Link>

            <Link
              to="/independent-escorts"
              className="bg-white p-6 rounded-2xl text-center shadow-sm hover:shadow-xl transition-all border border-gray-100 hover:border-gold-300 group"
            >
              <User className="w-10 h-10 text-gold-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-semibold text-[#1a1a2e] group-hover:text-gold-600 block">
                Independent Escorts
              </span>
            </Link>
          </div>

          <div className="text-center mt-8">
            <a
              href={siteConfig.url}
              className="text-gold-600 hover:text-gold-700 font-semibold text-sm hover:underline"
            >
              Visit {siteConfig.domain}
            </a>
          </div>
        </div>
      </section>

      {/* Section 4: 3 Trust Verification Pillars */}
      <section className="py-16 bg-white text-gray-800">
        <div className="container-luxury">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-[#faf6f2] rounded-2xl border border-gold-200/50 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-gold-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-7 h-7 text-gold-600" />
              </div>
              <h4 className="font-bold text-[#1a1a2e] text-xl mb-2 font-serif">Verified Call Girls</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Every call girl is verified through our rigorous authentication process with authentic photos.
              </p>
            </div>

            <div className="text-center p-8 bg-[#faf6f2] rounded-2xl border border-gold-200/50 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-gold-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-7 h-7 text-gold-600" />
              </div>
              <h4 className="font-bold text-[#1a1a2e] text-xl mb-2 font-serif">24/7 Escort Service</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Our escort service operates round the clock to accommodate your busy schedule and private requests.
              </p>
            </div>

            <div className="text-center p-8 bg-[#faf6f2] rounded-2xl border border-gold-200/50 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-gold-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-7 h-7 text-gold-600" />
              </div>
              <h4 className="font-bold text-[#1a1a2e] text-xl mb-2 font-serif">All Gurgaon Areas</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                We provide{' '}
                <Link to="/services" className="text-gold-600 hover:underline font-medium">
                  escort service
                </Link>{' '}
                across all major Gurgaon and Delhi NCR locations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: SEO Editorial Content */}
      <section className="py-16 md:py-20 bg-[#faf6f2] text-gray-800">
        <div className="container-luxury max-w-4xl">
          <div className="prose-luxury bg-white p-8 md:p-12 rounded-2xl border border-gold-200/60 shadow-sm">
            <h2 className="text-3xl font-bold text-[#1a1a2e] mb-6 font-serif">
              Premium Escort Service in Gurgaon
            </h2>
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                <strong>ALINA VIP</strong> is the leading{' '}
                <Link to="/services" className="text-gold-600 hover:underline font-medium">
                  escort service in Gurgaon
                </Link>
                , providing premium{' '}
                <Link to="/call-girls" className="text-gold-600 hover:underline font-medium">
                  call girls
                </Link>{' '}
                and{' '}
                <Link to="/escorts" className="text-gold-600 hover:underline font-medium">
                  escorts
                </Link>{' '}
                for discerning gentlemen. Our{' '}
                <Link to="/russian-escorts" className="text-gold-600 hover:underline font-medium">
                  Russian escorts
                </Link>
                ,{' '}
                <Link to="/model-escorts" className="text-gold-600 hover:underline font-medium">
                  model escorts
                </Link>
                , and{' '}
                <Link to="/vip-escorts" className="text-gold-600 hover:underline font-medium">
                  VIP escorts
                </Link>{' '}
                are available for a wide range of engagements including dinner dates, social events, corporate functions, travel companionship, and private engagements.
              </p>
              <p>
                Each service is delivered with the highest standards of quality, discretion, and professionalism. Our{' '}
                <Link to="/call-girls" className="text-gold-600 hover:underline font-medium">
                  call girls
                </Link>{' '}
                are verified, and all bookings are handled with complete confidentiality.
              </p>
              <p>
                To book{' '}
                <Link to="/call-girls" className="text-gold-600 hover:underline font-medium">
                  call girls
                </Link>{' '}
                for any of our{' '}
                <Link to="/services" className="text-gold-600 hover:underline font-medium">
                  escort services
                </Link>
                , call us at{' '}
                <a href={`tel:${siteConfig.phone}`} className="text-gold-600 hover:underline font-bold">
                  {siteConfig.phoneDisplay}
                </a>{' '}
                or visit{' '}
                <a href={siteConfig.url} className="text-gold-600 hover:underline font-bold">
                  {siteConfig.domain}
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials & CTA */}
      <TestimonialsSection theme="light" />
      <CTASection />
    </>
  );
}
