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
exports.ProductResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const Delete_output_1 = require("../../commons/deleteMessage/Delete.output");
const CreateProduct_input_1 = require("./dto/CreateProduct.input");
const UpdateProduct_input_1 = require("./dto/UpdateProduct.input");
const Product_entity_1 = require("./entities/Product.entity");
const Product_service_1 = require("./Product.service");
let ProductResolver = class ProductResolver {
    constructor(productService) {
        this.productService = productService;
    }
    createProduct(createProductInput) {
        return this.productService.create({ createProductInput });
    }
    modifyProduct(productId, updateProductInput) {
        return this.productService.modify({ productId, updateProductInput });
    }
    deleteProduct(productId) {
        return this.productService.delete({ productId });
    }
    fetchProduct(productId) {
        return this.productService.findOne({ productId });
    }
    fetchProductAll() {
        return this.productService.findAll();
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => Product_entity_1.Product),
    __param(0, (0, graphql_1.Args)('createProductInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateProduct_input_1.CreateProductInput]),
    __metadata("design:returntype", void 0)
], ProductResolver.prototype, "createProduct", null);
__decorate([
    (0, graphql_1.Mutation)(() => Product_entity_1.Product || Delete_output_1.DeleteOutput),
    __param(0, (0, graphql_1.Args)('productId')),
    __param(1, (0, graphql_1.Args)('updateProductInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpdateProduct_input_1.UpdateProductInput]),
    __metadata("design:returntype", void 0)
], ProductResolver.prototype, "modifyProduct", null);
__decorate([
    (0, graphql_1.Mutation)(() => Delete_output_1.DeleteOutput),
    __param(0, (0, graphql_1.Args)('productId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductResolver.prototype, "deleteProduct", null);
__decorate([
    (0, graphql_1.Query)(() => Product_entity_1.Product),
    __param(0, (0, graphql_1.Args)('productId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductResolver.prototype, "fetchProduct", null);
__decorate([
    (0, graphql_1.Query)(() => Product_entity_1.Product),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductResolver.prototype, "fetchProductAll", null);
ProductResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [Product_service_1.ProductService])
], ProductResolver);
exports.ProductResolver = ProductResolver;
//# sourceMappingURL=Product.resolver.js.map