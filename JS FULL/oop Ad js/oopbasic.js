// -------------------------------
// 1. What is OOP? ✅ 
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
// Class Example (Blueprint for Objects) ✅
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
// Prototype in JavaScript✅
// -------------------------------
// Prototype means "shared memory" for class methods.
// All objects of a class share prototype methods.

// Example 1: Adding prototype methods manually
class Sketch {
    constructor() {
        this.character = "Doraemon";
        this.color = "Blue";
        this.someFunction = function () { };
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
        this.someFunction = function () { };
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




// ---------------------------------------------------------
// THIS IN JAVASCRIPT
// 1. "this" refers to the current execution context
// 2. Its value depends on HOW a function is called (not where written)
// ---------------------------------------------------------

// 1}global  ---> make this ki valeue window object
// 2} function ---> make this ki valeue window object
// 3} es5  functon insdie object  --->  object which is calling the method
// 4} es6  function inside object  ---> window object
// 5}es5 function inside object  --->  window object


// ---------------------------------------------------------
// 1) GLOBAL SCOPE --> 'this' refers to window (in browser) ✅
// ---------------------------------------------------------

console.log("GLOBAL:", this);
// In browser → Window
// In Node.js  → Empty object {}


// ---------------------------------------------------------
// 2) NORMAL FUNCTION CALL (ES5 function) --> window object ✅
// ---------------------------------------------------------

function test() {
    console.log("INSIDE test():", this);
}
test();   // Called normally → 'this' = window (in browser)


// ---------------------------------------------------------
// 3) FUNCTION INSIDE OBJECT (METHOD) → 'this' = object calling it ✅
// ---------------------------------------------------------

let obj = {
    name: "Vikas",

    fun: function () {
        console.log("INSIDE obj.fun():", this);
    }
};

obj.fun();
// Output → obj object
// Because the function is called using obj.fun()


// ---------------------------------------------------------
// 4) ARROW FUNCTION INSIDE OBJECT → 'this' = window (NOT object) ✅
// ---------------------------------------------------------

let obj33 = {
    name: "Rohan",

    fun: () => {
        console.log("INSIDE obj2.fun():", this);
    }
};

obj33.fun();
// Output → window object
// Arrow functions do NOT have their own 'this'
// They take 'this' from the outer scope (global here)


// ---------------------------------------------------------
// 5) 'this' inside constructor function → new object instance ✅
// ---------------------------------------------------------

function Person(name) {
    this.name = name;
    console.log("CONSTRUCTOR this:", this);
}

let p = new Person("John");
// Output → Person { name: "John" }


// ---------------------------------------------------------
// 6) 'this' inside class → new object instance ✅
// ---------------------------------------------------------

class User {
    constructor(name) {
        this.name = name;
    }

    show() {
        console.log("CLASS METHOD this:", this);
    }
}

let u1 = new User("Vikas");
u1.show();
// Output → User object

class User1 {
    fun() {
        function innerFun() {
            console.log("INNER FUNCTION this:", this);
        }
        innerFun();  // Normal function call → 'this' = window (in browser)
    }
};

let u2 = new User1();
u2.fun();


// ---------------------------------------------------------
// 7) Fixing 'this' with  --> call(), apply(), bind()✅

// jo window ho ta hai auko convert kar tai hai object me
// explain --> ek function man this ki value window ho rhi hai, agar aap chaahte ho kiiwo value window na ho balki object ki ho to hum bind(), call(), apply() ka use kar sakte hai
// ---------------------------------------------------------

// CALL --> functon chalata hai and this ki value set karta hai
// Apply --> wahi karta hai jo call hai and arguments array me leta hai
// BIND --> wahi karata hai jo call karta hai and aapko naya function det hai


let obj333 = {

    name: "Mahesh",

    show: function () {

        function innerFun(a, b) {
            console.log("8) FIXED this (value):", this.name, a, b);
        }

        // call() → arguments normally
        innerFun.call(this, "India", "UP");

        // apply() → arguments in array
        innerFun.apply(this, ["India", "UP"]);

        // bind() → returns new function
        let fixed = innerFun.bind(this, "India", "UP");
        fixed();
    }
};

obj333.show();

// ------------------------------------------------------------------
// 8) Standalone function with call(), apply(), bind() ✅
// ---------------------------------------------------------

function greet(country, city) {
    console.log(`9) Hello ${this.name} from ${country}, ${city}`);
}

let personObj = { name: "Suresh" };

greet.call(personObj, "India", "Delhi");         // call()
greet.apply(personObj, ["India", "Delhi"]);      // apply()
let greetUser = greet.bind(personObj, "India", "Delhi");
greetUser();                                     // bind()

