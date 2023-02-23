import { Repository } from 'typeorm';
import { Product_Category } from '../Product_Category/entities/Product_Category.entity';
import { Product } from './entities/Product.entity';
export declare class ProductService {
    private readonly productRepository;
    private readonly productcategoryRepository;
    constructor(productRepository: Repository<Product>, productcategoryRepository: Repository<Product_Category>);
    create({ createProductInput }: {
        createProductInput: any;
    }): Promise<any>;
    modify({ productId, updateProductInput }: {
        productId: any;
        updateProductInput: any;
    }): Promise<any>;
    delete({ productId }: {
        productId: any;
    }): Promise<{
        message: string;
    }>;
    findOne({ productId }: {
        productId: any;
    }): Promise<Product>;
    findAll(): Promise<Product[]>;
}
