import { Product } from '../models/Product';

export function calculateTax(product: Product): number {
  const taxRate = 0.1;
  const priceWithTax = product.price * (1 + taxRate);
  return priceWithTax;
}