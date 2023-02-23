import { Order } from 'src/apis/Order/entities/Order.entity';
import { Product } from 'src/apis/Product/entities/Product.entity';
export declare class Order_Product {
    no: number;
    order_id: Order;
    product_id: Product;
    order_cnt: number;
}
