import { CreateOrderInput } from './dto/CreateOrder.input';
import { UpdateOrderInput } from './dto/updateOrder.input';
import { Order } from './entities/Order.entity';
import { OrderService } from './Order.service';
export declare class OrderResolver {
    private readonly orderService;
    constructor(orderService: OrderService);
    createOrder(createOrderInput: CreateOrderInput): Promise<({
        store_id: any;
        customer_id: any;
    } & Order) | {
        message: string;
    }>;
    modiOrder(orderId: string, updateOrderInput: UpdateOrderInput): Promise<any>;
    deleteOrder(orderId: string): Promise<{
        message: string;
    }>;
    fetchOrders(): Promise<Order[]>;
    fetchOrder(orderId: string): Promise<Order>;
}
