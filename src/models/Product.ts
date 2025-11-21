import { calculateTax } from '../utils/taxCalculator.js';
import { calculateDiscount } from '../utils/discountCalculator.js';
export class Product {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;

    constructor(
        id: number,
        title: string,
        description: string,
        category: string,
        price: number,
        discountPercentage: number,
        rating: number
    ) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.category = category;
        this.price = price;
        this.discountPercentage = discountPercentage;
        this.rating = rating;
    }

    displayDetails(): string {
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

    getPriceWithDiscount(): number {
        return calculateDiscount(this);
    }

    getPriceWithTax(): number {
        return calculateTax(this);
    }
}