/* how data is stored in the memory and on that basis we defined the 
data_types */

// Primitive : call by value only

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt
const score = 100
const scoreValue = 100.3
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const bigNumber = 356479513465436424n

/* JavaScript is a dynamically typed language because 
variable types are checked at runtime. */
// because
let x = 10;     // x is a number
x = "hello";   // now x is a string
x = true;      // now x is a boolean


// Non-Premitive : call by reference

// Array, Objects, Functions

const heros = ["dhoni", "rohit", "kohli"];

let myObj = {
    name : "lakshay",
    age : 22
}

const myFunction = function(){
    console.log("hello world");
}



// ***************************************************

// Stack (Primitive) vs Heap (Non-Primitive) Memory

// Stack me just copy hoti h value koi change nhi hota original value me just like call by value vala example.
let myYoutubename = "hiteshchoudhary.com"

let anothername = myYoutubename;
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

// Heap me reference liya jata h isme original value me change ho jata h just like call by reference
let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);