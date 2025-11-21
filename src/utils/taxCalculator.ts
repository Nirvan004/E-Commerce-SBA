import { Product } from '../models/Product.js';

export function calculateTax(product: Product): number {
  const StandtaxRate = 0.0475;
  const groceriesTaxRate = 0.03;
  const taxRate = product.category.toLowerCase() === 'groceries' ? groceriesTaxRate : StandtaxRate;
  const taxAmount = product.price * taxRate;
  return Number(taxAmount.toFixed(2));
}