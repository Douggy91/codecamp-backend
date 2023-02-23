import { Product_Category } from './entities/Product_Category.entity';
import { ProductCategoryService } from './Product_Category.service';
export declare class ProductCategoryResolver {
    private readonly productcategoryService;
    constructor(productcategoryService: ProductCategoryService);
    createProductCategory(categoryName: string): Promise<{
        product_category_name: any;
    } & Product_Category>;
    modifyProductCategory(categoryId: string, categoryName: string): Promise<({
        product_category_id: import("../Product/entities/Product.entity").Product[];
        product_category_name: any;
    } & Product_Category) | {
        message: string;
    }>;
    deleteProductCategory(categoryId: string): Promise<{
        message: string;
    }>;
    fetchProductCategory(categoryId: string): Promise<Product_Category>;
    fetchProductCategoryAll(): Promise<Product_Category[]>;
}
