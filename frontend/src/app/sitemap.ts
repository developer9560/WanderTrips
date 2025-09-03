import { MetadataRoute } from "next";
import { trips_data } from "@/lib/dummy-data";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = "https://www.wandertrips.example";

  const tripUrls = trips_data.map((trip) => ({
    url: `${base}/trips/${trip.slug}`,
    lastModified: new Date(),
  }));

  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/trips`, lastModified: new Date() },
    { url: `${base}/about`, lastModified: new Date() },
    { url: `${base}/contact`, lastModified: new Date() },
    ...tripUrls,
  ];
}
