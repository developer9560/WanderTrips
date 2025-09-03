"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Button from "@/components/ui/Button";

export default function SearchBar() {
  const router = useRouter();
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [price, setPrice] = useState("any");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (destination) params.set("destination", destination);
    if (date) params.set("date", date);
    if (price !== "any") params.set("maxPrice", price);
    router.push(`/trips?${params.toString()}`);
  }

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 gap-3 rounded-2xl border border-border bg-white p-3 shadow-sm md:grid-cols-5">
      <div className="md:col-span-2">
        <label className="mb-1 block text-xs font-medium text-gray-600">Destination</label>
        <Input
          placeholder="Where to? e.g., Ladakh, Bali"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-gray-600">Date</label>
        <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-gray-600">Budget</label>
        <Select value={price} onChange={(e) => setPrice(e.target.value)}>
          <option value="any">Any</option>
          <option value="20000">Under ₹20k</option>
          <option value="50000">Under ₹50k</option>
          <option value="100000">Under ₹1L</option>
        </Select>
      </div>
      <div className="flex items-end">
        <Button type="submit" className="w-full h-10">Search</Button>
      </div>
    </form>
  );
}
