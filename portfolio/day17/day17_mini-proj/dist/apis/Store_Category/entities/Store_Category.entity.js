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
exports.Store_Category = void 0;
const graphql_1 = require("@nestjs/graphql");
const Store_Franchise_entity_1 = require("../../Store_Franchise/entities/Store_Franchise.entity");
const typeorm_1 = require("typeorm");
let Store_Category = class Store_Category {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    (0, typeorm_1.ManyToMany)(() => Store_Franchise_entity_1.Franchise, (franchise) => franchise.store_category_id),
    __metadata("design:type", Array)
], Store_Category.prototype, "store_category_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Store_Category.prototype, "store_category_name", void 0);
Store_Category = __decorate([
    (0, typeorm_1.Entity)(),
    (0, graphql_1.ObjectType)()
], Store_Category);
exports.Store_Category = Store_Category;
//# sourceMappingURL=Store_Category.entity.js.map