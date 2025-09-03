import axios from "axios";
import type { Trip } from "@/types/trip";

export interface Testimonial {
  id: number;
  quote: string;
  avatar: string;
  name: string;
  title: string;
}

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000";

export const api = axios.create({
  baseURL: API_BASE,
});

export async function fetchTrips(): Promise<Trip[]> {
  const { data } = await api.get<Trip[]>("/api/trips");
  return data;
}

export async function fetchTripById(id: number): Promise<Trip> {
  const { data } = await api.get<Trip>(`/api/trips/${id}`);
  return data;
}

export async function fetchTripBySlug(slug: string): Promise<Trip | null> {
  try {
    const { data } = await api.get<Trip>(`/api/trips/slug/${slug}`);
    return data;
  } catch {
    const trips = await fetchTrips();
    return trips.find((t) => t.slug === slug) ?? null;
  }
}

export async function fetchTestimonials(): Promise<Testimonial[]> {
  const { data } = await api.get<Testimonial[]>("/api/testimonials");
  return data;
}
