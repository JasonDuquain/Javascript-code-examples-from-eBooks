
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

/*
let hash = require('string-hash')

class DumbMap {
  constructor() {
    this.list = []
  }

  // its a hash table so no need to loop thru the list to find it
  get(x) {
    return this.list[hash(x)]
  }

  set(x, y) {
    this.list[hash(x)] = y
  }
}

let hashMap1 = new DumbMap;
hashMap1.set('a', 5)
hashMap1.set('b', 15)
hashMap1.set('c', 25)

console.log(hashMap1.get('c'));

*/

/*-------------------------- ALL LINKED LISTS HERE ----------------------------------*/
/*-----------------------------------------------------------------------------------*/

///////// JOSE: Write code that takes a LL as an argument and prints every value on the list

/*
function Node(data) {
  this.data = data;
  this.next = null;
}

let n1 = new Node(1);
n1.next = new Node(2);

function printList(node) {
  
  if (!node) { return; }
  
  if (typeof node !== 'object') { return 'need a node obj' } 
  
  let current = node;
  
  while (current) { 
    console.log(current.data)
    current = current.next
  }


printList(n1)

*/
  

//////////// JOSE: Write code that takes 2 LLs as arguments and prints every value on each list

/*

function Node(data) {
  this.data = data;
  this.next = null;
}

let n1 = new Node(10)
n1.next = new Node(20)
n1.next.next = new Node(30)
n1.next.next.next = new Node(40)

let n2 = new Node(55)
n2.next = new Node(65)
n2.next.next = new Node(75)
  

function printValue(node, node2) {
    
    if (!node || !node2) { return null; }
    
    if (typeof node !== 'object' || typeof node !== 'object') { return 'need a node obj' }
    
    
    let current = node;
    let currentTwo = node2
    
    while (current) {
        console.log(current.data)
        current = current.next;
    }
    
    while (currentTwo) {
        console.log(currentTwo.data)
        currentTwo = currentTwo.next;
    }
    
    return 'done';
    
}


printValue(n1, n2);

*/


/*

// LL -  count the total count of nodes in a LL with a a length fn
// https://www.codewars.com/kata/linked-lists-length-and-count

function Node(data) {
  this.data = data;
  this.next = null;
}

let node = new Node(5)
node.next = new Node(15)
node.next.next = new Node(25)
node.next.next.next = new Node(35)


function length(head) {
    
    if (typeof head !== 'object' || head === '') {
        return 'need a node object'
    }
    
    if (!Object.keys(head).length) {
        return 'need a value with this object'
    }
    
    let length = 0;
    let current = head;
    
    while (current) {
        current = current.next;
        length++
    }
    
    return length;
    
}

console.log(length(node))
console.log(length())
console.log(length(123))



*/


// LL -  count the total instances of nodes given a value in a LL with a count fn
//https://www.codewars.com/kata/linked-lists-length-and-count

/*

function Node(data) {
  this.data = data;
  this.next = null;
}

let node = new Node(5)
node.next = new Node(15)
node.next.next = new Node(35)
node.next.next.next = new Node(35)


function count(head, data) {
    if (typeof head !== 'object') {
        return 'need a valid node'
    } 
    
    if (!head) {
       return 'need a valid node obj with a value' 
    }
    
    if (!Object.keys(head).length) {
        return 'need a value with this object'
    }
    
    
    
  let current = head;
  let count = 0;
  
  while ( current ) {
    if ( current.data === data )
      count++;
      
    current = current.next;
  }
  
  return count;
}

console.log(count(node, 35));
console.log(count(node, 19500));
console.log(count(123, 35));
console.log(count({}, 35));

*/


/*

//LL - Write push() and buildOneTwoThree() functions to easily update and initialize linked lists. Try to use the push() function within your buildOneTwoThree() function.


function Node(data) {
  this.data = data;
  this.next = null;
}

function push(head, data) {
  n = new Node(data);
  n.next = head;
  return n;
}

function buildOneTwoThree() {
  n = push(null,3);
  n = push(n,2);
  n = push(n,1);
  return n;
}

console.log(buildOneTwoThree())


///////////////ANOTHER IMPLEMENTATION

function Node(data) {
  this.data = data;
  this.next = null;
}

function push(head, data) {
  // head is the beginning of the linked list
  // data is the new data to be added as a new Node in the linked list
  
  // If the head is null, return a new Node as the head of the list
  if (head == null) {
    return new Node(data);
  }
  // Otherwise, create a new Node and make it the new head of the list by attaching head to the node's .next value
  else {
    var newNode = new Node(data);
    newNode.next = head;
    return newNode;
  }
}

function buildOneTwoThree() {
  // in order to build the list 1 -> 2 -> 3 -> null you have to push in the order 3,2,1
  var head = null;
  head = push(head, 3);
  head = push(head, 2);
  head = push(head, 1);
  return head;
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
    
    if (!Array.isArray(bookArray)) {
        return 'please submit an array'
    }
    
    if (bookArray.length === 0) {
        return 'no words found'
    }
    
    let charMap = {};
    let max = 0;
    let key = "";
    
    for (const char of bookArray) {
        if (!charMap[char]) {
            charMap[char] = 1
        } else {
            charMap[char]++;
        }
    }
    
    for (const prop in charMap) {
        if (charMap[prop] > max) {
            max = charMap[prop];
            key = prop
        }
    }
    
//    can also do this for 2nd part but look less efficient:
//    Object.entries(bookMap)
//        .forEach((el, idx) => {
//        if (el[1] > total) {
//            total = el[1];
//            key = el[0]
//        }
//    })
    
    
    return key;
  
}

*/

