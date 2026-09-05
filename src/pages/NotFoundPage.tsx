import { Link } from 'react-router-dom';
import { Phone, Home, Compass, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';
import SEO from '@/components/SEO';
import { siteConfig } from '@/data/siteConfig';

export default function NotFoundPage() {
  return (
    <>
      <SEO
        title="404 - Page Not Found | ALINA VIP Escort Service"
        description="The page you are looking for could not be found. Explore ALINA VIP luxury escort service in Gurgaon, verified call girls, and service locations."
        noindex={true}
      />

      <section className="min-h-[80vh] flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#0a0a1a] via-[#1a1a2e] to-[#2d1b0e] py-24 md:py-32">
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px]" />
        </div>

        <div className="container-luxury relative z-10 text-center max-w-2xl px-4">
          <span className="inline-block px-4 py-1.5 border border-gold-500/30 rounded-full text-gold-400 text-xs font-semibold tracking-wider uppercase mb-6 bg-gold-500/10 backdrop-blur-sm">
            404 Error
          </span>

          <h1 className="font-serif text-6xl md:text-8xl text-white font-light mb-4">
            4<span className="text-gold-500 font-normal">0</span>4
          </h1>

          <h2 className="font-serif text-2xl md:text-3xl text-white font-medium mb-4">
            Page Not Found
          </h2>

          <p className="text-gray-300 text-base md:text-lg mb-8 leading-relaxed font-light">
            The page or companion profile you are looking for may have moved, been updated, or is no longer available. Explore our premier VIP escorts or contact our 24/7 concierge desk.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-neutral-950 font-bold px-7 py-3.5 rounded-full text-sm transition-all shadow-lg hover:shadow-xl"
            >
              <Home size={16} /> Return Home
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 border border-gold-500/60 text-gold-400 hover:bg-gold-500/10 px-7 py-3.5 rounded-full text-sm font-semibold transition-all"
            >
              <Sparkles size={16} /> Explore Escorts
            </Link>
            <Link
              to="/locations"
              className="inline-flex items-center gap-2 border border-gold-500/40 text-gray-300 hover:text-white hover:bg-white/5 px-7 py-3.5 rounded-full text-sm font-semibold transition-all"
            >
              <Compass size={16} /> 100+ Locations
            </Link>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 max-w-md mx-auto">
            <p className="text-xs uppercase tracking-wider text-gold-400 font-bold mb-2">
              Need Immediate Assistance?
            </p>
            <p className="text-sm text-gray-300 mb-4">
              Our concierge team is available 24/7 across Gurgaon &amp; Delhi NCR.
            </p>
            <div className="flex justify-center gap-3">
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center gap-1.5 text-xs text-white bg-gold-600 hover:bg-gold-700 px-4 py-2 rounded-lg font-semibold transition-colors"
              >
                <Phone size={14} /> {siteConfig.phoneDisplay}
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-white bg-[#25D366] hover:bg-[#20ba59] px-4 py-2 rounded-lg font-semibold transition-colors"
              >
                <MessageCircle size={14} /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
