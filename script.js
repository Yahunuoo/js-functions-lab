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

/*
Exercise 6: maxOfThree()

Define a function, maxOfThree. It should accept three numbers 
and return the largest among them.

Example: maxOfThree(17, 4, 9) should return 17.

Complete the exercise in the space below:
*/

function maxOfThree (x, y, b){ 
    if(x > y){
        return true;
    }else if(x > b){
        return true;
    }else {
        return false;
    }
    
}
console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));