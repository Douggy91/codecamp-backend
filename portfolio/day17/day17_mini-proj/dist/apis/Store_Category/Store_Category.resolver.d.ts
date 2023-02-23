import { Store_Category } from './entities/Store_Category.entity';
import { StoreCategoryService } from './Store_Category.service';
export declare class StoreCategoryResolver {
    private readonly storecategoryService;
    constructor(storecategoryService: StoreCategoryService);
    createStorecategory(storecategoryName: string): Promise<{
        storecategory_name: any;
    } & Store_Category>;
    modifyStorecategory(storecategoryId: string, storecategoryName: string): Promise<{
        storecategory_id: any;
        storecategory_name: any;
    } & Store_Category>;
    deleteStorecategory(storecategoryId: string): Promise<false | {
        message: string;
    }>;
    fetchStorecategory(storecategoryId: string): Promise<Store_Category>;
    fetchStorecategoryAll(): Promise<Store_Category[]>;
}
