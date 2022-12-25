let bigNum = 123_345_345; // number
// bigNum = "big"            Error: Type 'string' is not assignable to type 'number'.
 

let myVar; // type: any
myVar = 1;
myVar = "anyStr"


let numbers: number[];
let nums = [1, 2, 3]; // type: number[]
let nos = []          // type: any[]


/* Tuple: fixed length array */
let user: [number, string] = [1, "naman"];
user[0].valueOf();
user[1].charAt(2);
// let user2: [number, string] = [1, "naman", "somethingElse"]; // Error
user.push("somethingElse")                                      // No error 



/* Enums */
enum Size { small = 1 , medium /* 2 */,  large /* 3 */ }; // default:  0, 1, 2
let mySize: Size = Size.medium;
const enum Color { white = "#ffffff", black = "#000000"}; // const => Generate consice code
let myColor: Color = Color.white;
console.log(mySize, myColor); // 2 #ffffff



/* Functions */
function calcTax(income: number): number /*return type*/ {
    // let x;                                              // Error: 'x' is declared but its value is never read.
    if (income > 5_00_000)
        return income*0.3;
    return 0; 
}

function countChars(str = "" /* default parameter */): number {
    return str.length;
}