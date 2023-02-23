import { Product_Category } from 'src/apis/Product_Category/entities/Product_Category.entity';
import { Store } from 'src/apis/Store/entities/Store.entity';
export declare class Product {
    product_id: string;
    product_name: string;
    store_id: Store;
    product_category_id: Product_Category[];
    price: number;
    isState: boolean;
    createDate: Date;
}
