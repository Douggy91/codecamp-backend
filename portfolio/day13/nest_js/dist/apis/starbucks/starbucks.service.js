"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StarbucksService = void 0;
const common_1 = require("@nestjs/common");
let StarbucksService = class StarbucksService {
    findAll() {
        const result = [
            createMenu('아메리카노', 4500, 5, 0, 0, 0, 0, 75),
            createMenu('카페라떼', 5000, 110, 4, 6, 70, 8, 75),
            createMenu('카페모카', 5500, 100, 4, 7, 80, 10, 80),
            createMenu('카라멜마끼야또', 6000, 150, 10, 15, 5, 100, 100),
            createMenu('에스프레소', 3000, 5, 0, 0, 0, 0, 100),
        ];
        return result;
    }
    create() {
        return '등록에 성공하였습니다.';
    }
};
StarbucksService = __decorate([
    (0, common_1.Injectable)()
], StarbucksService);
exports.StarbucksService = StarbucksService;
const createMenu = (menu, price, kcal, saturted_fat, protein, salt, sugar, caffeine) => {
    const result = {
        menu,
        price,
        kcal,
        saturted_fat,
        protein,
        salt,
        sugar,
        caffeine,
    };
    return result;
};
//# sourceMappingURL=starbucks.service.js.map