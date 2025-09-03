import TripCard from "@/components/TripCard";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import { trips_data } from "@/lib/dummy-data";
import { Trip } from "@/types/trip";

export const revalidate = 60;

interface SearchParams {
  destination?: string;
  maxPrice?: string;
  sort?: string;
}

export default async function TripsPage({ searchParams }: { searchParams: SearchParams }) {
  const trips = trips_data;

  const destination = (searchParams.destination || "").toLowerCase();
  const maxPrice = parseInt(searchParams.maxPrice || "0", 10) || undefined;
  const sort = searchParams.sort || "popular";

  let filtered: Trip[] = trips.filter(
    (t) =>
      !destination ||
      t.location?.toLowerCase().includes(destination) ||
      t.title?.toLowerCase().includes(destination)
  );
  if (maxPrice) filtered = filtered.filter((t) => t.price <= maxPrice);

  if (sort === "price-asc") filtered.sort((a, b) => a.price - b.price);
  if (sort === "price-desc") filtered.sort((a, b) => b.price - a.price);
  if (sort === "duration") filtered.sort((a, b) => a.duration - b.duration);

  return (
    <div className="container py-8">
      <h1 className="text-2xl font-semibold">Find Your Next Trip</h1>
      <p className="text-sm text-gray-600">Browse curated adventures. Use filters to narrow results.</p>

      {/* Filters */}
      <form className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-6">
        <div className="md:col-span-2">
          <Input name="destination" placeholder="Destination or trip name" defaultValue={searchParams.destination || ""} />
        </div>
        <div>
          <Select name="maxPrice" defaultValue={searchParams.maxPrice || ""}>
            <option value="">Any Budget</option>
            <option value="20000">Under ₹20k</option>
            <option value="50000">Under ₹50k</option>
            <option value="100000">Under ₹1L</option>
          </Select>
        </div>
        <div>
          <Select name="sort" defaultValue={sort}>
            <option value="popular">Popular</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="duration">Duration</option>
          </Select>
        </div>
        <div className="col-span-2 md:col-span-1">
          <button type="submit" className="h-10 w-full rounded-md bg-primary text-white">Apply</button>
        </div>
      </form>

      {/* Grid */}
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((t) => (
          <TripCard key={t.id} trip={t} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="mt-12 rounded-2xl border border-dashed p-8 text-center text-gray-600">
          No trips match your filters. Try adjusting your search.
        </div>
      )}
    </div>
  );
}
