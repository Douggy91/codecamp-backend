import { CreateProductInput } from './dto/CreateProduct.input';
import { UpdateProductInput } from './dto/UpdateProduct.input';
import { Product } from './entities/Product.entity';
import { ProductService } from './Product.service';
export declare class ProductResolver {
    private readonly productService;
    constructor(productService: ProductService);
    createProduct(createProductInput: CreateProductInput): Promise<any>;
    modifyProduct(productId: string, updateProductInput: UpdateProductInput): Promise<any>;
    deleteProduct(productId: string): Promise<{
        message: string;
    }>;
    fetchProduct(productId: string): Promise<Product>;
    fetchProductAll(): Promise<Product[]>;
}
