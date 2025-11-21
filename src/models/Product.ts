import { calculateTax } from '../utils/taxCalculator';
export class Product {
    sku: string;
    name: string;
    price: number;

    constructor(sku: string, name: string, price: number) {
        this.sku = sku;
        this.name = name;
        this.price = price;
    }

    displayDetails(): string {
        return `Product SKU: ${this.sku}\nName: ${this.name}\nPrice: $${this.price.toFixed(2)}`;
    }

    getPriceWithTax(): number {
        return calculateTax(this);
    }
}