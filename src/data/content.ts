export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  text: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Rajesh K.',
    location: 'DLF Phase 3, Gurgaon',
    rating: 5,
    text: 'ALINA VIP provided an exceptional experience from start to finish. The call girl was elegant, well-spoken, and perfectly suited to the occasion. The booking process was smooth and entirely discreet. I will definitely use their services again.',
  },
  {
    name: 'Vikram S.',
    location: 'Cyber City, Gurgaon',
    rating: 5,
    text: 'I have used several call girl services in the NCR, but ALINA VIP stands apart. The level of professionalism, the quality of call girls, and the discretion they maintain is unmatched. Highly recommended for discerning gentlemen.',
  },
  {
    name: 'Arjun M.',
    location: 'Golf Course Road, Gurgaon',
    rating: 5,
    text: 'The call girl I booked was exactly as described on the profile — beautiful, intelligent, and sophisticated. She accompanied me to a business dinner and was the perfect conversationalist. Thank you, ALINA VIP, for a memorable evening.',
  },
  {
    name: 'Sanjay R.',
    location: 'MG Road, Gurgaon',
    rating: 5,
    text: 'What impressed me most about ALINA VIP was their attention to detail. From the initial phone call to the end of the evening, everything was handled with professionalism and class. The call girl was punctual, well-groomed, and delightful company.',
  },
  {
    name: 'Karan B.',
    location: 'Sohna Road, Gurgaon',
    rating: 5,
    text: 'I was initially hesitant about using a call girl service, but ALINA VIP put all my concerns to rest. Their verification process and commitment to discretion made me feel completely comfortable. The experience exceeded my expectations.',
  },
  {
    name: 'Aditya G.',
    location: 'Sushant Lok, Gurgaon',
    rating: 5,
    text: 'I booked a travel call girl through ALINA VIP for a weekend getaway, and it was one of the best decisions I have made. The call girl was well-travelled, cultured, and made the trip truly memorable. Five stars without hesitation.',
  },
];

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    slug: 'dinner-escort-service',
    title: 'Dinner Escort Service',
    shortDescription: 'Elegant call girls for fine dining experiences.',
    description: 'Our dinner escort service provides you with a sophisticated partner for fine dining experiences. Whether it is a romantic dinner for two, a business dinner, or a celebration, our call girls are well-versed in dining etiquette and social grace.',
    icon: 'UtensilsCrossed',
  },
  {
    slug: 'event-escort-service',
    title: 'Event Escort Service',
    shortDescription: 'Refined call girls for social and corporate events.',
    description: 'Our event escort service is designed for clients who need a polished partner for social gatherings, corporate events, and high-society functions. Our call girls are socially adept and present themselves with elegance.',
    icon: 'Calendar',
  },
  {
    slug: 'travel-escort-service',
    title: 'Travel Escort Service',
    shortDescription: 'Cultured call girls for luxury travel.',
    description: 'Our travel escort service offers you a cultured and adaptable partner for domestic and international travel. Our call girls are well-travelled and skilled at making any journey more enjoyable and memorable.',
    icon: 'Plane',
  },
  {
    slug: 'party-escort-service',
    title: 'Party Escort Service',
    shortDescription: 'Vibrant call girls for exclusive parties.',
    description: 'Our party escort service provides you with a vibrant and engaging partner for exclusive parties, nightclub visits, and social gatherings. Our call girls know how to have fun while maintaining elegance.',
    icon: 'PartyPopper',
  },
  {
    slug: 'business-escort-service',
    title: 'Business Escort Service',
    shortDescription: 'Professional call girls for corporate engagements.',
    description: 'Our business escort service is tailored for corporate clients who need a sophisticated partner for business dinners, client meetings, and professional networking events. Our call girls are educated and professional.',
    icon: 'Briefcase',
  },
  {
    slug: 'private-escort-service',
    title: 'Private Escort Service',
    shortDescription: 'Discreet call girls for private engagements.',
    description: 'Our private escort service offers you a discreet and engaging partner for private engagements. Whether it is a quiet evening at home or a private celebration, our call girls provide delightful company.',
    icon: 'Lock',
  },
];
