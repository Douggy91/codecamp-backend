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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order_Product = void 0;
const graphql_1 = require("@nestjs/graphql");
const Order_entity_1 = require("../../Order/entities/Order.entity");
const Product_entity_1 = require("../../Product/entities/Product.entity");
const typeorm_1 = require("typeorm");
let Order_Product = class Order_Product {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Order_Product.prototype, "no", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Order_entity_1.Order),
    (0, graphql_1.Field)(() => Order_entity_1.Order),
    __metadata("design:type", Order_entity_1.Order)
], Order_Product.prototype, "order_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Product_entity_1.Product),
    (0, graphql_1.Field)(() => Product_entity_1.Product),
    __metadata("design:type", Product_entity_1.Product)
], Order_Product.prototype, "product_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Order_Product.prototype, "order_cnt", void 0);
Order_Product = __decorate([
    (0, typeorm_1.Entity)(),
    (0, graphql_1.ObjectType)()
], Order_Product);
exports.Order_Product = Order_Product;
//# sourceMappingURL=Order_Product.entity.js.map