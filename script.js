const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
        return x;
    }else {
        return y;
    }
}

console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));


const isAdult = function (age){
    if (age > '20') {
        return 'adult';

    }else if (age < '21'){
        return 'Minor';
    }
    
}
console.log('Exercise 2 Result:', isAdult(21));


function isCharAVowel(x){
    if(x === 'a'){
        return true
    }else if (x === 'e'){
        return true
    }else if(x === 'i'){
        return true
    }else if(x === 'o'){
        return true
    }else if(x === 'u'){
        return true
    }else {
        false
    }

}
console.log('Exercise 3 Result:', isCharAVowel('i'));



function generateEmail(name, domin){
    let sum = name + domin;
    return sum
}
console.log('Exercise 4 Result:', generateEmail("johnsmith", "@example.com"));



function greetUser(name, time){
    let sum = name + time;
    return sum
}

console.log('Exercise 5 Result:', greetUser("Good morning, ", "Sam"));



function maxOfThree (x, y, b){ 
    if(x > y && x >b){
        return x;

    }else if(y > b && y >x){
        return y;

    }else {
        return b;
    }
    
}
console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));


/*
Exercise 7: calculateTip()

Create a function called calculateTip. It should take two arguments: 
the bill amount and the tip percentage (as a whole number). 
The function should return the amount of the tip.

Example: calculateTip(50, 20) should return 10.

Complete the exercise in the space below:
*/

function calculateTip(bill, tip){
    let sum = bill * tip / 100
    return sum
}

console.log('Exercise 7 Result:', calculateTip(50, 20));





/*
Exercise 8: convertTemperature()

Write a function named convertTemperature. 
It takes two arguments: a temperature and a string representing the 
scale ('C' for Celsius, 'F' for Fahrenheit). 
Convert the temperature to the other scale.

Example: convertTemperature(32, 'C') should return 89.6 (Fahrenheit).
Example: convertTemperature(32, 'F') should return 0 (Celsius).

Complete the exercise in the space below:
*/

function convertTemperature(temperature, scale){
    if (scale === 'C'){
        return temperature * 9/5 +32;
    }else if(scale === 'F'){
        return (temperature -32)* 5/9;
    }  

}
console.log('Exercise 8 Result:', convertTemperature(32, "C"));

/*
Exercise 9: basicCalculator()

Create a function named basicCalculator. 
It should take three arguments: two numbers and a string representing 
an operation ('add', 'subtract', 'multiply', 'divide'). 
Perform the provided operation on the two numbers. 
In operations where the order of numbers is important, 
treat the first parameter as the first operand and the 
second parameter as the second operand.

Example: basicCalculator(10, 5, 'subtract') should return 5.

Complete the exercise in the space below:
*/

function basicCalculator(num1, num2, operation){
    if (operation === 'add') {
        return num1 + num2;
    }else if (operation === 'subtract') {
        return num1 - num2;
    }else if (operation === 'multiply') {
        return num1 * num2;
    }else if (operation === 'divide') {
        return num1 / num2;
    }
}

console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract"));


