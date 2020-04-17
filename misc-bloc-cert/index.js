
/*********** NOTES/LESSONS LEARNED **********************

* best option if you have to add a "-" or some other character between 2 chars in an array:

numArray.forEach((el, idx) => {
    resultArray.push(el);
       if (numArray[idx] % 2 === 0 && numArray[idx+1] % 2 === 0) {
          resultArray.push('-')
    } 
});

* quick check for an empty obj: !Object.keys(head).length

* to always return a positive #: Math.abs(num) - to always return a negative #: -Math.abs(num)

* if you want to find a num that is only once in a list (string, array, etc) this might work: arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n)) - wont work for strings becauseit returns partial matches i.e. ('aa' 'aAaa') will both match arr.indexOf('aa')

* if looping thru a stg in an old for loop if checking for uppercase chars you cannot do this: stg === stg[i].toUpperCase() as stg[i] cannot run a function..instead do this: stg.charAt(i) === stg.charAt(i).toUpperCase()

* you can also do: stg.charAt(i-1) === "whatever"

* you cannot 'break' or 'continue' in a forEach loop

* if searching an arr of #s you can use Array.includes(num)..includes is an arr method, not just a stg method

anytime you do the following:

if (el === result[0]) {
    newArr.push(el);
}

it is returning any matches for whatever the VALUE of result[0] is!! so there could be more than one

also dont do this in a (forEach) loop: 
arr.splice(el, 1, arr[0]) // el is the value!!

DO this: arr.splice(idx, 1, arr[0])

********************************************************/

/*--------------HASH TABLE --------------------- */

let hash = require('string-hash')






/*-------------------------- ALL LINKED LISTS HERE ----------------------------------*/
/*-----------------------------------------------------------------------------------*/

///////// JOSE: Write code that takes a LL as an argument and prints every value on the list
/*


function Node(data) {
  this.data = data;
  this.next = null;
}

*/

//////////// JOSE: Write code that takes 2 LLs as arguments and prints every value on each list

/*


function Node(data) {
  this.data = data;
  this.next = null;
}


*/


// LL -  count the total count of nodes in a LL with a length fn
//https://www.codewars.com/kata/linked-lists-length-and-count

/*

function Node(data) {
  this.data = data;
  this.next = null;
}




//put value(s) in after it is implemented and check edge cases

console.log(length())
console.log(length())
console.log(length())

*/

// LL -  count the total instances of nodes given a value in a LL with a count fn
//https://www.codewars.com/kata/linked-lists-length-and-count


/*

function Node(data) {
  this.data = data;
  this.next = null;
}





//put value(s) in after it is implemented and check edge cases

console.log(count());
console.log(count());
console.log(count());
console.log(count());

*/


// LL - Write push() and buildOneTwoThree() functions to easily update and initialize linked lists.  Try to use the push() function within your buildOneTwoThree() function.

/*

function Node(data) {
  this.data = data;
  this.next = null;
}


function push(head, data) {
    
}


function buildOneTwoThree() {
  
}



*/

/*

LL - removeDups (was an assignment)
https://www.codewars.com/kata/linked-lists-remove-duplicates
*/



/*

LL - iterative reverse (was an assignment)
https://www.codewars.com/kata/linked-lists-iterative-reverse

*/



/*

Linked Lists - Insert Nth Node
https://www.codewars.com/kata/linked-lists-insert-nth-node

*/





/*-------------------------- END LINKED LISTS  ----------------------------------*/
/*-----------------------------------------------------------------------------------*/

// JOSE: Given an array of strings that represents a book, write code that goes over all words in the book and returns the word that is found the most number of times.

///CHARMAP SOLUTION

/*


function mostFrequent(bookArray) {
    
    
    
    
}



////ALTERNATE SOLUTION




function mostFrequent(bookArray) {
     
    
}






console.log(mostFrequent(['the', 'quick', 'brown', 'fox', 'the', 'quick', 'pat', 'quick', 'dope']));
console.log(mostFrequent());
console.log(mostFrequent(09090));
console.log(mostFrequent([]));
console.log(mostFrequent(['hay']));

*/


//Write a function that takes two strings as arguments and returns a string containing only the characters found in both strings.

/*

function oneStringFromTwo(stg1, stg2) {
    
    
    
}

console.log(oneStringFromTwo('pzafom', 'haaaaalodezx'));
console.log(oneStringFromTwo());
console.log(oneStringFromTwo(12345));
console.log(oneStringFromTwo('abcdefg', 'dexxxxxxxxxxfg'));
console.log(oneStringFromTwo('abcdefg', ''));
console.log(oneStringFromTwo('abcdefg'));
  
*/


