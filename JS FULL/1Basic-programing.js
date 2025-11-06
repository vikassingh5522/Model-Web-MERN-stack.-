


// // Example using var
// {
//     var a = 10;   // var is function-scoped, so accessible outside this block
// }
// console.log(a);   // ✅ Works fine, prints: 10

// // Example using let
// // {
// //     let b = 20;   // let is block-scoped, not accessible outside this block
// // }
// // console.log(b);   // ❌ ReferenceError: b is not defined

// // Example using let (correct usage)
// {
//     let c = 30;
//     console.log(c);  // ✅ Works fine, prints: 30 (used inside the same block)
// }

// // Example using const
// {
//     const d = 40;   // const is block-scoped and cannot be reassigned
//     console.log(d); // ✅ Works fine, prints: 40

//     // d = 50;       // ❌ TypeError: Assignment to constant variable.
// }
// // console.log(d);   // ❌ ReferenceError: d is not defined (block scoped)



// // =================================================================
// // Console Methods in JavaScript
// =====================================================================


// // console.log() → Used to print general information
// console.log("Vikas Singh");

// // console.info() → Used to print informational messages (same as log, but semantically used for info)
// console.info("Vikas Singh is a coder");

// // console.warn() → Used to show warning messages (appears in yellow in most browsers)
// console.warn("xyz");

// // console.error() → Used to show error messages (appears in red in most browsers)
// console.error("vikas");

// // console.table() → Displays data in a table format (works best with arrays or objects)
// console.table({ vikas: "Singh" });

// =================================================================
//  prompt() and alert() in JavaScript
// ================================================================

// prompt() → used to take input from the user in a popup box
// Example:
// let str = prompt("What is your name?");
// console.log(str); // ✅ prints the name entered by the user in the console

// alert() → used to show a message to the user in a popup box
// alert("You are trying to access the wrong page!");

// Note:
// Both double quotes (" ") and single quotes (' ') can be used for strings in JavaScript
// Example:
// let msg1 = "Hello, world!";
// let msg2 = 'Hello, world!';
// console.log(msg1, msg2);




// slice template-strings ( template literal  ` ` ) split  replace  includes

// =================================================================
// String Methods and Template Literals in JavaScript

// let x = "Hello JavaScript World!";

// // split by space → turns string into array of words
// console.log(x.split(" "));
// // Output: ["Hello", "JavaScript", "World!"]

// // split by letter 'a'
// console.log(x.split("a"));
// // Output: ["Hello J", "v", "Script World!"]

// // split into characters
// console.log(x.split(""));
// // Output: ["H", "e", "l", "l", "o", " ", "J", ... ]

// // console.log(x.split(6, 10));


/* ---------------------------------------------------------------
   Template Literals (backticks ` `)
   Used for embedding variables and expressions easily
   --------------------------------------------------------------- */

// Template Literals (backticks ` `)
// used for embedding variables and expressions easily
// let name = "Vikas";
// let age = 22;
// console.log(`My name is ${name} and I am ${age} years old.`);

// console.log(`vikas ${3 + 3} `);
// console.log(`${12 + 12 / (44 + 44)}`)


//------------------------
