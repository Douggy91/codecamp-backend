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
exports.ProductCategoryResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const Delete_output_1 = require("../../commons/deleteMessage/Delete.output");
const Product_Category_entity_1 = require("./entities/Product_Category.entity");
const Product_Category_service_1 = require("./Product_Category.service");
let ProductCategoryResolver = class ProductCategoryResolver {
    constructor(productcategoryService) {
        this.productcategoryService = productcategoryService;
    }
    async createProductCategory(categoryName) {
        return this.productcategoryService.create({ categoryName });
    }
    async modifyProductCategory(categoryId, categoryName) {
        return this.productcategoryService.modify({ categoryId, categoryName });
    }
    async deleteProductCategory(categoryId) {
        return this.productcategoryService.delete({ categoryId });
    }
    async fetchProductCategory(categoryId) {
        return this.productcategoryService.findOne({ categoryId });
    }
    async fetchProductCategoryAll() {
        return this.productcategoryService.findAll();
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => Product_Category_entity_1.Product_Category),
    __param(0, (0, graphql_1.Args)('categoryName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductCategoryResolver.prototype, "createProductCategory", null);
__decorate([
    (0, graphql_1.Mutation)(() => Product_Category_entity_1.Product_Category || Delete_output_1.DeleteOutput),
    __param(0, (0, graphql_1.Args)('categoryId')),
    __param(1, (0, graphql_1.Args)('categoryName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ProductCategoryResolver.prototype, "modifyProductCategory", null);
__decorate([
    (0, graphql_1.Mutation)(() => Delete_output_1.DeleteOutput),
    __param(0, (0, graphql_1.Args)('categoryId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductCategoryResolver.prototype, "deleteProductCategory", null);
__decorate([
    (0, graphql_1.Query)(() => Product_Category_entity_1.Product_Category),
    __param(0, (0, graphql_1.Args)('categoryId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductCategoryResolver.prototype, "fetchProductCategory", null);
__decorate([
    (0, graphql_1.Query)(() => Product_Category_entity_1.Product_Category),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductCategoryResolver.prototype, "fetchProductCategoryAll", null);
ProductCategoryResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [Product_Category_service_1.ProductCategoryService])
], ProductCategoryResolver);
exports.ProductCategoryResolver = ProductCategoryResolver;
//# sourceMappingURL=Product_Category.resolver.js.map