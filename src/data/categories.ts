export interface Category {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  icon: string;
}

export const categories: Category[] = [
  {
    slug: 'russian-call-girls',
    name: 'Russian Call Girls',
    shortDescription: 'Exotic European call girls with elegance and charm.',
    description: 'Our Russian call girls represent the pinnacle of European elegance and exotic beauty. These call girls are carefully selected for their sophistication, conversational fluency, and refined social grace, making them ideal for luxury events, fine dining, and private engagements.',
    icon: 'Crown',
  },
  {
    slug: 'vip-call-girls',
    name: 'VIP Call Girls',
    shortDescription: 'Elite call girls for the most discerning clientele.',
    description: 'Our VIP call girls cater to clients who expect nothing but the absolute finest. These call girls are handpicked for their exceptional beauty, intelligence, and ability to navigate high-society environments with poise and discretion.',
    icon: 'Star',
  },
  {
    slug: 'high-profile-girls',
    name: 'High Profile Girls',
    shortDescription: 'Sophisticated call girls with impeccable social presence.',
    description: 'Our high-profile call girls are educated, well-spoken, and socially adept. They are perfect for corporate events, luxury travel, and occasions where you need a call girl who can engage in meaningful conversation and present herself with grace.',
    icon: 'Gem',
  },
  {
    slug: 'college-girls',
    name: 'College Girls',
    shortDescription: 'Young, vibrant call girls full of energy and enthusiasm.',
    description: 'Our college girl call girls bring youthful energy, fresh perspectives, and a vibrant spirit to every encounter. These well-educated call girls are ideal for casual outings, city tours, and relaxed social engagements.',
    icon: 'GraduationCap',
  },
  {
    slug: 'independent-girls',
    name: 'Independent Girls',
    shortDescription: 'Self-assured call girls who operate with complete autonomy.',
    description: 'Our independent call girls manage their own schedules and engagements, ensuring a personalised and authentic experience. These call girls value discretion and professionalism above all else.',
    icon: 'User',
  },
  {
    slug: 'air-hostess',
    name: 'Air Hostess Escorts',
    shortDescription: 'Groomed, elegant call girls with a cosmopolitan flair.',
    description: 'Our air hostess call girls are known for their impeccable grooming, polished manners, and cosmopolitan outlook. They are well-travelled, cultured, and comfortable in diverse social settings.',
    icon: 'Plane',
  },
  {
    slug: 'model-escorts',
    name: 'Model Escorts',
    shortDescription: 'Stunning call girls with professional modelling backgrounds.',
    description: 'Our model escorts are call girls with professional modelling experience. They possess striking features, confident presence, and an understanding of aesthetics that elevates any occasion.',
    icon: 'Camera',
  },
  {
    slug: 'celebrity-escorts',
    name: 'Celebrity Escorts',
    shortDescription: 'Exclusive call girls from the entertainment industry.',
    description: 'Our celebrity escorts are call girls associated with the entertainment and fashion industries. These engagements are arranged with the highest level of discretion and exclusivity.',
    icon: 'Award',
  },
  {
    slug: 'travel-escorts',
    name: 'Travel Escorts',
    shortDescription: 'Cultured call girls for luxury travel and getaways.',
    description: 'Our travel call girls are ideal for luxury getaways, business trips, and international travel. They are well-travelled, adaptable, and skilled at making any journey more enjoyable and memorable.',
    icon: 'Luggage',
  },
  {
    slug: 'premium-escorts',
    name: 'Premium Escorts',
    shortDescription: 'The finest all-round call girls for any occasion.',
    description: 'Our premium call girls represent the very best of what we offer. These call girls are versatile, cultured, and capable of adapting to any social or private setting with effortless elegance.',
    icon: 'Sparkles',
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
