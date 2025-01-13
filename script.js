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



function calculateTip(bill, tip){
    let sum = bill * tip / 100
    return sum
}

console.log('Exercise 7 Result:', calculateTip(50, 20));





function convertTemperature(temperature, scale){
    if (scale === 'C'){
        return temperature * 9/5 +32;
    }else if(scale === 'F'){
        return (temperature -32)* 5/9;
    }  

}
console.log('Exercise 8 Result:', convertTemperature(32, "C"));



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


