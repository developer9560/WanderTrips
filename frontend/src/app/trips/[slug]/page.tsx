import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { trips_data } from "@/lib/dummy-data";
import { formatCurrency } from "@/lib/utils";
import type { Trip } from "@/types/trip";

export const revalidate = 120;

export async function generateStaticParams() {
  return trips_data.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const trip = trips_data.find((t) => t.slug === params.slug);
  if (!trip) return { title: "Trip not found" };
  return {
    title: `${trip.title} — ${trip.duration} days` ,
    description: trip.shortDescription || trip.description?.slice(0, 140) || "Trip details",
    openGraph: {
      images: [trip.image],
    },
  };
}

function TripJsonLd({ trip }: { trip: Trip }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Trip",
    name: trip.title,
    description: trip.shortDescription || trip.description,
    image: [trip.image, ...(trip.gallery || [])],
    offers: {
      "@type": "Offer",
      price: trip.price,
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url: `https://www.wandertrips.example/trips/${trip.slug}`,
    },
    aggregateRating: trip.rating
      ? {
          "@type": "AggregateRating",
          ratingValue: trip.rating,
          reviewCount: (trip.reviews || []).length || 10,
        }
      : undefined,
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}

export default async function TripDetail({ params }: { params: { slug: string } }) {
  const trip = trips_data.find((t) => t.slug === params.slug);
  if (!trip) notFound();

  return (
    <div className="space-y-10">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[320px]">
        <Image src={trip!.image} alt={trip!.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="container relative z-10 flex h-full items-end pb-8 text-white">
          <div>
            <h1 className="text-3xl font-bold md:text-4xl">{trip!.title}</h1>
            <p className="text-white/90">{trip!.location} • {trip!.duration} days</p>
          </div>
        </div>
      </section>

      <section className="container grid gap-8 md:grid-cols-3">
        {/* Main */}
        <div className="md:col-span-2 space-y-6">
          {trip!.gallery && trip!.gallery.length > 0 && (
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
              {trip!.gallery.slice(0, 6).map((src, i) => (
                <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <Image src={src} alt={`${trip!.title} photo ${i + 1}`} fill className="object-cover" />
                </div>
              ))}
            </div>
          )}

          {trip!.itinerary && (
            <div className="space-y-3">
              <h2 className="text-xl font-semibold">Daily Itinerary</h2>
              <div className="space-y-3">
                {trip!.itinerary.map((d) => (
                  <div key={d.day} className="rounded-xl border p-4">
                    <div className="font-medium">Day {d.day}: {d.title}</div>
                    <p className="text-sm text-gray-600 mt-1">{d.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {trip!.reviews && (
            <div className="space-y-3">
              <h2 className="text-xl font-semibold">Reviews & Ratings</h2>
              <div className="space-y-3">
                {trip!.reviews.map((r) => (
                  <div key={r.id} className="rounded-xl border p-4">
                    <div className="flex items-center justify-between">
                      <div className="font-medium">{r.name}</div>
                      <div className="text-sm">⭐ {r.rating.toFixed(1)}</div>
                    </div>
                    <p className="text-sm text-gray-700 mt-1">{r.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Aside */}
        <aside className="h-max space-y-4 rounded-2xl border p-5">
          <div>
            <div className="text-sm text-gray-600">Starting from</div>
            <div className="text-2xl font-semibold">{formatCurrency(trip!.price)}</div>
          </div>
          <Link href={`/checkout?trip=${encodeURIComponent(trip!.slug)}`} className="block rounded-full bg-primary px-6 py-3 text-center text-white">
            Book Now
          </Link>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>• Difficulty: {trip!.difficulty || "Moderate"}</li>
            <li>• Group size: {trip!.groupSize || "10-20"}</li>
            {trip!.inclusions && <li>• Inclusions: {trip!.inclusions.slice(0,3).join(", ")}…</li>}
          </ul>
        </aside>
      </section>

      {/* JSON-LD */}
      <TripJsonLd trip={trip!} />
    </div>
  );
}
