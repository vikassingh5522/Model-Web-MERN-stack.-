// ===================================================================
// 🟢 1. Print numbers from 1 to 10
// ===================================================================
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
// ✅ Loop runs from 1 to 10 and prints each number.


// ===================================================================
// 🟢 2. Print only even numbers from 1 to 20
// ===================================================================
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0)
        console.log(`Even Number: ${i}`);
    else
        console.log(`Odd Number: ${i}`);
}
// ✅ % (modulus) gives remainder. Even → remainder = 0.


// ===================================================================
// 🟢 3. Print numbers from 10 to 1 (Reverse loop)
// ===================================================================
for (let i = 10; i >= 1; i--) {
    console.log(i);
}
// ✅ Starts at 10, decrements until 1.


// ===================================================================
// 🟢 4. Print “Yes” 5 times
// ===================================================================
for (let i = 1; i <= 5; i++) {
    console.log("Yes");
}
// ✅ Repeats message 5 times using loop.


// ===================================================================
// 🟢 5. Check whether numbers 1–10 are even or odd
// ===================================================================
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0)
        console.log(`Even = ${i}`);
    else
        console.log(`Odd = ${i}`);
}
// ✅ Prints even/odd label for each number.


// ===================================================================
// 🟢 6. Ask user for a number and check if it’s positive or negative
// ===================================================================
// let num = +prompt("Enter a number:"); // '+' converts string to number
// if (num > 0) console.log("It is positive");
// else console.log("It is negative");
// ✅ Works only in browsers (prompt is a browser feature)


// ===================================================================
// 🟢 7. Ask user’s age and check voting eligibility
// ===================================================================
// let age = +prompt("Enter your age:");
// if (age >= 18) console.log("Eligible to vote");
// else console.log("Not eligible");
// ✅ Simple condition check with >= operator.


// ===================================================================
// 🟢 8. Print multiplication table of 5
// ===================================================================
for (let i = 1; i <= 10; i++) {
    console.log(`5 × ${i} = ${5 * i}`);
}
// ✅ Uses template literals for clean output.


// ===================================================================
// 🟢 9. Count how many numbers (1–15) are greater than 8
// ===================================================================
let count = 0;
for (let i = 1; i <= 15; i++) {
    if (i > 8) {
        console.log(i);
        count++;
    }
}
console.log(`Total numbers greater than 8 = ${count}`);


// ===================================================================
// 🟢 10. Ask user for password and print access status
// ===================================================================
// let password = "vikasbhai";
// let input = prompt("Enter the password:");
// if (input === null) console.error("You cancelled it!");
// else if (input === password) console.log("Password matched ✅");
// else console.warn("Password not matched ❌");


// ===================================================================
// 🟢 11. Allow only 3 attempts to enter correct password
// ===================================================================
/*
let attempts = 0;
let opened = false;
let correctPass = "vikassingh";

while (attempts < 3) {
    let userPass = prompt("Enter your password:");
    attempts++;

    if (userPass === correctPass) {
        opened = true;
        break;
    } else {
        console.warn(`Wrong password! Attempt ${attempts}/3`);
    }
}

if (opened) console.log("Account opened ✅");
else console.error("Account locked ❌");
*/


// ===================================================================
// 🟢 12. Ask user for words until they type “stop”
// Count how many times they typed “yes”
// ===================================================================
/*
let word = prompt("Enter a word:");
let yesCount = 0;

while (word !== "stop") {
    if (word === "yes") yesCount++;
    word = prompt("Enter another word (type 'stop' to end):");
}
console.log(`You typed "yes" ${yesCount} times.`);
*/


// ===================================================================
// 🟢 13. Print numbers divisible by 7 (1–50)
// ===================================================================
for (let i = 1; i <= 50; i++) {
    if (i % 7 === 0) console.log(i);
}
// ✅ Uses modulo to check divisibility.


// ===================================================================
// 🟢 14. Sum of all odd numbers from 1 to 30
// ===================================================================
let sum = 0;
for (let i = 1; i <= 30; i++) {
    if (i % 2 === 1) sum += i;
}
console.log(`Sum of all odd numbers (1–30) = ${sum}`);


// ===================================================================
// 🟢 15. Keep asking numbers until user enters an even number
// ===================================================================
/*
let num = +prompt("Enter a number:");
while (num % 2 !== 0) {
    num = +prompt("Enter a number again (must be even):");
}
console.log("Even number entered ✅");
*/


// ===================================================================
// 🟢 16. Print numbers between two user inputs
// ===================================================================
/*
let start = +prompt("Enter start number:");
let end = +prompt("Enter end number:");

if (start > end) {
    console.error("Start cannot be greater than end!");
} else {
    for (let i = start; i <= end; i++) {
        console.log(i);
    }
}
*/


// ===================================================================
// 🟢 17. Print only first 3 odd numbers from 1–20
// ===================================================================
let oddCount = 0;
for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i);
        oddCount++;
    }
    if (oddCount === 3) break; // stop after 3 odds
}


// ===================================================================
// 🟢 18. Ask 5 numbers and count how many are positive
// ===================================================================
/*
let positiveCount = 0;

for (let i = 1; i <= 5; i++) {
    let num = +prompt(`Enter number ${i}:`);
    if (num > 0) {
        positiveCount++;
        console.log(`${num} is positive`);
    } else {
        console.log(`${num} is negative`);
    }
}
console.log(`Total positive numbers: ${positiveCount}`);
*/


// ===================================================================
// 🟢 19. ATM Simulator (3 Withdrawals, ₹1000 starting balance)
// ===================================================================

let balance = 1000;
let isFailed = false;
let attempts = 0;

while (balance > 0 && attempts < 3) {
    let withdrawal = +prompt("Enter amount to withdraw:");
    attempts++;

    if (withdrawal <= balance) {
        balance -= withdrawal;
        console.log(`Withdrawal successful! Remaining Balance = ₹${balance}`);
    } else {
        console.error("❌ Insufficient balance!");
        isFailed = true;
        break;
    }
}

if (isFailed) {
    console.log("Transaction stopped due to insufficient funds.");
} else {
    console.log(`✅ Final Balance: ₹${balance}`);
}

// ✅ Explanation:
// - Starts with ₹1000
// - User can withdraw up to 3 times
// - If withdrawal > balance → stop immediately
// - Uses while loop to repeat process

