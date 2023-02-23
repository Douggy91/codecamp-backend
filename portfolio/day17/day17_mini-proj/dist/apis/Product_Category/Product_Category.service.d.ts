import { Product_Category } from './entities/Product_Category.entity';
export declare class ProductCategoryService {
    private readonly productcategoryRepository;
    create({ categoryName }: {
        categoryName: any;
    }): Promise<{
        product_category_name: any;
    } & Product_Category>;
    modify({ categoryId, categoryName }: {
        categoryId: any;
        categoryName: any;
    }): Promise<({
        product_category_id: import("../Product/entities/Product.entity").Product[];
        product_category_name: any;
    } & Product_Category) | {
        message: string;
    }>;
    delete({ categoryId }: {
        categoryId: any;
    }): Promise<{
        message: string;
    }>;
    findOne({ categoryId }: {
        categoryId: any;
    }): Promise<Product_Category>;
    findAll(): Promise<Product_Category[]>;
}
