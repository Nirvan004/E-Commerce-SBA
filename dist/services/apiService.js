import { Product } from '../models/Product.js';
import { CustomError, ErrorHandler } from '../utils/errorHandler.js';
const BASE_URL = 'https://dummyjson.com/products';
export class ApiService {
    static async getAllProducts(limit = 10, skip = 0) {
        try {
            const response = await fetch(`${BASE_URL}?limit=${limit}&skip=${skip}`);
            if (!response.ok) {
                throw ErrorHandler.apiError(`Failed to fetch products: ${response.status} ${response.statusText}`, response);
            }
            const data = await response.json();
            return data.products.map((p) => new Product(p.id, p.title, p.description, p.category, p.price, p.discountPercentage, p.rating));
        }
        catch (error) {
            ErrorHandler.handle(error);
            throw error;
        }
    }
    static async getProductById(id) {
        try {
            const response = await fetch(`${BASE_URL}/${id}`);
            if (!response.ok) {
                throw ErrorHandler.apiError(`Product with ID ${id} not found: ${response.status} ${response.statusText}`, response);
            }
            const p = await response.json();
            return new Product(p.id, p.title, p.description, p.category, p.price, p.discountPercentage, p.rating);
        }
        catch (error) {
            ErrorHandler.handle(error);
            throw error;
        }
    }
    static async searchProducts(query) {
        try {
            const response = await fetch(`${BASE_URL}/search?q=${encodeURIComponent(query)}`);
            if (!response.ok) {
                throw ErrorHandler.apiError(`Search failed for query: "${query}": ${response.status} ${response.statusText}`, response);
            }
            const data = await response.json();
            return data.products.map((p) => new Product(p.id, p.title, p.description, p.category, p.price, p.discountPercentage, p.rating));
        }
        catch (error) {
            ErrorHandler.handle(error);
            throw error;
        }
    }
}
//# sourceMappingURL=apiService.js.map