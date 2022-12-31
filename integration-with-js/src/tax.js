/**
 * 
 * @param {number} income 
 * @returns {number}
 */
export function calculateTax(income) {
    return 0.3 * income;
}

/**
 * @param {number} income
 */
export function isTaxableIncome(income) {
    return income > 50_000 ? true : false;
}
