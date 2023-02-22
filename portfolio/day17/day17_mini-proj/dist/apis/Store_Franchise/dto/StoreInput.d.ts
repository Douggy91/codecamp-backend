import { Store } from 'src/apis/Store/entities/Store.entity';
declare const StoreInput_base: import("@nestjs/common").Type<Omit<Store, "store_id">>;
export declare class StoreInput extends StoreInput_base {
}
export {};
