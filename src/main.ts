import { Product } from './models/Product.js';
import { ApiService } from './services/apiService.js';
import { calculateDiscount } from './utils/discountCalculator.js';
import { calculateTax } from './utils/taxCalculator.js';
import { ErrorHandler } from './utils/errorHandler.js';


async function main() {
    try {
        const products: Product[] = await ApiService.getAllProducts(5);
        products.forEach(product => {
            console.log(product.displayDetails());
            console.log(`Discount: $${calculateDiscount(product)}`);
            console.log(`Tax: $${calculateTax(product)}`);
        });

        const singleProduct: Product = await ApiService.getProductById(1);
        console.log(singleProduct.displayDetails());
        console.log(`Discount: $${calculateDiscount(singleProduct)}`);
        console.log(`Tax: $${calculateTax(singleProduct)}`);

        try {
            const invalidProduct = await ApiService.getProductById(9999);
        } catch (error: unknown) {
            ErrorHandler.handle(error);
        }

    } catch (error: unknown) {
        ErrorHandler.handle(error);
    }
}

main();