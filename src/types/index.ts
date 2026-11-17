export type Language = 'hy' | 'en' | 'ru';

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  isCoreSpecialization?: boolean;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  scopeNote: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'reconstruction' | 'capital' | 'assembly';
  location: string;
  year: string;
  image: string;
  scope: string;
  description: string;
  features: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}
