import { Franchise } from 'src/apis/Store_Franchise/entities/Store_Franchise.entity';
export declare class Store {
    store_id: string;
    store_name: string;
    passwd: string;
    franchise_id: Franchise;
    phone_num: string;
    email: string;
    address: string;
    isRootStore: boolean;
    enrolled_date: Date;
    isDeleted: Date;
}
