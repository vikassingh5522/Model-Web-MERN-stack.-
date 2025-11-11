// ===============================================================
// 📘 JAVASCRIPT FUNCTION CONCEPTS & PRACTICE NOTES
// ===============================================================

// ---------------------------------------------------------------
// 1️⃣ PARAMETERS & ARGUMENTS
// ---------------------------------------------------------------
// Parameters → variables defined in function declaration.
// Arguments → actual values passed when calling the function.

function abc(name, age, add) { // Parameters
    console.log(name, age, add);
}
abc("Vikas", 24, "Shankar Nagar"); // Arguments

// ---------------------------------------------------------------
// 2️⃣ REST PARAMETERS (...)
// ---------------------------------------------------------------
// Used when you want to accept unlimited arguments as an array.

function abcd(a, b, c, ...d) {
    console.log(a, b, c, d);
}
abcd(1, 2, 3, 4, 5, 6, 7);

// ---------------------------------------------------------------
// 3️⃣ HOISTING
// ---------------------------------------------------------------
// Hoisting moves declarations to the top of scope during compile phase.

// Example 1: var is hoisted (undefined)
console.log(a);
var a = 12;

// Example 2: let is not hoisted (gives error)
// console.log(s);
// let s = 12;

// Example 3: Function declaration is hoisted
abc1();
function abc1() {
    console.log("hey");
}

// Example 4: Function expression with var is NOT hoisted
// abc2(); // ❌ Error
var abc2 = function() {
    console.log("hey");
};

// ---------------------------------------------------------------
// 4️⃣ TYPES OF PARAMETERS IN JS
// ---------------------------------------------------------------
// [ Required, Destructured, Rest, Default ]

// Required
function abcd1(a, b, c, d) {
    console.log(a, b, c, d); // if args missing → undefined
}
abcd1();

// Destructured
function ab({ name, age, add }) {
    console.log(name, age, add);
}
ab({ name: "Vikas", age: 22, add: "Old City" });

// Rest
function abRest(...val) {
    console.log(val);
}
abRest(1, 2, 3, 4, 7, 6);

// Default
function abDefault(a = 0, b = 0, c = 0, d = 0) {
    console.log(a, b, c, d);
}
abDefault(1, 2, 3);

// ---------------------------------------------------------------
// 5️⃣ ARGUMENTS IN JS
// ---------------------------------------------------------------
// [ Positional, Default, Spread ]

// Positional
function posArg(a, b = 4, c, d) {
    console.log(a, b, c, d);
}
posArg(1, 2, 3, 4);

// Spread
function spreadArg(a, b, c, d) {
    console.log(a, b, c, d);
}
let Array1 = [1, 2, 3, 4];
spreadArg(...Array1);

// ---------------------------------------------------------------
// 6️⃣ NESTED FUNCTION & SCOPE CHAIN
// ---------------------------------------------------------------

function outer() {
    function inner() {
        console.log("Inner function executed");
    }
    inner();
}

let aGlobal = 12;
function abScope() {
    let b = 12;
    function cd() {
        console.log(b); // inner can access outer variable (closure)
    }
    cd();
}
abScope();

// ---------------------------------------------------------------
// 7️⃣ IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)
// ---------------------------------------------------------------
// Executes instantly after creation.

(function name() {
    console.log("I am instantly invoked!");
})();

// ---------------------------------------------------------------
// 8️⃣ MORE FUNCTION TYPES IN JS
// ---------------------------------------------------------------
// ['Arrow (Fat Arrow)', 'Anonymous', 'Higher Order', 'Callback',
//  'First Class', 'Pure', 'Impure']

// Arrow Function (Fat Arrow)
let arrowFun = () => {
    console.log("Vikas Singh");
};
arrowFun();

// Anonymous Function → No name (often used as callback)
setTimeout(function() {
    console.log("Anonymous function example");
}, 1000);

// Higher Order Function → returns another function or takes one as argument
function higherOrder() {
    return function innerFunc() {
        console.log("Returned from higher order function");
    };
}
higherOrder()();

// Callback Function → passed as an argument to another function
function greet(callback) {
    console.log("Greeting...");
    callback();
}
greet(function() {
    console.log("Callback executed!");
});

// First-Class Function → functions can be assigned, returned, or passed
function firstClass(fn) {
    fn();
}
firstClass(() => console.log("First class function example"));

// Pure Function → same input gives same output, no side effects
function pure(val) {
    return val + 2;
}
console.log(pure(12));
console.log(pure(12));

// Impure Function → same input, different output (uses external factor)
function impure(val) {
    console.log(Math.random() + val);
}
impure(12);
impure(12);

// ---------------------------------------------------------------
// 9️⃣ SCOPING IN JAVASCRIPT
// ---------------------------------------------------------------
// Global Scope → accessible anywhere
// Function Scope → accessible only inside function

let globalVar = "I am global";
function scopeExample() {
    let localVar = "I am local";
    console.log(globalVar);
    console.log(localVar);
}
scopeExample();

// ---------------------------------------------------------------
// 🔟 CLOSURES & SCOPING RULES
// ---------------------------------------------------------------
// Closure = a function that remembers its outer scope variables
function closureExample() {
    let a = 12;
    return function inner() {
        console.log(a);
    };
}
const result = closureExample();
result(); // uses 'a' from outer function

// ---------------------------------------------------------------
// 🔥 PRACTICE QUESTIONS
// ---------------------------------------------------------------

// 1️⃣ Function sayHello()
function sayHello() {
    console.log("Say hello");
}
sayHello();

// 2️⃣ Function add(a,b)
function add(a, b) {
    return a + b;
}
let ans = add(11, 22);
console.log(ans);

// 3️⃣ Function with default parameter
function create(guest = "Guest") {
    console.log(`Hi ${guest}`);
}
create("Vikas");

// 4️⃣ Rest parameter to add unlimited numbers
function addUnlimited(...nums) {
    let ans = nums.reduce((acc, val) => acc + val, 0);
    console.log(ans);
}
addUnlimited(1, 2, 3, 4, 6, 7, 8, 9, 10);

// 5️⃣ IIFE Example
(function createIIFE() {
    console.log("I am instantly!");
})();

// 6️⃣ Nested function printing variable from outer one
function parent() {
    let b = 11;
    function child() {
        console.log(b);
    }
    child();
}
parent();

// 7️⃣ Array operations (add & remove)
let arrFruits = ["apple", "guava", "grapes", "mango", "banana"];
arrFruits.push("pear");
arrFruits.unshift("orange");
console.log(arrFruits);

// 8️⃣ Print all array elements
let arrNums = [1, 2, 3, 4, 5, 6];
arrNums.forEach(element => {
    console.log(element);
});

// 9️⃣ Object iteration
let person = {
    name: "Vikas",
    age: 22,
    city: "Jalna"
};
for (let key in person) {
    console.log(person[key]);
}

// 🔟 setTimeout example
setTimeout(() => {
    console.log("Time up!");
}, 2000);
