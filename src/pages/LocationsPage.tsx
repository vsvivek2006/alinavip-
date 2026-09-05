import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Search, MapPin, Building2, Sparkles, Compass,
  Phone, Clock, ShieldCheck, CheckCircle2, ChevronRight,
} from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumb from '@/components/Breadcrumb';
import CTASection from '@/components/CTASection';
import { siteConfig } from '@/data/siteConfig';
import { locations } from '@/data/locations';

const filterTabs = [
  { id: 'all', label: 'All Locations' },
  { id: 'gurgaon-prime', label: 'Gurgaon Prime & DLF' },
  { id: 'golf-spr', label: 'Golf Course & SPR' },
  { id: 'delhi-airport', label: 'Delhi & Airport' },
  { id: 'regional-ncr', label: 'Noida & Regional NCR' },
];

export default function LocationsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('all');

  const filteredLocations = useMemo(() => {
    let result = locations;

    // Filter by tab
    if (activeTab === 'gurgaon-prime') {
      result = result.filter(
        (loc) =>
          loc.region === 'Gurgaon' &&
          (loc.isHub ||
            ['cyber-city', 'mg-road', 'dlf-phase-1', 'dlf-phase-2', 'dlf-phase-3', 'dlf-phase-4', 'dlf-phase-5', 'sushant-lok', 'sector-29', 'huda-city-centre'].includes(loc.slug) ||
            loc.slug.includes('dlf') ||
            loc.slug.includes('phase'))
      );
    } else if (activeTab === 'golf-spr') {
      result = result.filter(
        (loc) =>
          loc.region === 'Gurgaon' &&
          (loc.slug.includes('golf') ||
            loc.slug.includes('spr') ||
            loc.slug.includes('sohna') ||
            ['sector-42', 'sector-43', 'sector-53', 'sector-54', 'sector-55', 'sector-56', 'sector-57', 'sector-65', 'sector-66', 'sector-67'].includes(loc.slug))
      );
    } else if (activeTab === 'delhi-airport') {
      result = result.filter(
        (loc) =>
          loc.region === 'Delhi' ||
          loc.region === 'Delhi NCR' ||
          ['aerocity', 'mahipalpur', 'dwarka', 'south-delhi', 'vasant-vihar', 'chanakyapuri', 'connaught-place'].includes(loc.slug)
      );
    } else if (activeTab === 'regional-ncr') {
      result = result.filter((loc) => loc.region !== 'Gurgaon' && loc.region !== 'Delhi' && loc.region !== 'Delhi NCR');
    }

    // Filter by search term
    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase();
      result = result.filter(
        (loc) =>
          loc.name.toLowerCase().includes(q) ||
          loc.area.toLowerCase().includes(q) ||
          loc.city.toLowerCase().includes(q) ||
          (loc.corridor && loc.corridor.toLowerCase().includes(q))
      );
    }

    return result;
  }, [searchTerm, activeTab]);

  return (
    <>
      <SEO
        title="Escort Service in Gurgaon | Call Girls Locations | ALINA VIP"
        description="ALINA VIP provides premium escort service in all major areas of Gurgaon including DLF Phases, Cyber City, MG Road, Golf Course Road, and more. Book verified call girls near you. Call +91-9996265679."
        keywords="escort service Gurgaon locations, call girls Gurgaon areas, VIP escorts DLF, escorts Cyber City, escorts MG Road, call girls near me Gurgaon"
        canonical={`${siteConfig.url}/locations`}
        breadcrumbs={[
          { name: 'Home', url: siteConfig.url },
          { name: 'Locations', url: `${siteConfig.url}/locations` },
        ]}
      />

      <Breadcrumb items={[{ name: 'Home', path: '/' }, { name: 'Locations' }]} />

      {/* Hero Header Section */}
      <section className="py-16 md:py-24 bg-charcoal-900 border-b border-charcoal-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="container-luxury relative z-10 text-center">
          <p className="section-subtitle text-gold-500 font-sans text-xs tracking-ultra uppercase mb-3 font-semibold">
            Our Service Areas
          </p>
          <h1 className="section-title mb-6 font-serif text-4xl md:text-6xl text-white font-light">
            Serving <span className="text-gradient-gold font-normal">Gurgaon &amp; Beyond</span>
          </h1>
          <div className="gold-divider mb-6" />

          {/* Keyword Rich Lead with Internal Hyperlinks */}
          <p className="text-charcoal-300 max-w-3xl mx-auto text-base md:text-lg leading-relaxed font-light">
            ALINA VIP provides premium{' '}
            <Link to="/services" className="text-gold-400 hover:underline font-medium">
              escort service
            </Link>{' '}
            across all major areas of Gurgaon and select gateway locations in New Delhi, Aerocity, and regional NCR. Select your area below to find verified{' '}
            <Link to="/call-girls" className="text-gold-400 hover:underline font-medium">
              call girls
            </Link>{' '}
            and{' '}
            <Link to="/escorts" className="text-gold-400 hover:underline font-medium">
              escorts
            </Link>{' '}
            near you with rapid 20-30 minute hotel suite dispatch.
          </p>

          {/* Interactive Search Bar */}
          <div className="max-w-xl mx-auto mt-10 relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by sector, corridor or landmark (e.g., Sector 65, DLF Phase 5, Aerocity)..."
              className="w-full bg-charcoal-800/90 border border-charcoal-700 focus:border-gold-500 px-12 py-4 text-sm text-white placeholder-charcoal-400 focus:outline-none transition-all shadow-xl rounded-sm"
            />
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gold-500" />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-charcoal-400 hover:text-white bg-charcoal-700 px-2 py-1 rounded"
              >
                Clear
              </button>
            )}
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setSearchTerm('');
                }}
                className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold transition-all rounded-sm ${
                  activeTab === tab.id
                    ? 'bg-gold-500 text-charcoal-950 shadow-md shadow-gold-500/20'
                    : 'bg-charcoal-800/70 text-charcoal-300 border border-charcoal-700 hover:border-gold-500/50 hover:text-gold-400'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Quick Counter */}
          <p className="text-xs text-charcoal-400 mt-4 tracking-wider">
            Showing <span className="text-gold-400 font-semibold">{filteredLocations.length}</span> of{' '}
            <span className="text-white font-semibold">{locations.length}</span> verified companion locations
          </p>
        </div>
      </section>

      {/* Locations Directory Grid */}
      <section className="py-16 md:py-24 bg-charcoal-900/50">
        <div className="container-luxury">
          {filteredLocations.length === 0 ? (
            <div className="text-center py-16 luxury-card p-12 max-w-lg mx-auto">
              <Compass size={40} className="text-gold-500 mx-auto mb-4 opacity-60" />
              <h3 className="font-serif text-2xl text-white mb-2 font-light">No Locations Found</h3>
              <p className="text-sm text-charcoal-400 mb-6">
                We couldn&apos;t find any locations matching &ldquo;{searchTerm}&rdquo;.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setActiveTab('all');
                }}
                className="btn-gold text-xs"
              >
                Reset Search Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredLocations.map((loc) => (
                <Link
                  key={loc.slug}
                  to={`/locations/${loc.slug}`}
                  className="luxury-card p-7 group hover:border-gold-500 hover:shadow-xl hover:shadow-gold-500/10 flex flex-col justify-between transition-all duration-300 rounded-sm bg-charcoal-850/80 border border-charcoal-700"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-gold-500 flex-shrink-0 group-hover:scale-110 transition-transform" />
                        <span className="text-xs text-gold-400 font-mono uppercase tracking-wider font-semibold">
                          {loc.city || loc.region}
                        </span>
                      </div>
                      {loc.isHub && (
                        <span className="text-[10px] uppercase font-bold tracking-wider text-charcoal-950 bg-gold-500 px-2 py-0.5 rounded-2xs shadow-sm">
                          PRIMARY HUB
                        </span>
                      )}
                    </div>

                    <h3 className="font-serif text-2xl text-white mb-2 font-light group-hover:text-gold-400 transition-colors">
                      Escorts in {loc.name}
                    </h3>

                    <p className="text-sm text-charcoal-400 leading-relaxed mb-6 line-clamp-3">
                      {loc.shortDescription}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-charcoal-700/80 flex items-center justify-between">
                    <span className="text-xs text-gold-400 tracking-wider uppercase font-semibold flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                      View Call Girls <ArrowRight size={14} />
                    </span>
                    <span className="text-[11px] text-charcoal-500 font-mono">
                      24/7 Service
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Hotel & Hospitality Context Section */}
      <section className="py-16 md:py-24 bg-charcoal-800 border-y border-charcoal-700">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-subtitle text-gold-500">Luxury Hospitality</p>
              <h2 className="font-serif text-3xl md:text-4xl text-white font-light mb-6">
                Five-Star Hotel &amp; Luxury Residence Outcalls
              </h2>
              <div className="gold-divider mb-8" />
              <div className="space-y-4 text-charcoal-300 leading-relaxed text-sm md:text-base">
                <p>
                  ALINA VIP caters extensively to guests staying at prestigious five-star hotel properties across Gurgaon and Delhi NCR. Our verified companions are adept in five-star hotel etiquette, arriving discreetly dressed in tasteful attire suitable for executive lobbies and luxury suites.
                </p>
                <p>
                  We provide continuous outcall service to premier hotel clusters including The Oberoi Gurgaon, The Trident, The Leela Ambience, Grand Hyatt Gurgaon, ITC Grand Bharat, The Westin Gurgaon, and JW Marriott Aerocity.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="p-4 bg-charcoal-900/60 border border-charcoal-700 rounded-sm">
                  <Clock className="w-5 h-5 text-gold-400 mb-2" />
                  <p className="text-xs font-bold text-white uppercase tracking-wider">20-30 Min Arrival</p>
                  <p className="text-[11px] text-charcoal-400 mt-1">Prompt dispatch across major corridors</p>
                </div>
                <div className="p-4 bg-charcoal-900/60 border border-charcoal-700 rounded-sm">
                  <ShieldCheck className="w-5 h-5 text-gold-400 mb-2" />
                  <p className="text-xs font-bold text-white uppercase tracking-wider">100% Confidential</p>
                  <p className="text-[11px] text-charcoal-400 mt-1">Private chauffeur &amp; unmarked drop-off</p>
                </div>
              </div>
            </div>

            <div className="luxury-card p-8 bg-gradient-to-br from-charcoal-850 to-charcoal-900 border border-gold-500/20 rounded-2xl">
              <h3 className="font-serif text-2xl text-white mb-4 font-light">
                Need Fast Location Dispatch?
              </h3>
              <p className="text-sm text-charcoal-300 leading-relaxed mb-6">
                Whether you are staying in DLF Phase 1-5, Golf Course Road, Cyber City, or near IGI Airport Aerocity, our VIP concierge team can arrange your verified companion within minutes.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-sm text-charcoal-200">
                  <CheckCircle2 size={16} className="text-gold-400 flex-shrink-0" />
                  <span>Immediate room outcalls to any verified luxury hotel suite</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-charcoal-200">
                  <CheckCircle2 size={16} className="text-gold-400 flex-shrink-0" />
                  <span>Private residential condominium visits with gated security</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-charcoal-200">
                  <CheckCircle2 size={16} className="text-gold-400 flex-shrink-0" />
                  <span>Personalized companion selection based on your preference</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href={`tel:${siteConfig.phone}`} className="btn-gold flex-1 text-center justify-center">
                  <Phone size={16} /> Call: {siteConfig.phoneDisplay}
                </a>
                <Link to="/contact" className="btn-outline-gold flex-1 text-center justify-center">
                  Reserve Online
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Editorial Prose Section */}
      <section className="py-20 md:py-28 bg-charcoal-900">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto prose-luxury">
            <h2>Comprehensive Escort Services Across Gurgaon &amp; Delhi NCR</h2>
            <p>
              At ALINA VIP, our mission is to provide accessible, seamless, and thoroughly discreet escort service throughout Gurgaon and the broader National Capital Region. With over 100 dedicated location pages, our network blankets every prominent business enclave, high-density residential phase, and luxury hotel corridor.
            </p>
            <p>
              From corporate executives attending summits in <Link to="/locations/cyber-city" className="text-gold-400 hover:underline">Cyber City</Link> and <Link to="/locations/golf-course-road" className="text-gold-400 hover:underline">Golf Course Road</Link>, to residents seeking quiet companionship in <Link to="/locations/dlf-phase-1" className="text-gold-400 hover:underline">DLF Phase 1</Link> or <Link to="/locations/dlf-phase-5" className="text-gold-400 hover:underline">DLF Phase 5</Link>, our verified <Link to="/call-girls" className="text-gold-400 hover:underline">call girls</Link> provide the perfect blend of glamour, emotional intelligence, and discretion.
            </p>
            <p>
              International visitors and domestic transit flyers arriving at Indira Gandhi International Airport benefit from our rapid dispatch service in <Link to="/locations/aerocity" className="text-gold-400 hover:underline">Aerocity</Link> and <Link to="/locations/mahipalpur" className="text-gold-400 hover:underline">Mahipalpur</Link>, enabling enjoyable companionship during brief flight layovers or corporate retreats.
            </p>
            <p>
              Browse our complete location roster above or contact our 24/7 concierge desk at{' '}
              <a href={`tel:${siteConfig.phone}`} className="text-gold-400 hover:underline font-bold">
                {siteConfig.phoneDisplay}
              </a>{' '}
              to discuss custom arrangements in any Gurgaon sector or NCR locality.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
