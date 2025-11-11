// ================================================================
// 1️⃣ VARIABLE DECLARATIONS → var, let, const
// ================================================================

// Example using 'var'
{
    var a = 10; // 'var' is function-scoped, not block-scoped
}
console.log(a); // ✅ Works fine → Output: 10
// Explanation: 'a' is accessible outside the block because 'var' ignores block scope.



// Example using 'let'
{
    let b = 20; // 'let' is block-scoped
    console.log(b); // ✅ Works fine inside the same block
}
// console.log(b); // ❌ ReferenceError: b is not defined
// Explanation: 'b' exists only inside the curly braces.



// Example using 'const'
{
    const c = 30; // 'const' is block-scoped and cannot be reassigned
    console.log(c); // ✅ Works fine → Output: 30
    // c = 40; // ❌ TypeError: Assignment to constant variable.
}
// console.log(c); // ❌ ReferenceError: c is not defined
// Explanation: 'const' behaves like 'let' in scope but cannot be changed.



// ================================================================
// 2️⃣ CONSOLE METHODS IN JAVASCRIPT
// ================================================================

console.log("This is a general log message.");  // ✅ Basic log (used most often)
console.info("This is an info message.");       // ℹ️ Information (same as log)
console.warn("This is a warning message!");     // ⚠️ Warning message (yellow color)
console.error("This is an error message!");     // ❌ Error message (red color)
console.table({ name: "Vikas", age: 22 });      // 📋 Displays object/array in table format



// ================================================================
// 3️⃣ USER INTERACTION → prompt() and alert()
// ================================================================

// prompt() → Takes input from the user (in a popup box)
let username = prompt("What is your name?");
console.log("User entered name:", username); // ✅ Shows the user input in console

// alert() → Displays a popup message to the user
alert("Welcome " + username + "! You are successfully logged in.");

// Explanation:
// - prompt() returns a string (whatever user types).
// - alert() just shows a popup message; it does NOT return anything.


// ================================================================
// 4️⃣ STRINGS IN JAVASCRIPT
// ================================================================

// Strings can use single or double quotes
let msg1 = "Hello, World!";
let msg2 = 'JavaScript is fun!';
console.log(msg1, msg2);

// Common String Methods:
let str = "Hello JavaScript World!";

console.log(str.slice(0, 5));     // ✅ "Hello" → extracts substring from index 0 to 4
console.log(str.split(" "));      // ✅ ["Hello", "JavaScript", "World!"] → split by space
console.log(str.split("a"));      // ✅ splits wherever 'a' occurs
console.log(str.replace("World", "Universe")); // ✅ replaces first match
console.log(str.includes("JavaScript"));       // ✅ true → checks if word exists
console.log(str.toUpperCase());   // ✅ Converts to uppercase
console.log(str.toLowerCase());   // ✅ Converts to lowercase



// ================================================================
// 5️⃣ TEMPLATE LITERALS (BACKTICKS ` `)
// ================================================================

// Template literals use backticks → ` `
// They allow embedding variables and expressions easily

let name = "Vikas";
let age = 22;

console.log(`My name is ${name} and I am ${age} years old.`);
// ✅ Output: My name is Vikas and I am 22 years old.

console.log(`2 + 3 = ${2 + 3}`); // ✅ You can directly use expressions inside `${}`
console.log(`Next year I will be ${age + 1} years old.`);

// You can also create multi-line strings easily
let intro = `
Hello everyone,
My name is ${name}.
I love JavaScript and coding!
`;
console.log(intro);



/* ===================================================================
🔹 SUMMARY:
---------------------------------------------------------------------
1️⃣ var → function-scoped, can be redeclared.
2️⃣ let → block-scoped, can be updated, not redeclared in same scope.
3️⃣ const → block-scoped, cannot be reassigned.

4️⃣ console methods:
    - log(), info(), warn(), error(), table()

5️⃣ prompt() → takes user input
   alert()  → displays popup message

6️⃣ String methods:
   - slice(), split(), replace(), includes(), toUpperCase(), toLowerCase()

7️⃣ Template literals → ` ` allow embedding variables and expressions
=================================================================== */
