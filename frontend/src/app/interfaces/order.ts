import { Product } from './product';
export interface Order {
  products: Product[];
  shipping: string;
  userId?: string;
}
