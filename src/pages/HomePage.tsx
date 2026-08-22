import { Link } from 'react-router-dom';
import {
  Phone, ShieldCheck, BadgeCheck, Clock, Lock, Star, Crown, Gem, GraduationCap,
  User, Plane, Camera, Award, Luggage, Sparkles, UtensilsCrossed, Calendar,
  PartyPopper, Briefcase, Lock as LockIcon, MapPin, ArrowRight, CheckCircle2,
} from 'lucide-react';
import SEO from '@/components/SEO';
import CTASection from '@/components/CTASection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { siteConfig, generalFaqs } from '@/data/siteConfig';
import { categories } from '@/data/categories';
import { locations } from '@/data/locations';
import { services } from '@/data/content';
import { blogPosts } from '@/data/blogs';

import type { LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Crown, Star, Gem, GraduationCap, User, Plane, Camera, Award, Luggage, Sparkles,
  UtensilsCrossed, Calendar, PartyPopper, Briefcase, Lock: LockIcon,
};

const whyChooseUs = [
  { icon: ShieldCheck, title: 'Verified Profiles', description: 'Every call girl undergoes a thorough verification process to ensure authenticity and safety.' },
  { icon: Lock, title: 'Complete Discretion', description: 'Your privacy is our priority. All bookings and client information are kept strictly confidential.' },
  { icon: Clock, title: '24/7 Availability', description: 'Our service operates round the clock to accommodate your schedule and last-minute requests.' },
  { icon: BadgeCheck, title: 'Premium Quality', description: 'We handpick only the finest call girls who meet our exacting standards of elegance and sophistication.' },
  { icon: Star, title: 'Elite Selection', description: 'From VIP to celebrity call girls, our curated selection represents the best in luxury escort service.' },
  { icon: Phone, title: 'Dedicated Support', description: 'Our booking team provides personalised assistance from initial inquiry to the end of your engagement.' },
];

const howItWorks = [
  { number: '01', title: 'Browse Profiles', description: 'Explore our curated selection of verified call girls across various categories and locations.' },
  { number: '02', title: 'Contact Us', description: 'Call us or fill out our contact form with your preferences and desired booking time.' },
  { number: '03', title: 'Confirm Booking', description: 'Our team will confirm availability, discuss details, and arrange everything discreetly.' },
  { number: '04', title: 'Enjoy Experience', description: 'Meet your call girl and enjoy a premium luxury escort service experience.' },
];

