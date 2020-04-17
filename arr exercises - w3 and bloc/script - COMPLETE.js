/* BLOC EXERCISES 6,7,8  https://www.bloc.io/users/jason-duquain/checkpoints/2902*/


// Given an array of integers, find out whether the sum of the integers is a perfect square. If it is a perfect square, return the square root, otherwise return the sum.

function isSquare(arr) {
    let total = 0;
    for (const num of arr) {
        total += num;
    }
    
    if (Number.isInteger(Math.sqrt(total))) {
        return `the sq root of ${total} is ${Math.sqrt(total)}`;
    } else {
        return `the total is ${total}`;
    }
}


console.log(isSquare([1,2,2]));
console.log(isSquare([4,5]));


//Given an array of integers, find out whether the array contains any duplicate elements. The function should return true if any value appears at least twice in the array, and false if every element is distinct.

function findDuplicate(integers) {
    return arr.sort((a, b) => {
        if (a < b) {
            return -1
        } else if (a > b) {
            return 1;
        } else if (a === b) {
            return 0;
        }
    }).some((el, idx) => arr[idx] === arr[idx+1])
}

console.log(findDuplicate([9,2,2]));
console.log(findDuplicate([1,2,3]));


//////////////// ALTERNATE SOLUTION

function findDuplicate(arr) {
    let charMap = {};
    
    for (const char of arr) {
        if (!charMap[char]) {
           charMap[char] = 1; 
        } else {
           charMap[char]++ 
        }
    }
    
    for (prop in charMap) {
        if (charMap[prop] > 1) {
            return true;
        }
        
        return false;
    }
	// alternate final loop(s)
	// return Object.values(charMap).some((el, idx) => el > 1) 
}

// Given two strings, stringOne and stringTwo, determine if stringOne is an anagram of stringTwo. An anagram is a word, phrase, or name formed by rearranging the letters of another word. For example, spar can be formed from rasp. 

const isAnagram = (stringOne, stringTwo) => {
    let first = stgOne.replace(/\s/g, "").split('').sort().join('');
    let second = stgTwo.replace(/\s/g, "").split('').sort().join('');
	return first === second;
	
	// if not joining to a string:
	//let first = stgOne.replace(/\s/g, "").split('').sort();
    //let second = stgTwo.replace(/\s/g, "").split('').sort();
    //return first.every((el, idx) => el === second[idx]);
}

console.log(isAnagram('binary', 'brainy'));
console.log(isAnagram('bin ary', 'brainy'));
console.log(isAnagram('nope', 'war'));



/* https://www.w3resource.com/javascript-exercises/javascript-array-exercises.php#EDITOR */

/**********   6   **************/

/* THIS WORKS EXCEPT LEADING 0 IS IGNORED...FIX!! */

const insertIfEven = (number) => {
    let arrayed = String(num).split('').map((el) => Number(el));
    let dashedNum = [];
    
    for (let i = 0; i < arrayed.length; i++) {
        dashedNum.push(arrayed[i])
        if (arrayed[i] % 2 === 0 && arrayed[i+1] % 2 === 0 ) {
            dashedNum.push('-');
        }

    }
    console.log(dashedNum.join(''));
}

console.log(insertIfEven(025468964));


//////ALTERNATE SOLUTION WITH PROMPT

const str = window.prompt(); //this works but the prompt returns a stg..when using a number that starts with a 0 it is ignored when converting to a stg

const result = [str[0]];

for(let i = 1; i < str.length; i++) {
    if ((str[i-1] % 2 === 0) && (str[i] % 2 === 0)) {
        result.push('-', str[i]);
        
    } else {
        result.push(str[i]);
       
    }
}

console.log(result.join(''));
    

/*********** 8 **************/

function mostFrequent(arr) {
    let charMap = {};
    let max = 0;
    let maxChar = '';
    
    for (let char of arr) {
        if (!charMap[char]) {
            charMap[char] = 1;
        } else {
            charMap[char]++;
        }
    }
    
    for (prop in charMap) {
        if (charMap[prop] > max) {
            max = charMap[prop];
            maxChar = prop;
        }
        
    }
	
	/* works for 2nd part but not as clean as 'for in'
	let wow = Object.entries(charMap).sort((a, b) => {
        if (a > b) {
            return -1;
        } else if (a < b) {
            return 1;
        } else {
            return 0;
        }
    }).find((el, idx) => idx === 0);
    
    console.log(`${wow[0]} ( ${wow[1]} times )`)
	*/
    
    console.log(`${prop} (${charMap[prop]}) times`);
}

var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

mostFrequent(arr1);

/*********** 9 **************/

let swapCase = (stg) => {
    let final = "";

for (const char of stg) {
    if (char === char.toLowerCase()) {
        final += char.toUpperCase();
    } else if (char === char.toUpperCase()) {
        final += char.toLowerCase();
    } else {
        final += char
    }
}   

   console.log(final);
    
}

console.log(swapCase('ha NOw!! yEa'));

///alternate method and using a prompt
let stg = prompt('enter a string');

let swapCase = (stg) => {
    let newArr = [];
    let arrayed = stg.split('').forEach((el, idx) => {
        
        // an empty space with match all of these so put the specific empty space check 1st
        if (el === ' ') {
            newArr.push(el);
        } else if (el === el.toLowerCase()) {
            newArr.push(el.toUpperCase())
        } else if (el === el.toUpperCase()) {
            newArr.push(el.toLowerCase())
        }
    })
    
    return newArr.join('');
}

console.log(swapCase(stg));



/*********** 10 **************/

let a = [
    [1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]
];

