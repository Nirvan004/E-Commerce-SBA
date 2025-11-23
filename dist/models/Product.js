import { calculateTax } from '../utils/taxCalculator.js';
import { calculateDiscount } from '../utils/discountCalculator.js';
export class Product {
    id;
    title;
    description;
    category;
    price;
    discountPercentage;
    rating;
    constructor(id, title, description, category, price, discountPercentage, rating) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.category = category;
        this.price = price;
        this.discountPercentage = discountPercentage;
        this.rating = rating;
    }
    displayDetails() {
        return [
            `Product ID: ${this.id}`,
            `Title: ${this.title}`,
            `Category: ${this.category}`,
            `Price: $${this.price.toFixed(2)}`,
            `Discount: ${this.discountPercentage}%`,
            `Rating: ${this.rating}`,
            `Description: ${this.description}`
        ].join('\n');
    }
    getPriceWithDiscount() {
        return calculateDiscount(this);
    }
    getPriceWithTax() {
        return calculateTax(this);
    }
}
//# sourceMappingURL=Product.js.map