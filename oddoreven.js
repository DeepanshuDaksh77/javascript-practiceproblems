//program to check if a no. is odd or even
//taking user input
const num1 = promt("Enter a number: ")
//using ternary operator
const result = (num1%2 == 0)? "even":"odd";
console.log(`The given number is ${result}`)