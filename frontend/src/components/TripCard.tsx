import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { formatCurrency } from "@/lib/utils";
import type { Trip } from "@/types/trip";

interface Props {
  trip: Trip;
}

export default function TripCard({ trip }: Props) {
  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-[16/10]">
        <Image
          src={trip.image || "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80&auto=format&fit=crop"}
          alt={trip.title}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 400px, 100vw"
        />
      </div>
      <CardContent className="space-y-3">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-semibold text-lg leading-tight">{trip.title}</h3>
            <div className="mt-1 flex items-center gap-1 text-sm text-gray-600">
              <MapPin size={16} /> {trip.location}
            </div>
          </div>
          <div className="flex items-center gap-1 text-sm text-gray-700"><Star size={16} className="text-yellow-500" /> {trip.rating.toFixed(1)}</div>
        </div>
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center gap-1"><Clock size={16} /> {trip.duration} days</div>
          <div className="font-semibold text-gray-900">{formatCurrency(trip.price)}</div>
        </div>
        <div className="flex items-center justify-between pt-2">
          <span className="text-sm text-gray-500">Starting at</span>
          <Link href={`/trips/${trip.slug}`}>
            <Button size="md">View Details</Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