function printArr(arr) {
    
    for (let i = 0; i < arr.length; i++) {
        console.log(`"row ${i}"`);
        
        
        for (let j = 0; j < arr[i].length; j++) {
            console.log(`" ${String(arr[i][j])}"`);
            
        }
        
    }
    
}

printArr(a);


/*********** 11 **************/

function sum_sq(arr) {
  
}
 
console.log(sum_sq([0,1,2,3,4])); // 30


/////ALTERNATE SOLUTION USING MAP AND REDUCE

function sum_sq(arr) {

    return arr.map((el, idx) => el * el).reduce((acc, el, idx) => acc + el)
    
}
 
console.log(sum_sq([0,1,2,3,4])); // 30


/*********** 12 **************/

let array = [1, 2, 3, 4, 5, 6];

function prodAndSum(arr) {
    let sum = 0;
    let prod = 1;
    
    for (const char of arr) {
        sum += char;
        prod *= char;
    }
    
    console.log(`sum : ${sum} prod : ${prod}`);
}

prodAndSum(array);


/**************  13   ***********/

let arr = [];

let input = document.querySelector('input');
let btnone = document.querySelector('.add');
let btntwo = document.querySelector('.display');
let div = document.querySelector('.summary');

btnone.addEventListener('click', (e) => {
    let inputValue = input.value;
    let index = arr.push(input.value);
    input.value = '';
    input.focus();
    alert(`element ${index - 1} = ${inputValue}`);
});

btntwo.addEventListener('click', (e) => {
    div.innerHTML = '';
    arr.forEach((el, idx) => {
        let para = document.createElement('p');
        para.textContent = `element ${idx} = ${el}`;
        div.append(para);
    });
    
});


/**************  14   ***********/

let dupArr = ['red', 'blue', 'red', 'green', 'purple', 'cyan', 'green'];
let dupArrTwo = [1,2,3,3,3,3,1,4,5,6];

function removeDups(arr) {
    let charMap = {};

    for (const char of arr) {
        if (!charMap[char]) {
            charMap[char] = 1;
        } else {
            charMap[char]++;
        }
    }
    
    return Object.keys(charMap);
}

console.log(removeDups(dupArr));
console.log(removeDups(dupArrTwo));


////////////ALTERNATE SOLUTION

const filterDuplicates = (arr) => {
    let newArray = [];
    arr.forEach((el, idx) => {
        if (!newArray.includes(el)) {
            newArray.push(el)
        } 
    });
    console.log(newArray)
}

filterDuplicates(dupArr);
filterDuplicates(dupArrTwo);


/**************  19   ***********/

let arrayNineteenA = [1,0,2,3,4];
let arrayNineteenB = [3,5,6,7,8,13];

let addArrs = (arr1, arr2) => {
    var res = [];
    for (var i = 0; i < arr1.length; i++) {
        if (arr1.length < arr2.length) {
            arr1.push(0);
        } else if (arr1.length > arr2.length) {
            arr2.push(0);
        } 

        res.push(arr1[i] + arr2[i]);

    }

    return res;
    
}

console.log(addArrs(arrayNineteenA, arrayNineteenB));

// alternate solution that does not add indexes with values of 0 to one of the arrs

let arrayNineteenA = [1,0,2,3,4];
let arrayNineteenB = [3,5,6,7,8,13,16];

let addArrs = (arr1, arr2) => {
    
    let result = []
    
    if (arr1.length > arr2.length) {
        
        arr1.forEach((el,idx) => {
            
            if (arr2[idx] === undefined) {
                result.push(el)
            } else {
                result.push(el + arr2[idx]);
            }
            
        })

        return result;
        
    } else if (arr2.length > arr1.length) {
        
        arr2.forEach((el,idx) => {
            if (arr1[idx] === undefined) {
                result.push(el)
            } else {
                result.push(el + arr1[idx]);
            }
        })

        return result;
        
    }
    
    
    
}

console.log(addArrs(arrayNineteenA, arrayNineteenB));


/**************  22   ***********/
/*
Write a JavaScript program to compute the union (The SQL UNION clause/operator is used to combine the results of two or more SELECT statements without returning any duplicate rows.)of two arrays. Go to the editor
Sample Data :
console.log(union([1, 2, 3], [100, 2, 1, 10]));
[1, 2, 3, 10, 100]

*/
let arrTwentyTwoA = [1, 2, 3];
let arrTwentyTwoB = [100, 2, 1, 10];

function union(arr1, arr2) {
    
    let result = [];
    
    let both = [...arr1, ...arr2]
    
    both.forEach((el, idx) => {
        if (!result.includes(el)) {
            result.push(el)
        }
    })
    
    console.log(result)
    
}

console.log(union(arrTwentyTwoA, arrTwentyTwoB));
//[1, 2, 3, 10, 100]


/**************  23  ***********/
/* Write a function to find the difference of two arrays. Go to the editor
Test Data :
console.log(difference([1, 2, 3], [100, 2, 1, 10])); 
["3", "10", "100"]
*/


function difference(arr1, arr2) {
    
    let result = [];
    let charMap = {};
    
    let both = [...arr1, ...arr2]
    
    for (const char of both) {
        if (!charMap[char]) {
            charMap[char] = 1
        } else {
            charMap[char]++;
        }
    }
    
    for (const prop in charMap) {
        if (charMap[prop] === 1) {
            result.push(prop)
        }
    }
    
	/* or using object.entries for 2nd part:
    Object.entries(charMap).forEach((el, idx) => {
        if (el[1] === 1) {
           result.push(el[0]) 
        }
    })
    */
	
    return result;
    
}


console.log(difference([1, 2, 3], [100, 2, 1, 10]));

