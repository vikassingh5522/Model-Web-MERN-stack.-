

const para = document.querySelector("p");
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghiijklmnopqrstuvwxyz";
const text = para.innerHTML;


para.addEventListener("mouseenter", ()=>{

      setInterval(() => {
        
        const str = text
            .split('')
            .map((char,index)=>{
            return chars.split("")[Math.floor(Math.random()*53)]
        }).join("")

        para.innerHTML =str;
        // console.log(str)

        
      }, 100);






});