////ALTERNATE SOLUTION
/*


function mostFrequent(bookArray) {
    
 
    
}


*/

//console.log(mostFrequent(['the', 'quick', 'brown', 'fox', 'the', 'quick', 'pat', 'quick', 'dope']));
//console.log(mostFrequent());
//console.log(mostFrequent(09090));
//console.log(mostFrequent([]));
//console.log(mostFrequent(['hay']));



////////Write a function that takes two strings as arguments and returns a string containing only the characters found in both strings.

/*

function oneStringFromTwo(stg1, stg2) {
    
    if (stg2 === undefined) {
        return 'need two inputs'
    }
    
    if (typeof stg1 !== 'string' || typeof stg2 !== 'string') {
        return 'need a string data type'
    }
    
    if (stg1 === '' || stg2 === '') {
        return 'need two strings both having at least one character'
    }
    
    let aArray = stg1.split('');
    let bArray = stg2.split('');
    
    //need to run the filter on the array that has the LEAST number of items
    if (aArray.length < bArray.length) {
        return aArray.filter((el, idx) => bArray.includes(el))
    } else if (aArray.length > bArray.length) {
        return bArray.filter((el, idx) => aArray.includes(el))
    }
    
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
    
    if (Number.isNaN(num)) { return 'NaN'; }
  
  let positive = Math.abs(num);
    
  let numArray = String(positive).split('').map(el => Number(el));
  
  let finalArray = [];
  
  numArray.forEach((el, idx) => {
      if (el % 2 !== 0) {
         finalArray.push("-", el, "-")
      } else {
         finalArray.push(el)
      }
  })
  
  return finalArray.join('').replace(/\-\-/gi, "-").replace(/^\-|\-$/ig, "");
  
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
    
    if (arr.length === 0) { return arr; }
    
    let newArr = [];
    
    newArr = arr.filter(el => el % 2 !== 0)
    .sort((a, b) => {
        if (a < b) { return -1 }
        if (a > b) { return 1 }
        else { return 0 }
    });
    
    
    arr.forEach((el, idx) => {
        if (el % 2 !== 0) {
            arr.splice(idx, 1, newArr[0]) 
            newArr.shift();
        }
    })
    
    return arr;
    
}

sortArray([5, 3, 2, 8, 1, 4]) //[1, 3, 2, 8, 5, 4]

*/


/// remove duplicates from both arrays and combine diff items into one arr - check expected results for how to handle edge cases
// https://www.codewars.com/kata/array-dot-diff/javascript


/*

function array_diff(a, b) {
  
    if (a.length === 0) { return []; }
    
    if (b.length === 0) { return a; }
    
    let dups = a.filter(el => b.includes(el)); //might not work correctly is b is a longer arr? but all tests are passing
    
    let aResult = a.filter((el, idx) => dups.indexOf(el) === -1);
    let bResult = b.filter((el, idx) => dups.indexOf(el) === -1);
    
    return [...aResult, ...bResult];
    
    
    
//    ********   CLEANER SOLUTION   ******:
//    if (a.length === 0) { return []; }
//    
//    if (b.length === 0) { return a; }
//
//    let bUnique = b.filter((el, idx) => !a.includes(el))
//    let aUnique = a.filter((el, idx) => !b.includes(el))
//    
//    return [...aUnique, ...bUnique]  
    
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


function highAndLow(numbers) {
    const numsArray = numbers
        .split(" ")
        .map((el, idx) => Number(el))

    // ensure 2 values are returned in correct format if there is only one fn arg
    if (numsArray.length === 1) {
        return `${numsArray[0]} ${numsArray[0]}`
    }

    const max = Math.max(...numsArray)
    const min = Math.min(...numsArray)

    return `${max} ${min}`

}

console.log(highAndLow("4 5 29 54 4 0 -214 -214 542 -64 1 -3 6 -6")); 
console.log(highAndLow("42")); 
*/

