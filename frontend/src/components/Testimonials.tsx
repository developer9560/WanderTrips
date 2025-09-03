import Image from "next/image";

export const revalidate = 120;

interface Testimonial {
    id: number;
    quote: string;
    avatar: string;
    name: string;
    title: string;
}

export default async function Testimonials() {
const testimonials: Testimonial[] = [
    {
        "id": 1,
        "quote": "\"An unforgettable journey! The attention to detail and the amazing guides made this the trip of a lifetime.\"",
        "avatar": "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=200&q=80&auto=format&fit=crop",
        "name": "Jane Doe",
        "title": "Solo Traveler",
    },
    {
        "id": 2,
        "quote": "\"WanderTips exceeded all my expectations. The Sahara trip was magical. Highly recommended!\"",
        "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80&auto=format&fit=crop",
        "name": "John Smith",
        "title": "Adventurer",
    },
    {
        "id": 3,
        "quote": "\"The best travel agency I have ever used. The team is professional, friendly, and knowledgeable.\"",
        "avatar": "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&q=80&auto=format&fit=crop",
        "name": "Emily White",
        "title": "Family Traveler",
    },
]
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {testimonials.map((t) => (
        <figure key={t.id} className="rounded-2xl border border-border bg-white p-6 shadow-sm">
          <blockquote className="text-gray-700 leading-relaxed">{t.quote}</blockquote>
          <figcaption className="mt-4 flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-full">
              <Image src={t.avatar || "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=200&q=80&auto=format&fit=crop"} alt={t.name} fill className="object-cover" />
            </div>
            <div>
              <div className="text-sm font-medium">{t.name}</div>
              <div className="text-xs text-gray-500">{t.title}</div>
            </div>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
