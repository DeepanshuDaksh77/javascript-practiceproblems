//to find greatest among three numbers
//taking user inputs
const num1,num2,num3;
num1 = parseInt(prompt("Enter the first number :"));
num2 = parseInt(prompt("Enter the second number :"));
num3 = parseInt(prompt("Enter the third number :"));
//checking the conditions
if(num1>=num2 && num1>=num3){
    console.log(`The greatest number is ${num1}`);
}
else if(num2>=num1 && num2>=num3){
    console.log(`The greatest number is ${num2}`);
}
else{
    console.log(`The greatest number is ${num3}`);
}