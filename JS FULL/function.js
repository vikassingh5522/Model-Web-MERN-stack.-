
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

    let a=21;
    function abc(val) {
         console.log(val+2);
    }
    abc(12);

   

// ------------------------------------------------------------------------------------

//  - Understanding Scoping in JS - ['Global scope 'Function scope']


// -----------------------------------------------------------------------------------
// 11 - Understanding 'Closures', 'Scoping Rule