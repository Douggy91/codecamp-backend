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
exports.OrderResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const Delete_output_1 = require("../../commons/deleteMessage/Delete.output");
const CreateOrder_input_1 = require("./dto/CreateOrder.input");
const updateOrder_input_1 = require("./dto/updateOrder.input");
const Order_entity_1 = require("./entities/Order.entity");
const Order_service_1 = require("./Order.service");
let OrderResolver = class OrderResolver {
    constructor(orderService) {
        this.orderService = orderService;
    }
    async createOrder(createOrderInput) {
        return await this.orderService.create({ createOrderInput });
    }
    async modiOrder(orderId, updateOrderInput) {
        return await this.orderService.modify({ orderId, updateOrderInput });
    }
    async deleteOrder(orderId) {
        return await this.orderService.delete({ orderId });
    }
    async fetchOrders() {
        return await this.orderService.findAll();
    }
    async fetchOrder(orderId) {
        return this.orderService.findOne({ orderId });
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => Order_entity_1.Order || Delete_output_1.DeleteOutput),
    __param(0, (0, graphql_1.Args)('createOrderInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateOrder_input_1.CreateOrderInput]),
    __metadata("design:returntype", Promise)
], OrderResolver.prototype, "createOrder", null);
__decorate([
    (0, graphql_1.Mutation)(() => Order_entity_1.Order),
    __param(0, (0, graphql_1.Args)('orderId')),
    __param(1, (0, graphql_1.Args)('updateOrderInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, updateOrder_input_1.UpdateOrderInput]),
    __metadata("design:returntype", Promise)
], OrderResolver.prototype, "modiOrder", null);
__decorate([
    (0, graphql_1.Mutation)(() => Delete_output_1.DeleteOutput),
    __param(0, (0, graphql_1.Args)('orderId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrderResolver.prototype, "deleteOrder", null);
__decorate([
    (0, graphql_1.Query)(() => Order_entity_1.Order),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OrderResolver.prototype, "fetchOrders", null);
__decorate([
    (0, graphql_1.Query)(() => Order_entity_1.Order),
    __param(0, (0, graphql_1.Args)('orderId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrderResolver.prototype, "fetchOrder", null);
OrderResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [Order_service_1.OrderService])
], OrderResolver);
exports.OrderResolver = OrderResolver;
//# sourceMappingURL=Order.resolver.js.map