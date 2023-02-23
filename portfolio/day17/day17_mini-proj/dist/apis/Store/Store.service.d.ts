import { Store } from './entities/Store.entity';
export declare class StoreSerivce {
    private readonly storeRepository;
    private readonly franchiseRepository;
    create({ createStoreInput }: {
        createStoreInput: any;
    }): Promise<any>;
    modify({ storeId, updateStoreInput }: {
        storeId: any;
        updateStoreInput: any;
    }): Promise<any>;
    findOne({ storeId }: {
        storeId: any;
    }): Promise<Store>;
    findAll(): Promise<Store[]>;
    delete({ storeId }: {
        storeId: any;
    }): Promise<false | {
        message: string;
    }>;
}
