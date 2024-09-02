//Dates

let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleDateString())
console.log(typeof myDate)

// let myCreateDate = new Date(2024,0,3)
// let myCreateDate = new Date(2024,0,3,5,3)
let myCreateDate = new Date("2024-01-14")
// console.log(myCreateDate.toLocaleString())
let myTimeStamp = Date.now()
// console.log(myTimeStamp) 
// console.log(myCreateDate.getTime()) 
console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth())


newDate.toLocaleString('default',{
    weekday:"long"
})