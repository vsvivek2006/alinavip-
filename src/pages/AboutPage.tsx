import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Lock,
  Crown,
  Sparkles,
  Clock,
  MapPin,
  Star,
  CheckCircle2,
  Award,
  Phone,
  ArrowRight,
  HeartHandshake,
} from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumb from '@/components/Breadcrumb';
import CTASection from '@/components/CTASection';
import { siteConfig } from '@/data/siteConfig';

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About ALINA VIP | Premium Escort Service in Gurgaon | Call Girls"
        description="Learn about ALINA VIP, Gurgaon's premier escort service. Discover our mission, values, and commitment to discretion, quality, and client satisfaction. Verified call girls available 24/7."
        keywords="about ALINA VIP, escort service Gurgaon, premium call girls Gurgaon, VIP escort service, Russian escorts Gurgaon, model escorts"
        canonical={`${siteConfig.url}/about`}
        breadcrumbs={[
          { name: 'Home', url: siteConfig.url },
          { name: 'About', url: `${siteConfig.url}/about` },
        ]}
      />

      <Breadcrumb items={[{ name: 'Home', path: '/' }, { name: 'About Us' }]} />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#0a0a1a] via-[#1a1a2e] to-[#2d1b0e] overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px]" />
        </div>
        <div className="container-luxury relative z-10">
          <div className="text-center">
            <span className="inline-block px-6 py-2 border border-gold-500/30 rounded-full text-gold-400 text-sm font-semibold tracking-wider uppercase mb-6 bg-gold-500/10 backdrop-blur-sm">
              ★ About ALINA VIP
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-serif tracking-wide">
              The Story of <span className="text-gradient-gold">ALINA VIP</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Gurgaon&apos;s most trusted{' '}
              <strong className="text-gold-400 font-semibold">escort service</strong> offering verified{' '}
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
              </Link>{' '}
              with 100% discretion and professionalism.
            </p>
            <div className="gold-divider mx-auto mt-8" />
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-24 bg-white text-gray-800">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Full Editorial Story & Keyword-Rich Content */}
            <div className="lg:col-span-7 space-y-10">
              {/* Welcome Section */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-5 font-serif">
                  Welcome to ALINA VIP –{' '}
                  <span className="text-gold-600">Gurgaon&apos;s Premier Escort Service</span>
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  <strong>ALINA VIP</strong> is Gurgaon&apos;s leading{' '}
                  <Link to="/services" className="text-gold-600 hover:underline font-medium">
                    escort service
                  </Link>
                  , offering premium{' '}
                  <Link to="/call-girls" className="text-gold-600 hover:underline font-medium">
                    VIP call girls
                  </Link>
                  ,{' '}
                  <Link to="/russian-escorts" className="text-gold-600 hover:underline font-medium">
                    Russian escorts
                  </Link>
                  , and{' '}
                  <Link to="/model-escorts" className="text-gold-600 hover:underline font-medium">
                    elite models
                  </Link>
                  . Our <strong>escort service in Gurgaon</strong> is designed for discerning gentlemen who value discretion, quality, and professionalism.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Founded with a vision to redefine the <strong>escort service in Gurgaon</strong>, we have established ourselves as the city&apos;s most trusted name in luxury{' '}
                  <Link to="/call-girls" className="text-gold-600 hover:underline font-medium">
                    call girls service
                  </Link>
                  . Our verified profiles, rigorous screening process, and unwavering commitment to privacy set us apart from other{' '}
                  <Link to="/services" className="text-gold-600 hover:underline font-medium">
                    escort services in Gurgaon
                  </Link>
                  .
                </p>
              </div>

              {/* Our Story */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-4 font-serif">
                  Our Story – The Birth of Gurgaon&apos;s Best Escort Service
                </h3>
                <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                  <p>
                    <strong>ALINA VIP</strong> was founded with a singular vision: to redefine the{' '}
                    <Link to="/services" className="text-gold-600 hover:underline font-medium">
                      escort service
                    </Link>{' '}
                    experience in Gurgaon by providing a service that is sophisticated, professional, and uncompromising in its commitment to quality and discretion. In an industry often characterised by inconsistency and a lack of professionalism, we saw an opportunity to create something different — a service that operates with the standards of a luxury hospitality brand.
                  </p>
                  <p>
                    Our journey began with a simple observation: discerning gentlemen in Gurgaon deserved an{' '}
                    <Link to="/services" className="text-gold-600 hover:underline font-medium">
                      escort service
                    </Link>{' '}
                    that matched their lifestyle and expectations. The city had become one of India&apos;s most cosmopolitan centres, home to business leaders, entrepreneurs, and professionals from around the world. Yet the options for quality{' '}
                    <Link to="/call-girls" className="text-gold-600 hover:underline font-medium">
                      call girls
                    </Link>{' '}
                    were limited.{' '}
                    <strong>ALINA VIP</strong> was created to fill this gap.
                  </p>
                  <p>
                    From the outset, we made several key decisions that would shape our{' '}
                    <Link to="/services" className="text-gold-600 hover:underline font-medium">
                      escort service
                    </Link>
                    . We decided that every{' '}
                    <Link to="/call-girls" className="text-gold-600 hover:underline font-medium">
                      call girl
                    </Link>{' '}
                    in our portfolio would undergo a thorough verification process, ensuring that profiles were genuine and accurate. We committed to complete discretion in all client interactions, recognising that privacy is a fundamental need for our clientele. And we chose to focus on quality over quantity, maintaining a curated selection of{' '}
                    <Link to="/escorts" className="text-gold-600 hover:underline font-medium">
                      escorts
                    </Link>{' '}
                    rather than an exhaustive but inconsistent roster.
                  </p>
                </div>
              </div>

              {/* Why Choose ALINA VIP */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-6 font-serif">
                  Why Choose ALINA VIP for Escort Service in Gurgaon?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-5 bg-[#faf6f2] rounded-2xl border border-gold-200/50 hover:shadow-md transition-shadow">
                    <div className="w-10 h-10 rounded-xl bg-gold-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ShieldCheck className="w-6 h-6 text-gold-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1a1a2e] text-lg mb-1">Verified Call Girls & Escorts</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Every <Link to="/call-girls" className="text-gold-600 hover:underline font-medium">call girl</Link> and{' '}
                        <Link to="/escorts" className="text-gold-600 hover:underline font-medium">escort</Link> profile is verified through ID checks, photo authentication, and background screening for your safety and peace of mind.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-5 bg-[#faf6f2] rounded-2xl border border-gold-200/50 hover:shadow-md transition-shadow">
                    <div className="w-10 h-10 rounded-xl bg-gold-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Lock className="w-6 h-6 text-gold-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1a1a2e] text-lg mb-1">100% Discreet Escort Service</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Your privacy is our priority. All client information and{' '}
                        <Link to="/call-girls" className="text-gold-600 hover:underline font-medium">call girls</Link> bookings are strictly confidential. Our{' '}
                        <Link to="/escorts" className="text-gold-600 hover:underline font-medium">escorts</Link> are trained in the art of discretion.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-5 bg-[#faf6f2] rounded-2xl border border-gold-200/50 hover:shadow-md transition-shadow">
                    <div className="w-10 h-10 rounded-xl bg-gold-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Crown className="w-6 h-6 text-gold-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1a1a2e] text-lg mb-1">VIP & Premium Call Girls</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Our curated selection includes{' '}
                        <Link to="/russian-escorts" className="text-gold-600 hover:underline font-medium">Russian escorts</Link>,{' '}
                        <Link to="/model-escorts" className="text-gold-600 hover:underline font-medium">model escorts</Link>,{' '}
                        <Link to="/housewife-escorts" className="text-gold-600 hover:underline font-medium">housewife escorts</Link>, and{' '}
                        <Link to="/college-girls" className="text-gold-600 hover:underline font-medium">college call girls</Link> – all verified and elite.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-5 bg-[#faf6f2] rounded-2xl border border-gold-200/50 hover:shadow-md transition-shadow">
                    <div className="w-10 h-10 rounded-xl bg-gold-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Sparkles className="w-6 h-6 text-gold-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1a1a2e] text-lg mb-1">Premium Escort Experience</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        From <Link to="/services" className="text-gold-600 hover:underline font-medium">escort service</Link> at luxury hotels to outcall service at your private residence, we ensure a seamless, high-end <strong>escort service</strong> experience every time.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-5 bg-[#faf6f2] rounded-2xl border border-gold-200/50 hover:shadow-md transition-shadow">
                    <div className="w-10 h-10 rounded-xl bg-gold-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Clock className="w-6 h-6 text-gold-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1a1a2e] text-lg mb-1">24/7 Call Girls Service</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Our <Link to="/services" className="text-gold-600 hover:underline font-medium">escort service</Link> operates 24/7. Book{' '}
                        <Link to="/call-girls" className="text-gold-600 hover:underline font-medium">call girls</Link> anytime – day or night.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-5 bg-[#faf6f2] rounded-2xl border border-gold-200/50 hover:shadow-md transition-shadow">
                    <div className="w-10 h-10 rounded-xl bg-gold-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MapPin className="w-6 h-6 text-gold-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1a1a2e] text-lg mb-1">All Gurgaon Locations</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        We provide <Link to="/services" className="text-gold-600 hover:underline font-medium">escort service</Link> in{' '}
                        <Link to="/locations/cyber-city" className="text-gold-600 hover:underline font-medium">Cyber City</Link>,{' '}
                        <Link to="/locations/mg-road" className="text-gold-600 hover:underline font-medium">MG Road</Link>,{' '}
                        <Link to="/locations/golf-course-road" className="text-gold-600 hover:underline font-medium">Golf Course Road</Link>,{' '}
                        <Link to="/locations/dlf-phase-1" className="text-gold-600 hover:underline font-medium">DLF</Link>, and all major areas.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Our Mission */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-4 font-serif">
                  Our Mission – Excellence in Escort Service
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Our mission is to provide the finest <strong>escort service in Gurgaon</strong>, characterised by verified{' '}
                  <Link to="/call-girls" className="text-gold-600 hover:underline font-medium">
                    call girls
                  </Link>
                  , exceptional{' '}
                  <Link to="/escorts" className="text-gold-600 hover:underline font-medium">
                    escorts
                  </Link>
                  , and unwavering discretion. We strive to create experiences that are memorable, sophisticated, and tailored to the unique preferences of each client booking our{' '}
                  <Link to="/services" className="text-gold-600 hover:underline font-medium">
                    escort service
                  </Link>
                  .
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  We believe that a great <strong>escort service</strong> is about more than just physical beauty. It is about the complete experience of spending time with someone who is cultured, articulate, and genuinely engaging. It is about the comfort of knowing that your privacy is protected, your preferences are respected, and your{' '}
                  <Link to="/call-girls" className="text-gold-600 hover:underline font-medium">
                    call girls
                  </Link>{' '}
                  experience will be of the highest quality.
                </p>
              </div>

              {/* Core Values */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-6 font-serif">
                  Our Core Values in Escort Service
                </h3>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="p-6 bg-gold-50/70 rounded-2xl border border-gold-200/80 hover:shadow-md transition-shadow">
                    <Lock className="w-8 h-8 text-gold-600 mb-3" />
                    <h4 className="font-bold text-[#1a1a2e] text-lg mb-2">Discretion</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Complete confidentiality for all{' '}
                      <Link to="/call-girls" className="text-gold-600 hover:underline font-medium">call girls</Link> and{' '}
                      <Link to="/escorts" className="text-gold-600 hover:underline font-medium">escorts</Link> bookings.
                    </p>
                  </div>

                  <div className="p-6 bg-gold-50/70 rounded-2xl border border-gold-200/80 hover:shadow-md transition-shadow">
                    <Star className="w-8 h-8 text-gold-600 mb-3" />
                    <h4 className="font-bold text-[#1a1a2e] text-lg mb-2">Quality</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Exacting standards in{' '}
                      <Link to="/escorts" className="text-gold-600 hover:underline font-medium">escort</Link> selection and{' '}
                      <strong>escort service</strong> delivery.
                    </p>
                  </div>

                  <div className="p-6 bg-gold-50/70 rounded-2xl border border-gold-200/80 hover:shadow-md transition-shadow">
                    <CheckCircle2 className="w-8 h-8 text-gold-600 mb-3" />
                    <h4 className="font-bold text-[#1a1a2e] text-lg mb-2">Authenticity</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Verified profiles with genuine{' '}
                      <Link to="/call-girls" className="text-gold-600 hover:underline font-medium">call girls</Link>. No fake profiles or unverified imagery.
                    </p>
                  </div>

                  <div className="p-6 bg-gold-50/70 rounded-2xl border border-gold-200/80 hover:shadow-md transition-shadow">
                    <Award className="w-8 h-8 text-gold-600 mb-3" />
                    <h4 className="font-bold text-[#1a1a2e] text-lg mb-2">Professionalism</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Luxury hospitality standards in every <strong>escort service</strong> interaction.
                    </p>
                  </div>
                </div>
              </div>

              {/* Areas We Serve */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-4 font-serif">
                  Areas We Serve – Escort Service in Gurgaon
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Our{' '}
                  <Link to="/locations" className="text-gold-600 hover:underline font-medium">
                    escort service in Gurgaon
                  </Link>{' '}
                  covers all major areas with verified{' '}
                  <Link to="/call-girls" className="text-gold-600 hover:underline font-medium">
                    call girls
                  </Link>{' '}
                  and{' '}
                  <Link to="/escorts" className="text-gold-600 hover:underline font-medium">
                    escorts
                  </Link>
                  :
                </p>
                <div className="bg-[#faf6f2] p-6 rounded-2xl border border-gold-200/50">
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2.5">
                      <span className="text-gold-600 font-bold mt-0.5">•</span>
                      <div>
                        <Link to="/locations/cyber-city" className="text-gold-600 hover:underline font-semibold">Cyber City Escorts</Link>
                        {' '}– Premium <Link to="/call-girls" className="text-gold-600 hover:underline">call girls</Link> for corporate events and business meetings
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-gold-600 font-bold mt-0.5">•</span>
                      <div>
                        <Link to="/locations/mg-road" className="text-gold-600 hover:underline font-semibold">MG Road Call Girls</Link>
                        {' '}– Luxury <Link to="/escorts" className="text-gold-600 hover:underline">escorts</Link> near the heart of Gurgaon&apos;s shopping and dining hub
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-gold-600 font-bold mt-0.5">•</span>
                      <div>
                        <Link to="/locations/golf-course-road" className="text-gold-600 hover:underline font-semibold">Golf Course Road Escorts</Link>
                        {' '}– Elite <Link to="/call-girls" className="text-gold-600 hover:underline">call girls</Link> for the city&apos;s most exclusive neighbourhoods
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-gold-600 font-bold mt-0.5">•</span>
                      <div>
                        <Link to="/locations/dlf-phase-1" className="text-gold-600 hover:underline font-semibold">DLF City Escorts</Link>
                        {' '}– Discreet <Link to="/services" className="text-gold-600 hover:underline">escort service</Link> in DLF Phases 1-5
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-gold-600 font-bold mt-0.5">•</span>
                      <div>
                        <Link to="/locations/sohna-road" className="text-gold-600 hover:underline font-semibold">Sohna Road Call Girls</Link>
                        {' '}– Premium <Link to="/escorts" className="text-gold-600 hover:underline">escorts</Link> along the rapidly developing corridor
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-gold-600 font-bold mt-0.5">•</span>
                      <div>
                        <Link to="/locations/sushant-lok" className="text-gold-600 hover:underline font-semibold">Sushant Lok Escorts</Link>
                        {' '}– Refined <Link to="/call-girls" className="text-gold-600 hover:underline">call girls</Link> in the established residential area
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-gold-600 font-bold mt-0.5">•</span>
                      <div>
                        <Link to="/locations/sector-29" className="text-gold-600 hover:underline font-semibold">Sector 29 Call Girls</Link>
                        {' '}– Vibrant <Link to="/escorts" className="text-gold-600 hover:underline">escorts</Link> near Gurgaon&apos;s nightlife hub
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-gold-600 font-bold mt-0.5">•</span>
                      <div>
                        <Link to="/locations/huda-city-centre" className="text-gold-600 hover:underline font-semibold">HUDA City Centre Escorts</Link>
                        {' '}– Convenient <Link to="/services" className="text-gold-600 hover:underline">escort service</Link> near the metro
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-gold-600 font-bold mt-0.5">•</span>
                      <div>
                        <Link to="/locations/manesar" className="text-gold-600 hover:underline font-semibold">Manesar Call Girls</Link>
                        {' '}– Premium <Link to="/escorts" className="text-gold-600 hover:underline">escorts</Link> in the industrial hub
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-gold-600 font-bold mt-0.5">•</span>
                      <div>
                        <Link to="/locations/dwarka" className="text-gold-600 hover:underline font-semibold">Dwarka Escorts</Link>
                        {' '}– <Link to="/call-girls" className="text-gold-600 hover:underline">Call girls</Link> service in New Delhi
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-gold-600 font-bold mt-0.5">•</span>
                      <div>
                        <Link to="/locations/mahipalpur" className="text-gold-600 hover:underline font-semibold">Mahipalpur Call Girls</Link>
                        {' '}– <Link to="/escorts" className="text-gold-600 hover:underline">Escorts</Link> near IGI Airport
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Our Call Girls & Escort Categories */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-6 font-serif">
                  Our Call Girls &amp; Escort Categories
                </h3>
                <div className="grid sm:grid-cols-3 gap-4">
                  <Link
                    to="/russian-escorts"
                    className="p-4 bg-gradient-to-br from-gold-50/60 to-white rounded-2xl border border-gold-200/80 text-center hover:shadow-lg hover:-translate-y-0.5 transition-all group"
                  >
                    <span className="block font-bold text-[#1a1a2e] text-base group-hover:text-gold-600 transition-colors">
                      Russian Escorts
                    </span>
                    <span className="text-xs text-gray-600 mt-1 block">
                      Exclusive European call girls
                    </span>
                  </Link>

                  <Link
                    to="/model-escorts"
                    className="p-4 bg-gradient-to-br from-gold-50/60 to-white rounded-2xl border border-gold-200/80 text-center hover:shadow-lg hover:-translate-y-0.5 transition-all group"
                  >
                    <span className="block font-bold text-[#1a1a2e] text-base group-hover:text-gold-600 transition-colors">
                      Model Escorts
                    </span>
                    <span className="text-xs text-gray-600 mt-1 block">
                      Professional fashion models
                    </span>
                  </Link>

                  <Link
                    to="/housewife-escorts"
                    className="p-4 bg-gradient-to-br from-gold-50/60 to-white rounded-2xl border border-gold-200/80 text-center hover:shadow-lg hover:-translate-y-0.5 transition-all group"
                  >
                    <span className="block font-bold text-[#1a1a2e] text-base group-hover:text-gold-600 transition-colors">
                      Housewife Escorts
                    </span>
                    <span className="text-xs text-gray-600 mt-1 block">
                      Mature, experienced companions
                    </span>
                  </Link>

                  <Link
                    to="/college-girls"
                    className="p-4 bg-gradient-to-br from-gold-50/60 to-white rounded-2xl border border-gold-200/80 text-center hover:shadow-lg hover:-translate-y-0.5 transition-all group"
                  >
                    <span className="block font-bold text-[#1a1a2e] text-base group-hover:text-gold-600 transition-colors">
                      College Girls
                    </span>
                    <span className="text-xs text-gray-600 mt-1 block">
                      Young, vibrant companions
                    </span>
                  </Link>

                  <Link
                    to="/independent-escorts"
                    className="p-4 bg-gradient-to-br from-gold-50/60 to-white rounded-2xl border border-gold-200/80 text-center hover:shadow-lg hover:-translate-y-0.5 transition-all group"
                  >
                    <span className="block font-bold text-[#1a1a2e] text-base group-hover:text-gold-600 transition-colors">
                      Independent Escorts
                    </span>
                    <span className="text-xs text-gray-600 mt-1 block">
                      Self-employed professional call girls
                    </span>
                  </Link>

                  <Link
                    to="/vip-escorts"
                    className="p-4 bg-gradient-to-br from-gold-50/60 to-white rounded-2xl border border-gold-200/80 text-center hover:shadow-lg hover:-translate-y-0.5 transition-all group"
                  >
                    <span className="block font-bold text-[#1a1a2e] text-base group-hover:text-gold-600 transition-colors">
                      VIP Escorts
                    </span>
                    <span className="text-xs text-gray-600 mt-1 block">
                      High-profile elite companions
                    </span>
                  </Link>

                  <Link
                    to="/air-hostess-escorts"
                    className="p-4 bg-gradient-to-br from-gold-50/60 to-white rounded-2xl border border-gold-200/80 text-center hover:shadow-lg hover:-translate-y-0.5 transition-all group"
                  >
                    <span className="block font-bold text-[#1a1a2e] text-base group-hover:text-gold-600 transition-colors">
                      Air Hostess Escorts
                    </span>
                    <span className="text-xs text-gray-600 mt-1 block">
                      Groomed, elegant companions
                    </span>
                  </Link>

                  <Link
                    to="/celebrity-escorts"
                    className="p-4 bg-gradient-to-br from-gold-50/60 to-white rounded-2xl border border-gold-200/80 text-center hover:shadow-lg hover:-translate-y-0.5 transition-all group"
                  >
                    <span className="block font-bold text-[#1a1a2e] text-base group-hover:text-gold-600 transition-colors">
                      Celebrity Escorts
                    </span>
                    <span className="text-xs text-gray-600 mt-1 block">
                      Exclusive entertainment profiles
                    </span>
                  </Link>

                  <Link
                    to="/travel-escorts"
                    className="p-4 bg-gradient-to-br from-gold-50/60 to-white rounded-2xl border border-gold-200/80 text-center hover:shadow-lg hover:-translate-y-0.5 transition-all group"
                  >
                    <span className="block font-bold text-[#1a1a2e] text-base group-hover:text-gold-600 transition-colors">
                      Travel Escorts
                    </span>
                    <span className="text-xs text-gray-600 mt-1 block">
                      Cultured luxury travel partners
                    </span>
                  </Link>
                </div>
              </div>

              {/* What Makes ALINA VIP Different */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-4 font-serif">
                  What Makes ALINA VIP Different from Other Escort Services
                </h3>
                <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                  <p>
                    In a competitive <strong>escort service</strong> industry, <strong>ALINA VIP</strong> stands apart through a combination of factors that together create a service experience unlike any other in Gurgaon. Our rigorous verification process ensures that every{' '}
                    <Link to="/call-girls" className="text-gold-600 hover:underline font-medium">call girl</Link>{' '}
                    profile is genuine, giving our clients confidence in their choices.
                  </p>
                  <p>
                    Our commitment to discretion is comprehensive and multi-layered. We protect client information at every stage of the{' '}
                    <Link to="/services" className="text-gold-600 hover:underline font-medium">escort service</Link>{' '}
                    booking process, train our{' '}
                    <Link to="/call-girls" className="text-gold-600 hover:underline font-medium">call girls</Link>{' '}
                    and{' '}
                    <Link to="/escorts" className="text-gold-600 hover:underline font-medium">escorts</Link>{' '}
                    in the art of discretion, and design our digital presence with privacy in mind. Our 24/7 availability means that we are always there when you need us, whether it is for a planned engagement or a last-minute{' '}
                    <Link to="/call-girls" className="text-gold-600 hover:underline font-medium">call girls</Link> booking.
                  </p>
                </div>
              </div>

              {/* Safety & Discretion */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-4 font-serif">
                  Our Commitment to Safety &amp; Discretion
                </h3>
                <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                  <p>
                    Safety is a priority at <strong>ALINA VIP</strong>, both for our clients and our{' '}
                    <Link to="/call-girls" className="text-gold-600 hover:underline font-medium">call girls</Link>{' '}
                    and{' '}
                    <Link to="/escorts" className="text-gold-600 hover:underline font-medium">escorts</Link>. Our verification process is designed not only to ensure authenticity but also to create a safe environment for all parties. We screen our{' '}
                    <Link to="/call-girls" className="text-gold-600 hover:underline font-medium">call girls</Link>{' '}
                    thoroughly and provide them with guidelines on safety practices for <strong>escort service</strong> engagements.
                  </p>
                  <p>
                    For our clients, we provide a safe and reliable way to arrange{' '}
                    <Link to="/call-girls" className="text-gold-600 hover:underline font-medium">call girls</Link>{' '}
                    and{' '}
                    <Link to="/escorts" className="text-gold-600 hover:underline font-medium">escorts</Link>. Our verified profiles give you confidence in your choices, and our professional booking process ensures that your <strong>escort service</strong> engagement is arranged properly.
                  </p>
                </div>
              </div>

              {/* Why Gurgaon is the Perfect City */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-4 font-serif">
                  Why Gurgaon is the Perfect City for Escort Service
                </h3>
                <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                  <p>
                    Gurgaon, now officially known as Gurugram, has transformed from a quiet suburb into one of India&apos;s most dynamic and cosmopolitan cities. It is home to numerous Fortune 500 companies, luxury hotels, premium residential complexes, and world-class entertainment venues. The city attracts business professionals, entrepreneurs, and visitors from across India and around the world, creating a vibrant and diverse community that demands premium{' '}
                    <Link to="/services" className="text-gold-600 hover:underline font-medium">escort service</Link>.
                  </p>
                  <p>
                    This cosmopolitan character makes Gurgaon the perfect setting for{' '}
                    <Link to="/call-girls" className="text-gold-600 hover:underline font-medium">call girls</Link>{' '}
                    and{' '}
                    <Link to="/escorts" className="text-gold-600 hover:underline font-medium">escorts</Link>{' '}
                    service. The city&apos;s residents and visitors are accustomed to a high standard of living and expect quality in every aspect of their lives.{' '}
                    <strong>ALINA VIP</strong> was created to meet this expectation, providing an <strong>escort service</strong> that matches the sophistication and luxury of the city itself.
                  </p>
                </div>
              </div>

              {/* Book Your Escort Service Today */}
              <div className="pt-4">
                <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-4 font-serif">
                  Book Your Escort Service in Gurgaon Today
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Experience the finest <strong>escort service in Gurgaon</strong> with{' '}
                  <strong>ALINA VIP</strong>. Whether you&apos;re looking for a{' '}
                  <Link to="/call-girls" className="text-gold-600 hover:underline font-medium">call girl</Link>{' '}
                  for a night out, a{' '}
                  <Link to="/russian-escorts" className="text-gold-600 hover:underline font-medium">Russian escort</Link>{' '}
                  for a corporate event, or a{' '}
                  <Link to="/vip-escorts" className="text-gold-600 hover:underline font-medium">VIP escort</Link>{' '}
                  for a weekend getaway, we have the perfect match for you. Our{' '}
                  <Link to="/services" className="text-gold-600 hover:underline font-medium">escort service</Link>{' '}
                  is available 24/7 across all Gurgaon locations.
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-neutral-900 font-bold px-8 py-4 rounded-full text-base transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                  >
                    Book Call Girls Now <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-[#1a1a2e] hover:bg-[#2d2d44] text-white px-8 py-4 rounded-full font-bold text-base transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                  >
                    Contact Us
                  </Link>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="inline-flex items-center justify-center gap-2 border-2 border-gold-600 text-gold-700 hover:bg-gold-600 hover:text-white px-8 py-4 rounded-full font-bold text-base transition-all"
                  >
                    <Phone className="w-5 h-5" /> Call Now
                  </a>
                </div>

                {/* 24/7 Banner Card */}
                <div className="mt-8 p-6 bg-gradient-to-r from-gold-50 via-amber-50 to-gold-50 rounded-2xl border-2 border-gold-200/80 shadow-sm text-center">
                  <p className="text-xl font-bold text-[#1a1a2e]">
                    📞 Call us 24/7:{' '}
                    <a href={`tel:${siteConfig.phone}`} className="text-gold-600 hover:underline font-extrabold ml-1">
                      {siteConfig.phoneDisplay}
                    </a>
                  </p>
                  <p className="text-gray-600 mt-2 text-sm">
                    Available for{' '}
                    <Link to="/services" className="text-gold-600 hover:underline font-medium">escort service</Link>{' '}
                    across all Gurgaon locations with verified{' '}
                    <Link to="/call-girls" className="text-gold-600 hover:underline font-medium">call girls</Link>.
                  </p>
                  <p className="text-xs text-gray-500 mt-2">
                    Official Portal:{' '}
                    <a
                      href={siteConfig.url}
                      className="text-gold-600 hover:underline font-semibold"
                    >
                      {siteConfig.domain}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Sticky Visual Showcase & Rating Badge */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
              {/* Main Hero Card */}
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-neutral-200/80 bg-neutral-900 group">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src="/images/about-hero.jpg"
                    alt="ALINA VIP - Premium Escort Service in Gurgaon | Call Girls"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                    <span className="inline-block px-3 py-1 bg-gold-500/90 text-neutral-950 font-bold text-xs uppercase tracking-wider rounded-full mb-2 w-max">
                      Gurgaon&apos;s Flagship
                    </span>
                    <h3 className="text-white text-xl font-bold font-serif">
                      Excellence &amp; Supreme Discretion
                    </h3>
                    <p className="text-gray-300 text-xs mt-1">
                      Setting the benchmark for luxury hospitality and companionship.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2-Grid Secondary Images */}
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl overflow-hidden shadow-lg border border-neutral-200/80 bg-neutral-900 group">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src="/images/about-1.jpg"
                      alt="VIP Call Girls Gurgaon | Russian Escorts"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-3">
                      <span className="text-xs font-semibold text-white">VIP Companions</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl overflow-hidden shadow-lg border border-neutral-200/80 bg-neutral-900 group">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src="/images/about-2.jpg"
                      alt="Escort Service Cyber City Gurgaon | Model Escorts"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-3">
                      <span className="text-xs font-semibold text-white">Five-Star Outcall</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4.9/5 Star Rating Card */}
              <div className="bg-gradient-to-br from-gold-50 via-white to-amber-50/60 p-6 rounded-2xl border border-gold-200/80 text-center shadow-md">
                <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center mx-auto mb-3">
                  <Star className="w-7 h-7 text-gold-600 fill-gold-500" />
                </div>
                <p className="font-bold text-[#1a1a2e] text-2xl font-serif">4.9 / 5 Star Rating</p>
                <p className="text-gray-600 text-sm mt-1">
                  Based on 500+ verified client reviews for our{' '}
                  <Link to="/services" className="text-gold-600 hover:underline font-medium">
                    escort service
                  </Link>
                </p>
                <div className="flex justify-center gap-1.5 mt-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold-500 text-gold-500" />
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-4 pt-3 border-t border-gold-200/50">
                  Verified platform:{' '}
                  <a
                    href={siteConfig.url}
                    className="text-gold-600 hover:underline font-semibold"
                  >
                    {siteConfig.domain}
                  </a>
                </p>
              </div>

              {/* High-Trust Guarantee Pillars */}
              <div className="bg-[#faf6f2] p-6 rounded-2xl border border-gold-200/50 space-y-3">
                <h4 className="text-sm font-bold uppercase tracking-wider text-[#1a1a2e] flex items-center gap-2">
                  <HeartHandshake className="w-4 h-4 text-gold-600" /> ALINA VIP Commitment
                </h4>
                <ul className="text-xs text-gray-600 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 flex-shrink-0" />
                    <span>Real photos &amp; in-person verified escort profiles</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 flex-shrink-0" />
                    <span>Strict confidentiality &amp; zero digital trace</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 flex-shrink-0" />
                    <span>Prompt arrival at top-tier hotels across Gurgaon</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
