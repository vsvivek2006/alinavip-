import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumb from '@/components/Breadcrumb';
import CTASection from '@/components/CTASection';
import { siteConfig } from '@/data/siteConfig';
import { locations } from '@/data/locations';

export default function LocationsPage() {
  return (
    <>
      <SEO
        title="Locations | Luxury Escort Service in Gurgaon & Delhi | ALINA VIP"
        description="ALINA VIP serves all major areas of Gurgaon including DLF Phases, Cyber City, MG Road, Golf Course Road, and more. Also serving Dwarka and Mahipalpur. Call +91-9996265679."
        keywords="escorts Gurgaon locations, escort service Gurgaon areas, luxury escorts DLF, escorts Cyber City, escorts MG Road"
        canonical={`${siteConfig.url}/locations`}
        breadcrumbs={[
          { name: 'Home', url: siteConfig.url },
          { name: 'Locations', url: `${siteConfig.url}/locations` },
        ]}
      />

      <Breadcrumb items={[{ name: 'Home', path: '/' }, { name: 'Locations' }]} />

      <section className="py-16 md:py-24">
        <div className="container-luxury">
          <div className="text-center mb-16">
            <p className="section-subtitle">Our Locations</p>
            <h1 className="section-title mb-6">
              Serving <span className="text-gradient-gold">Gurgaon &amp; Beyond</span>
            </h1>
            <div className="gold-divider" />
            <p className="text-charcoal-300 max-w-2xl mx-auto mt-6 leading-relaxed">
              ALINA VIP provides premium luxury escort services across all major areas of Gurgaon and select locations in New Delhi. Select your area below to learn more about our services in your location.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/locations/${loc.slug}`}
                className="luxury-card p-6 group hover:shadow-lg hover:shadow-gold-500/10 flex flex-col"
              >
                <h3 className="font-serif text-xl text-white mb-2 font-light group-hover:text-gold-500 transition-colors">
                  Escorts in {loc.name}
                </h3>
                <p className="text-sm text-charcoal-400 leading-relaxed mb-4 flex-1">{loc.shortDescription}</p>
                <span className="text-xs text-gold-500 tracking-wider uppercase flex items-center gap-2 group-hover:gap-3 transition-all">
                  View Location Page <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
