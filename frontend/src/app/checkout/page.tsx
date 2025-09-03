import { Suspense } from "react";
import CheckoutForm from "@/components/CheckoutForm";

export default function CheckoutPage() {
  return (
    <div className="container py-8">
      <h1 className="text-2xl font-semibold">Checkout</h1>
      <p className="text-sm text-gray-600">Complete your booking in three quick steps.</p>
      <Suspense fallback={<div>Loading...</div>}>
        <CheckoutForm />
      </Suspense>
    </div>
  );
}
