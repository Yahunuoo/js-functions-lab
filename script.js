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



/*
const generateEmail=(name, domain) => {
    const email = name + domain;
    return email;
}
console.log('Exercise 4 Result:', generateEmail("johnsmith", "@example.com"));
*/

function generateEmail(name, domin){
    let sum = name + domin;
    return sum
}
console.log('Exercise 4 Result:', generateEmail("johnsmith", "@example.com"));

