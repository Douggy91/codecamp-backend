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
exports.Franchise = void 0;
const graphql_1 = require("@nestjs/graphql");
const Store_entity_1 = require("../../Store/entities/Store.entity");
const Store_Category_entity_1 = require("../../Store_Category/entities/Store_Category.entity");
const typeorm_1 = require("typeorm");
let Franchise = class Franchise {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Franchise.prototype, "franchise_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Franchise.prototype, "franchise_name", void 0);
__decorate([
    (0, typeorm_1.JoinTable)(),
    (0, typeorm_1.ManyToMany)(() => Store_Category_entity_1.Store_Category, (store_category) => store_category.store_category_id),
    __metadata("design:type", Array)
], Franchise.prototype, "store_category_id", void 0);
__decorate([
    (0, typeorm_1.JoinColumn)(),
    (0, typeorm_1.OneToOne)(() => Store_entity_1.Store),
    (0, graphql_1.Field)(() => Store_entity_1.Store),
    __metadata("design:type", Store_entity_1.Store)
], Franchise.prototype, "root_store_id", void 0);
Franchise = __decorate([
    (0, typeorm_1.Entity)(),
    (0, graphql_1.ObjectType)()
], Franchise);
exports.Franchise = Franchise;
//# sourceMappingURL=Store_Franchise.entity.js.map