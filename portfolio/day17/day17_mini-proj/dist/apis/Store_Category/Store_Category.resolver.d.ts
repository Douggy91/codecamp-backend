import { Store_Category } from './entities/Store_Category.entity';
import { StoreCategoryService } from './Store_Category.service';
export declare class StoreCategoryResolver {
    private readonly storecategoryService;
    constructor(storecategoryService: StoreCategoryService);
    fetch_category(storecategoryId: string): Promise<Store_Category>;
    fetch_categoryAll(): Promise<Store_Category[]>;
    create_category(storecategoryName: string): Promise<{
        store_category_name: any;
    } & Store_Category>;
    modify_category(storecategoryId: string, storecategoryName: string): Promise<{
        store_category_id: any;
        store_category_name: any;
    } & Store_Category>;
    delete_category(storecategoryName: string): Promise<false | {
        message: string;
    }>;
}
