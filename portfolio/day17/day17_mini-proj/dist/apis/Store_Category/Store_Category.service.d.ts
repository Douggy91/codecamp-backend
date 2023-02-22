import { Repository } from 'typeorm';
import { Store_Category } from './entities/Store_Category.entity';
export declare class StoreCategoryService {
    private readonly storecategoryRepository;
    constructor(storecategoryRepository: Repository<Store_Category>);
    create({ storecategoryName }: {
        storecategoryName: any;
    }): Promise<{
        store_category_name: any;
    } & Store_Category>;
    findOne({ storecategoryId }: {
        storecategoryId: any;
    }): Promise<Store_Category>;
    findAll(): Promise<Store_Category[]>;
    modify({ storecategoryId, storecategoryName }: {
        storecategoryId: any;
        storecategoryName: any;
    }): Promise<{
        store_category_id: any;
        store_category_name: any;
    } & Store_Category>;
    delete({ storecategoryName }: {
        storecategoryName: any;
    }): Promise<false | {
        message: string;
    }>;
}
