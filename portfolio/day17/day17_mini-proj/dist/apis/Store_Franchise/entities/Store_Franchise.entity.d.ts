import { Store } from 'src/apis/Store/entities/Store.entity';
import { Store_Category } from 'src/apis/Store_Category/entities/Store_Category.entity';
export declare class Franchise {
    franchise_id: string;
    franchise_name: string;
    store_category_id: Store_Category[];
    root_store_id: Store;
}
