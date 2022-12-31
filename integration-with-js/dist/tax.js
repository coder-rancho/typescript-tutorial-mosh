"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isTaxableIncome = exports.calculateTax = void 0;
/**
 *
 * @param {number} income
 * @returns {number}
 */
function calculateTax(income) {
    return 0.3 * income;
}
exports.calculateTax = calculateTax;
/**
 * @param {number} income
 */
function isTaxableIncome(income) {
    return income > 50000 ? true : false;
}
exports.isTaxableIncome = isTaxableIncome;
