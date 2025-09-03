import Link from "next/link";
import TripCard from "@/components/TripCard";
import PartnerLogos from "@/components/PartnerLogos";
import Testimonials from "@/components/Testimonials";
import { Trip } from "@/types/trip";

export const revalidate = 60;

const trips_data: Trip[] = [
  {
    "id": 1,
    "slug": "himalayan-adventure",
    "title": "Himalayan Adventure",
    "location": "Nepal",
    "duration": 14,
    "rating": 4.8,
    "price": 25000,
    "image": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80&auto=format&fit=crop",
    "shortDescription": "A two-week trek through the heart of the Himalayas.",
    "difficulty": "Challenging",
    "groupSize": "10-15",
    "inclusions": ["Guide", "Meals", "Permits"],
    "exclusions": ["Flights", "Insurance"],
    "gallery": [
      "https://images.unsplash.com/photo-1500048993953-d23a436266cf?w=1200&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80&auto=format&fit=crop",
    ],
    "itinerary": [
      { "day": 1, "title": "Arrive & Briefing", "description": "Meet the crew and prep for the trek." },
      { "day": 2, "title": "Acclimatization", "description": "Light hike and gear check." },
    ],
    "reviews": [
      { "id": 1, "name": "Aditi", "rating": 4.8, "comment": "Spectacular views and great guides!" }
    ],
  },
  {
    "id": 2,
    "slug": "sahara-desert-expedition",
    "title": "Sahara Desert Expedition",
    "location": "Morocco",
    "duration": 7,
    "rating": 4.9,
    "price": 18000,
    "image": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80&auto=format&fit=crop",
    "shortDescription": "Ride the dunes and sleep under the stars.",
    "difficulty": "Moderate",
    "groupSize": "8-12",
  },
  {
    "id": 3,
    "slug": "amazon-rainforest-discovery",
    "title": "Amazon Rainforest Discovery",
    "location": "Brazil",
    "duration": 10,
    "rating": 4.7,
    "price": 22000,
    "image": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80&auto=format&fit=crop",
    "shortDescription": "Explore the jungle with local naturalists.",
    "difficulty": "Moderate",
    "groupSize": "10-20",
  },
]

export default async function Home() {
  const trips = trips_data;

  return (
    <div className="space-y-12">




      {/* Hero */}
      <section className="relative overflow-hidden h-[70vh] z-[-1]"> 
        <div className="absolute inset-0 z-[-1]">

          <video autoPlay loop muted className="w-full h-full object-cover z-[-1]">
            <source src="/video/background_video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="container py-20 md:py-28 text-white">
          <div className="max-w-2xl space-y-4">
            <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
              Curated Adventures & Group Trips
            </h1>
            <p className="text-white/90">
              Discover handpicked experiences across the Himalayas, deserts, beaches, and beyond.
            </p>
          </div>
          <div className="mt-6 max-w-4xl">
            {/* <SearchBar /> */}
          </div>
          {/* <AnimatedForm /> */}
        </div>
      </section>

      

      {/* Featured trips */}
      <section className="container ">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-secondary" >Featured Trips</h2>
            <p className="text-sm text-gray-600">Handpicked experiences our travelers love</p>
          </div>
          <Link href="/trips" className="text-primary font-medium">Explore all →</Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trips.slice(0, 6).map((t) => (
            <TripCard key={t.id} trip={t} />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="container">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold">Loved by Travelers</h2>
          <p className="text-sm text-gray-600">Real stories from real trips</p>
        </div>
        <Testimonials />
      </section>

      {/* Partners */}
      <section className="container pb-12">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold">Trusted Partners</h2>
        </div>
        <PartnerLogos />
      </section>
    </div>
  );
}
