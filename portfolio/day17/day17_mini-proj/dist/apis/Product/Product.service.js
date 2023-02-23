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
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const Product_Category_entity_1 = require("../Product_Category/entities/Product_Category.entity");
const Product_entity_1 = require("./entities/Product.entity");
let ProductService = class ProductService {
    constructor(productRepository, productcategoryRepository) {
        this.productRepository = productRepository;
        this.productcategoryRepository = productcategoryRepository;
    }
    async create({ createProductInput }) {
        const { product_category_id } = createProductInput, rest = __rest(createProductInput, ["product_category_id"]);
        const productCategorys = [];
        for (let i = 0; i < product_category_id.length; i++) {
            const isValid = await this.productcategoryRepository.findOne({
                where: { product_category_id: product_category_id[i] },
            });
            if (isValid) {
                productCategorys.push(product_category_id[i]);
            }
            else {
                await this.productcategoryRepository.save({
                    product_category_id: product_category_id[i],
                });
                productCategorys.push(product_category_id);
            }
        }
        const result = await this.productRepository.save(Object.assign({ product_category_id: productCategorys }, createProductInput));
        return result;
    }
    async modify({ productId, updateProductInput }) {
        const isValid = await this.productRepository.findOne({
            where: { product_id: productId },
        });
        return isValid
            ? await this.productRepository.save(Object.assign({ product_id: productId }, updateProductInput))
            : { message: '수정할 대상이 존재하지 않습니다. ' };
    }
    async delete({ productId }) {
        const isDone = await this.productRepository.softDelete({
            product_id: productId,
        });
        return isDone
            ? { message: `${productId} 상품을 삭제했습니다.` }
            : { message: `삭제할 대상이 없습니다.` };
    }
    async findOne({ productId }) {
        return this.productRepository.findOne({
            where: { product_id: productId },
            relations: ['product_category_id', 'product_id', 'store_id'],
        });
    }
    async findAll() {
        return this.productRepository.find({
            relations: ['product_category_id', 'product_id', 'store_id'],
        });
    }
};
ProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Product_entity_1.Product)),
    __param(1, (0, typeorm_1.InjectRepository)(Product_Category_entity_1.Product_Category)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=Product.service.js.map