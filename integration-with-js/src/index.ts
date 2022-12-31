import { calculateTax, isTaxableIncome } from "./tax";

console.log(isTaxableIncome(80_000));
let tax = calculateTax(80_000);
console.log(tax)