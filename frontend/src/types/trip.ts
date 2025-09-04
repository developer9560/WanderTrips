export interface Review {
  id: number;
  name: string;
  rating: number; // 1-5
  comment: string;
  date?: string;
}

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
}

export interface Trip {
  id: number;
  slug: string;
  title: string;
  location: string;
  duration: number; // days
  rating: number;
  price: number; // discounted price in INR
  originalPrice?: number; // original price, if any
  availableDates?: string[];
  image: string; // cover
  gallery?: string[];
  difficulty?: "Easy" | "Moderate" | "Challenging";
  groupSize?: string | number;
  inclusions?: string[];
  exclusions?: string[];
  shortDescription?: string;
  description?: string;
  itinerary?: ItineraryDay[];
  reviews?: Review[];
}
