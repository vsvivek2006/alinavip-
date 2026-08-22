import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { testimonials } from '@/data/content';

export default function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-luxury">
        <div className="text-center mb-14">
          <p className="section-subtitle">Client Testimonials</p>
          <h2 className="section-title mb-4">
            What Our <span className="text-gradient-gold">Clients Say</span>
          </h2>
          <div className="gold-divider" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="luxury-card p-8 group hover:shadow-lg hover:shadow-gold-500/10"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} className="text-gold-500 fill-gold-500" />
                ))}
              </div>
              <p className="text-charcoal-300 text-sm leading-relaxed mb-6 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div>
                <p className="text-white font-sans text-sm font-medium">{t.name}</p>
                <p className="text-charcoal-500 text-xs mt-1">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
