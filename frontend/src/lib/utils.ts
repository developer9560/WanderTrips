export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export const formatCurrency = (amount: number, currency: string = "INR") => {
  try {
    return new Intl.NumberFormat("en-IN", { style: "currency", currency }).format(
      amount
    );
  } catch {
    return `₹${amount.toLocaleString("en-IN")}`;
  }
};
