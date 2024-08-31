console.log("2" > 1) //convert into same dataType
console.log("01" > 2)

/*The reason is that am equality check == and comparisons > < >= <= 
work differently.
Comparisons conver tnull to a number, treating it as 0. 
That's why (3) num >= 0 is truen and (1) > 0  is false */
console.log(null > 0)
console.log(null == 0)
console.log(null >= 0) 

