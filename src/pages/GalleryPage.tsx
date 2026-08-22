import SEO from '@/components/SEO';
import Breadcrumb from '@/components/Breadcrumb';
import CTASection from '@/components/CTASection';
import { siteConfig } from '@/data/siteConfig';
import { categories } from '@/data/categories';

export default function GalleryPage() {
  return (
    <>
      <SEO
        title="Gallery | Luxury Escort Service Profiles | ALINA VIP"
        description="Browse the ALINA VIP gallery to explore our premium luxury call girl categories. Verified profiles, elite call girls, and discreet service in Gurgaon."
        keywords="luxury call girl gallery Gurgaon, VIP escorts gallery, premium profiles Gurgaon"
        canonical={`${siteConfig.url}/gallery`}
        breadcrumbs={[
          { name: 'Home', url: siteConfig.url },
          { name: 'Gallery', url: `${siteConfig.url}/gallery` },
        ]}
      />

      <Breadcrumb items={[{ name: 'Home', path: '/' }, { name: 'Gallery' }]} />

      <section className="py-16 md:py-24">
        <div className="container-luxury">
          <div className="text-center mb-16">
            <p className="section-subtitle">Gallery</p>
            <h1 className="section-title mb-6">
              Our <span className="text-gradient-gold">Premium Collection</span>
            </h1>
            <div className="gold-divider" />
            <p className="text-charcoal-300 max-w-2xl mx-auto mt-6 leading-relaxed">
              Explore our curated collection of luxury call girl categories. Each category represents a unique style of escort service, carefully selected to meet the diverse preferences of our discerning clientele.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <div
                key={cat.slug}
                className="luxury-card overflow-hidden group hover:shadow-lg hover:shadow-gold-500/10"
              >
                <div className="aspect-[3/4] bg-gradient-to-br from-charcoal-700 to-charcoal-800 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gold-gradient opacity-0 group-hover:opacity-5 transition-opacity" />
                  <span className="text-gold-500/20 font-serif text-7xl font-light">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl text-white mb-2 font-light group-hover:text-gold-500 transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-sm text-charcoal-400 leading-relaxed">{cat.shortDescription}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
