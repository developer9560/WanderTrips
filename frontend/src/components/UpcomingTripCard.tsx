import { motion } from 'framer-motion';
import Link from "next/link";
import Image from "next/image";
import { Trip } from "@/types/trip";
import { formatCurrency } from "@/lib/utils";

const formatDate = (date: string) => new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

export default function UpcomingTripCard({ trip }: { trip: Trip }) {
  const discount = trip.originalPrice && trip.originalPrice > trip.price ? trip.originalPrice - trip.price : 0;

  return (
    <motion.li 
      className="w-[300px] flex-shrink-0"
      whileHover={{ 
        y: -5,
        transition: { duration: 0.2 }
      }}
    >
      <Link href={`/trips/${trip.slug}`} className="block h-full">
        <div className="h-full bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:border-primary/50 hover:shadow-lg transition-all duration-300">
          <div className="relative h-48 w-full">
            <Image 
              src={trip.image} 
              alt={trip.title} 
              fill 
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 300px"
            />
            <div className="absolute bottom-0 left-0 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-tr-lg">
              <p className="text-xs font-medium text-gray-700">⏳ {trip.duration - 1} nights / {trip.duration} days</p>
            </div>
          </div>
          <div className="p-4 space-y-3">
            <h3 className="text-lg font-semibold text-gray-800 line-clamp-2 h-14">{trip.title}</h3>
            <div className="flex items-baseline gap-2">
              <p className="text-xl font-bold text-primary">{formatCurrency(trip.price)}</p>
              {trip.originalPrice && (
                <p className="text-sm text-gray-500 line-through">{formatCurrency(trip.originalPrice)}</p>
              )}
              {discount > 0 && (
                <p className="text-sm font-semibold text-red-500 ml-auto">Save {formatCurrency(discount)}</p>
              )}
            </div>
            {trip.availableDates && trip.availableDates.length > 0 && (
              <div className="pt-2 border-t border-gray-100">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-gray-500">🗓️</span>
                  <p className="text-xs">{trip.availableDates.slice(0, 2).map(formatDate).join(', ')} {trip.availableDates.length > 2 ? `+${trip.availableDates.length - 2} more` : ''}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </Link>
    </motion.li>
  );
}