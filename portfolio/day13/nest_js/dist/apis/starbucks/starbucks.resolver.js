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
exports.StarbucksResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const createStarbucks_Input_1 = require("./dto/createStarbucks.Input");
const starbucks_entity_1 = require("./entities/starbucks.entity");
const starbucks_service_1 = require("./starbucks.service");
let StarbucksResolver = class StarbucksResolver {
    constructor(starbucksService) {
        this.starbucksService = starbucksService;
    }
    fetchStarbucks() {
        return this.starbucksService.findAll();
    }
    createStarbucks(createStarbucksInput) {
        console.log(createStarbucksInput);
        return this.starbucksService.create();
    }
};
__decorate([
    (0, graphql_1.Query)(() => [starbucks_entity_1.Starbucks]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StarbucksResolver.prototype, "fetchStarbucks", null);
__decorate([
    (0, graphql_1.Mutation)(() => String),
    __param(0, (0, graphql_1.Args)('createStarbucksInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createStarbucks_Input_1.CreateStarbucksInput]),
    __metadata("design:returntype", void 0)
], StarbucksResolver.prototype, "createStarbucks", null);
StarbucksResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [starbucks_service_1.StarbucksService])
], StarbucksResolver);
exports.StarbucksResolver = StarbucksResolver;
//# sourceMappingURL=starbucks.resolver.js.map