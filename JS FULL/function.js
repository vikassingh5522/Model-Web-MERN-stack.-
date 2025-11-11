
//1}  parameters aand arguments 
// function abc(name ,age, add) { // <-- paremeters
//     console.log(name, age, add)
// }
// abc("vikas",24,"shankar nagar"); //<-- aruguments , and function call (abc)

// --------------------------------------

// 2}  rest parameters 

//  function abcd(a , b ,c ,...d) {
//     console.log(a,b,c,d)
//  }
//  abcd(1,2,3,4,5,6,7);

// ----------------------------------------------

// 3} hoisting

//  console.log(a);
//  var a=12;  // not show the error 

// but 
//console.log(s); 
//  let  s= 12 // show the error 

// In function case

// abc(); // not show the error 
// function abc() {
//  console.log("hey");
// }

// abc();  // show the error 
// var  abc = function() {
//  console.log("hey");
// }

// ----------------------------------------------------

//  parameters in js [ required , detructured, rest , default].

// 1} required

//  function abcd(a,b,c,d){
//       console.log(a,b,c,d);
//     //   ager aapne parameter baanaya and ppne ume aruguments nahi bheje to r wo value parameter ki undifined ho jayegi.
//  }
//  abcd();

// 2} Destructured

// function ab( name ,age,add) {
//    console.log( name ,age ,add);
// }
// ab({ name: "vikas", age: 22 , add :"old"});


// 3} rest

//  function ab(...val) {
//     console.log(val);
//  }
//  ab(1,2,3,4,7,6);

// 4} default

//  function ab(a=0,b=0,c=0,d=0) {
//     console.log(a,b,c,d);
//  }
//  ab(1,2,3);


// -------------------------------------------------------------

//  Argumentss in js  --   [positional, default ,spread ]

//positional

//   function a( a, b=4 ,c ,d) {
//      console.log(a,b,c,d);
//   }
//   a(1,2,3,4);

//  spread

// function a( a, b ,c ,d) {
//      console.log(a,b,c,d);
//   }
//   let Array = [1,2,3,4];
//   a(...Array);

// ---------------------------------------------------------------------

// Clssic function , Nested function ,(function within function) , Scope chain in javascript


// 1}  Nested function 

//  function abc() {
//     function defg() {
//         console.log("defg chala");
//     }
//     defg();
//  }

// 2} Scope chain

// let a =12;  //---> global valrable
// function ab() {
//     let b =12 //  
//     function cd() {
//         console.log(b);
//     }
// }
// ab();

// ---------------------------------------------------------------------

//  Undertanding Immediately invoked functons (IIFE) function expresions

// (function name(params) { })  //---> syntex of IIFE

// -----------------------------------------------------------------------

//  More Functions in Javascript - [' Arrow Function Fat Arrow ', Anonymous, 'Higher Order', Callback, "First Class', Pure Function, Impure Function']

// 1 } Arrow function or fat arrow 

//   let  a = () => {
//     console.log("vikas sngh");
//   }
//   a();

// 2} Anonymous  --> is a function at not have the name of function ;
//   this i nhi hota hai vo prent se leta hai

// 3} Higher Order --> ek  aisa function jo ki return kar re functon 

//    function a() {
//         return function b() {
//         }
//    }
//    a();

//   or

//   function a(A) {
//   }
//   a(function b() {
//   });


//4} Callback

// function a(A) {
//   }
//    a(function b() {
//   });

// 5} First Class  --> it is like hawa  --> it is concept --->


// 6} Pure Function, Impure Function'


//   pure function --> ek aisa function --> same nput  = same output  --> kai sde effect nahi hoga

// let a = 21;
// function abc(val) {
//     console.log(val + 2);
// }
// abc(12);
// abc(12);
// abc(12);

// Impure Function  ---> ek aiisa function --> sme i/p  = diff diff o/p that is call IMpure function

//  let  a =12;
// function abc(val) {
//     console.log(Math.random() + val);
// }
// abc(12);
// abc(12);



// ------------------------------------------------------------------------------------

//  - Understanding Scoping in JS - ['Global scope 'Function scope']




// -----------------------------------------------------------------------------------
// 11 - Understanding 'Closures', 'Scoping Rule
//   Closures --> ek function hi jo return karta hai functions  but retuning functiion jo ka  kai variable use karega

//  function abc() {
//     let a=12;
//     return function () {
//         console.log(a);
//     }
//  }
//  abc();


// -------------------------------------------------------------------------------------------

//   Questions 🔍🔥👍

// 1} Write the function sayhello() that prints " java js"

// function sayhello() {
//     console.log("Say hello");
// }
// sayhello();

// 2}Crreate the a functon add(a,b) that retuns their sum and log the result

// function add(a,b){
//     return a+b;
// }
// let ans = add(11,22);
// console.log(ans);

// 3} Write a functions with a default parameter name = " Guest" that print "Hi <name>"

// function create(Guest =  " guest") {
//     console.log(`Hii ${Guest}`);
// }
// create("vikas");

// 4} use rest parameters to make the functions that adds unlimted number .

// function addUnlimited(...num) {
//   console.log(...num);
// }
// addUnlimited(1,2,3,4,6,7,8,9)

// or

// function addUnlimted(...num) {
//     num.forEach(function (val) {
//         console.log(val);
//     });
// }
// addUnlimted(1,2,3,4,6,7,8,9,10);

// or

// function addUnlimited(...nums){
//    let ans = nums.reduce(function (acc,  val) {
//        return acc+val;   
//     } ,0);
//     console.log(ans);
// }
// addUnlimited(1,2,3,4,6,7,8,9,10);

// 4} create  an IIIFE  that print " I am instantly"

// (function create() {
//    console.log("I am instantly ! ")
// })();

// 5} Make the a nested functions where  the inner one  print  variable from outer one 

// let a = 12;
// function prent() {
//     let b = 11;
//     function child() {
//         console.log(b);
//     }
//     child();
//    console.log(a);
   
// }
// prent();

// orr 

// function prent() {
//     let b = 11;
//     function child() {
//         console.log(b);
//     }
//     child();
// }
// prent();

// 6} Create the  an array of 5 fruits . Add the one at the end and remove the from the beginning .

//  let arr = ["aappl", " guave" , "grapes" , " mongo" , "banana"];
//  arr.push("pear");
//  arr.unshift("orange");

// ans
//  [
//     "orange",
//     "aappl",
//     " guave",
//     "grapes",
//     " mongo",
//     "banana",
//     "pear"
// ]

// 7}  use a for loop to print all the elements of an array
//  let arr =[1,2,3,4,5,6];

//  for (let i = 0; i < array.length; i++) {
//     console.log(arr);
//  }

// or

// arr.forEach(function(elements){
//     console.log(elements);
// })

// 8) Createa an object peron with keys name , age and city and print ech key value.
 
//   let obj ={
//     name : " vikas",
//     age : 12,
//     city : "jalna"
//   };

//   for(let key in obj ){
//     console.log(obj [key]);
//   }
  
  
// 9) use setTimeout() to log " Time up" after 2 sec
 
 
// setTimeout(function () {
//     console.log("time up");
// }, 9000);

setTimeout(() => {
    console.log("time up");
}, 9000);