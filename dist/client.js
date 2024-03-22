"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const customersApi_1 = __importDefault(require("./api/customersApi"));
// Now you can use apiRoot directly to interact with the commercetools API
// getOrders()
(0, customersApi_1.default)();
