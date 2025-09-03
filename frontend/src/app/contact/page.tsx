export const metadata = {
  title: "Contact",
  description: "Reach out to our support team.",
};

export default function ContactPage() {
  return (
    <div className="container py-10 space-y-8">
      <div className="max-w-2xl space-y-3">
        <h1 className="text-3xl font-semibold">Contact Us</h1>
        <p className="text-gray-700">Have questions? We’re here to help you plan and book the perfect trip.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <form className="md:col-span-2 space-y-4 rounded-2xl border p-5">
          <div>
            <label className="mb-1 block text-xs font-medium text-gray-600">Name</label>
            <input className="h-10 w-full rounded-md border px-3 text-sm" />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-1 block text-xs font-medium text-gray-600">Email</label>
              <input type="email" className="h-10 w-full rounded-md border px-3 text-sm" />
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium text-gray-600">Phone</label>
              <input className="h-10 w-full rounded-md border px-3 text-sm" />
            </div>
          </div>
          <div>
            <label className="mb-1 block text-xs font-medium text-gray-600">Message</label>
            <textarea rows={5} className="w-full rounded-md border px-3 py-2 text-sm" />
          </div>
          <button className="h-10 rounded-full bg-primary px-6 text-white">Request Callback</button>
        </form>

        <div className="space-y-4 rounded-2xl border p-5">
          <div>
            <div className="font-medium">Support</div>
            <div className="text-sm text-gray-600">support@wandertrips.com</div>
            <div className="text-sm text-gray-600">+91-00000-00000</div>
          </div>
          <div className="aspect-[4/3] w-full overflow-hidden rounded-lg">
            <iframe
              title="Office Location"
              src="https://maps.google.com/maps?q=Connaught%20Place%2C%20New%20Delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <a href="https://wa.me/910000000000" target="_blank" className="inline-block rounded-full border px-4 py-2 text-sm">Chat on WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
