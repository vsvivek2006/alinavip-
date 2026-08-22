import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumb from '@/components/Breadcrumb';
import CTASection from '@/components/CTASection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { siteConfig } from '@/data/siteConfig';
import { services } from '@/data/content';
import { categories } from '@/data/categories';

export default function ServicesPage() {
  return (
    <>
      <SEO
        title="Our Services | Luxury Escort Services in Gurgaon | ALINA VIP"
        description="Explore ALINA VIP's luxury escort services in Gurgaon. Dinner call girls, event call girls, travel call girls, party call girls, and more. Call +91-9996265679."
        keywords="luxury escort services Gurgaon, dinner call girl Gurgaon, travel call girl Gurgaon, event call girl Gurgaon"
        canonical={`${siteConfig.url}/services`}
        breadcrumbs={[
          { name: 'Home', url: siteConfig.url },
          { name: 'Services', url: `${siteConfig.url}/services` },
        ]}
      />

      <Breadcrumb items={[{ name: 'Home', path: '/' }, { name: 'Our Services' }]} />

      <section className="py-16 md:py-24">
        <div className="container-luxury">
          <div className="text-center mb-16">
            <p className="section-subtitle">Our Services</p>
            <h1 className="section-title mb-6">
              Luxury <span className="text-gradient-gold">Escort Services</span>
            </h1>
            <div className="gold-divider" />
            <p className="text-charcoal-300 max-w-2xl mx-auto mt-6 leading-relaxed">
              ALINA VIP offers a comprehensive range of luxury escort services designed to meet the diverse needs of our discerning clientele. Each service is delivered with the highest standards of quality, discretion, and professionalism.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {services.map((service) => (
              <div key={service.slug} className="luxury-card p-8 group hover:shadow-lg hover:shadow-gold-500/10">
                <h3 className="font-serif text-2xl text-white mb-4 font-light">{service.title}</h3>
                <p className="text-sm text-charcoal-400 leading-relaxed mb-6">{service.description}</p>
                <Link to="/contact" className="text-xs text-gold-500 tracking-wider uppercase flex items-center gap-2 group-hover:gap-3 transition-all">
                  Book This Service <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mb-16">
            <p className="section-subtitle">Call Girl Categories</p>
            <h2 className="section-title mb-6">
              Explore Our <span className="text-gradient-gold">Categories</span>
            </h2>
            <div className="gold-divider" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                to={`/category/${cat.slug}`}
                className="luxury-card p-8 group hover:shadow-lg hover:shadow-gold-500/10"
              >
                <h3 className="font-serif text-2xl text-white mb-3 font-light group-hover:text-gold-500 transition-colors">
                  {cat.name}
                </h3>
                <p className="text-sm text-charcoal-400 leading-relaxed mb-4">{cat.description}</p>
                <span className="text-xs text-gold-500 tracking-wider uppercase flex items-center gap-2 group-hover:gap-3 transition-all">
                  View Profiles <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <CTASection />
    </>
  );
}
