import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Building2,
  Sparkles,
} from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumb from '@/components/Breadcrumb';
import CTASection from '@/components/CTASection';
import { siteConfig } from '@/data/siteConfig';
import { locations } from '@/data/locations';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    category: '',
    location: '',
    serviceType: 'Hotel Outcall',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <SEO
        title="Contact ALINA VIP | Book Luxury Escort Service in Gurgaon"
        description="Contact ALINA VIP for premium luxury escort service in Gurgaon. Call +91-9996265679 or book online. Available 24/7 with 100% discretion and rapid hotel outcall."
        keywords="contact ALINA VIP, book escort service Gurgaon, call girls Gurgaon contact, VIP escorts booking, Russian escorts Gurgaon phone"
        canonical={`${siteConfig.url}/contact`}
        breadcrumbs={[
          { name: 'Home', url: siteConfig.url },
          { name: 'Contact', url: `${siteConfig.url}/contact` },
        ]}
      />

      <Breadcrumb items={[{ name: 'Home', path: '/' }, { name: 'Contact' }]} />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#0a0a1a] via-[#1a1a2e] to-[#2d1b0e] overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px]" />
        </div>
        <div className="container-luxury relative z-10 text-center">
          <span className="inline-block px-6 py-2 border border-gold-500/30 rounded-full text-gold-400 text-sm font-semibold tracking-wider uppercase mb-6 bg-gold-500/10 backdrop-blur-sm">
            ★ 24/7 Concierge Support
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-serif tracking-wide">
            Contact <span className="text-gradient-gold">ALINA VIP</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Book verified{' '}
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
            with 100% discretion and prompt outcall across all Gurgaon locations.
          </p>
          <div className="gold-divider mx-auto mt-8" />
        </div>
      </section>

      {/* Main Contact Channels & Form */}
      <section className="py-16 md:py-24 bg-white text-gray-800">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Direct Concierge & Channels */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-2 font-serif">
                  Direct VIP Hotline
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Our private booking coordinators are standing by 24 hours a day to assist with your companionship requirements.
                </p>
              </div>

              {/* Phone Channel Card */}
              <div className="p-6 bg-[#faf6f2] rounded-2xl border border-gold-200/60 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Phone className="w-6 h-6 text-gold-600" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold tracking-wider text-gold-700 block mb-1">
                      Direct Phone
                    </span>
                    <a
                      href={`tel:${siteConfig.phone}`}
                      className="text-2xl font-bold text-[#1a1a2e] hover:text-gold-600 transition-colors font-serif"
                    >
                      {siteConfig.phoneDisplay}
                    </a>
                    <p className="text-gray-500 text-xs mt-1">
                      Instant response • Available 24/7 across all Gurgaon areas
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Channel Card */}
              <div className="p-6 bg-[#faf6f2] rounded-2xl border border-gold-200/60 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <MessageCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold tracking-wider text-green-700 block mb-1">
                      WhatsApp
                    </span>
                    <a
                      href={`https://wa.me/${siteConfig.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl font-bold text-[#1a1a2e] hover:text-gold-600 transition-colors inline-flex items-center gap-1.5"
                    >
                      Chat on WhatsApp <ArrowRight className="w-4 h-4 text-gold-600" />
                    </a>
                    <p className="text-gray-500 text-xs mt-1">
                      Discreet profile sharing, rates &amp; rapid verification
                    </p>
                  </div>
                </div>
              </div>

              {/* Location Card */}
              <div className="p-6 bg-[#faf6f2] rounded-2xl border border-gold-200/60 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="w-6 h-6 text-gold-600" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold tracking-wider text-gold-700 block mb-1">
                      Service Areas
                    </span>
                    <p className="text-base font-semibold text-[#1a1a2e]">
                      {siteConfig.address}
                    </p>
                    <p className="text-gray-500 text-xs mt-1">
                      Prompt outcall to Cyber City, Golf Course Road, DLF 1–5, Aerocity &amp; NCR
                    </p>
                  </div>
                </div>
              </div>

              {/* Operating Hours Card */}
              <div className="p-6 bg-[#faf6f2] rounded-2xl border border-gold-200/60 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="w-6 h-6 text-gold-600" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold tracking-wider text-gold-700 block mb-1">
                      Operating Schedule
                    </span>
                    <p className="text-base font-semibold text-[#1a1a2e]">
                      24 Hours a Day • 7 Days a Week
                    </p>
                    <p className="text-gray-500 text-xs mt-1">
                      Late-night hospitality &amp; early morning companion dispatches
                    </p>
                  </div>
                </div>
              </div>

              {/* Privacy & Discretion Card */}
              <div className="p-6 bg-gradient-to-br from-gold-50 to-amber-50 rounded-2xl border-2 border-gold-200">
                <h4 className="font-bold text-[#1a1a2e] text-base mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-gold-600" /> ALINA VIP Discretion Guarantee
                </h4>
                <ul className="space-y-2 text-xs text-gray-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gold-600 flex-shrink-0" />
                    <span>Complete privacy: Client details are never stored or shared</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gold-600 flex-shrink-0" />
                    <span>100% genuine, photo-authenticated companion profiles</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gold-600 flex-shrink-0" />
                    <span>Chauffeur-driven private arrivals at luxury hotel suites</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column: High-End Confidential Booking Form */}
            <div className="lg:col-span-7 bg-[#faf6f2] p-8 md:p-10 rounded-3xl border border-gold-200/80 shadow-md">
              <div className="mb-8">
                <span className="text-xs font-bold text-gold-600 uppercase tracking-wider block mb-1">
                  Online Reservation
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] font-serif">
                  Book Your Companion Experience
                </h2>
                <p className="text-gray-600 text-sm mt-2">
                  Please provide your preferences below. Our coordinator will contact you privately within minutes.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 bg-white rounded-2xl border-2 border-gold-300 text-center shadow-sm">
                  <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-gold-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1a1a2e] font-serif mb-2">
                    Inquiry Received
                  </h3>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    Thank you for reaching out to ALINA VIP. Our concierge is reviewing your request and will connect with you shortly with complete discretion.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <a
                      href={`tel:${siteConfig.phone}`}
                      className="inline-flex items-center gap-2 bg-gold-600 hover:bg-gold-700 text-white px-6 py-3 rounded-full font-semibold text-sm transition-all shadow-md"
                    >
                      <Phone className="w-4 h-4" /> Call Directly for Urgent Request
                    </a>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-3 border border-gray-300 text-gray-700 hover:border-gold-500 rounded-full text-sm font-semibold transition-all"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold tracking-wider uppercase text-gray-700 mb-2">
                        Your Name / Alias <span className="text-gold-600">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3.5 text-sm text-gray-800 placeholder-gray-400 focus:border-gold-500 focus:outline-none transition-colors"
                        placeholder="e.g. Mr. Sharma"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold tracking-wider uppercase text-gray-700 mb-2">
                        Phone / WhatsApp <span className="text-gold-600">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3.5 text-sm text-gray-800 placeholder-gray-400 focus:border-gold-500 focus:outline-none transition-colors"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold tracking-wider uppercase text-gray-700 mb-2">
                        Preferred Companion Category
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3.5 text-sm text-gray-800 focus:border-gold-500 focus:outline-none transition-colors"
                      >
                        <option value="">Any Premium Companion</option>
                        <option value="Russian Escorts">Russian Escorts</option>
                        <option value="Model Escorts">Model Escorts</option>
                        <option value="VIP Escorts">VIP Escorts</option>
                        <option value="College Girls">College Girls</option>
                        <option value="Housewife Escorts">Housewife Escorts</option>
                        <option value="Independent Escorts">Independent Escorts</option>
                        <option value="Air Hostess Escorts">Air Hostess Escorts</option>
                        <option value="Celebrity Escorts">Celebrity Escorts</option>
                        <option value="Travel Escorts">Travel Escorts</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold tracking-wider uppercase text-gray-700 mb-2">
                        Your Gurgaon / NCR Location <span className="text-gold-600">*</span>
                      </label>
                      <select
                        required
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3.5 text-sm text-gray-800 focus:border-gold-500 focus:outline-none transition-colors"
                      >
                        <option value="">Select Destination Area</option>
                        <optgroup label="Central Business Hubs">
                          <option value="cyber-city">Cyber City</option>
                          <option value="mg-road">MG Road</option>
                          <option value="golf-course-road">Golf Course Road</option>
                          <option value="golf-course-extension-road">Golf Course Extension Road</option>
                        </optgroup>
                        <optgroup label="DLF City Phases">
                          <option value="dlf-phase-1">DLF Phase 1</option>
                          <option value="dlf-phase-2">DLF Phase 2</option>
                          <option value="dlf-phase-3">DLF Phase 3</option>
                          <option value="dlf-phase-4">DLF Phase 4</option>
                          <option value="dlf-phase-5">DLF Phase 5</option>
                        </optgroup>
                        <optgroup label="Corridors & Sectors">
                          <option value="sohna-road">Sohna Road</option>
                          <option value="sector-29">Sector 29</option>
                          <option value="sushant-lok">Sushant Lok</option>
                          <option value="huda-city-centre">HUDA City Centre</option>
                          <option value="manesar">Manesar</option>
                        </optgroup>
                        <optgroup label="Delhi & Airport">
                          <option value="aerocity">Aerocity (IGI Airport)</option>
                          <option value="mahipalpur">Mahipalpur</option>
                          <option value="dwarka">Dwarka</option>
                        </optgroup>
                        <optgroup label="All Other 108 Locations">
                          {locations.slice(0, 30).map((loc) => (
                            <option key={loc.slug} value={loc.slug}>
                              {loc.name}
                            </option>
                          ))}
                        </optgroup>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold tracking-wider uppercase text-gray-700 mb-2">
                        Engagement Style
                      </label>
                      <select
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3.5 text-sm text-gray-800 focus:border-gold-500 focus:outline-none transition-colors"
                      >
                        <option value="Hotel Outcall">5-Star Hotel Outcall</option>
                        <option value="Private Residence">Private Residence Outcall</option>
                        <option value="Dinner Date">Fine Dining Date</option>
                        <option value="Corporate Event">Corporate / Social Event</option>
                        <option value="Travel Escort">Travel / Weekend Gateway</option>
                        <option value="Overnight Stay">Overnight Companion</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold tracking-wider uppercase text-gray-700 mb-2">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3.5 text-sm text-gray-800 placeholder-gray-400 focus:border-gold-500 focus:outline-none transition-colors"
                        placeholder="private@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold tracking-wider uppercase text-gray-700 mb-2">
                      Special Requests / Notes
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white border border-gray-300 rounded-xl p-4 text-sm text-gray-800 placeholder-gray-400 focus:border-gold-500 focus:outline-none transition-colors resize-none"
                      placeholder="Please mention your preferred timing, specific qualities desired, or any private requests..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-neutral-900 font-bold rounded-xl text-base transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                  >
                    Confirm Private Booking Request →
                  </button>

                  <p className="text-center text-xs text-gray-500 mt-2">
                    🔒 All submissions are processed through encrypted, ephemeral channels. Your privacy is paramount.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Five-Star Hotel Outcall Service Hubs */}
      <section className="py-16 bg-[#faf6f2] text-gray-800">
        <div className="container-luxury">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#1a1a2e] mb-3 font-serif">
              Five-Star Hotel <span className="text-gold-600">Outcall Dispatches</span>
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto text-base">
              ALINA VIP specializes in swift, discreet outcall services to premier luxury hotels across Gurgaon and Delhi NCR.
            </p>
            <div className="gold-divider mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="bg-white p-5 rounded-2xl text-center shadow-sm border border-gold-200/50">
              <Building2 className="w-8 h-8 text-gold-600 mx-auto mb-2" />
              <h4 className="font-bold text-[#1a1a2e] text-sm">The Oberoi</h4>
              <p className="text-xs text-gray-500 mt-1">Cyber City</p>
              <span className="text-[11px] text-green-700 font-semibold mt-2 inline-block bg-green-50 px-2 py-0.5 rounded-full">
                20-25 min arrival
              </span>
            </div>

            <div className="bg-white p-5 rounded-2xl text-center shadow-sm border border-gold-200/50">
              <Building2 className="w-8 h-8 text-gold-600 mx-auto mb-2" />
              <h4 className="font-bold text-[#1a1a2e] text-sm">The Trident</h4>
              <p className="text-xs text-gray-500 mt-1">Udyog Vihar</p>
              <span className="text-[11px] text-green-700 font-semibold mt-2 inline-block bg-green-50 px-2 py-0.5 rounded-full">
                20-25 min arrival
              </span>
            </div>

            <div className="bg-white p-5 rounded-2xl text-center shadow-sm border border-gold-200/50">
              <Building2 className="w-8 h-8 text-gold-600 mx-auto mb-2" />
              <h4 className="font-bold text-[#1a1a2e] text-sm">The Leela</h4>
              <p className="text-xs text-gray-500 mt-1">Ambience Island</p>
              <span className="text-[11px] text-green-700 font-semibold mt-2 inline-block bg-green-50 px-2 py-0.5 rounded-full">
                15-20 min arrival
              </span>
            </div>

            <div className="bg-white p-5 rounded-2xl text-center shadow-sm border border-gold-200/50">
              <Building2 className="w-8 h-8 text-gold-600 mx-auto mb-2" />
              <h4 className="font-bold text-[#1a1a2e] text-sm">Grand Hyatt</h4>
              <p className="text-xs text-gray-500 mt-1">Golf Course Road</p>
              <span className="text-[11px] text-green-700 font-semibold mt-2 inline-block bg-green-50 px-2 py-0.5 rounded-full">
                25-30 min arrival
              </span>
            </div>

            <div className="bg-white p-5 rounded-2xl text-center shadow-sm border border-gold-200/50">
              <Building2 className="w-8 h-8 text-gold-600 mx-auto mb-2" />
              <h4 className="font-bold text-[#1a1a2e] text-sm">ITC Grand</h4>
              <p className="text-xs text-gray-500 mt-1">Hassanpur</p>
              <span className="text-[11px] text-green-700 font-semibold mt-2 inline-block bg-green-50 px-2 py-0.5 rounded-full">
                35-45 min arrival
              </span>
            </div>

            <div className="bg-white p-5 rounded-2xl text-center shadow-sm border border-gold-200/50">
              <Building2 className="w-8 h-8 text-gold-600 mx-auto mb-2" />
              <h4 className="font-bold text-[#1a1a2e] text-sm">JW Marriott</h4>
              <p className="text-xs text-gray-500 mt-1">Aerocity (IGI)</p>
              <span className="text-[11px] text-green-700 font-semibold mt-2 inline-block bg-green-50 px-2 py-0.5 rounded-full">
                20-25 min arrival
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Editorial Guide: How to Book */}
      <section className="py-16 md:py-20 bg-white text-gray-800">
        <div className="container-luxury max-w-4xl">
          <div className="prose-luxury bg-[#faf6f2] p-8 md:p-12 rounded-2xl border border-gold-200/60 shadow-sm">
            <h2 className="text-3xl font-bold text-[#1a1a2e] mb-6 font-serif">
              How to Book Escort Service in Gurgaon with ALINA VIP
            </h2>
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                Booking a luxury companion with <strong>ALINA VIP</strong> is designed to be effortless, sophisticated, and completely discreet. We respect your schedule and privacy at every stage of the engagement.
              </p>
              <div className="space-y-4 my-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-gold-600 text-white font-bold flex items-center justify-center flex-shrink-0 text-sm mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1a1a2e] text-base mb-1">
                      Choose Your Preferred Companion Profile
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Browse our verified collection of{' '}
                      <Link to="/call-girls" className="text-gold-600 hover:underline font-semibold">
                        call girls in Gurgaon
                      </Link>
                      ,{' '}
                      <Link to="/russian-escorts" className="text-gold-600 hover:underline font-semibold">
                        Russian escorts
                      </Link>
                      , or{' '}
                      <Link to="/model-escorts" className="text-gold-600 hover:underline font-semibold">
                        model escorts
                      </Link>
                      . Each profile features authentic photos and detailed attributes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-gold-600 text-white font-bold flex items-center justify-center flex-shrink-0 text-sm mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1a1a2e] text-base mb-1">
                      Share Your Time &amp; Location
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Specify whether you require an outcall to your 5-star hotel suite or luxury apartment in{' '}
                      <Link to="/locations/cyber-city" className="text-gold-600 hover:underline font-semibold">
                        Cyber City
                      </Link>
                      ,{' '}
                      <Link to="/locations/golf-course-road" className="text-gold-600 hover:underline font-semibold">
                        Golf Course Road
                      </Link>
                      , or{' '}
                      <Link to="/locations/dlf-phase-1" className="text-gold-600 hover:underline font-semibold">
                        DLF Phase 1–5
                      </Link>
                      .
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-gold-600 text-white font-bold flex items-center justify-center flex-shrink-0 text-sm mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1a1a2e] text-base mb-1">
                      Private &amp; Confidential Confirmation
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Contact our VIP booking manager via telephone at{' '}
                      <a href={`tel:${siteConfig.phone}`} className="text-gold-600 hover:underline font-bold">
                        {siteConfig.phoneDisplay}
                      </a>{' '}
                      or through our secure form. Your companion will arrive punctually with total discretion.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-500 pt-4 border-t border-gold-200/60">
                Official Reservation Portal:{' '}
                <a
                  href={siteConfig.url}
                  className="text-gold-600 hover:underline font-bold"
                >
                  {siteConfig.domain}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
