"use strict";
/* problem */
// code redundancy for multiple types
var _a;
class keyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
class StringKeyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
let p1 = new keyValuePair(1, 'ram');
let p2 = new StringKeyValuePair('1', 'ram');
/* Solution -> GENERIC CLASS */
class KeyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
let pair1 = new KeyValuePair(1, 'ram');
let pair2 = new KeyValuePair('1', 'ram');
/* Generic Functions */
function wrapInArray(value) {
    return [value];
}
let arr1 = wrapInArray('1'); // Type: string[]
let arr2 = wrapInArray(1); // Type: number[]
function fetch(url) {
    return {
        data: null,
        error: null
    };
}
let result = fetch('http://myWebsite.com/user');
console.log((_a = result.data) === null || _a === void 0 ? void 0 : _a.name);
/* Generic Constrains */
/* 1. constaint by type */
function echoType(value) {
    return value;
}
echoType(1);
// echoType(true);                  // Error: Argument of type 'boolean' is not assignable to parameter of type 'string | number'.
/* 2. contrains by shape of object */
function echoObj(value) {
    return value;
}
echoObj({ name: 'naman' });
class Person {
    constructor(name) {
        this.name = name;
    }
}
class Student extends Person {
}
function echo(value) {
    return value;
}
echo({ name: 'naman' }); // iPerson interface
echo(new Person('naman'));
console.log(echo(new Student('aman'))); // Person class
//# sourceMappingURL=index.js.map