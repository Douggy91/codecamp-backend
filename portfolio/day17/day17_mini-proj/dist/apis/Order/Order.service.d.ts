import { Repository } from 'typeorm';
import { Customer } from '../Customer/entities/Customer.entity';
import { Store } from '../Store/entities/Store.entity';
import { Order } from './entities/Order.entity';
export declare class OrderService {
    private readonly orderRepository;
    private readonly storeRepository;
    private readonly customerRepository;
    constructor(orderRepository: Repository<Order>, storeRepository: Repository<Store>, customerRepository: Repository<Customer>);
    create({ createOrderInput }: {
        createOrderInput: any;
    }): Promise<({
        store_id: any;
        customer_id: any;
    } & Order) | {
        message: string;
    }>;
    findAll(): Promise<Order[]>;
    findOne({ orderId }: {
        orderId: any;
    }): Promise<Order>;
    modify({ orderId, updateOrderInput }: {
        orderId: any;
        updateOrderInput: any;
    }): Promise<any>;
    delete({ orderId }: {
        orderId: any;
    }): Promise<{
        message: string;
    }>;
}
