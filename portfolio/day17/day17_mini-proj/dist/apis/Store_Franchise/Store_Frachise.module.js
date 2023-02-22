"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FranchiseModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Store_entity_1 = require("../Store/entities/Store.entity");
const Store_Category_entity_1 = require("../Store_Category/entities/Store_Category.entity");
const Store_Franchise_entity_1 = require("./entities/Store_Franchise.entity");
const Store_Franchise_resolver_1 = require("./Store_Franchise.resolver");
const Store_Franchise_service_1 = require("./Store_Franchise.service");
let FranchiseModule = class FranchiseModule {
};
FranchiseModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([Store_Franchise_entity_1.Franchise, Store_entity_1.Store, Store_Category_entity_1.Store_Category])],
        providers: [Store_Franchise_resolver_1.FranchiseResolver, Store_Franchise_service_1.FranchiseService],
    })
], FranchiseModule);
exports.FranchiseModule = FranchiseModule;
//# sourceMappingURL=Store_Frachise.module.js.map