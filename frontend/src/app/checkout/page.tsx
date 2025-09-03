"use client";
import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

const steps = ["Trip Details", "Traveler Info", "Payment"] as const;

type Step = typeof steps[number];

export default function CheckoutPage() {
  const params = useSearchParams();
  const presetTrip = params.get("trip") || "";
  const [step, setStep] = useState<Step>("Trip Details");

  // Step 1
  const [tripSlug, setTripSlug] = useState(presetTrip);
  const [date, setDate] = useState("");
  const [travelers, setTravelers] = useState(1);

  // Step 2
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [passport, setPassport] = useState("");

  const canContinue = useMemo(() => {
    if (step === "Trip Details") return Boolean(tripSlug) && Boolean(date) && travelers > 0;
    if (step === "Traveler Info") return Boolean(name) && Boolean(email) && Boolean(phone);
    return true;
  }, [step, tripSlug, date, travelers, name, email, phone]);

  function next() {
    const idx = steps.indexOf(step);
    if (idx < steps.length - 1) setStep(steps[idx + 1]);
  }

  function back() {
    const idx = steps.indexOf(step);
    if (idx > 0) setStep(steps[idx - 1]);
  }

  async function payNow() {
    // TODO: integrate Stripe/Razorpay via backend intent/order endpoint
    alert("Payment gateway integration pending. This will create an order and redirect.");
  }

  return (
    <div className="container py-8">
      <h1 className="text-2xl font-semibold">Checkout</h1>
      <p className="text-sm text-gray-600">Complete your booking in three quick steps.</p>

      <ol className="mt-6 flex items-center gap-3 text-sm">
        {steps.map((s) => (
          <li key={s} className={`rounded-full border px-3 py-1 ${s === step ? "border-primary text-primary" : "text-gray-600"}`}>{s}</li>
        ))}
      </ol>

      <div className="mt-6 rounded-2xl border p-5">
        {step === "Trip Details" && (
          <div className="grid gap-4 md:grid-cols-3">
            <div className="md:col-span-2">
              <label className="mb-1 block text-xs font-medium text-gray-600">Trip Slug</label>
              <Input placeholder="e.g., himalayan-adventure" value={tripSlug} onChange={(e) => setTripSlug(e.target.value)} />
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium text-gray-600">Start Date</label>
              <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium text-gray-600">Travelers</label>
              <Input type="number" min={1} value={travelers} onChange={(e) => setTravelers(parseInt(e.target.value, 10) || 1)} />
            </div>
          </div>
        )}

        {step === "Traveler Info" && (
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-1 block text-xs font-medium text-gray-600">Full Name</label>
              <Input value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium text-gray-600">Email</label>
              <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium text-gray-600">Phone</label>
              <Input value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium text-gray-600">Passport (if required)</label>
              <Input value={passport} onChange={(e) => setPassport(e.target.value)} />
            </div>
          </div>
        )}

        {step === "Payment" && (
          <div className="space-y-2 text-gray-700">
            <p>We will create a payment order via Stripe/Razorpay and redirect you to complete payment.</p>
            <p className="text-sm text-gray-500">On success, a confirmation with Booking ID will be shown and emailed/WhatsApped.</p>
          </div>
        )}

        <div className="mt-6 flex items-center justify-between">
          <Button variant="ghost" onClick={back} disabled={step === "Trip Details"}>Back</Button>
          {step !== "Payment" ? (
            <Button onClick={next} disabled={!canContinue}>Continue</Button>
          ) : (
            <Button onClick={payNow}>Pay Now</Button>
          )}
        </div>
      </div>
    </div>
  );
}
