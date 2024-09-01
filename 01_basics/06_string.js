const name = "Deepak"
const repoCount = 3
// console.log(name  + repoCount + "Value")
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)//string interpulation
const game = new String('MarvelHero')
console.log(game[0])
// console.log(game.__proto__)
// console.log(game.toUpperCase())
// console.log(game.charAt(3))
// console.log(game.indexOf('r'))

const newString = game.substring(0,4)
console.log(newString)

const anotherString = game.slice(-8,3)
console.log(anotherString)

const newStringOne = "   Deep   "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://google%20.com"
console.log(url.replace('%20','--' ))
console.log(url.includes('google'))

const str = 'The quick brown fox jump'
console.log(str.split(' '))





