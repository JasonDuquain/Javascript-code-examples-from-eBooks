

/// 1. Write a fn that reverse a number.
function reverseInt(n) {
    
    let arr = [];
    let intArr = String(n).split('');
    
    for (let char of intArr) {
        arr.unshift(char);
    }
    
    if (arr.indexOf('-') > -1) {
        let dash = arr.splice(arr.indexOf('-'), 1);
        arr.splice(0, 0, dash);
        
        return Number(arr.join(''));
    }
    
    return Number(arr.join(''));
   
}

/////ALTERNATE SOLUTION - still convoluted

function reverseInt(n) {
    let negative;
    
    if (Math.sign(n) === -1) {
        negative = true;
    }
    
    let arrStg = String(n).split('');
    
    if (negative) {
        arrStg.shift();
    }
    
    let stgReversed = arrStg.reverse().join('')

    let reversedNum = Number(stgReversed);
    
    if (negative) {
       return -Math.abs(reversedNum); 
    }
    
    return reversedNum;
}


/////ALTERNATE CLEANER SOLUTION

function reverseInt(n) {
    const reversed = n.toString().split('').reverse().join('');
	console.log(reversed);
    return parseInt(reversed) * Math.sign(n);
}

console.log(reverseInt(1999));
console.log(reverseInt(-1999));


// 2. Write a fn that checks whether a passed stg is palindrome or not (take spaces into account)
function isPalindrome(stg) {
    let stgWithSpacedRemoved = stg.replace(/\s/g, "");
    let reversed = stgWithSpacedRemoved.split('').reverse().join('');
    
    return stgWithSpacedRemoved === reversed;
}

console.log(isPalindrome('not'));
console.log(isPalindrome('civic'));
console.log(isPalindrome('nurses run'));

// 3. Write a fn that generates all combinations of a string.

/// too hard :(


//4. Write a fn that returns a passed string with letters in alphabetical order

function alphabetize(stg) {
    let final = stg.toLowerCase().split('').sort().join('');
    return final;
}

console.log(alphabetize('laKoke'));

///ALTERNATE way that keeps the case intact but sorts it w/o taking case into consideration

function alphabetize(stg) {
    
    return stg.split('').sort((a, b) => {
        if (a.toLowerCase() < b.toLowerCase()) {
            return -1;
        } else if (a.toLowerCase() > b.toLowerCase()) {
            return 1;
        } else {
            return 0;
        }
    }).join('');
     
}


// 5. Write a fn that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 3 solutions..last 2 are similar but last one is cleanest
/*
function firstLetterUpper(stg) {
    let arr = stg.split('');
    for (let i = 0; i < arr.length; i++) {
        if (arr[0]) {
            arr[0] = arr[0].toUpperCase();
        } if (arr[i-1] === ' ') {
            arr[i] = arr[i].toUpperCase();
        }
    }
    let final = arr.join('');
    return final;
}
*/
////// CLEANER
/*
function firstLetterUpper(stg) {
    
    let arr = stg.split(" ");

    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }

    return arr.join(" ");
}*/
   
////// CLEANEST
/*

function firstLetterUpper(stg) {
    
    let strs = stg.split(' ');
    return strs.map(el => {
        return el.charAt(0).toUpperCase() + el.slice(1);
    }).join(' ');
}

console.log(firstLetterUpper('hello dere'));


// 6. Write a fn that accepts a string as a parameter and find the longest word within the string. 

function longestWord(stg) {
    let arr = stg.split(' ');
    arr.sort((stg1, stg2) => {
        if (stg1.length < stg2.length) {
            return 1;
        } else if (stg1.length > stg2.length) {
            return -1;
        } else {
            return 0;
        }

    });

    return arr[0];
}

////////////or

function longestWord(stg) {
    var longest = "";
    var arr = stg.split(' ');

    for (var i = 0; i < arr.length; i += 1) {
        if (arr[i].length > longest.length) {
            longest = arr[i];
        };
    };
    
    return longest;
}

console.log(longestWord("Web Development Tutorial"));


console.log(longestWord('the long longer'));


// 7. Write a fn that accepts a string as a parameter and counts the number of vowels within the string

function vowels(stg) {
    let vowel = ''; // need to make it an empty stg bcuz if only did 'let vowel' it would start out as undefined and then every letter would be appended to that.
    for (let el of stg) {
		el = el.toLowerCase()
        if (el === 'a' || el === 'e' || el == 'i' || el == 'o' || el === 'u') {
            vowel += el
            console.log(vowel)
        }
    }
    return vowel.length;
}

/////or
function howManyVowels(stg) {
    return stg.match(/[aeiou]/gi).length;
    
}

console.log(vowels('duquain jason'));
console.log(vowels('a pau'));


// 8. Write a fn that accepts a number as a parameter and check the number is prime or not. 

//learn more about prime #s


// 9. TOO EASY - DONT BOTHER

// 10. Write a fn which returns the n rows by n columns identity matrix.

// uh what??








