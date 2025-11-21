import { Product } from '../models/Product';

export function calculateDiscount(product: Product): number {
    const discount = product.price * (product.discountPercentage / 100);
    return Number(discount.toFixed(2));
}