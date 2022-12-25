"use strict";
let bigNum = 123345345;
let myVar;
myVar = 1;
myVar = "anyStr";
let numbers;
let nums = [1, 2, 3];
let nos = [];
let user = [1, "naman"];
user[0].valueOf();
user[1].charAt(2);
user.push("somethingElse");
var Size;
(function (Size) {
    Size[Size["small"] = 1] = "small";
    Size[Size["medium"] = 2] = "medium";
    Size[Size["large"] = 3] = "large";
})(Size || (Size = {}));
;
let mySize = Size.medium;
;
let myColor = "#ffffff";
console.log(mySize, myColor);
function calcTax(income) {
    if (income > 500000)
        return income * 0.3;
    return 0;
}
function countChars(str = "") {
    return str.length;
}
let employee;
employee = { id: 1, name: "Naman" };
employee.phoneNumber = "+91 9789834524";
employee.retire = (date) => console.log(date);
employee.retire(new Date(Date.now()));
//# sourceMappingURL=index.js.map