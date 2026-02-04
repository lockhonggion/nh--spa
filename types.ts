export type Language = 'vi' | 'en';

export interface Service {
  id: string;
  title_en: string;
  description_en: string;
  title_vi: string;
  description_vi: string;
  iconName: 'Sparkles' | 'Flower' | 'Activity' | 'Smile'; 
  duration_en: string;
  duration_vi: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  content: string;
  date: string;
}

export interface BookingFormData {
  name: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  notes: string;
}
