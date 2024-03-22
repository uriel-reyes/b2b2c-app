"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BuildClient_1 = __importDefault(require("./BuildClient"));
const getCustomers = () => {
    return BuildClient_1.default
        // .inStoreKeyWithStoreKeyValue({storeKey: 'data-model-uriel'})
        .customers()
        .get({ queryArgs: {
            where: `stores(key="data-model-uriel")`
        } })
        .execute()
        .then(response => {
        const customerResults = response.body;
        console.log(customerResults);
    });
};
exports.default = getCustomers;
