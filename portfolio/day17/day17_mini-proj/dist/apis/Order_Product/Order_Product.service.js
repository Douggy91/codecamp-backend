"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderProductSerivce = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const Order_entity_1 = require("../Order/entities/Order.entity");
const Product_entity_1 = require("../Product/entities/Product.entity");
const Order_Product_entity_1 = require("./entities/Order_Product.entity");
let OrderProductSerivce = class OrderProductSerivce {
    constructor(orderproductRepository, orderRepository, productRepository) {
        this.orderproductRepository = orderproductRepository;
        this.orderRepository = orderRepository;
        this.productRepository = productRepository;
    }
    async create({ createOrderProductInput }) {
        const { order_id, product_id, order_cnt } = createOrderProductInput;
        const ProductValid = await this.productRepository.findOne({
            where: { product_id: product_id },
        });
        const OrderValid = await this.orderRepository.findOne({
            where: { order_id: order_id },
        });
        return ProductValid && OrderValid
            ? await this.orderproductRepository.save(Object.assign({}, createOrderProductInput))
            : { message: '주문번호나 상품이 존재하지 않습니다' };
    }
    async modify({ orderId, updateOrderProductInput }) {
        const target = await this.orderproductRepository.findOne({
            where: { order_id: orderId },
        });
        const newData = Object.assign({ order_id: orderId }, updateOrderProductInput);
        return await this.orderproductRepository.save(newData);
    }
    async delete({ orderId }) {
        const result = await this.orderproductRepository.softDelete(orderId);
        return result.affected
            ? { message: `${orderId} 번 주문 삭제` }
            : { message: `${orderId} 번 주문이 존재하지 않습니다.` };
    }
    async findOne({ orderId }) {
        return this.orderproductRepository.findOne({
            where: { order_id: orderId },
        });
    }
    async findAll() {
        return this.orderproductRepository.find();
    }
};
OrderProductSerivce = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Order_Product_entity_1.Order_Product)),
    __param(1, (0, typeorm_1.InjectRepository)(Order_entity_1.Order)),
    __param(2, (0, typeorm_1.InjectRepository)(Product_entity_1.Product)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], OrderProductSerivce);
exports.OrderProductSerivce = OrderProductSerivce;
//# sourceMappingURL=Order_Product.service.js.map