// ============================================================
// 📘 JAVASCRIPT FUNCTION BASICS & ADVANCED CONCEPTS
// ============================================================

// ------------------------------------------------------------
// 1️⃣ PARAMETERS and ARGUMENTS
// ------------------------------------------------------------

// ➤ Parameters are variables defined inside the function definition.
// ➤ Arguments are actual values you pass when calling the function.

function abc(name, age, add) { // <-- parameters
    console.log(name, age, add);
}
abc("Vikas", 24, "Shankar Nagar"); // <-- arguments
// Output: Vikas 24 Shankar Nagar

// ------------------------------------------------------------
// 2️⃣ REST PARAMETERS
// ------------------------------------------------------------

// ➤ The rest parameter syntax (...d) allows a function to accept
//    an indefinite number of arguments as an array.

function abcd(a, b, c, ...d) {
    console.log(a, b, c, d); // 'd' is an array of remaining arguments
}
abcd(1, 2, 3, 4, 5, 6, 7);
// Output: 1 2 3 [4, 5, 6, 7]

// ------------------------------------------------------------
// 3️⃣ HOISTING
// ------------------------------------------------------------

// ➤ Hoisting is JavaScript’s behavior of moving declarations
//    to the top of their scope before code execution.

// Example 1: Variable hoisting with var
console.log(a); // undefined (declared but not initialized)
var a = 12;

// Example 2: let and const are not hoisted the same way
// console.log(s); // ❌ ReferenceError
// let s = 12;

// Example 3: Function hoisting
abc1(); // Works, function declarations are hoisted
function abc1() {
    console.log("Hey from hoisted function!");
}

// Example 4: Function expression hoisting
// abc2(); // ❌ Error, function expressions are NOT hoisted
var abc2 = function() {
    console.log("Hey from expression function!");
};

// ------------------------------------------------------------
// 4️⃣ TYPES OF PARAMETERS
// ------------------------------------------------------------

// 1️⃣ Required parameters → Must be passed or they'll be undefined.
function abcd1(a, b, c, d) {
    console.log(a, b, c, d);
}
abcd1(); // undefined undefined undefined undefined

// 2️⃣ Destructured parameters → Extracts properties from an object.
function ab({ name, age, add }) {
    console.log(name, age, add);
}
ab({ name: "Vikas", age: 22, add: "Old City" });

// 3️⃣ Rest parameters → Gathers multiple arguments into an array.
function abRest(...val) {
    console.log(val);
}
abRest(1, 2, 3, 4, 7, 6);

// 4️⃣ Default parameters → Provides a fallback if a value isn’t passed.
function abDefault(a = 0, b = 0, c = 0, d = 0) {
    console.log(a, b, c, d);
}
abDefault(1, 2, 3); // Output: 1 2 3 0

// ------------------------------------------------------------
// 5️⃣ TYPES OF ARGUMENTS
// ------------------------------------------------------------

// 1️⃣ Positional Arguments → Order matters
function pos(a, b = 4, c, d) {
    console.log(a, b, c, d);
}
pos(1, 2, 3, 4); // Output: 1 2 3 4

// 2️⃣ Spread Arguments → Spread an array into individual values
function spreadFn(a, b, c, d) {
    console.log(a, b, c, d);
}
let arrSpread = [1, 2, 3, 4];
spreadFn(...arrSpread); // Output: 1 2 3 4

// ------------------------------------------------------------
// 6️⃣ NESTED FUNCTIONS & SCOPE CHAIN
// ------------------------------------------------------------

// ➤ Nested function: Function inside another function.
function abcNested() {
    function defg() {
        console.log("Inner function called!");
    }
    defg();
}
abcNested();

// ➤ Scope chain: Inner function can access outer function variables.
let globalA = 12;
function abScope() {
    let localB = 12;
    function cd() {
        console.log(localB); // Accessing variable from parent scope
    }
    cd();
}
abScope();

