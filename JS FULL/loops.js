

// ================================================================
// 💳 ATM SIMULATOR — BEGINNER PRACTICE (with Explanation)
// ================================================================
 
// 🏦 Step 1: Initial Setup
// Start with ₹1000 balance

let balance = 1000;

// Flag variable to track if an error (like insufficient balance) occurs
let flag = false;

// Counter to limit the number of withdrawals
let count = 0;

// 🧮 Step 2: Start loop for 3 attempts
// while loop runs as long as (balance > 0) AND (count != 3)
while (balance > 0 && count !== 3) {

  // Ask the user how much money they want to withdraw
  let withdrawal = +prompt("💰 Enter the amount to withdraw:");

  // Increment count for each attempt
  count++;

  // ✅ Step 3: Check if the entered amount can be withdrawn
  if (withdrawal <= balance) {
    // If sufficient balance → deduct money
    balance -= withdrawal;
    console.log(`✅ ₹${withdrawal} withdrawn successfully.`);
    console.log(`💵 Remaining balance: ₹${balance}`);
  } 
  else {
    // ❌ Not enough balance → show error and stop the loop
    console.error("❌ Insufficient balance!");
    flag = true;
    break; 
    // stop the loop immediately
  }
}

// 🧾 Step 4: Final status after loop ends
if (flag === true) {
  console.log("🚫 Transaction failed due to insufficient balance.");
} 
else {
  console.log("✅ Transaction process completed successfully.");
}

// 💰 Print final balance
console.log(`🏁 Final Balance: ₹${balance}`);


