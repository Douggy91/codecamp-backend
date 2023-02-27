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
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const Customer_entity_1 = require("../Customer/entities/Customer.entity");
const Store_entity_1 = require("../Store/entities/Store.entity");
const Order_entity_1 = require("./entities/Order.entity");
let OrderService = class OrderService {
    constructor(orderRepository, storeRepository, customerRepository) {
        this.orderRepository = orderRepository;
        this.storeRepository = storeRepository;
        this.customerRepository = customerRepository;
    }
    async create({ createOrderInput }) {
        const { customer_id, store_id } = createOrderInput;
        const customerValid = await this.customerRepository.findOne({
            where: { customer_id: customer_id },
        });
        const storeValid = await this.storeRepository.findOne({
            where: { store_id: store_id },
        });
        const result = await this.orderRepository.save({
            store_id: store_id,
            customer_id: customer_id,
        });
        return customerValid && storeValid ? result : { message: 'error' };
    }
    async findAll() {
        return await this.orderRepository.find({
            relations: ['customer_id', 'store_id'],
        });
    }
    async findOne({ orderId }) {
        return await this.orderRepository.findOne({
            where: { order_id: orderId },
            relations: ['customer_id', 'store_id'],
        });
    }
    async modify({ orderId, updateOrderInput }) {
        const modiOrder = await this.orderRepository.findOne({
            where: { order_id: orderId },
        });
        const newOrder = Object.assign(Object.assign(Object.assign({}, modiOrder), { order_id: orderId }), updateOrderInput);
        return await this.orderRepository.save(newOrder);
    }
    async delete({ orderId }) {
        const result = await this.orderRepository.softDelete({ order_id: orderId });
        return result.affected
            ? { message: `${orderId}번 주문 삭제` }
            : { message: `${orderId}번 주문이 없습니다.` };
    }
};
OrderService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Order_entity_1.Order)),
    __param(1, (0, typeorm_1.InjectRepository)(Store_entity_1.Store)),
    __param(2, (0, typeorm_1.InjectRepository)(Customer_entity_1.Customer)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], OrderService);
exports.OrderService = OrderService;
//# sourceMappingURL=Order.service.js.map