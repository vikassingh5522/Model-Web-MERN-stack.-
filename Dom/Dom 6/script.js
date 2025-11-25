

// let box = document.querySelector('#box');
// let img = document.querySelector('img');


/*
//Single click   

box.addEventListener('click' ,function () {
    console.log("hello");
}) 

// double-click

box.addEventListener('dblclick', function name() {
    console.log("vikas singh");
    
})


// mouseenter
box.addEventListener('mouseenter',function () {
    console.log("i am vikas !");
})

mouseleave
box.addEventListener('mouseleave',function () {
    console.log("mouseleave");
})

//dets is a objects  ==>wheel ,keydown ,keyup ,keyright ,left ,click ,mouseleave,dblclick
document.body.addEventListener('mousemove', function (dets) {
    console.log(dets);
});



document.body.addEventListener('mousemove', function (dets) {
    console.log(dets.x);
    console.log(dets.y);
});

*/

let cursor = document.querySelector('#cursor');
let main = document.querySelector('#main');

main.addEventListener('mousemove', function (dets) {
    cursor.style.left = dets.x + 'px';
    cursor.style.top = dets.y + 'px';
});

