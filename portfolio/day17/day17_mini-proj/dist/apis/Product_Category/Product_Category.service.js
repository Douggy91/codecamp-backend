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
exports.ProductCategoryService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const Product_Category_entity_1 = require("./entities/Product_Category.entity");
let ProductCategoryService = class ProductCategoryService {
    async create({ categoryName }) {
        return await this.productcategoryRepository.save({
            product_category_name: categoryName,
        });
    }
    async modify({ categoryId, categoryName }) {
        const target = await this.productcategoryRepository.findOne({
            where: { product_category_id: categoryId },
        });
        const newData = {
            product_category_id: target.product_category_id,
            product_category_name: categoryName,
        };
        return (await target)
            ? this.productcategoryRepository.save(newData)
            : { message: '대상이 존재하지 않습니다.' };
    }
    async delete({ categoryId }) {
        const isDone = await this.productcategoryRepository.softDelete({
            product_category_id: categoryId,
        });
        return isDone.affected
            ? { message: `${categoryId} 카테고리 삭제` }
            : { message: `${categoryId} 는 존재하지 않습니다.` };
    }
    async findOne({ categoryId }) {
        return await this.productcategoryRepository.findOne({
            where: { product_category_id: categoryId },
            relations: ['product_category_id'],
        });
    }
    async findAll() {
        return await this.productcategoryRepository.find({
            relations: ['product_category_id'],
        });
    }
};
__decorate([
    (0, typeorm_1.InjectRepository)(Product_Category_entity_1.Product_Category),
    __metadata("design:type", typeorm_2.Repository)
], ProductCategoryService.prototype, "productcategoryRepository", void 0);
ProductCategoryService = __decorate([
    (0, common_1.Injectable)()
], ProductCategoryService);
exports.ProductCategoryService = ProductCategoryService;
//# sourceMappingURL=Product_Category.service.js.map