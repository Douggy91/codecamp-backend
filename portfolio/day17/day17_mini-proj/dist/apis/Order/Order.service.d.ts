import { Repository } from 'typeorm';
import { Order } from './entities/Order.entity';
export declare class OrderService {
    private readonly orderRepository;
    constructor(orderRepository: Repository<Order>);
    create({ createOrderInput }: {
        createOrderInput: any;
    }): Promise<{
        store_id: any;
        customer_id: any;
    } & Order>;
    findAll(): Promise<Order[]>;
    findOne({ orderId }: {
        orderId: any;
    }): Promise<Order>;
    modify({ orderId, updateOrderInput }: {
        orderId: any;
        updateOrderInput: any;
    }): Promise<any>;
}
