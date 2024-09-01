//1. Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const id = Symbol('234')
const anotherId = Symbol('234')
console.log(id == anotherId)

const bigNumber = 3434798734n;
console.log(typeof bigNumber)

//Reference Type(Non - Primitive)

// Array, Objects, Functions ==>type object

const heros = ["shaktiman", "naagraj", "doga"]
let myObj ={
    name : "Deepak",
    age : 22
}

const myFunction = function(){
    console.log("Hello World")
}
console.log(typeof myFunction)

/***************************Memory ****************/ 
//Stack (Primitive), Heap (Non - Primitive)
let name = "Deepak"
let newName = name
newName = "Anuj"
console.log(name)
console.log(newName)

let userOne = {
    name : "Deepak",
    upi : "userybl"
}

let userTwo = userOne
userTwo.upi = "amazonybl"
console.log(userOne.upi)
console.log(userTwo.upi)
