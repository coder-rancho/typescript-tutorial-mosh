"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tax_1 = require("./tax");
console.log((0, tax_1.isTaxableIncome)(80000));
let tax = (0, tax_1.calculateTax)(80000);
console.log(tax);
