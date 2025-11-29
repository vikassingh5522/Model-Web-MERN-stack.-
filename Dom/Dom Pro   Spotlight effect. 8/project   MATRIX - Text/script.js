

const para = document.querySelector("p");
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghiijklmnopqrstuvwxyz";
const text = para.innerHTML;


// para.addEventListener("mouseenter", ()=>{
//       setInterval(() => {   
//         const str = text
//             .split('')
//             .map((char,index)=>{
//             return chars.split("")[Math.floor(Math.random()*53)]
//         }).join("")
//         para.innerHTML =str;
//         // console.log(str)
//       }, 100);
// });


let iteration =0;

function randomText(){
  const str = text.split("").map((chars,index)=>{
    if (index < iteration) {
       return chars
    }
    return chars.split("")[Math.floor(Math.random()*52)]
  }) .join("")

  para.innerHTML = str;

  iteration += 0.3;

}
setInterval(randomText,30);