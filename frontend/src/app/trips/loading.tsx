export default function Loading() {
  return (
    <div className="container py-8">
      <div className="h-8 w-48 animate-pulse rounded bg-muted" />
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="aspect-[16/10] animate-pulse rounded-2xl bg-muted" />
        ))}
      </div>
    </div>
  );
}
