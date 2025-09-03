import Image from "next/image";

const logos = [
  {
    src: "https://res.cloudinary.com/demo/image/upload/w_200/v1699999999/visa.png",
    alt: "Visa",
  },
  {
    src: "https://res.cloudinary.com/demo/image/upload/w_200/v1699999999/mastercard.png",
    alt: "Mastercard",
  },
  {
    src: "https://res.cloudinary.com/demo/image/upload/w_200/v1699999999/airbnb.png",
    alt: "Airbnb",
  },
  {
    src: "https://res.cloudinary.com/demo/image/upload/w_200/v1699999999/booking.png",
    alt: "Booking.com",
  },
  {
    src: "https://res.cloudinary.com/demo/image/upload/w_200/v1699999999/expedia.png",
    alt: "Expedia",
  },
];

export default function PartnerLogos() {
  return (
    <div className="grid grid-cols-2 gap-6 md:grid-cols-5 items-center">
      {logos.map((logo) => (
        <div key={logo.alt} className="relative h-10 grayscale opacity-80">
          <Image src={logo.src} alt={logo.alt} fill className="object-contain" sizes="200px" />
        </div>
      ))}
    </div>
  );
}
