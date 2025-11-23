import { Product } from '../models/Product.js';
export declare class ApiService {
    static getAllProducts(limit?: number, skip?: number): Promise<Product[]>;
    static getProductById(id: number): Promise<Product>;
    static searchProducts(query: string): Promise<Product[]>;
}
//# sourceMappingURL=apiService.d.ts.map