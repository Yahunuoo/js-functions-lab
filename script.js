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