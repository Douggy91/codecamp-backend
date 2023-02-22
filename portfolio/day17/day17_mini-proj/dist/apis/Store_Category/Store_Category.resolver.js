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
exports.StoreCategoryResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const Delete_output_1 = require("../../commons/deleteMessage/Delete.output");
const Store_Category_entity_1 = require("./entities/Store_Category.entity");
const Store_Category_service_1 = require("./Store_Category.service");
let StoreCategoryResolver = class StoreCategoryResolver {
    constructor(storecategoryService) {
        this.storecategoryService = storecategoryService;
    }
    fetch_category(storecategoryId) {
        return this.storecategoryService.findOne({ storecategoryId });
    }
    fetch_categoryAll() {
        return this.storecategoryService.findAll();
    }
    create_category(storecategoryName) {
        return this.storecategoryService.create({ storecategoryName });
    }
    modify_category(storecategoryId, storecategoryName) {
        return this.storecategoryService.modify({
            storecategoryId,
            storecategoryName,
        });
    }
    delete_category(storecategoryName) {
        return this.storecategoryService.delete({ storecategoryName });
    }
};
__decorate([
    (0, graphql_1.Query)(() => Store_Category_entity_1.Store_Category),
    __param(0, (0, graphql_1.Args)('storecategoryId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StoreCategoryResolver.prototype, "fetch_category", null);
__decorate([
    (0, graphql_1.Query)(() => Store_Category_entity_1.Store_Category),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StoreCategoryResolver.prototype, "fetch_categoryAll", null);
__decorate([
    (0, graphql_1.Mutation)(() => Store_Category_entity_1.Store_Category),
    __param(0, (0, graphql_1.Args)('storecategoryName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StoreCategoryResolver.prototype, "create_category", null);
__decorate([
    (0, graphql_1.Mutation)(() => Store_Category_entity_1.Store_Category),
    __param(0, (0, graphql_1.Args)('storecategoryId')),
    __param(1, (0, graphql_1.Args)('storecategoryName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], StoreCategoryResolver.prototype, "modify_category", null);
__decorate([
    (0, graphql_1.Mutation)(() => Delete_output_1.DeleteOutput || Boolean),
    __param(0, (0, graphql_1.Args)('storecategoryName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StoreCategoryResolver.prototype, "delete_category", null);
StoreCategoryResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [Store_Category_service_1.StoreCategoryService])
], StoreCategoryResolver);
exports.StoreCategoryResolver = StoreCategoryResolver;
//# sourceMappingURL=Store_Category.resolver.js.map