"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
    get fullName() {
        return this.name;
    }
}
class Student extends Person {
    constructor(studentId, name) {
        super(name);
        this.studentId = studentId;
    }
}
class Teacher extends Person {
    /* Method override */
    get fullName() {
        return 'professor ' + super.fullName;
    }
}
let student = new Student(1, 'naman');
let teacher = new Teacher('sushil');
console.log(teacher.fullName); // professor sushil
/* Polymorphism */
function printNames(people) {
    for (let person of people)
        console.log(person.fullName);
}
printNames([
    new Student(1, 'Naman'),
    new Teacher('Rajesh')
]);
