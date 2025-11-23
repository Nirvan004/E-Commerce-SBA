export declare class Product {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    constructor(id: number, title: string, description: string, category: string, price: number, discountPercentage: number, rating: number);
    displayDetails(): string;
    getPriceWithDiscount(): number;
    getPriceWithTax(): number;
}
//# sourceMappingURL=Product.d.ts.map