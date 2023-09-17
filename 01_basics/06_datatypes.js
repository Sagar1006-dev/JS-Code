// primitive dataTypes

// 7 types :String, Number, boolean, null,undifined,symbol,BigInt

const score =100;
const scroreValue =100.3

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;


const id = Symbol("123")
const anotherId = Symbol('123')

console.log((id == anotherId));

const bigNumber = 325151448151555978945n



// reference Type(Non Primitive)


const heros = ["shaktiman","naagraj","doga"]

let myObj = {
    name:'sagar',
    age:22
}

 const myFunction = function (){ 
    console.log('Hello World');

}
myFunction()

console.log(typeof bigNumber);
console.log(typeof outsideTemp);
// Array, Objects , Functions 
// Is JavaScript a static or dynamic language and why?
// Understanding JavaScript: Coercion in a Dynamically Typed ...
// JavaScript is a dynamically typed language

// It means that JS does not require the explicit declaration of the variables before they're used. Here is a quick example that compares Java, a statically typed language, vs. JavaScript.18-Sept-2020
