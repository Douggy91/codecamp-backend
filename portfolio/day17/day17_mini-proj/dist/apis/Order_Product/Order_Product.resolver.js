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
exports.OrderProductResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const Delete_output_1 = require("../../commons/deleteMessage/Delete.output");
const CreateOrderProduct_input_1 = require("./dto/CreateOrderProduct.input");
const UpdateOrderProduct_input_1 = require("./dto/UpdateOrderProduct.input");
const Order_Product_entity_1 = require("./entities/Order_Product.entity");
const Order_Product_service_1 = require("./Order_Product.service");
let OrderProductResolver = class OrderProductResolver {
    constructor(orderproductService) {
        this.orderproductService = orderproductService;
    }
    createOrderProduct(createOrderProductInput) {
        return this.orderproductService.create({ createOrderProductInput });
    }
    modifyOrderProduct(orderId, updateOrderProductInput) {
        return this.orderproductService.modify({
            orderId,
            updateOrderProductInput,
        });
    }
    deleteOrderProduct(orderId) {
        return this.orderproductService.delete({ orderId });
    }
    fetchOrderProduct(orderId) {
        return this.orderproductService.findOne({ orderId });
    }
    fetchOrderProductAll() {
        return this.orderproductService.findAll();
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => Order_Product_entity_1.Order_Product || Delete_output_1.DeleteOutput),
    __param(0, (0, graphql_1.Args)('createOrderProductInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateOrderProduct_input_1.CreateOrderProductInput]),
    __metadata("design:returntype", void 0)
], OrderProductResolver.prototype, "createOrderProduct", null);
__decorate([
    (0, graphql_1.Mutation)(() => Order_Product_entity_1.Order_Product),
    __param(0, (0, graphql_1.Args)('orderId')),
    __param(1, (0, graphql_1.Args)('updateOrderProductInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpdateOrderProduct_input_1.UpdateOrderProductInput]),
    __metadata("design:returntype", void 0)
], OrderProductResolver.prototype, "modifyOrderProduct", null);
__decorate([
    (0, graphql_1.Mutation)(() => Order_Product_entity_1.Order_Product),
    __param(0, (0, graphql_1.Args)('orderId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OrderProductResolver.prototype, "deleteOrderProduct", null);
__decorate([
    (0, graphql_1.Query)(() => Order_Product_entity_1.Order_Product),
    __param(0, (0, graphql_1.Args)('orderId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OrderProductResolver.prototype, "fetchOrderProduct", null);
__decorate([
    (0, graphql_1.Query)(() => Order_Product_entity_1.Order_Product),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OrderProductResolver.prototype, "fetchOrderProductAll", null);
OrderProductResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [Order_Product_service_1.OrderProductSerivce])
], OrderProductResolver);
exports.OrderProductResolver = OrderProductResolver;
//# sourceMappingURL=Order_Product.resolver.js.map