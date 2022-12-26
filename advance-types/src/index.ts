/* Type alias */
type Employee = {
    readonly id: number,
    name: string,
    retire?: (date: Date) => void
}
let emp1: Employee = {id: 1, name: 'naman'};
let emp2: Employee = {id: 2, name: 'aman'};



/* Union types */
function kgToLbs(weight: number | string /* union type */): number {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}



/* Intersection types */
type Draggable = { drag: () => void };
type Resizable = { resize: () => void };
type UIWidget = Draggable & Resizable;
let textBox: UIWidget = {   // have to implement both types methods.
    drag: () => {},
    resize: () => {}
}



/* Literal types */
type Metric = "cm" | "inch";
let unit: Metric = 'cm';



/* Optional Chaining */ 
// used when the object can be possibly null or undefined
// console.log(Custome?.birthday?.getFullYear()) 



/* Nullish Coalescing operator: ?? */
let speed: number | null = null;
let ride = {
    // speed: speed || 30,        // Falsy values = null, undefined, '', false, 0
    speed: speed ?? 30            // => speed !== ( null or undefined) ? speed : 30;
}



/* Type Assertion */ 
// used when you know more about the type than the ts-compiler
let phone = document.getElementById('phone')                                // type: HTMLElement | null
let phoneInput = document.getElementById('phone') as HTMLInputElement       // type: HTMLInputElement
let phoneInput2 = <HTMLInputElement> document.getElementById('phone')       // type: HTMLInputElement
// console.log(phone?.value);                                               // Error: Property 'value' does not exist on type 'HTMLElement'
console.log(phoneInput?.value);
// Note: it doesn't convert the type, it just tell the compiler that we're expecting this type. 




/* Unknown type */
function render (document: any) {   // problem with any ---
    document.value;                 //                    |
    document.toUpperCase();         //                    |
    document.whateverWeWant();      // <-------------------
}
// use unknown
function render2 (document: unknown) {
    // document.toUpperCase();                 // Error: 'document' is of type 'unknown'.      => we need to narrow the type
    /* Narrowing */
    if ( typeof document === 'string')
        document.toUpperCase();
    /* Narrowing of non-primitive types */
    if (document instanceof HTMLInputElement)
        document.value;
}