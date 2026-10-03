export type WebsiteType =
  | 'Business Website'
  | 'Salon Website'
  | 'Portfolio'
  | 'E-commerce'
  | 'Landing Page'
  | 'School / Education'
  | 'Personal Website'
  | 'Custom Website'
  | 'Other';

export type BudgetTier =
  | '₹5,000 – ₹10,000'
  | '₹10,000 – ₹20,000'
  | '₹20,000 – ₹50,000'
  | '₹50,000+';

export type PreferredStyle =
  | 'Modern'
  | 'Minimal'
  | 'Luxury'
  | 'Dark / Premium'
  | 'Colorful'
  | 'AI / Futuristic'
  | 'Not Sure';

export interface InquiryFormData {
  fullName: string;
  email: string;
  instagramId?: string;
  phone?: string;
  businessName?: string;
  websiteType: WebsiteType | '';
  budget: BudgetTier | '';
  description: string;
  preferredStyle?: PreferredStyle | '';
  expectedDeadline?: string;
}

export interface FormErrors {
  fullName?: string;
  email?: string;
  websiteType?: string;
  budget?: string;
  description?: string;
}

export interface ProjectConcept {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  tagline: string;
  image: string;
  description: string;
  highlights: string[];
  features: string[];
  techStack: string[];
  statusLabel: 'Concept / Sample';
}
