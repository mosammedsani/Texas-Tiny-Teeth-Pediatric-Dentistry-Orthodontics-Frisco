export type ActiveView =
  | 'home'
  | 'about'
  | 'doctors'
  | 'services-pediatric'
  | 'services-ortho'
  | 'services-ortho-emergencies'
  | 'services-oral-surgery'
  | 'services-invisalign'
  | 'services-special-needs'
  | 'new-patients'
  | 'blog'
  | 'location-athens'
  | 'location-corinth'
  | 'location-corsicana'
  | 'location-frisco'
  | 'location-greenville'
  | 'location-irving'
  | 'location-melissa'
  | 'location-rowlett'
  | 'location-sachse'
  | 'location-terrell'
  | 'careers'
  | 'reviews'
  | 'contact';

export interface Doctor {
  id: string;
  name: string;
  title: string;
  bio: string;
  education: string[];
  funFact: string;
  favoriteToy: string;
  image: string;
  specialties: string[];
}

export interface ClinicLocation {
  id: string;
  name: string;
  phone: string;
  address: string;
  city: string;
  hours: string[];
  manager: string;
  mapEmbed?: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  color: string; // Tailwind color class or hex
  funPoints: string[];
  parentFaQs: { q: string; a: string }[];
}

export interface Review {
  id: string;
  parentName: string;
  childName?: string;
  rating: number;
  text: string;
  date: string;
  location: string;
}
