"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Order_Product_entity_1 = require("../Order_Product/entities/Order_Product.entity");
const Product_Category_entity_1 = require("../Product_Category/entities/Product_Category.entity");
const Product_entity_1 = require("./entities/Product.entity");
const Product_resolver_1 = require("./Product.resolver");
const Product_service_1 = require("./Product.service");
let ProductModule = class ProductModule {
};
ProductModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([Product_entity_1.Product, Product_Category_entity_1.Product_Category, Order_Product_entity_1.Order_Product]),
        ],
        providers: [Product_resolver_1.ProductResolver, Product_service_1.ProductService],
    })
], ProductModule);
exports.ProductModule = ProductModule;
//# sourceMappingURL=Product.module.js.map