// ------------------------------------------------------------
// 7️⃣ IIFE (Immediately Invoked Function Expression)
// ------------------------------------------------------------

// ➤ Runs automatically as soon as it’s defined.
(function immediate() {
    console.log("I am instantly invoked!");
})();

// ------------------------------------------------------------
// 8️⃣ FUNCTION TYPES
// ------------------------------------------------------------

// ➤ Arrow Function (Fat Arrow)
let arrowFn = () => {
    console.log("Arrow Function: Vikas Singh");
};
arrowFn();

// ➤ Anonymous Function (no name)
setTimeout(function() {
    console.log("Anonymous Function executed after 1 sec");
}, 1000);

// ➤ Higher Order Function → Function that returns or accepts another function
function higherOrder() {
    return function inner() {
        console.log("Inner function executed!");
    };
}
higherOrder()();

// ➤ Callback Function → Function passed as an argument
function execute(callback) {
    callback();
}
execute(function b() {
    console.log("Callback executed!");
});

// ➤ First-Class Function → Functions can be assigned to variables or passed around
function greet() {
    return "Hello!";
}
let msg = greet;
console.log(msg());

// ➤ Pure Function → Always returns the same output for same input
function pureFn(val) {
    return val + 2;
}
console.log(pureFn(12)); // 14
console.log(pureFn(12)); // 14

// ➤ Impure Function → Output can change even with same input
function impureFn(val) {
    return Math.random() + val;
}
console.log(impureFn(12));
console.log(impureFn(12));

// ------------------------------------------------------------
// 9️⃣ SCOPING IN JAVASCRIPT
// ------------------------------------------------------------

// ➤ Global Scope → Accessible everywhere
// ➤ Function Scope → Accessible only inside function

var globalVar = "I am global";

function scopeTest() {
    var localVar = "I am local";
    console.log(globalVar); // accessible
    console.log(localVar);  // accessible only inside
}
scopeTest();
// console.log(localVar); // ❌ Error

// ------------------------------------------------------------
// 🔟 CLOSURES
// ------------------------------------------------------------

// ➤ Closure = A function that remembers variables from its outer scope
function closureExample() {
    let a = 12;
    return function() {
        console.log(a); // remembers 'a' even after outer function ends
    };
}
let closureFn = closureExample();
closureFn(); // Output: 12

// ------------------------------------------------------------
// 🔥 PRACTICE QUESTIONS 🔥
// ------------------------------------------------------------

// 1️⃣ Print "Say Hello"
function sayHello() {
    console.log("Say Hello");
}
sayHello();

// 2️⃣ Function that adds two numbers
function add(a, b) {
    return a + b;
}
console.log(add(11, 22)); // 33

// 3️⃣ Function with default parameter
function greetUser(name = "Guest") {
    console.log(`Hi ${name}`);
}
greetUser("Vikas");
greetUser(); // Hi Guest

// 4️⃣ Function that adds unlimited numbers using Rest + Reduce
function addUnlimited(...nums) {
    let sum = nums.reduce((acc, val) => acc + val, 0);
    console.log(sum);
}
addUnlimited(1, 2, 3, 4, 6, 7, 8, 9, 10);

// 5️⃣ Nested function accessing variable from parent (Closure)
function parent() {
    let b = 11;
    function child() {
        console.log(b);
    }
    child();
}
parent();

// 6️⃣ Array operations (push + unshift)
let fruits = ["Apple", "Guava", "Grapes", "Mango", "Banana"];
fruits.push("Pear");      // Add at end
fruits.unshift("Orange"); // Add at start
console.log(fruits);

// 7️⃣ Loop through array (forEach)
let arr = [1, 2, 3, 4, 5, 6];
arr.forEach(function(element) {
    console.log(element);
});

// 8️⃣ Object iteration (for...in)
let person = {
    name: "Vikas",
    age: 22,
    city: "Jalna"
};
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

// 9️⃣ setTimeout() Example
setTimeout(() => {
    console.log("Time up! (after 2 seconds)");
}, 2000);
