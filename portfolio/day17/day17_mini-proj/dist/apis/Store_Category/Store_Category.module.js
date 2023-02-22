"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Store_CategoryModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Store_Category_entity_1 = require("./entities/Store_Category.entity");
const Store_Category_resolver_1 = require("./Store_Category.resolver");
const Store_Category_service_1 = require("./Store_Category.service");
let Store_CategoryModule = class Store_CategoryModule {
};
Store_CategoryModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([Store_Category_entity_1.Store_Category])],
        providers: [Store_Category_resolver_1.StoreCategoryResolver, Store_Category_service_1.StoreCategoryService],
    })
], Store_CategoryModule);
exports.Store_CategoryModule = Store_CategoryModule;
//# sourceMappingURL=Store_Category.module.js.map