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
    }else{ 
        return false
    }

}

console.log('Exercise 3 Result:', isCharAVowel('i'));



