"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderProductModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Order_entity_1 = require("../Order/entities/Order.entity");
const Product_entity_1 = require("../Product/entities/Product.entity");
const Order_Product_entity_1 = require("./entities/Order_Product.entity");
const Order_Product_resolver_1 = require("./Order_Product.resolver");
const Order_Product_service_1 = require("./Order_Product.service");
let OrderProductModule = class OrderProductModule {
};
OrderProductModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([Order_entity_1.Order, Product_entity_1.Product, Order_Product_entity_1.Order_Product])],
        providers: [Order_Product_resolver_1.OrderProductResolver, Order_Product_service_1.OrderProductSerivce],
    })
], OrderProductModule);
exports.OrderProductModule = OrderProductModule;
//# sourceMappingURL=Order_Product.module.js.map