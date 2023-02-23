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
exports.FranchiseService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const Store_Category_entity_1 = require("../Store_Category/entities/Store_Category.entity");
const Store_Franchise_entity_1 = require("./entities/Store_Franchise.entity");
let FranchiseService = class FranchiseService {
    constructor(franchiseRepository, storecategoryRepository) {
        this.franchiseRepository = franchiseRepository;
        this.storecategoryRepository = storecategoryRepository;
    }
    async create({ createfranchiseInput }) {
        const { storecategory_name, franchise_name } = createfranchiseInput;
        const categorys = [];
        for (let i = 0; i < storecategory_name.length; i++) {
            const pre_regist = await this.storecategoryRepository.findOne({
                where: { storecategory_name: storecategory_name[i] },
            });
            if (pre_regist) {
                categorys.push(storecategory_name[i]);
            }
            else {
                await this.storecategoryRepository.save({
                    storecategory_name: storecategory_name[i],
                });
                categorys.push(storecategory_name[i]);
            }
        }
        const result_comp = await this.franchiseRepository.save({
            store_category_name: categorys,
            franchise_name: franchise_name,
        });
        return result_comp;
    }
    async modify({ franchiseId, updatefranchiseInput }) {
        const result = await this.franchiseRepository.findOne({
            where: { franchise_id: franchiseId },
        });
        const result_comp = await this.franchiseRepository.save(Object.assign(Object.assign({ franchise_id: franchiseId }, result), updatefranchiseInput));
        return result_comp;
    }
    async delete({ franchiseId }) {
        const result = await this.franchiseRepository.softDelete({
            franchise_id: franchiseId,
        });
        return result.affected
            ? { message: `${franchiseId} 업체가 가맹을 탈퇴했습니다.` }
            : false;
    }
    async findOne({ franchiseId }) {
        return await this.franchiseRepository.findOne({
            where: { franchise_id: franchiseId },
            relations: ['storecategory_id'],
        });
    }
    async findAll() {
        return await this.franchiseRepository.find({
            relations: ['storecategory_id'],
        });
    }
};
FranchiseService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Store_Franchise_entity_1.Franchise)),
    __param(1, (0, typeorm_1.InjectRepository)(Store_Category_entity_1.Store_Category)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], FranchiseService);
exports.FranchiseService = FranchiseService;
//# sourceMappingURL=Store_Franchise.service.js.map