export const metadata = {
  title: "About Us",
  description: "Our story, mission, and team.",
};

export default function AboutPage() {
  return (
    <div className="container py-10 space-y-8">
      <div className="max-w-2xl space-y-3">
        <h1 className="text-3xl font-semibold">About WanderTrips</h1>
        <p className="text-gray-700">We curate exceptional group travel experiences across the globe. Our local experts and experienced guides ensure safety, comfort, and unforgettable memories.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {["Curated Itineraries", "Trusted Guides", "Seamless Booking"].map((h) => (
          <div key={h} className="rounded-2xl border p-5">
            <h3 className="font-medium">{h}</h3>
            <p className="text-sm text-gray-600 mt-1">Handpicked experiences, vetted partners, and transparent pricing.</p>
          </div>
        ))}
      </div>

      <div>
        <h2 className="text-2xl font-semibold">Our Team</h2>
        <p className="text-sm text-gray-600">We are passionate travelers and logistics professionals.</p>
        <div className="mt-4 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="rounded-2xl border p-5">
              <div className="h-32 rounded bg-muted" />
              <div className="mt-3 font-medium">Team Member {i + 1}</div>
              <div className="text-sm text-gray-600">Travel Expert</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
