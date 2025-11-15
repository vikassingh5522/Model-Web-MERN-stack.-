// 1 - Selection of Elements
let h1 = document.querySelector('h1');
let box = document.getElementById('box');
let eml = document.getElementsByClassName('eml');
let h2 = document.querySelector('h2');
let btn = document.querySelector('button');

// Check selections
console.log(h1);
console.log(box);
console.log(eml);

// 2 - Changing HTML
h1.innerHTML = "Vikas Singh";
console.log(h1.innerHTML);

// 3 - Changing CSS
h1.style.color = "red";
h1.style.backgroundColor = "blue";

// 4 - Event Listener
btn.addEventListener('click', function () {

    h1.innerHTML = "I Am The Coder!";
    h1.style.color = 'red';
    h1.style.fontSize = '60px';

    h2.innerHTML = "I am from Pune!";
    h2.style.color = 'blue';
    h2.style.fontSize = '40px';

    console.log('vikas');
});
