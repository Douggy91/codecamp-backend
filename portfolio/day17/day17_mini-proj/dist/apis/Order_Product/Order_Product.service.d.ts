import { Repository } from 'typeorm';
import { Order } from '../Order/entities/Order.entity';
import { Product } from '../Product/entities/Product.entity';
import { Order_Product } from './entities/Order_Product.entity';
export declare class OrderProductSerivce {
    private readonly orderproductRepository;
    private readonly orderRepository;
    private readonly productRepository;
    constructor(orderproductRepository: Repository<Order_Product>, orderRepository: Repository<Order>, productRepository: Repository<Product>);
    create({ createOrderProductInput }: {
        createOrderProductInput: any;
    }): Promise<any>;
    modify({ orderId, updateOrderProductInput }: {
        orderId: any;
        updateOrderProductInput: any;
    }): Promise<any>;
    delete({ orderId }: {
        orderId: any;
    }): Promise<{
        message: string;
    }>;
    findOne({ orderId }: {
        orderId: any;
    }): Promise<Order_Product>;
    findAll(): Promise<Order_Product[]>;
}
