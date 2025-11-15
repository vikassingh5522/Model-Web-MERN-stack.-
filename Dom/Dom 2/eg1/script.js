
// let a =Math.floor(Math.random()*100);

// console.log(a);


let box = document.querySelector('#box');
let btn = document.querySelector('button');

btn.addEventListener('click', function () {
    let c1 = Math.floor(Math.random() * 255);
    let c2 = Math.floor(Math.random() * 255);
    let c3 = Math.floor(Math.random() * 255);
  
   let a= box.style.backgroundColor = `rgb(${c1}, ${c2} ,${c3})`

   console.log(a);
   
    

})

