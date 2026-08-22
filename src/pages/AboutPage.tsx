import { Link } from 'react-router-dom';
import { Phone, ShieldCheck, Lock, BadgeCheck, Star, Award, Users, Target, Eye } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumb from '@/components/Breadcrumb';
import CTASection from '@/components/CTASection';
import { siteConfig } from '@/data/siteConfig';

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About ALINA VIP | Premium Luxury Escort Service in Gurgaon"
        description="Learn about ALINA VIP, Gurgaon's premier luxury escort service. Discover our mission, values, and commitment to discretion, quality, and client satisfaction."
        keywords="about ALINA VIP, luxury escort service Gurgaon, premium escort service Gurgaon, VIP call girl service"
        canonical={`${siteConfig.url}/about`}
        breadcrumbs={[
          { name: 'Home', url: siteConfig.url },
          { name: 'About', url: `${siteConfig.url}/about` },
        ]}
      />

      <Breadcrumb items={[{ name: 'Home', path: '/' }, { name: 'About Us' }]} />

      <section className="py-16 md:py-24">
        <div className="container-luxury">
          <div className="text-center mb-16">
            <p className="section-subtitle">About Us</p>
            <h1 className="section-title mb-6">
              The Story of <span className="text-gradient-gold">ALINA VIP</span>
            </h1>
            <div className="gold-divider" />
          </div>

          <div className="max-w-4xl mx-auto prose-luxury">
            <h2>Our Story</h2>
            <p>
              ALINA VIP was founded with a singular vision: to redefine the luxury escort service experience in Gurgaon by providing a service that is sophisticated, professional, and uncompromising in its commitment to quality and discretion. In an industry often characterised by inconsistency and a lack of professionalism, we saw an opportunity to create something different — a service that treats escort service as an art form and operates with the standards of a luxury hospitality brand.
            </p>
            <p>
              Our journey began with a simple observation: discerning gentlemen in Gurgaon deserved a escort service that matched their lifestyle and expectations. The city had become one of India&apos;s most cosmopolitan centres, home to business leaders, entrepreneurs, and professionals from around the world. Yet the options for quality escort service were limited and often fell short of the standards that these individuals expected in other aspects of their lives. ALINA VIP was created to fill this gap.
            </p>
            <p>
              From the outset, we made several key decisions that would shape our service. We decided that every call girl in our portfolio would undergo a thorough verification process, ensuring that profiles were genuine and accurate. We committed to complete discretion in all client interactions, recognising that privacy is a fundamental need for our clientele. And we chose to focus on quality over quantity, maintaining a curated selection of call girls rather than an exhaustive but inconsistent roster.
            </p>

            <h2>Our Mission</h2>
            <p>
              Our mission is to provide the finest luxury escort service in Gurgaon, characterised by verified profiles, exceptional call girls, and unwavering discretion. We strive to create experiences that are memorable, sophisticated, and tailored to the unique preferences of each client. Every engagement is an opportunity to demonstrate our commitment to excellence, and we approach each one with the attention and care it deserves.
            </p>
            <p>
              We believe that luxury escort service is about more than just physical beauty. It is about the complete experience of spending time with someone who is cultured, articulate, and genuinely engaging. It is about the comfort of knowing that your privacy is protected, your preferences are respected, and your experience will be of the highest quality. This belief guides everything we do, from the call girls we select to the way we handle bookings and client interactions.
            </p>

            <h2>Our Values</h2>
            <p>
              At the core of ALINA VIP are a set of values that define our service and guide our decisions. These values are not just words on a page — they are the principles that we live by every day and the standards against which we measure our performance.
            </p>

            <h3>Discretion</h3>
            <p>
              We treat every client interaction with the utmost confidentiality. Your personal information, booking details, and preferences are kept strictly private. Our call girls are trained to maintain discretion in all aspects of their engagements, from their arrival and departure to their conduct during and after the engagement. We understand that for many of our clients, privacy is not just a preference but a necessity, and we have built our service around this understanding.
            </p>

            <h3>Quality</h3>
            <p>
              We maintain exacting standards in every aspect of our service, from call girl selection to client support. Our call girls are not only beautiful but also educated, articulate, and socially adept. We invest in their training and development to ensure that they are equipped to provide an exceptional experience. Our booking process is designed to be smooth and professional, and our client support is available around the clock to address any questions or concerns.
            </p>

            <h3>Authenticity</h3>
            <p>
              Every profile on our platform is verified through a rigorous process that includes identity verification, photo authentication, and background screening. We believe that authenticity is the foundation of trust, and we are committed to ensuring that what you see is exactly what you get. This commitment to authenticity extends to our communication with clients — we are transparent about our services, our rates, and our policies.
            </p>

            <h3>Professionalism</h3>
            <p>
              We operate with the standards of a luxury hospitality brand. Every interaction, from the initial phone call to the end of an engagement, is handled with professionalism and care. Our booking team is trained to be courteous, responsive, and discreet. Our call girls are punctual, well-groomed, and appropriately dressed for every occasion. We take pride in the professionalism of our service and continuously work to improve it.
            </p>

            <h2>What Makes Us Different</h2>
            <p>
              In a competitive industry, ALINA VIP stands apart through a combination of factors that together create a service experience unlike any other in Gurgaon. Our rigorous verification process ensures that every profile is genuine, giving our clients confidence in their choices. Our curated selection of call girls represents a diverse range of personalities, backgrounds, and skills, ensuring that we can match the right call girl to each client&apos;s preferences.
            </p>
            <p>
              Our commitment to discretion is comprehensive and multi-layered. We protect client information at every stage of the booking process, train our call girls in the art of discretion, and design our digital presence with privacy in mind. Our 24/7 availability means that we are always there when you need us, whether it is for a planned engagement or a last-minute request.
            </p>
            <p>
              We also pride ourselves on our client support. Our booking team is not just a point of contact but a group of professionals who understand the needs of our clientele and are dedicated to providing a personalised and responsive service. We gather feedback after every engagement and use it to improve our service, ensuring that we are always evolving to meet the needs of our clients.
            </p>

            <h2>Our Commitment to Safety</h2>
            <p>
              Safety is a priority at ALINA VIP, both for our clients and our call girls. Our verification process is designed not only to ensure authenticity but also to create a safe environment for all parties. We screen our call girls thoroughly and provide them with guidelines on safety practices. We also respect the boundaries and comfort levels of our call girls, ensuring that all engagements are consensual and respectful.
            </p>
            <p>
              For our clients, we provide a safe and reliable way to arrange escort service. Our verified profiles give you confidence in your choices, and our professional booking process ensures that your engagement is arranged properly. We are always available to address any concerns and to ensure that your experience with ALINA VIP is safe, enjoyable, and memorable.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about our service or would like to make a booking, please do not hesitate to contact us. You can call us at <a href={`tel:${siteConfig.phone}`}>{siteConfig.phoneDisplay}</a> or visit our <Link to="/contact">contact page</Link> to send us a message. We are available 24/7 and look forward to providing you with an exceptional luxury escort service experience.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
