// ============================================================================
// 🌟 1️⃣ Comparison Operators
// ============================================================================

// These are used to compare two values.

console.log("== vs === examples:");
console.log(12 == "12");   // true → compares only VALUE (not type)
console.log(12 === "12");  // false → compares VALUE + TYPE (strict comparison)

console.log("!= vs !== examples:");
console.log(12 != "12");   // false → compares only VALUE (not type)
console.log(12 !== "12");  // true  → strict not equal (checks type too)

// ✅ Use === and !== always for accurate comparisons.

// ---------------------------------------------------------------------------
// 🌟 2️⃣ Logical Operators
// ---------------------------------------------------------------------------
// Used to combine multiple conditions (mostly inside if statements).

let username = "vikas";
let password = "12345";

// AND (&&): Both conditions must be true
if (username === "vikas" && password === "12345") {
  console.log("✅ Login successful");
} else {
  console.log("❌ Invalid credentials");
}

// OR (||): At least one condition must be true
let hasEmail = false;
let hasPhone = true;

if (hasEmail || hasPhone) {
  console.log("You can receive OTP ✅");
} else {
  console.log("Cannot send OTP ❌");
}

// NOT (!): Reverses the boolean value
let isLoggedIn = false;
console.log(!isLoggedIn);  // true (negation)

// ---------------------------------------------------------------------------
// 🌟 3️⃣ Ternary Operator (? :)
// ---------------------------------------------------------------------------
// Shortcut for if-else statements. Syntax:
// condition ? expression_if_true : expression_if_false

let num = 15;
num > 10 ? console.log("✅ Greater than 10") : console.log("❌ Not greater than 10");

// ---------------------------------------------------------------------------
// 🌟 4️⃣ Type Checking Operators
// ---------------------------------------------------------------------------
// typeof → checks data type of a value
// instanceof → checks if an object is an instance of a specific class/type

let x = 123;
let str = "Hello";
let arr = [1, 2, 3];
let date = new Date();

console.log(typeof x);       // number
console.log(typeof str);     // string
console.log(typeof arr);     // object (arrays are objects in JS)
console.log(date instanceof Date);  // true
console.log(arr instanceof Array);  // true

// ---------------------------------------------------------------------------
// 🌟 5️⃣ String Operators
// ---------------------------------------------------------------------------
// The '+' operator concatenates (joins) strings

let firstName = "Vikas";
let lastName = "Singh";
let fullName = firstName + " " + lastName;

console.log("Full Name:", fullName); // Vikas Singh

// Template literals (using backticks ``)
let age = 23;
console.log(`My name is ${fullName} and I am ${age} years old.`);

// ---------------------------------------------------------------------------
// 🌟 6️⃣ Spread and Rest Operators (...)
// ---------------------------------------------------------------------------
// Spread → expands an array/object into individual elements
// Rest → collects multiple arguments into an array

// ✅ Spread Example:
let numbers = [1, 2, 3];
let newNumbers = [...numbers, 4, 5];  // spreads numbers into new array
console.log(newNumbers);  // [1, 2, 3, 4, 5]

// ✅ Rest Example:
function showNumbers(a, b, ...rest) {
  console.log("a:", a);
  console.log("b:", b);
  console.log("rest:", rest); // collects remaining arguments
}
showNumbers(10, 20, 30, 40, 50);

// ---------------------------------------------------------------------------
// 🌟 7️⃣ Nullish Coalescing Operator (??)
// ---------------------------------------------------------------------------
// Returns the right-hand value ONLY when the left-hand value is null or undefined.
// Useful for providing default values.

let userInput = null;
let finalValue = userInput ?? "Default Value"; 
console.log(finalValue); // Output: "Default Value"

let score = 0;
console.log(score ?? 100); // 0 (since 0 is NOT null/undefined)

// ---------------------------------------------------------------------------
// 🌟 8️⃣ Optional Chaining (?.)
// ---------------------------------------------------------------------------
// Prevents errors when accessing deeply nested object properties that may not exist.

let user = {
  name: "Vikas",
  address: {
    city: "Pune",
    pincode: 410507
  }
};

// Safe way to access nested property
console.log(user?.address?.city);      // Pune
console.log(user?.address?.street);    // undefined (no error!)

// Without optional chaining, it would throw an error if address or street didn't exist.

// ---------------------------------------------------------------------------
// ✅ SUMMARY
// ---------------------------------------------------------------------------
//
// 1️⃣ Comparison → ==, ===, !=, !==, >, <, >=, <=
// 2️⃣ Logical → &&, ||, !
// 3️⃣ Ternary → condition ? truePart : falsePart
// 4️⃣ Type Checking → typeof, instanceof
// 5️⃣ String → concatenation (+), template literals (``)
// 6️⃣ Spread / Rest → ... operator
// 7️⃣ Nullish Coalescing → ?? 
// 8️⃣ Optional Chaining → ?.
//


