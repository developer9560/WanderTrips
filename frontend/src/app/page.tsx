import Image from "next/image";
import SearchBar from "@/components/SearchBar";
import TripCard from "@/components/TripCard";
import PartnerLogos from "@/components/PartnerLogos";
import Testimonials from "@/components/Testimonials";
import AnimatedForm from "@/components/AnimatedForm";
import { trips_data } from "@/lib/dummy-data";


export const revalidate = 60;



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
          <a href="/trips" className="text-primary font-medium">Explore all →</a>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trips.slice(0, 6).map((t: any) => (
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
