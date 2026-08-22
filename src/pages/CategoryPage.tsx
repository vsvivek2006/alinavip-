import { Link, useParams } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumb from '@/components/Breadcrumb';
import CTASection from '@/components/CTASection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { siteConfig } from '@/data/siteConfig';
import { getCategory } from '@/data/categories';

export default function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const category = getCategory(slug || '');

  if (!category) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="section-title mb-4">Category Not Found</h1>
        <Link to="/services" className="btn-outline-gold">View All Services</Link>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={`${category.name} in Gurgaon | ALINA VIP Premium Escort Service`}
        description={`${category.shortDescription} ALINA VIP offers verified ${category.name.toLowerCase()} in Gurgaon. Discreet, premium service. Call +91-9996265679.`}
        keywords={`${category.name.toLowerCase()} Gurgaon, ${category.name.toLowerCase()} escorts, premium ${category.name.toLowerCase()}`}
        canonical={`${siteConfig.url}/category/${category.slug}`}
        breadcrumbs={[
          { name: 'Home', url: siteConfig.url },
          { name: 'Services', url: `${siteConfig.url}/services` },
          { name: category.name, url: `${siteConfig.url}/category/${category.slug}` },
        ]}
      />

      <Breadcrumb items={[
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: category.name },
      ]} />

      <section className="py-16 md:py-24">
        <div className="container-luxury">
          <div className="text-center mb-16">
            <p className="section-subtitle">Category</p>
            <h1 className="section-title mb-6">
              {category.name}
            </h1>
            <div className="gold-divider" />
          </div>

          <div className="max-w-4xl mx-auto prose-luxury">
            <h2>About Our {category.name}</h2>
            <p>{category.description}</p>
            <p>
              At ALINA VIP, we take pride in offering the finest {category.name.toLowerCase()} in Gurgaon. Each call girl in this category has been carefully selected through our rigorous verification process, which includes identity verification, photo authentication, and background screening. This ensures that every profile is genuine and that our clients can book with complete confidence.
            </p>
            <p>
              Our {category.name.toLowerCase()} are available for a variety of engagements, including dinner dates, social events, corporate functions, travel escort service, and private engagements. They are discreet, professional, and committed to providing an exceptional experience. Whether you are a resident of Gurgaon or visiting the city, our {category.name.toLowerCase()} can enhance your experience with their elegance, charm, and engaging company.
            </p>
            <p>
              To book one of our {category.name.toLowerCase()}, simply call us at <a href={`tel:${siteConfig.phone}`}>{siteConfig.phoneDisplay}</a> or fill out our <Link to="/contact">contact form</Link>. Our booking team is available 24/7 to assist you and will handle your request with complete discretion and professionalism.
            </p>
          </div>

          <div className="text-center mt-12">
            <a href={`tel:${siteConfig.phone}`} className="btn-gold">
              <Phone size={16} /> Book Now
            </a>
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <CTASection />
    </>
  );
}
