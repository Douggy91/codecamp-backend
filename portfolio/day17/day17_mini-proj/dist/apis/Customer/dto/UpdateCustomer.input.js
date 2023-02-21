"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCustomerInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const CreateCustomer_input_1 = require("./CreateCustomer.input");
let UpdateCustomerInput = class UpdateCustomerInput extends (0, graphql_1.PartialType)(CreateCustomer_input_1.CreateCustomerInput) {
};
UpdateCustomerInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateCustomerInput);
exports.UpdateCustomerInput = UpdateCustomerInput;
//# sourceMappingURL=UpdateCustomer.input.js.map