/* problem */
// code redundancy for multiple types

class keyValuePair {
    constructor(public key: number, public value: string){}
    // constructor(public key: string, public value: string) {} // Error: Multiple constructor implementations are not allowed.
}

class StringKeyValuePair {
    constructor(public key: string, public value: string){}
}


let p1 = new keyValuePair(1, 'ram');
let p2 = new StringKeyValuePair('1', 'ram')




/* Solution -> GENERIC CLASS */
class KeyValuePair<K, V> {
    constructor(public key: K, public value: V){}
}

let pair1 = new KeyValuePair<number, string>(1, 'ram')
let pair2 = new KeyValuePair<string, string>('1', 'ram')




/* Generic Functions */
function wrapInArray<T>(value: T) {
    return [value];
}
let arr1 = wrapInArray('1')                             // Type: string[]
let arr2 = wrapInArray(1)                               // Type: number[]




/* Generic Interfaces */

// http://myWebsite.com/users
// http://myWebsite.com/products

interface User {
    name: string;
}

interface Product {
    title: string;
}

interface Result<T> {
    data: T | null,
    error: string | null
}

function fetch<T>(url: string): Result<T> {
    return {
        data: null,
        error: null
    }
}

let result = fetch<User>('http://myWebsite.com/user')
console.log(result.data?.name)




/* Generic Constrains */
/* 1. constaint by type */
function echoType<T extends string | number>(value: T) {
    return value;
}
echoType(1);
// echoType(true);                  // Error: Argument of type 'boolean' is not assignable to parameter of type 'string | number'.

/* 2. contrains by shape of object */
function echoObj<T extends {name: string}>(value: T) {
    return value;
}
echoObj({name: 'naman'});
// echoObj({});                 // Error: Argument of type '{}' is not assignable to parameter of type '{ name: string; }

/* 3. constraint by interface and class*/
interface iPerson {
    name: 'naman'
}
class Person {
    constructor(public name: string){}
}
class Student extends Person {}

function echo<T extends iPerson | Person>(value: T) {
    return value;
}

echo({name: 'naman'})                          // iPerson interface
echo(new Person('naman'))
console.log(echo(new Student('aman')))         // Person class




/* Extending generic classes */
interface Item {
    name: string,
    price?: number
}

class Store<T> {
    objects: T[] = [];
    add(obj: T): void {
        this.objects.push(obj);
    }

    // if T is Item
    // keyof T => 'name' | 'price'
    find(property: keyof T, value: unknown): T | undefined {
        return this.objects.find(obj => obj[property] === value)
    }
}

// Pass on the generic type parameter
class CompressibleStore<T> extends Store<T> {
    compress(): void {}
}
let compressibleObj = new CompressibleStore<Item>();
compressibleObj.add({name: 'laptop'})

// Restrict the generic type parameter
class SearchableStore<T extends {name: string}> extends Store<T> {
    search(name: string): T | undefined {
        return this.objects.find(obj => obj.name === name)
    }
}
let searchableObj = new SearchableStore<Item>();
searchableObj.add({name: 'mobile', price: 50_000})

// Fix or terminating the generic type parameter
class ItemStore extends Store<Item> {
    filterByCategory(category: string): Item[] {
        return [];
    } 
}



/* keyof operator */
// refer find() method of Store class
let store = new Store<Item>();
store.add({name: 'laptop', price: 50_000})
store.find('name', 'laptop')
store.find('price', 50000)
// store.find('nonExistingProp', 'value')     // Error: Argument of type '"nonExistingProp"' is not assignable to parameter of type 'keyof Item'.




/* Type Mapping */
// create a type based on already existing types

// code repetition ❌
interface IReadOnlyItem {
    readonly name: string,
    readonly price: number
}

// using indexSignature and keyof methodology => type mapping
type ReadOnlyItem = {
    readonly [k in keyof Item]: Item[k]
}
let item1: ReadOnlyItem = {name: 'laptop'}

// using <T>
type ReadOnly<T> {
    readonly [k in keyof T]: T[k]
}
let item2: Readonly<Item> = {name: 'mobile'}

// NOTE :-
// since these types are so common, typescript provide ready to use utility classes
// like ReadOnly, Required, etc.


