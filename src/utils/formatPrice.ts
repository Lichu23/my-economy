
export const formatPrice = (number: number) : string => {
  return new Intl.NumberFormat("us-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(number);
};
