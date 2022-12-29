class Person {
    constructor(public name: string) {}

    get fullName(): string {
        return this.name;
    }
}

class Student extends Person {
    constructor(public studentId: number, name: string) {
        super(name);
    }
}

class Teacher extends Person {
    /* Method override */
    override get fullName(): string {
        return 'professor ' + super.fullName;
    }
}

let student = new Student(1, 'naman');
let teacher = new Teacher('sushil');

console.log(teacher.fullName);              // professor sushil



/* Polymorphism */
function printNames(people: Person[]) {
    for (let person of people) console.log(person.fullName);
}

printNames([
    new Student(1, 'Naman'),
    new Teacher('Rajesh')
])



/* Open close principle */
// > Our classes should be open for extension and closed for modification.




/* Abstract class */
abstract class Shape {
    constructor (public color: string){}
    
    abstract render(): void;
}

class Circle extends Shape {
    constructor (public radius: number, color: string) {
        super(color);
    }

    override render(): void {
        console.log('Circle is rendering...');
    }
}