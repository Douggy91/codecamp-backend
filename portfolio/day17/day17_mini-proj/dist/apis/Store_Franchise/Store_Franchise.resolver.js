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
exports.FranchiseResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const Delete_output_1 = require("../../commons/deleteMessage/Delete.output");
const createFranchise_input_1 = require("./dto/createFranchise.input");
const updateFranchise_input_1 = require("./dto/updateFranchise.input");
const Store_Franchise_entity_1 = require("./entities/Store_Franchise.entity");
const Store_Franchise_service_1 = require("./Store_Franchise.service");
let FranchiseResolver = class FranchiseResolver {
    constructor(franchiseService) {
        this.franchiseService = franchiseService;
    }
    async fetchCategory(franchiseId) {
        return await this.franchiseService.findOne({ franchiseId });
    }
    async fetchCategoryAll() {
        return await this.franchiseService.findAll();
    }
    async createFranchise(createfranchiseInput) {
        return await this.franchiseService.create({ createfranchiseInput });
    }
    async modifyCategory(franchiseId, updatefranchiseInput) {
        return await this.franchiseService.modify({
            franchiseId,
            updatefranchiseInput,
        });
    }
    async deleteCategory(franchiseId) {
        return await this.franchiseService.delete({ franchiseId });
    }
};
__decorate([
    (0, graphql_1.Query)(() => Store_Franchise_entity_1.Franchise),
    __param(0, (0, graphql_1.Args)('franchiseId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FranchiseResolver.prototype, "fetchCategory", null);
__decorate([
    (0, graphql_1.Query)(() => Store_Franchise_entity_1.Franchise),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FranchiseResolver.prototype, "fetchCategoryAll", null);
__decorate([
    (0, graphql_1.Mutation)(() => Store_Franchise_entity_1.Franchise),
    __param(0, (0, graphql_1.Args)('createfranchiseInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createFranchise_input_1.CreateFranchiseInput]),
    __metadata("design:returntype", Promise)
], FranchiseResolver.prototype, "createFranchise", null);
__decorate([
    (0, graphql_1.Mutation)(() => Store_Franchise_entity_1.Franchise),
    __param(0, (0, graphql_1.Args)('franchiseId')),
    __param(1, (0, graphql_1.Args)('updatefranchiseInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, updateFranchise_input_1.UpdateFranchiseInput]),
    __metadata("design:returntype", Promise)
], FranchiseResolver.prototype, "modifyCategory", null);
__decorate([
    (0, graphql_1.Mutation)(() => Delete_output_1.DeleteOutput || Boolean),
    __param(0, (0, graphql_1.Args)('franchiseId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FranchiseResolver.prototype, "deleteCategory", null);
FranchiseResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [Store_Franchise_service_1.FranchiseService])
], FranchiseResolver);
exports.FranchiseResolver = FranchiseResolver;
//# sourceMappingURL=Store_Franchise.resolver.js.map