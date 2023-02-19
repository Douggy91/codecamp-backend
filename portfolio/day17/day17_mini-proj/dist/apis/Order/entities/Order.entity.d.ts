import { Customer } from 'src/apis/Customer/entities/Customer.entity';
import { Store } from 'src/apis/Store/entities/Store.entity';
export declare class Order {
    order_id: string;
    store_id: Store;
    customer_id: Customer;
    order_date: Date;
    order_state: boolean;
}
