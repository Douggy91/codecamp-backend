import { Order_Product } from 'src/apis/Order_Product/entities/Order_Product.entity';
import { Product_Category } from 'src/apis/Product_Category/entities/Product_Category.entity';
import { Store } from 'src/apis/Store/entities/Store.entity';
export declare class Product {
    product_id: Order_Product[];
    store_id: Store;
    store_name: string;
    category_id: Product_Category[];
    price: number;
    isState: boolean;
    createDate: Date;
}
