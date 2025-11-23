import { Product } from '../models/Product.js';
export function calculateDiscount(product) {
    const discount = product.price * (product.discountPercentage / 100);
    return Number(discount.toFixed(2));
}
//# sourceMappingURL=discountCalculator.js.map