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
        title="FAQ | Frequently Asked Questions | ALINA VIP Gurgaon"
        description="Find answers to frequently asked questions about ALINA VIP's luxury escort services in Gurgaon. Learn about booking, verification, discretion, and more."
        keywords="ALINA VIP FAQ, luxury escort service questions, escort service FAQ Gurgaon, booking call girl FAQ"
        canonical={`${siteConfig.url}/faq`}
        jsonLd={faqSchema}
        breadcrumbs={[
          { name: 'Home', url: siteConfig.url },
          { name: 'FAQ', url: `${siteConfig.url}/faq` },
        ]}
      />

      <Breadcrumb items={[{ name: 'Home', path: '/' }, { name: 'FAQ' }]} />

      <section className="py-16 md:py-24">
        <div className="container-luxury">
          <div className="text-center mb-16">
            <p className="section-subtitle">FAQ</p>
            <h1 className="section-title mb-6">
              Frequently Asked <span className="text-gradient-gold">Questions</span>
            </h1>
            <div className="gold-divider" />
            <p className="text-charcoal-300 max-w-2xl mx-auto mt-6 leading-relaxed">
              Find answers to the most common questions about ALINA VIP and our luxury escort services. If you have a question that is not answered here, please contact us.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {generalFaqs.map((faq, i) => (
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

          <div className="text-center mt-12">
            <p className="text-charcoal-400 mb-6">Still have questions? We&apos;re here to help.</p>
            <a href={`tel:${siteConfig.phone}`} className="btn-gold">Call {siteConfig.phoneDisplay}</a>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