/*
https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-numbers-in-a-range/
Sum All Numbers in a Range:
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.

The lowest number will not always come first. 


function sumAll(arr) {
	
    if (!Array.isArray(arr)) {
        return 'please submit an array';
        
    } else if (arr.find(el => typeof el !== 'number')) {
        return 'please enter digits';
        
    } else if (!arr[1]) {
        return arr[0];
        
    } else {
        const min = Math.min(...arr);
        const max = Math.max(...arr);

        let inBetweenTotal = 0;

        for (let i = min+1; i < max; i++) {
            inBetweenTotal += i;
        }

        inBetweenTotal += (arr[0] + arr[1]);

        return inBetweenTotal;
        
    }
    
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

let flip = (num) => {
    
    let headsTotal = 0;
    let tailsTotal = 0;
    
    for (let i = 0; i < num; i++) {
        const flipped = Math.floor(Math.random() * 2); 
        
        (flipped === 0) ? headsTotal++ : tailsTotal++
    }
    
    console.log(`heads came up ${headsTotal} out of ${num} flips`)
      
}


flip(10)

*/


///////// SETINTERVAL SOLUTION
// cannot 'return' inside setInterval and if you try to return after setInterval then the 'return' statement will run before the setInterval completes because setInterval is async. try passing a cb to flip
/*

let flip = (num) => {
    
    let headsTotal = 0;
    let tailsTotal = 0;
    let timer = num;
    
    const flipInterval = setInterval(() => {
        
        const flipped = Math.floor(Math.random() * 2); 
        
        (flipped === 0) ? headsTotal++ : tailsTotal++
        
        timer--;
        
        if (timer === 0) {
            clearInterval(flipInterval);
            console.log(`heads came up ${headsTotal} out of ${num} flips`) // cannot 'return' here as this is inside setInterval and if you try to return after setInterval then the 'return' statement will run before the setInterval completes because setInterval is async 
        }

    }, 100)
 
}


flip(10)

*/



/*
https://www.codewars.com/kata/convert-all-the-cases
You must write a function that changes to a given case. It must be able to handle all three case types:

changeCase("snakeCase", "snake") // "snake_case"
changeCase("some-lisp-name", "camel") //"someLispName"
changeCase("map_to_all", "kebab") // "map-to-all"
changeCase("invalid-inPut_bad", "kebab") // undefined
changeCase("valid-input", "huh???") // undefined
changeCase("", "camel") // ""

//// this solution passes the 6 basic tests but fails many of the full suite tests

function changeCase(stg, caseType) {
    
    if (stg === "") { return ""; }
        
    if (caseType === "snake") {
        
        const snakeArr = [];
        
        for (let i = 0; i < stg.length; i++) {
            if (stg.charAt(i) === stg.charAt(i).toUpperCase()) {
                snakeArr.push("_", stg[i].toLowerCase())
            } else {
                snakeArr.push(stg[i])
            }
        }
        
        return snakeArr.join('')
        
    } else if (caseType === "camel") {
        
        const camelArr = [];
        
        for (let i = 0; i < stg.length; i++) {
            if (stg.charAt(i-1) === "-") {
                camelArr.push(stg[i].toUpperCase());
            } else {
                camelArr.push(stg[i])
            }
        }
        
        return camelArr.join('').replace(/[-]/ig, "");

    } else if (caseType === "kebab") {
        
        if (stg.match(/[^\w]/ig)) {
            return;
        }
        
        return stg.replace(/[_]/ig, "-")
        
    } else { return; }
    
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

function firstNonRepeatingLetter(stg) {
    let charMap = {};

    for (const char of stg.toLowerCase()) {
        if (!charMap[char]) {
            charMap[char] = 1
        } else {
            charMap[char]++
        }
    }
    
    console.log(charMap)
    
    for (const prop in charMap) {
        if (charMap[prop] === 1) {
            if (stg.includes(prop)) {
                return prop;
            } else if (stg.includes(prop.toUpperCase())) {
                return prop.toUpperCase();
            }
        }
    }
    
    return "";
    
    
}

console.log(firstNonRepeatingLetter('stress')) // t
console.log(firstNonRepeatingLetter('sTreSS')) // T



*/

//Write a function to generate the first "n" prime numbers and then explain how it works and how efficient it is:

/*


function isPrime(number) {
  if (number < 2) {
    return false;
  }

  for (var i = 2; i < number; i++) {
      console.log('hay the number is ' + number + ' and i is : ' + i)
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

function firstNPrimes(n) {
  var primes = [];
  var num = 2;

  while(primes.length < n) {
    if (isPrime(num)) {
      primes.push(num);
    }

    num++;
  }

  return primes;
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







