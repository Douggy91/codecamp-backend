"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const Store_entity_1 = require("../../Store/entities/Store.entity");
let StoreInput = class StoreInput extends (0, graphql_1.OmitType)(Store_entity_1.Store, ['store_id'], graphql_1.InputType) {
};
StoreInput = __decorate([
    (0, graphql_1.InputType)()
], StoreInput);
exports.StoreInput = StoreInput;
//# sourceMappingURL=StoreInput.js.map