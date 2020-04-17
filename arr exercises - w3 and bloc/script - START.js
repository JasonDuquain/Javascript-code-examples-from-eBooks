/* watch for fns CLOBBERing THE FN ABOVE*/

/* BLOC EXERCISES 6,7,8  https://www.bloc.io/users/jason-duquain/checkpoints/2902*/

// Given an array of integers, find out whether the sum of the integers is a perfect square. If it is a perfect square, return the square root, otherwise return the sum.

function isSquare(arr) {
    
}



console.log(isSquare([1,2,2]));
console.log(isSquare([4,5]));


//Given an array of integers, find out whether the array contains any duplicate elements. The function should return true if any value appears at least twice in the array, and false if every element is distinct. *** TWO SOLUTIONS ***

function findDuplicate(arr) {
    
     
}


console.log(findDuplicate([9,2,2]));
console.log(findDuplicate([1,2,3]));

// Given two strings, stringOne and stringTwo, determine if stringOne is an anagram of stringTwo. An anagram is a word, phrase, or name formed by rearranging the letters of another word. For example, spar can be formed from rasp. 


function isAnagram(stgOne, stgTwo) {
    
    
}



console.log(isAnagram('binary', 'brainy'));
console.log(isAnagram('bin ary', 'brainy'));
console.log(isAnagram('nope', 'noway'));


/* https://www.w3resource.com/javascript-exercises/javascript-array-exercises.php#EDITOR */

/**********   6   **************/
// Write a program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8.
//leading 0 is ignored when converting to a string...fix!!!

function insertIfEven(num) {
    
    
}

console.log(insertIfEven(025468964));


//////ALTERNATE SOLUTION WITH PROMPT





/*********** 8 **************/
/*Write a JavaScript program to find the most frequent item of an array. Go to the editor
Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
Sample Output : a ( 5 times ) 
 */

function mostFrequent(arr) {
    
    
    
}

var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
console.log(mostFrequent(arr1));



/*********** 9 **************/
/* Write a program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX' */






/*********** 10 **************/
/*

10. Write a program which prints the elements of the following array. 
Note : Use nested for loops.
Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
Sample Output : 
"row 0" 
" 1" 
" 2" 
" 1"
" 24"
"row 1" 

*/
let a = [
    [1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]
];

function printArr(arr) {
    
    
}

printArr(a);


/*********** 11 **************/

function sum_sq(arr) {

    
    
}
 
console.log(sum_sq([0,1,2,3,4])); 


/////ALTERNATE SOLUTION USING MAP AND REDUCE 


/* COMMENT THIS OUT OR IT WILL CLOBBER THE FN ABOVE

function sum_sq(arr) {
    
}
 
console.log(sum_sq([0,1,2,3,4])); // 30

*/
/*********** 12 **************/
/*  Write a program to compute the sum and product of an array of integers. 
In math, when we use the word "sum," we mean add the numbers. When we use the word "product," we mean multiply the numbers.*/

let array = [1, 2, 3, 4, 5, 6];

function prodAndSum(arr) {
    
}

prodAndSum(array);


/**************  13 SEE WORD DOC  ***********/

let arr = [];

let input = document.querySelector('input');
let btnone = document.querySelector('.add');
let btntwo = document.querySelector('.display');
let div = document.querySelector('.summary');

btnone.addEventListener('click', (e) => {
    
});

btntwo.addEventListener('click', (e) => {

    
    
});



/**************  14   ***********/
/* Write a program to remove duplicate items from an array (ignore case sensitivity) */
let dupArr = ['red', 'blue', 'red', 'green', 'purple', 'cyan', 'green'];
let dupArrTwo = [1,2,3,3,3,3,1,4,5,6];

function removeDups(arr) {
    
    
    
}


console.log(removeDups(dupArr));
console.log(removeDups(dupArrTwo));

////////////ALTERNATE SOLUTION



/**************  19 check doc for desc  ***********/

/*let arrayNineteenA = [1,0,2,3,4];
let arrayNineteenB = [3,5,6,7,8,13,16];

let addArrs = (arr1, arr2) => {
    
    
    
    
}

console.log(addArrs(arrayNineteenA, arrayNineteenB));*/



////////////ALTERNATE SOLUTION



/**************  22   ***********/
/*
Write a program to compute the union (The SQL UNION clause/operator is used to combine the results of two or more SELECT statements without returning any duplicate rows.)of two arrays. Go to the editor
Sample Data :
console.log(union([1, 2, 3], [100, 2, 1, 10]));
[1, 2, 3, 10, 100]

*/
let arrTwentyTwoA = [1, 2, 3];
let arrTwentyTwoB = [100, 2, 1, 10];

function union(arr1, arr2) {
    
    
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
    
    
    
}



console.log(difference([1, 2, 3], [100, 2, 1, 10]));

