// pure  beginner  practric
// 1 . print  no from 1 to 10 loop from 11 to 10 print ech no

// for (let i = 0; i < 10; i++)   console.log(i)

// ----------------------------------------------------

//  2 print only even no from 1 to 20 using loop nd condition to print only even

//  for(let i=0; i<20; i++)
//     if(i% 2 === 0)
//         console.log("it is even no  : " + i);
//     else
//         console.log("it is old no :" +i)

// ----------------------------------------------------

// 3 print the no from 10 to 1 reverse loop with a dec
// for(let i=10; i>0; i--)  console.log(i);

// -------------------------------------------------------

// 4  print the " yes " 5 times Repeat using loop

//  for(let i=0; i<5;i++) console.log("yes")

// --------------------------------------------------

// 5 print  whether no from 1 to 10 are even or odd

// for (let i = 0; i < 10; i++)
//     if (i % 2 == 0) console.log("even =" + i);
//     else console.log(`" odd" - ${i}`);

//---------------------------------------------------------------------------

//   6 Ask user for a no and say if it is  postivie or negative

//  prompt --> jab bhi prompt mangoge to socho kya wo no hai aur agar hai to convert karna padega
//   type  --> 1} parseInt 2} number 3} +prompt

//  let num = +prompt("enter the no");
//  if(num>0) console.log("it is positive");
//  else console.log(" it is negtive");

// -----------------------------------------------------------------------

// 7. Ask user’s age and check if eligible to vote
// If age >= 18 → “Eligible”, else → “Not eligible”

// let age=96;
//  or

// let age =+ prompt( " enter the age : ")
// if(age >= 18) console.log("Eligible")
// else console.log("Not Eligible")


// ---------------------------------------------------------

// 8. Print multiplication table of 5
// Use loop to print 5 × 1 to 5 × 10.

// for (let i = 1; i <= 10; i++) {
//   console.log("5 × " + i + " = " + (5 * i));
// }

// for (let i = 1; i <= 10; i++)
//   console.log(`5 × ${i} = ${5 * i}`);


// ------------------------------------------------------------
// 9. Count how many numbers between 1 and 15 are greater than 8 Loop and count conditionally.

// let count = 0
// for (let i = 0; i <= 15; i++) {
//     if (i > 8) {
//         count++;
//      console.log(i);
//     }
// }
// console.log(` total count is ${count} `);

// ------------------------------------------------------------------------


// 10. Ask user for password and print access status
// Hardcoded correct password. Compare with user input.

// let password = "vikasbhai";

// let pass = prompt(" Enter The Password ");

// if (pass === null) {
//     console.error(" You Cancelled it ");
// } if (pass === password) {
//     console.log("password is matched ");
// }
// else {
//     console.log(" Password not matched");
// }

// ===============================================================================

// Level 2 – Slightly Tougher but Logical

// 11. Allow only 3 attempts to enter correct password
// If user gets it right early, stop. If not → “Account locked”


//   start
//  while (condition) {
//      code
//     chnage-->   i++
//  } ; ----> tab tak chaalo jab tak condition true hai✅

// ANS

/*
let attempts =0;
let khulgaya = false;
let pass= "vikassingh";

let password  = prompt("password batao");
attempts++

if(password === pass)
{
    khulgaya = true;
}

while(password !=pass){
    if(attempts ===3)
    {
        console.error("Account Locked");
        break;
    }
    password = prompt("password batao");
     if(password === pass)
     {
        khulgaya = true;
     }
    attempts++;
}
if(khulgaya === true )
    console.log("account opened");
*/

// ----------------------------------------------------------------------------


// 12. Ask user for words until they type “stop”. Count how many times they typed “yes” Loop until "stop" is typed. Count "yes".

/*
let word = prompt("Enter The Word")
let counter = 0

while (word !== "stop") {
    if (word === "yes"){
      counter++
    }
    word = prompt("Enter the word")
}
console.log(`Total Time Yes Count : ${counter} `)
*/


// -------------------------------------------------------------------------------

//13} Print numbers divisible by 7 from 1 to 50 Use modulo % and loop.

// for (let i = 1; i <= 50; i++) {
//     if(i % 7 == 0)
//     {
//         console.log(i);
//     }
// }


// -------------------------------------------------------------------------------------

// 14} Sum of all odd numbers from 1 to 30 Add only odd numbers. Print final sum.

// let sum =0;
// for (let i = 1; i <= 30; i++) {
//     if( i % 2 === 1 )
//          sum = sum +i;
//     console.log(i);
// }
// console.log(`Sum of Odd Numbers : ${sum}`);

// -------------------------------------------------------------------

// 15} Keep asking number until user enters an even number Use while loop. Stop only if input is even.

/*
let num = +prompt("Enter The Number");
num = Number(num);
while(num %2 === 0){
    num = prompt(" Enter The Number ");
    num = Number(num);
}
    */

// --------------------------------------------------------------

// 16} Print numbers between two user inputs Input start and end using prompt() → print all between.

/*
 let Start = +prompt(" Enter The Start No");
 let End = +prompt("Enter The End No");

 if(Start > End){
    console.log("Start Can Not be biggr the end");
 }
 for(let i=Start ; i<= End ; i++)
 {
    console.log(i);
 }
*/

// -------------------------------------------------------------------------------

//17} Print only first 3 odd numbers from 1 to 20
// Use loop. Stop with break after 3 odd prints.

/*
let count =0;

for (let i = 1; i < 21; i++){
    if(count === 3){
        break;
    }
    else if (i % 2 === 1)
    {
        console.log(i);
        count++;
    }
}
*/

// ------------------------------------------------------------------------------

// 18} Ask user 5 numbers. Count how many are positive Use loop + condition + counter.

/*
let num;
let count = 0;

for (let i = 0; i <=5; i++) {
    num = +prompt("Enter The No :");
    if ( num > 0) {
        console.log("it is pos "+num);
        count++;
    } else {
        console.log(" it is neg"+num);
    }
 }
 console.log("Total No is:  " +count);
 */

//  -------------------------------------------------------------------------------------------

// 19} ATM Simulator – Allow 3 withdrawals Start with ₹1000 balance. Ask withdrawal amount 3 times.If enough balance → deduct Else → print “Insufficient balance”

let balance =1000;
let flag = false;
let count =0;

while (balance > 0 && count !==3 ) {
    let withdrawal = +prompt(" How many money withdraw ?");
    count++;
    if (withdrawal <= balance) {
        balance -=withdrawal;
    } else {
        flag =true
        break;
    }
}
if (flag === true) {
console.log("Insufficient balances");
}
console.log(`Balance : ${balance}`);
