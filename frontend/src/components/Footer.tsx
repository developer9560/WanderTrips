import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-border/50 bg-white">
      <div className="container py-10 grid gap-8 md:grid-cols-4">
        <div className="space-y-2">
          <div className="font-bold text-xl"><span className="text-primary">Wander</span>Trips</div>
          <p className="text-sm text-gray-500">Curated adventures and group trips with trusted guides and seamless bookings.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><Link href="/about" className="hover:text-gray-900">About</Link></li>
            <li><Link href="/trips" className="hover:text-gray-900">Trips</Link></li>
            <li><Link href="/contact" className="hover:text-gray-900">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Support</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>support@wandertrips.com</li>
            <li>+91-00000-00000</li>
            <li>Mon–Fri 9:00–18:00 IST</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Legal</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><Link href="#" className="hover:text-gray-900">Terms</Link></li>
            <li><Link href="#" className="hover:text-gray-900">Privacy</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/50">
        <div className="container py-6 text-sm text-gray-500 flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} WanderTrips. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="https://instagram.com" target="_blank" className="hover:text-gray-700">Instagram</Link>
            <Link href="https://facebook.com" target="_blank" className="hover:text-gray-700">Facebook</Link>
            <Link href="https://x.com" target="_blank" className="hover:text-gray-700">X</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
