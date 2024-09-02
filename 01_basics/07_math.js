const score = 500
console.log(score)

const num = new Number(242)
console.log(num)
console.log(num.toString().length)
console.log(num.toFixed(2))

const otherNumber = 123.988
console.log(otherNumber.toPrecision(4))//return sring

const hundred = 100000
console.log(hundred.toLocaleString('en-IN'))



// ********************** Maths **********************//
console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(4.6))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.2))
console.log(Math.max(4,6,4,8,3,2))
console.log(Math.min(4,6,4,8,3,2))

console.log(Math.random());                 //range between 0 to 1
console.log(Math.floor(Math.random()*10) + 1);  
const min = 10
const max = 20


console.log(Math.floor(Math.random() * (max - min + 1)) + min)




