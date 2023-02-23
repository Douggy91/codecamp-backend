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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreSerivce = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const Store_Franchise_entity_1 = require("../Store_Franchise/entities/Store_Franchise.entity");
const Store_entity_1 = require("./entities/Store.entity");
let StoreSerivce = class StoreSerivce {
    async create({ createStoreInput }) {
        const { franchise_id } = createStoreInput, rest = __rest(createStoreInput, ["franchise_id"]);
        const isValid = await this.franchiseRepository.findOne({
            where: { franchise_id: franchise_id },
        });
        return isValid
            ? await this.storeRepository.save(Object.assign({}, createStoreInput))
            : { message: 'franchise_id가 존재하지 않습니다.' };
    }
    async modify({ storeId, updateStoreInput }) {
        const target = await this.storeRepository.findOne({
            where: { store_id: storeId },
        });
        const result = await this.storeRepository.save(Object.assign(Object.assign({ store_id: storeId }, target), updateStoreInput));
        return result;
    }
    async findOne({ storeId }) {
        return await this.storeRepository.findOne({
            where: { store_id: storeId },
            relations: ['franchise_id'],
        });
    }
    async findAll() {
        return await this.storeRepository.find();
    }
    async delete({ storeId }) {
        const result = await this.storeRepository.delete({ store_id: storeId });
        return result.affected
            ? { message: `${storeId} 탈퇴가 완료되었습니다.` }
            : false;
    }
};
__decorate([
    (0, typeorm_1.InjectRepository)(Store_entity_1.Store),
    __metadata("design:type", typeorm_2.Repository)
], StoreSerivce.prototype, "storeRepository", void 0);
__decorate([
    (0, typeorm_1.InjectRepository)(Store_Franchise_entity_1.Franchise),
    __metadata("design:type", typeorm_2.Repository)
], StoreSerivce.prototype, "franchiseRepository", void 0);
StoreSerivce = __decorate([
    (0, common_1.Injectable)()
], StoreSerivce);
exports.StoreSerivce = StoreSerivce;
//# sourceMappingURL=Store.service.js.map