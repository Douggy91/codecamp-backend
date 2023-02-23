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
exports.StoreResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const Delete_output_1 = require("../../commons/deleteMessage/Delete.output");
const CreateStore_input_1 = require("./dto/CreateStore.input");
const UpdateStore_input_1 = require("./dto/UpdateStore.input");
const Store_entity_1 = require("./entities/Store.entity");
const Store_service_1 = require("./Store.service");
let StoreResolver = class StoreResolver {
    constructor(storeService) {
        this.storeService = storeService;
    }
    async createStore(createStoreInput) {
        return await this.storeService.create({ createStoreInput });
    }
    async modifyStore(storeId, updateStoreInput) {
        return await this.storeService.modify({ storeId, updateStoreInput });
    }
    async deleteStore(storeId) {
        return await this.storeService.delete({ storeId });
    }
    async fetchStore(storeId) {
        return await this.storeService.findOne({ storeId });
    }
    async fetchStoreAll() {
        return await this.storeService.findAll();
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => Store_entity_1.Store || Delete_output_1.DeleteOutput),
    __param(0, (0, graphql_1.Args)('createStoreInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateStore_input_1.CreateStoreInput]),
    __metadata("design:returntype", Promise)
], StoreResolver.prototype, "createStore", null);
__decorate([
    (0, graphql_1.Mutation)(() => Store_entity_1.Store),
    __param(0, (0, graphql_1.Args)('storeId')),
    __param(1, (0, graphql_1.Args)('updateStoreInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpdateStore_input_1.UpdateStoreInput]),
    __metadata("design:returntype", Promise)
], StoreResolver.prototype, "modifyStore", null);
__decorate([
    (0, graphql_1.Mutation)(() => Delete_output_1.DeleteOutput || Boolean),
    __param(0, (0, graphql_1.Args)('storeId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StoreResolver.prototype, "deleteStore", null);
__decorate([
    (0, graphql_1.Query)(() => Store_entity_1.Store),
    __param(0, (0, graphql_1.Args)('storeId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StoreResolver.prototype, "fetchStore", null);
__decorate([
    (0, graphql_1.Query)(() => Store_entity_1.Store),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StoreResolver.prototype, "fetchStoreAll", null);
StoreResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [Store_service_1.StoreSerivce])
], StoreResolver);
exports.StoreResolver = StoreResolver;
//# sourceMappingURL=Store.resolver.js.map