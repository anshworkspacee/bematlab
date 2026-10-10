export type Product = {
  id: number; name: string; category: string; price: number; oldPrice?: number;
  unit: string; rating: number; badge?: string; image: string; description: string;
};
export type CartLine = { product: Product; qty: number };
