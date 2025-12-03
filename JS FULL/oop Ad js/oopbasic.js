// -------------------------------
// 1. What is OOP?
// -------------------------------
// OOP is a programming paradigm based on the concept of "objects".
// It helps structure code by bundling related properties (data) and methods (behavior)
// into individual objects.
// Main concepts include: Object, Class, Function, Inheritance, Polymorphism, Encapsulation, etc.


// -------------------------------
// Object Example
// -------------------------------

let user = {
    name: "John",
    age: 30,
    address: "xyz"
};

console.log(user.name);
console.log(user.age);
console.log(user.address);

console.log("-----------------------------------------------");


// -------------------------------
// Class Example (Blueprint for Objects)
// Why use classes?
// → To create multiple objects with similar properties and methods
// → So we don't write code again and again for each new object
// -------------------------------

class Person1 {
    constructor() {
        this.name = "vikas";
        this.age = 40;
        this.address = "xyz";
    }
}

let p1 = new Person1();
console.log(p1);


// -------------------------------
// Updating class with dynamic values
// -------------------------------

class Person {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
}

let p2 = new Person("John", 30, "abc");
let p3 = new Person("Doe", 25, "def");

console.log(p2);
console.log(p3);


// -------------------------------
// Prototype in JavaScript
// -------------------------------
// Prototype means "shared memory" for class methods.
// All objects of a class share prototype methods.

// Example 1: Adding prototype methods manually
class Sketch {
    constructor() {
        this.character = "Doraemon";
        this.color = "Blue";
        this.someFunction = function () {};
    }
}

Sketch.prototype.speak = function () {
    console.log("Speaking...");
};

Sketch.prototype.jump = function () {
    console.log("Jumping...");
};

let obj1 = new Sketch();
let obj2 = new Sketch();


// -------------------------------
// Example 2: Prototype inside a class
// (Class methods automatically go to prototype)
// -------------------------------

class Sketch1 {
    constructor() {
        this.character = "Doraemon";
        this.color = "Blue";
        this.someFunction = function () {};
    }

    speak() {
        console.log("Speaking...");
    }

    jump() {
        console.log("Jumping...");
    }
}

let obj3 = new Sketch1();
let obj4 = new Sketch1();


