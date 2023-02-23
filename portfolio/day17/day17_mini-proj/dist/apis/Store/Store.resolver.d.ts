import { CreateStoreInput } from './dto/CreateStore.input';
import { UpdateStoreInput } from './dto/UpdateStore.input';
import { Store } from './entities/Store.entity';
import { StoreSerivce } from './Store.service';
export declare class StoreResolver {
    private readonly storeService;
    constructor(storeService: StoreSerivce);
    createStore(createStoreInput: CreateStoreInput): Promise<any>;
    modifyStore(storeId: string, updateStoreInput: UpdateStoreInput): Promise<any>;
    deleteStore(storeId: string): Promise<false | {
        message: string;
    }>;
    fetchStore(storeId: string): Promise<Store>;
    fetchStoreAll(): Promise<Store[]>;
}
