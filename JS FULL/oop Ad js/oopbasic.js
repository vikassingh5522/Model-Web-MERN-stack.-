

// 1} oop is a programming paradigm based on the concept of "objects", 

//  2} it is a way of structuring code by bundling related properties and behaviors into individual 

// 3} it is a  object , class ,function , inheritance , polymorphism , encapsulation etc



// object

let user = {
    name: "John",
    age: 30,
    add: "xyz"
};
console.log(user.name);
console.log(user.age);
console.log(user.add);


console.log("-------------------------------------------------");


/* class it s blueprint for creating objects

1} why we make the class ?
 -> to create multiple objects with similar properties and methods

 classes  banatai hai  taaki  hame har baar ek naya object
 banane ke liye alag se code na likhna pade

 class onject ki factory hati jisme hum properties and methods define karte hai
 jise hum multiple objects ke liye use kar sakte hai
*/
// class  
class person1 {
    constructor(name, age, add) {
        this.name = "vikas ";
        this.age = 40;
        this.add = "xyz";
    }
}
let p1 = new person1();
console.log(p1);



//2}  update the value in class

class person {
    constructor(name, age, add) {
        this.name = name;
        this.age = age;
        this.add = add;
    }
}
let xyz = new person("john", 30, "abc");
let person2 = new person("doe", 25, "def");

console.log(xyz);
console.log(person2);

// prototype --> mean  share memory 
person.prototype.name = "xyz";

console.log(xyz.name);
console.log(person.name);

