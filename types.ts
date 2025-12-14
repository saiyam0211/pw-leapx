import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  category: 'Tech' | 'Business';
  overview?: string;
  features?: string[];
  heroImage?: string;
}

export interface ExpertProfile {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  tags: string[];
}

export interface StepItem {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface BrandItem {
  id: string;
  name: string;
  logoUrl?: string; // Using text for simplicity in this demo if no logo available
  category: string;
}