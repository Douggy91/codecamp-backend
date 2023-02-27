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
exports.CustomerResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const Customer_service_1 = require("./Customer.service");
const CreateCustomer_input_1 = require("./dto/CreateCustomer.input");
const Delete_output_1 = require("../../commons/deleteMessage/Delete.output");
const UpdateCustomer_input_1 = require("./dto/UpdateCustomer.input");
const Customer_entity_1 = require("./entities/Customer.entity");
let CustomerResolver = class CustomerResolver {
    constructor(customerService) {
        this.customerService = customerService;
    }
    async createCustomer(createCustomerInput) {
        return await this.customerService.create({ createCustomerInput });
    }
    async updateCustomer(customerId, updateCustomerInput) {
        return this.customerService.update({ customerId, updateCustomerInput });
    }
    async deleteCustomer(customerId) {
        return this.customerService.delete({ customerId });
    }
    fetchCustomer(customerName) {
        return this.customerService.findOne({ customerName });
    }
    fetchCustomerAll() {
        return this.customerService.findAll();
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => Delete_output_1.DeleteOutput),
    __param(0, (0, graphql_1.Args)('createCustomerInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateCustomer_input_1.CreateCustomerInput]),
    __metadata("design:returntype", Promise)
], CustomerResolver.prototype, "createCustomer", null);
__decorate([
    (0, graphql_1.Mutation)(() => Customer_entity_1.Customer),
    __param(0, (0, graphql_1.Args)('customerId')),
    __param(1, (0, graphql_1.Args)('updateCustomerInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpdateCustomer_input_1.UpdateCustomerInput]),
    __metadata("design:returntype", Promise)
], CustomerResolver.prototype, "updateCustomer", null);
__decorate([
    (0, graphql_1.Mutation)(() => Delete_output_1.DeleteOutput || Boolean),
    __param(0, (0, graphql_1.Args)('customerId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CustomerResolver.prototype, "deleteCustomer", null);
__decorate([
    (0, graphql_1.Query)(() => Customer_entity_1.Customer),
    __param(0, (0, graphql_1.Args)('customerName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CustomerResolver.prototype, "fetchCustomer", null);
__decorate([
    (0, graphql_1.Query)(() => [Customer_entity_1.Customer]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CustomerResolver.prototype, "fetchCustomerAll", null);
CustomerResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [Customer_service_1.CustomerService])
], CustomerResolver);
exports.CustomerResolver = CustomerResolver;
//# sourceMappingURL=Customer.resolver.js.map