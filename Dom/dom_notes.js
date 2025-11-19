

// Dom -> Document Object Model manipulation utilities

const { createElement } = require("react")

// DOM 4 pillar methods
// 1 - Selection of an element
// 2 Changing css styles
// 3 - Changing  css
// 4 - Event  listeners

// 🔥 1 - Selection of an element

// document.getElementById("id")
// document.getElementsByClassName("className")
// document.getElementsByTagName("tagName")
// document.querySelector("cssSelector")
// document.querySelectorAll("cssSelector")

// 🔥 2 - Changing CSS styles

// element.style.property = "value"
// element.style.backgroundColor = "red"
// element.style.fontSize = "20px"
// element.style.display = "none"


// 🔥 3 - Changing CSS classes

// element.classList.add("className")
// element.classList.remove("className")
// element.classList.toggle("className")
// element.classList.contains("className")
// element.className = "newClassName"
// element.className += " anotherClassName"
// element.setAttribute("class", "newClassName")
// element.getAttribute("class")
// element.removeAttribute("class")

// 🔥 4 - Event listeners

// element.addEventListener("event", function)
// element.removeEventListener("event", function)

// 👍 Example events:

// "click", "mouseover", "mouseout", "keydown", "keyup", "load", "scroll", "resize"

// 👍 Example usage:
// element.addEventListener("click", function() {
//     console.log("Element clicked!");
// });

// element.removeEventListener("click", function() {
//     console.log("Element clicked!");
// });

// Note: When removing event listeners, the function reference must be the same as the one used when adding the listener.

// Additional DOM manipulation methods

// Creating elements
// document.createElement("tagName")
// Example: let div = document.createElement("div");




// createElement --> for ceate the element  in js 
 
// appendChild ---> 

// setTimeout  --->  Runs one time only after a delay., t async   --> Delayed action 
// setInterval  ---> Runs a function repeatedly, like a loop., async --> Loops, timers, animations 
