"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const apollo_1 = require("@nestjs/apollo");
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("@nestjs/typeorm");
require("dotenv/config");
const Customer_module_1 = require("./apis/Customer/Customer.module");
const Order_module_1 = require("./apis/Order/Order.module");
const Order_Product_module_1 = require("./apis/Order_Product/Order_Product.module");
const Product_module_1 = require("./apis/Product/Product.module");
const Product_Category_module_1 = require("./apis/Product_Category/Product_Category.module");
const Store_module_1 = require("./apis/Store/Store.module");
const Store_Category_module_1 = require("./apis/Store_Category/Store_Category.module");
const Store_Frachise_module_1 = require("./apis/Store_Franchise/Store_Frachise.module");
const DBPASSWD = process.env.DBPASSWD;
const DBUSER = process.env.DBUSER;
const DBHOST = process.env.DBHOST;
const DBDATABASE = process.env.DBDATABASE;
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            Customer_module_1.CustomerModule,
            Order_module_1.OrderModule,
            Store_Frachise_module_1.FranchiseModule,
            Store_module_1.StoreModule,
            Store_Category_module_1.Store_CategoryModule,
            Product_Category_module_1.ProductCategoryModule,
            Product_module_1.ProductModule,
            Order_Product_module_1.OrderProductModule,
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloDriver,
                autoSchemaFile: './src/commons/graphql/schema.gql',
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: DBHOST,
                port: 3333,
                username: DBUSER,
                password: DBPASSWD,
                database: DBDATABASE,
                entities: [__dirname + '/apis/**/*.entity.*'],
                synchronize: true,
                logging: true,
            }),
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map