export default function HomePage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    phone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'DLF Phase 3, Golf Course Road',
      addressLocality: 'Gurgaon',
      addressRegion: 'Haryana',
      postalCode: '122002',
      addressCountry: 'IN',
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteConfig.url}/blog?search={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteConfig.name,
    image: `${siteConfig.url}/og-image.jpg`,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    priceRange: '$$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'DLF Phase 3, Golf Course Road',
      addressLocality: 'Gurgaon',
      addressRegion: 'Haryana',
      postalCode: '122002',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 28.4595,
      longitude: 77.0266,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
  };

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
        title="ALINA VIP | Premium Luxury Escort Services in Gurgaon"
        description="ALINA VIP offers premium luxury escort services in Gurgaon. Verified profiles, VIP escorts, elite call girls for discerning gentlemen. Call +91-9996265679. 24/7 discreet service."
        keywords="luxury escort service Gurgaon, VIP escorts Gurgaon, premium call girls Gurgaon, elite escorts Gurgaon, verified profiles Gurgaon, ALINA VIP"
        canonical={`${siteConfig.url}/`}
        jsonLd={[organizationSchema, websiteSchema, localBusinessSchema, faqSchema]}
        breadcrumbs={[{ name: 'Home', url: siteConfig.url }]}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-luxury-gradient" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>

        <div className="container-luxury relative z-10 text-center pt-20">
          <p className="section-subtitle animate-fade-down">Welcome to ALINA VIP</p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-white leading-none mb-6 animate-fade-up">
            Premium Luxury
            <br />
            <span className="shimmer-text font-medium">Escort Service</span>
          </h1>
          <p className="text-charcoal-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Experience the finest escort services in Gurgaon. Verified profiles, elite call girls, and discreet service for the discerning gentleman.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <Link to="/services" className="btn-gold">
              Explore Call Girls <ArrowRight size={16} />
            </Link>
            <a href={`tel:${siteConfig.phone}`} className="btn-outline-gold">
              <Phone size={16} /> {siteConfig.phoneDisplay}
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-gold-500 to-transparent" />
        </div>
      </section>

      {/* Premium CTA Banner */}
      <section className="py-16 bg-charcoal-800 border-y border-charcoal-700">
        <div className="container-luxury">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-gold-500 font-sans text-xs tracking-ultra uppercase mb-2">Available 24/7</p>
              <h2 className="font-serif text-2xl md:text-3xl text-white font-light">
                Discreet &amp; Confidential Service
              </h2>
            </div>
            <a href={`tel:${siteConfig.phone}`} className="btn-gold whitespace-nowrap">
              <Phone size={16} /> Call Now
            </a>
          </div>
        </div>
      </section>

      {/* About Company */}
      <section className="py-20 md:py-28">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="section-subtitle">About ALINA VIP</p>
              <h2 className="section-title mb-6">
                The Epitome of <span className="text-gradient-gold">Luxury Escort Service</span>
              </h2>
              <div className="gold-divider mb-8" />
              <div className="space-y-4 text-charcoal-300 leading-relaxed">
                <p>
                  ALINA VIP is Gurgaon&apos;s premier luxury escort service, dedicated to providing discerning gentlemen with exceptional call girls for social events, dinner dates, travel, and private engagements. With years of experience in the industry, we have built a reputation for excellence, discretion, and uncompromising quality.
                </p>
                <p>
                  Our mission is to redefine the escort service experience by offering a service that is sophisticated, professional, and tailored to the unique preferences of each client. We understand that our clients value privacy, quality, and authenticity above all else, and we have designed every aspect of our service to meet and exceed those expectations.
                </p>
                <p>
                  Every call girl in our portfolio is carefully selected through a rigorous vetting process that evaluates not only physical beauty but also intelligence, social grace, and the ability to engage in meaningful conversation. We believe that true luxury escort service goes beyond appearances — it is about the complete experience of spending time with someone who is cultured, articulate, and genuinely engaging.
                </p>
              </div>
              <Link to="/about" className="btn-outline-gold mt-8">
                Learn More <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '100+', label: 'Verified Profiles' },
                { value: '27', label: 'Locations Served' },
                { value: '10', label: 'Categories' },
                { value: '24/7', label: 'Availability' },
              ].map((stat, i) => (
                <div key={i} className="luxury-card p-8 text-center">
                  <p className="font-serif text-4xl md:text-5xl text-gold-500 font-light mb-2">{stat.value}</p>
                  <p className="text-xs text-charcoal-400 tracking-wider uppercase">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-28 bg-charcoal-800/50">
        <div className="container-luxury">
          <div className="text-center mb-14">
            <p className="section-subtitle">Why Choose Us</p>
            <h2 className="section-title mb-4">
              The ALINA VIP <span className="text-gradient-gold">Difference</span>
            </h2>
            <div className="gold-divider" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="luxury-card p-8 group hover:shadow-lg hover:shadow-gold-500/10">
                  <div className="w-14 h-14 border border-gold-500/30 flex items-center justify-center mb-6 group-hover:border-gold-500 transition-colors">
                    <Icon size={24} className="text-gold-500" />
                  </div>
                  <h3 className="font-serif text-xl text-white mb-3 font-light">{item.title}</h3>
                  <p className="text-sm text-charcoal-400 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Verified Profiles */}
      <section className="py-20 md:py-28">
        <div className="container-luxury">
          <div className="text-center mb-14">
            <p className="section-subtitle">Verified Profiles</p>
            <h2 className="section-title mb-4">
              Authenticated &amp; <span className="text-gradient-gold">Verified</span>
            </h2>
            <div className="gold-divider" />
            <p className="text-charcoal-300 max-w-2xl mx-auto mt-6 leading-relaxed">
              Every call girl profile on ALINA VIP is verified through our rigorous authentication process, ensuring that what you see is exactly what you get.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Identity Verified', description: 'All call girls provide valid identification that is verified by our team.', icon: BadgeCheck },
              { title: 'Photos Verified', description: 'Profile photos are confirmed to be genuine and recent representations.', icon: Camera },
              { title: 'Background Checked', description: 'We conduct background checks to ensure safety and quality.', icon: ShieldCheck },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="luxury-card p-8 text-center group">
                  <div className="w-16 h-16 mx-auto border-2 border-gold-500/30 rounded-full flex items-center justify-center mb-6 group-hover:border-gold-500 transition-colors">
                    <Icon size={28} className="text-gold-500" />
                  </div>
                  <h3 className="font-serif text-xl text-white mb-3 font-light">{item.title}</h3>
                  <p className="text-sm text-charcoal-400 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Luxury Services */}
      <section className="py-20 md:py-28 bg-charcoal-800/50">
        <div className="container-luxury">
          <div className="text-center mb-14">
            <p className="section-subtitle">Our Services</p>
            <h2 className="section-title mb-4">
              Luxury <span className="text-gradient-gold">Escort Services</span>
            </h2>
            <div className="gold-divider" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = iconMap[service.icon] || Sparkles;
              return (
                <Link
                  key={service.slug}
                  to="/services"
                  className="luxury-card p-8 group hover:shadow-lg hover:shadow-gold-500/10"
                >
                  <div className="w-14 h-14 border border-gold-500/30 flex items-center justify-center mb-6 group-hover:border-gold-500 transition-colors">
                    <Icon size={24} className="text-gold-500" />
                  </div>
                  <h3 className="font-serif text-xl text-white mb-3 font-light">{service.title}</h3>
                  <p className="text-sm text-charcoal-400 leading-relaxed mb-4">{service.shortDescription}</p>
                  <span className="text-xs text-gold-500 tracking-wider uppercase flex items-center gap-2 group-hover:gap-3 transition-all">
                    Learn More <ArrowRight size={14} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Top Categories */}
      <section className="py-20 md:py-28">
        <div className="container-luxury">
          <div className="text-center mb-14">
            <p className="section-subtitle">Top Categories</p>
            <h2 className="section-title mb-4">
              Explore Our <span className="text-gradient-gold">Categories</span>
            </h2>
            <div className="gold-divider" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((cat) => {
              const Icon = iconMap[cat.icon] || Sparkles;
              return (
                <Link
                  key={cat.slug}
                  to={`/category/${cat.slug}`}
                  className="luxury-card p-6 text-center group hover:shadow-lg hover:shadow-gold-500/10"
                >
                  <div className="w-12 h-12 mx-auto border border-gold-500/30 rounded-full flex items-center justify-center mb-4 group-hover:border-gold-500 transition-colors">
                    <Icon size={20} className="text-gold-500" />
                  </div>
                  <h3 className="font-serif text-sm text-white mb-2 font-light leading-tight">{cat.name}</h3>
                  <p className="text-xs text-charcoal-500 leading-relaxed line-clamp-2">{cat.shortDescription}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Premium Locations */}
      <section className="py-20 md:py-28 bg-charcoal-800/50">
        <div className="container-luxury">
          <div className="text-center mb-14">
            <p className="section-subtitle">Premium Locations</p>
            <h2 className="section-title mb-4">
              Serving <span className="text-gradient-gold">Gurgaon &amp; Beyond</span>
            </h2>
            <div className="gold-divider" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/locations/${loc.slug}`}
                className="flex items-center gap-2 p-4 border border-charcoal-700 hover:border-gold-500/50 hover:bg-charcoal-800 transition-all duration-300 group"
              >
                <MapPin size={16} className="text-gold-500 flex-shrink-0" />
                <span className="text-xs text-charcoal-300 group-hover:text-gold-500 transition-colors">
                  Escorts in {loc.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28">
        <div className="container-luxury">
          <div className="text-center mb-14">
            <p className="section-subtitle">How It Works</p>
            <h2 className="section-title mb-4">
              Simple &amp; <span className="text-gradient-gold">Discreet Process</span>
            </h2>
            <div className="gold-divider" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((step, i) => (
              <div key={i} className="text-center group">
                <div className="font-serif text-6xl text-gold-500/20 font-light mb-4 group-hover:text-gold-500/40 transition-colors">
                  {step.number}
                </div>
                <h3 className="font-serif text-xl text-white mb-3 font-light">{step.title}</h3>
                <p className="text-sm text-charcoal-400 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Latest Blogs */}
      <section className="py-20 md:py-28 bg-charcoal-800/50">
        <div className="container-luxury">
          <div className="text-center mb-14">
            <p className="section-subtitle">Latest from Our Blog</p>
            <h2 className="section-title mb-4">
              Insights &amp; <span className="text-gradient-gold">Articles</span>
            </h2>
            <div className="gold-divider" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(0, 3).map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="luxury-card overflow-hidden group hover:shadow-lg hover:shadow-gold-500/10"
              >
                <div className="aspect-[16/10] bg-gradient-to-br from-charcoal-700 to-charcoal-800 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gold-gradient opacity-0 group-hover:opacity-5 transition-opacity" />
                  <span className="text-gold-500/30 font-serif text-6xl font-light">
                    {post.category.charAt(0)}
                  </span>
                </div>
                <div className="p-6">
                  <span className="text-xs text-gold-500 tracking-wider uppercase">{post.category}</span>
                  <h3 className="font-serif text-lg text-white mt-2 mb-3 font-light leading-tight group-hover:text-gold-500 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-charcoal-400 leading-relaxed line-clamp-2 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-charcoal-500">
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/blog" className="btn-outline-gold">
              View All Articles <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28">
        <div className="container-luxury">
          <div className="text-center mb-14">
            <p className="section-subtitle">Frequently Asked Questions</p>
            <h2 className="section-title mb-4">
              Your <span className="text-gradient-gold">Questions Answered</span>
            </h2>
            <div className="gold-divider" />
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {generalFaqs.slice(0, 8).map((faq, i) => (
              <details key={i} className="luxury-card group">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-serif text-lg text-white font-light pr-4">{faq.question}</span>
                  <span className="text-gold-500 text-2xl font-light group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-6 text-sm text-charcoal-400 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/faq" className="btn-outline-gold">
              View All FAQs <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* SEO Content Section - 3000+ words */}
      <section className="py-20 md:py-28 bg-charcoal-800/30">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto prose-luxury">
            <h2>Premium Luxury Escort Services in Gurgaon</h2>
            <p>
              ALINA VIP stands as the foremost provider of premium luxury escort services in Gurgaon, offering an unparalleled experience for gentlemen who appreciate sophistication, elegance, and discretion. In the dynamic and fast-paced environment of one of India&apos;s most cosmopolitan cities, the need for refined escort service has grown significantly. Business professionals, entrepreneurs, and visitors to Gurgaon often find themselves seeking the company of someone who can match their lifestyle, engage in intelligent conversation, and provide a memorable experience that goes beyond the ordinary. ALINA VIP was founded to meet this need with a service that is professional, discreet, and of the highest quality.
            </p>

            <h3>What Sets ALINA VIP Apart in the Luxury Escort Service Industry</h3>
            <p>
              The luxury escort service industry in Gurgaon is competitive, but ALINA VIP has established itself as a leader through a combination of rigorous standards, exceptional service, and an unwavering commitment to client satisfaction. What truly sets us apart is our comprehensive verification process. Every call girl who joins our portfolio undergoes a thorough vetting procedure that includes identity verification, photo authentication, and background screening. This ensures that every profile on our platform is genuine, accurate, and trustworthy. Our clients can browse with confidence, knowing that the call girl they select will match the profile they have seen.
            </p>
            <p>
              Beyond verification, we place a strong emphasis on the personal qualities of our call girls. We look for individuals who are not only beautiful but also educated, articulate, and socially adept. Our call girls come from diverse backgrounds and bring a range of personalities, interests, and skills to their engagements. Whether you need a call girl for a high-profile corporate event, a quiet dinner date, a weekend getaway, or a social gathering, we have someone who will be the perfect match for your needs and preferences.
            </p>

            <h3>Our Comprehensive Range of Call Girl Categories</h3>
            <p>
              ALINA VIP offers an extensive selection of call girl categories to cater to the diverse preferences of our clientele. Each category is carefully curated to ensure that clients can find exactly the type of call girl they are looking for. Our Russian Call Girls category features exotic European call girls known for their elegance and international flair. These call girls are popular for their sophisticated demeanour and ability to navigate diverse social settings with ease.
            </p>
            <p>
              Our VIP Call Girls category represents the pinnacle of luxury escort service. These call girls are handpicked for their exceptional beauty, intelligence, and social sophistication. They are ideal for clients who expect the absolute finest and are accustomed to a luxury lifestyle. The High Profile Girls category features call girls who are educated, well-spoken, and socially adept, making them perfect for corporate events and professional engagements where presentation and conversation matter.
            </p>
            <p>
              For clients seeking youthful energy and fresh perspectives, our College Girls category offers call girls who are currently pursuing or have recently completed their higher education. These call girls bring vibrancy and enthusiasm to every engagement. Our Independent Girls category features call girls who operate with complete autonomy, managing their own schedules and engagements. This often results in a more personalised and authentic experience.
            </p>
            <p>
              Our Air Hostess Escorts are known for their impeccable grooming and cosmopolitan outlook. Having travelled extensively, these call girls are cultured, adaptable, and comfortable in diverse environments. The Model Escorts category includes call girls with professional modelling experience, known for their striking features and confident presence. For those seeking the ultimate in exclusivity, our Celebrity Escorts category offers call girls associated with the entertainment and fashion industries, with engagements arranged at the highest level of discretion.
            </p>
            <p>
              Our Travel Call Girl and Premium Call Girl categories round out our offerings. Travel call girls are ideal for clients planning luxury getaways, business trips, or international travel. They are well-travelled, adaptable, and skilled at making any journey more enjoyable. Our premium call girls represent the very best of what we offer, combining versatility, culture, and the ability to adapt to any setting with effortless elegance.
            </p>

            <h3>Serving All Major Locations in Gurgaon and Beyond</h3>
            <p>
              ALINA VIP provides escort services across all major areas of Gurgaon, ensuring that no matter where you are located, you can access our premium services. We serve the prestigious DLF Phase 1 through DLF Phase 5, each with its own unique character and clientele. The DLF Phases are among the most sought-after residential areas in Gurgaon, known for their luxury homes, manicured gardens, and upscale lifestyle. Our call girls are familiar with these areas and can navigate them with discretion and ease.
            </p>
            <p>
              Golf Course Road, one of Gurgaon&apos;s most prestigious addresses, is another key area we serve. Lined with luxury apartments, premium offices, and fine dining establishments, Golf Course Road is a hub of sophisticated living. Our call girls are well-suited to the refined atmosphere of this area and can accompany you to its many upscale venues. MG Road, with its bustling energy and vibrant social scene, is another popular location. Our call girls can accompany you to the malls, restaurants, and entertainment venues that line this iconic road.
            </p>
            <p>
              Cyber City, Gurgaon&apos;s premier business district, is home to numerous multinational corporations and luxury hotels. We cater extensively to corporate clients in this area, providing call girls for business dinners, client entertainment, and professional social events. Our call girls are professional, polished, and comfortable in corporate environments. We also serve Sushant Lok, South City, Sohna Road, HUDA City Centre, and all major sectors of Gurgaon.
            </p>
            <p>
              Beyond Gurgaon, we extend our services to Dwarka and Mahipalpur in New Delhi. Mahipalpur, located near the Indira Gandhi International Airport, is particularly convenient for travellers and transit passengers. Our call girls are available for engagements at the luxury hotels in this area, making it easy for visitors to arrange escort service during their stay. Dwarka, one of the largest residential areas in Delhi, is also within our service area, and we provide discreet outcall services to this neighbourhood.
            </p>

            <h3>The ALINA VIP Booking Experience</h3>
            <p>
              Booking a call girl through ALINA VIP is designed to be a simple, discreet, and professional experience. The process begins with browsing our online portfolio, where you can explore the various categories and locations we serve. Each category page provides detailed information about the type of call girls available, their specialities, and what you can expect from an engagement. Once you have identified a call girl or category that interests you, the next step is to contact our booking team.
            </p>
            <p>
              You can reach us by calling +91-9996265679 or by filling out the contact form on our website. Our booking team is available 24 hours a day, 7 days a week, to assist you. When you contact us, we will discuss your requirements, including the type of call girl you are looking for, the duration of the engagement, the location, and any specific preferences you may have. We will then check availability and confirm your booking, providing you with all the details you need.
            </p>
            <p>
              We recommend booking 2-3 hours in advance when possible, though we do our best to accommodate last-minute requests subject to availability. For extended bookings, overnight engagements, and travel escort service, we recommend booking well in advance to ensure that your preferred call girl is available. All bookings are handled with complete confidentiality, and your personal information is never shared with any third party.
            </p>

            <h3>Discretion and Confidentiality: Our Core Values</h3>
            <p>
              At ALINA VIP, we understand that discretion is not just a preference but a fundamental requirement for our clients. Many of our clients are prominent individuals in their personal and professional lives, and the privacy of their engagements with our service is of utmost importance. We have implemented comprehensive measures to ensure that every aspect of our service is conducted with the highest level of confidentiality.
            </p>
            <p>
              All client information, including contact details, booking records, and personal preferences, is kept strictly private and is never shared with any third party. Our booking process is designed to collect only the information necessary to arrange your engagement, and this information is handled with the utmost care. Our call girls are trained to maintain discretion in all interactions, from the way they dress and arrive at a venue to the way they conduct themselves during and after an engagement.
            </p>
            <p>
              We also understand the importance of discretion in the digital realm. Our website is designed with privacy in mind, and we do not track or store unnecessary data about our visitors. When you contact us, your information is used solely for the purpose of arranging your booking and is not used for marketing or any other purpose without your explicit consent.
            </p>

            <h3>Why Gurgaon is the Perfect Setting for Luxury Escort Service</h3>
            <p>
              Gurgaon, now officially known as Gurugram, has transformed from a quiet suburb into one of India&apos;s most dynamic and cosmopolitan cities. It is home to numerous Fortune 500 companies, luxury hotels, premium residential complexes, and world-class entertainment venues. The city attracts business professionals, entrepreneurs, and visitors from across India and around the world, creating a vibrant and diverse community.
            </p>
            <p>
              This cosmopolitan character makes Gurgaon the perfect setting for luxury escort services. The city&apos;s residents and visitors are accustomed to a high standard of living and expect quality in every aspect of their lives. ALINA VIP was created to meet this expectation, providing a escort service that matches the sophistication and luxury of the city itself. Whether you are a resident of Gurgaon looking for a call girl for a social event or a visitor seeking company during your stay, our service is designed to provide an experience that is seamless, discreet, and of the highest quality.
            </p>
            <p>
              The city&apos;s infrastructure also supports our service. Gurgaon is well-connected by road and metro, making it easy for our call girls to reach any location in the city quickly. The abundance of luxury hotels, fine dining restaurants, and entertainment venues provides the perfect settings for engagements of all types. From intimate dinners at five-star restaurants to lively evenings at the city&apos;s best bars and clubs, Gurgaon offers the ideal backdrop for a memorable escort service experience.
            </p>

            <h3>Commitment to Quality and Continuous Improvement</h3>
            <p>
              ALINA VIP is committed to maintaining the highest standards of quality in every aspect of our service. We regularly review and update our processes to ensure that we are meeting the evolving needs of our clients. Our call girl selection process is continuously refined to ensure that we are offering the best possible roster of call girls. We gather feedback from our clients after each engagement and use this feedback to improve our service.
            </p>
            <p>
              We also invest in the training and development of our call girls. While we select call girls who are already polished and sophisticated, we provide additional guidance on social etiquette, conversation skills, and the specific expectations of our clientele. This ensures that every call girl in our portfolio is equipped to provide an exceptional experience, regardless of the setting or occasion.
            </p>
            <p>
              Our commitment to quality extends to the digital experience as well. Our website is designed to be fast, user-friendly, and informative, allowing clients to browse our offerings and make bookings with ease. We employ the latest web technologies to ensure that our site loads quickly and performs well on all devices, from desktop computers to mobile phones. This focus on performance is part of our broader commitment to providing a premium experience at every touchpoint.
            </p>

            <h3>Contact ALINA VIP Today</h3>
            <p>
              If you are looking for premium luxury escort services in Gurgaon, look no further than ALINA VIP. Our team is ready to assist you in finding the perfect call girl for your needs and arranging a discreet and memorable experience. Call us today at +91-9996265679 or fill out our contact form to get started. We are available 24/7 to serve you.
            </p>
            <p>
              Whether you are a first-time client or a returning patron, we look forward to providing you with an experience that exceeds your expectations. At ALINA VIP, we believe that luxury escort service is an art, and we are dedicated to mastering it for your enjoyment. Discover the ALINA VIP difference today and experience the finest escort service in Gurgaon.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-28">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-subtitle">Get In Touch</p>
              <h2 className="section-title mb-6">
                Contact <span className="text-gradient-gold">ALINA VIP</span>
              </h2>
              <div className="gold-divider mb-8" />
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 border border-gold-500/30 flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-gold-500" />
                  </div>
                  <div>
                    <h3 className="font-sans text-xs tracking-ultra uppercase text-charcoal-500 mb-1">Phone</h3>
                    <a href={`tel:${siteConfig.phone}`} className="text-white hover:text-gold-500 transition-colors">
                      {siteConfig.phoneDisplay}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 border border-gold-500/30 flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-gold-500" />
                  </div>
                  <div>
                    <h3 className="font-sans text-xs tracking-ultra uppercase text-charcoal-500 mb-1">Address</h3>
                    <p className="text-white">{siteConfig.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 border border-gold-500/30 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 size={20} className="text-gold-500" />
                  </div>
                  <div>
                    <h3 className="font-sans text-xs tracking-ultra uppercase text-charcoal-500 mb-1">Availability</h3>
                    <p className="text-white">24 Hours, 7 Days a Week</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="luxury-card p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

function ContactForm() {
  return (
    <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Thank you for your message. We will contact you shortly.'); }}>
      <div>
        <label className="block text-xs tracking-wider uppercase text-charcoal-400 mb-2">Name</label>
        <input type="text" required className="input-luxury" placeholder="Your Name" />
      </div>
      <div>
        <label className="block text-xs tracking-wider uppercase text-charcoal-400 mb-2">Phone</label>
        <input type="tel" required className="input-luxury" placeholder="Your Phone Number" />
      </div>
      <div>
        <label className="block text-xs tracking-wider uppercase text-charcoal-400 mb-2">Location</label>
        <select className="input-luxury" defaultValue="">
          <option value="" disabled>Select Location</option>
          {locations.map((loc) => (
            <option key={loc.slug} value={loc.slug}>{loc.name}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-xs tracking-wider uppercase text-charcoal-400 mb-2">Message</label>
        <textarea rows={4} className="input-luxury resize-none" placeholder="Your Message" />
      </div>
      <button type="submit" className="btn-gold w-full">Send Message</button>
    </form>
  );
}