/*
// https://www.codewars.com/kata/58223370aef9fc03fd000071/solutions/javascript/all/newest

//Given a number, return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark.

function dashatize(num) {
    
  
  
};

console.log(dashatize(274)); //"2-7-4"
console.log(dashatize(5311)); //"5-3-1-1"
console.log(dashatize(NaN)); // "NaN"
console.log(dashatize(-1)); // "1"
console.log(dashatize(0)); // "0"
console.log(dashatize(-28369)); // "28-3-6-9"

*/

/* You have an array of numbers.
Your task is to sort ascending odd numbers but even numbers must be on their places.

Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it. */

/*


function sortArray(arr) {
    
    
    
}

sortArray([5, 3, 2, 8, 1, 4]) //[1, 3, 2, 8, 5, 4]


*/

    
/// remove duplicates from both arrays and combine diff items into one arr - check expected results for how to handle edge cases
// https://www.codewars.com/kata/array-dot-diff/javascript

/*

function array_diff(a, b) {
  
    
    
    
}

console.log(array_diff([1,2,2,2],[2,3])); //[1,3]
console.log(array_diff([2,3], [1,2,2,2])); //[3,1]
console.log(array_diff([], [4,5])); //[]
console.log(array_diff([3,4], [3])); //[4]
console.log(array_diff([1,8,2], [])); //[1,8,2]
console.log(array_diff([-7,8,-2,17],[8,-2,-7])); //[17]


*/



/*

https://www.codewars.com/kata/highest-and-lowest/train/javascript

In this assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Example:

highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"

*All numbers are valid Int32, no need to validate them.
*There will always be at least one number in the input string.
*Output string must be two numbers separated by a single space, and highest number is first.



function highAndLow(numbers){
    
    
    
}

console.log(highAndLow("4 5 29 54 4 0 -214 -214 542 -64 1 -3 6 -6"));  // "542 -214"
console.log(highAndLow("42")); // "42"


*/



/*
https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-numbers-in-a-range/

We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.

The lowest number will not always come first. 


function sumAll(arr) {
	
 
	
}


console.log(sumAll([1, 4])) // 10
console.log(sumAll([4, 1])) // 10
console.log(sumAll([5, 10])) // 45
console.log(sumAll([10, 5])) // 45
console.log(sumAll([2, 2])) // 4
console.log(sumAll([2])) // 2
console.log(sumAll("not an array")) // "not an array please submit an array"
console.log(sumAll([3, "A"])) // "please enter digits"


*/

/*

Write a function to flip a coin n times that returns the numbers of times a “heads” was flipped.

*/

/////// RECURSIVE SOLUTION


/*


let flip = (num, cb) => {
    
    
      
}



console.log(flip(10)



*/



///////// SETINTERVAL SOLUTION
// cannot 'return' inside setInterval and if you try to return after setInterval then the 'return' statement will run before the setInterval completes because setInterval is async. try passing a cb to flip

/*

let flip = (num) => {
    
    
 
}


flip(10)

*/



/*
https://www.codewars.com/kata/convert-all-the-cases
You must write a function that changes to a given case. It must be able to handle all three case types:

*/

//// this solution passes the 6 basic tests but fails many of the full suite tests

/*
function changeCase(stg, caseType) {
    
    
    
    if (caseType === "snake") {
        
        
        
    } else if (caseType === "camel") {
        
        
        
    } else if (caseType === "kebab") {
        
        
        
    }
    
}

changeCase("snakeCase", "snake") // "snake_case"
changeCase("some-lisp-name", "camel") //"someLispName"
changeCase("map_to_all", "kebab") // "map-to-all"
changeCase("invalid-inPut_bad", "kebab") // undefined
changeCase("valid-input", "huh???") // undefined
changeCase("", "camel") // ""

*/


/*

first non-repeating character - 
Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.

https://www.codewars.com/kata/first-non-repeating-character

*/
/*


function firstNonRepeatingLetter(stg) {
    
    
}

console.log(firstNonRepeatingLetter('stress')) // t
console.log(firstNonRepeatingLetter('sTreSS')) // T


*/



//Write a function to generate the first "n" prime numbers and then explain how it works and how efficient it is:

/*


function isPrime(number) {
  
}

function firstNPrimes(n) {
  
}

console.log(isPrime(7))
console.log(firstNPrimes(6))
console.log(firstNPrimes(10))

*/










/* MORE:

Show me the table structure for an address book program that has contacts with first and last names that can have multiple phone numbers with a description of the number (cell/home/work/etc.)

Given an input n, where n is less than or equal to 50, calculate that input’s value in the Fibonacci sequence.

Write a query to get all of the phone numbers for people with the last name "Smith". You must use SQL.

Write a query to get all of the customers in the database, and the phone numbers for the ones with the last name "smith”. You must use Sequelize.

Given two different lists of objects, come up with an efficient solution to find the intersection of the two lists.

Create an algorithm that will output the results of rolling a die (1-6) using a function that simulates a coin toss (1 or 2). All 6 outcomes should be equally likely.

*/







