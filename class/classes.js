"use strict";
class Employee {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet(phrase) {
        console.log(`${phrase}+${this.name} `);
    }
}
