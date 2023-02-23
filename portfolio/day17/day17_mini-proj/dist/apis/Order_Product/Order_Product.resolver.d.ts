import { CreateOrderProductInput } from './dto/CreateOrderProduct.input';
import { UpdateOrderProductInput } from './dto/UpdateOrderProduct.input';
import { Order_Product } from './entities/Order_Product.entity';
import { OrderProductSerivce } from './Order_Product.service';
export declare class OrderProductResolver {
    private readonly orderproductService;
    constructor(orderproductService: OrderProductSerivce);
    createOrderProduct(createOrderProductInput: CreateOrderProductInput): Promise<any>;
    modifyOrderProduct(orderId: string, updateOrderProductInput: UpdateOrderProductInput): Promise<any>;
    deleteOrderProduct(orderId: string): Promise<{
        message: string;
    }>;
    fetchOrderProduct(orderId: string): Promise<Order_Product>;
    fetchOrderProductAll(): Promise<Order_Product[]>;
}
