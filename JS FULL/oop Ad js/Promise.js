

// Callback  is very  old  , after come Promise . It  is  used  to  handle  asynchronous  operation .
// But  it  has  some  problems , such  as  callback hell .
// So  Promise  is  introduced  to  solve  these  problems .

// A Promise  is  an  object  that  represents  the  eventual  completion  (or  failure)  of  an  asynchronous  operation  and  its resulting value .

//✅🕵️ A Promise  is  in  one  of  these  states :

//                                       1} pending
//  --> promise  --> data   -->          2} fulfilled
//                                       3} rejected

// A Promise  is  created  using  the  Promise  constructor  which  takes  a  function  as  an  argument . This  function  is  called  the  executor .
// The  executor  function  takes  two  arguments : resolve  and  reject .

const myPromise = new Promise((resolve, reject) => {
    // Asynchronous  operation  goes  here .
    // If  the  operation  is  successful , call  resolve(value) .
    // If  the  operation  fails , call  reject(error) .

    const success = true; // Simulating  success  or  failure .

    setTimeout(() => {
        if (success) {
            resolve("Operation  was  successful!");
        }
        else {
            reject("Operation  failed.");
        }
    }, 2000);
});

// Consuming  a  Promise  using  then()  and  catch() .
// The  then()  method  is  called  when  the  Promise  is  fulfilled .
// The  catch()  method  is  called  when  the  Promise  is  rejected .

myPromise
.then((value) => {
    console.log(value); // "Operation  was  successful!"
})
.catch((error) => {
    console.error(error); // "Operation  failed."
});

// ---------------------------------------------------------------------------------------------


// Example  of  using  Promise  with  fetch()  to  get  data  from  an  API .

fetch(`https://reqres.in/api/users?page=2`)
    .then(function (notRedeabledata) {
        return notRedeabledata.json();
    })
    .then(function (redeabledata) {
        console.log(redeabledata.data[0].first_name);
    });


fetch("https://reqres.in/api/users?page=2")
  .then(res => res.json())
  .then(data => {
    console.log(data.data[0].first_name);
  });

