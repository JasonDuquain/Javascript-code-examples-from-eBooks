
////////****  Obj Oriented JS - 3rd edition  ****/////////


// concat() merges arrays together
let arr = [6,8];

// join() turns an arr into a stg. The separator param is a stg with comma as the default value:

let jon = ['j', 'o', 'n'];


// slice() extracts a piece of the arr and returns it as a new arr, w/o modifying the src arr:
var a = ['apple', 'banana', 'js', 'css', 'orange'];

// sort() sorts an arr. Optionally accepts a cb fn for custom sorting. The cb fn receives 2 arr elements as args and should return 0 if they are equal, a positive # if the first is greater, and a negative # if the 2nd is greater.
var a = [101, 99, 1, 5];



let todos = [
    { name: 'yay',bcompleted: false },
    { name: 'bay', completed: false },
    { name: 'hay', completed: false }
];



// splice() removes and adds elements at the same time. The 1st param is where to start removing, the 2nd is how many items to remove and the rest of the params are new elements to be inserted in the place of the removed ones:
var a = ['apple', 'banana', 'js', 'css', 'orange'];



// indexOf() searches the arr and returns the index of the 1st match. Returns -1 if there's no match. 
var ar = ['one', 'two', 'one', 'two'];



// every() - you provide a cb fn that tests each element of the arr. Your cb is given the same args as forEach() and it must return true or false depending on whether the given element satisfies your test. If all elements satisfy your test, every() returns true. If at least 1 doesn't, every() returns false:



// If at some point during the loop it becomes clear that the result will be false, the loop stops and returns false:



// some() - like every(), only it returns true if at least 1 element satisfies your test:



// filter() - similar to some() and every() but it returns a new arr of all elements that satisfy your test:



// map() - similar to forEach() because it executes a cb for each element, but additionally it constructs a new arr with the returned values of your cb and returns it. 



// reduce() executes your cb for each element of the arr. Your calcblback returns a value. This value is passed back to your cb with the next iteration. The whole arr is eventually reduced to a single value:



// Optionally you can pass a start value which will be used by the first cb call:



// find() returns the 1st arr element for which the cb fn returns true. If there is no such element, it returns undefined:



// findIndex() returns the index of the 1st element for which the cb fn returns true. If there is no such element, it returns -1:


/////////  ******  Learning React  *******  ///////////

const schools = [ "Yorktown", "Washington & Lee", "Wakefield" ];

// Array.filter is a built-in fn that produces a new arr from a src arr. This function takes a predicate as its only arg. A predicate is a fn that always returns a Boolean value: true or false. Array.filter invokes this predicate once for every item in the arr.



// When it is time to remove an item from an arr we should use Array.filter over Array.pop or Array.splice because Array.filter is immutable. In this next sample, the cutSchool function returns new arrays that filter out specific school names:



// If you need to xform an arr into an obj, you can use Array.map in conjunction with Object.keys. Object.keys is a method that can be used to return an arr of keys from an obj.

const schoolsObjs = {
    "Yorktown": 10,
    "Washington & Lee": 2,
    "Wakefield": 5
}



// The reduce and reduceRight fns can be used to xform an arr into any value, including a #, stg, Boolean, obj, or even a fn. Let’s say we need to find the maximum number in an arr of #s. We need to xform an arr into a #; therefore, we can use reduce:
const ages = [21,18,42,40,64,63,34];




/////////  ******  JS Novice to Ninja  *******  ///////////

let avengers = ['Iron Man', 'Thor'];






// use reduce() to calculate the avg word length in a sentence
const sentence = 'The quick brown fox jumped over the lazy dog';


const sentenceTwo = 'that react course in sitepoint was garbageeeee';


//find all truthy values with filter()
const array = [ 0, 1, '0', false, true, 'hello' ];

const arrayTwo = [ 0, 1, '0', false, true, 'hello' ];


//chaining


const sales = [ 100, 230, 55];


//////// ****** Speaking and Learning JS ****** ///////////

// If you set an array’s length to 0, then it becomes empty. That allows you to clear an array for someone else.
var arra = [ 'a', 'b', 'c' ];

// this approach can be slow, because each arr element is explicitly deleted. creating a new empty arr is often faster:
var arra = [ 'a', 'b', 'c' ];

// be aware of the fact that setting an array’s length to 0 affects everybody who shares the arr:
var a1 = [1, 2, 3];


// In contrast, assigning an empty arr doesn’t:
var a1 = [1, 2, 3];


const arrOb = [{ name: "Suzanne" }, { name: "Pam" }, { name: "Zeke" }];



// Consider this ex where we have our items and corresponding prices in two separate arrays, and we want to combine them:
const items = ["Widget", "Gadget"];
const prices = [9.95, 22.95];




// get all cards with value 2:


// [ { suit: 'H', value: 2 },
// { suit: 'C', value: 2 },
// { suit: 'D', value: 2 },
// { suit: 'S', value: 2 } ]

// each value is 2 becuase we keep redeclaring value = 1 on every instance of the loop??


// (for the following, we will just list length, for compactness)
// get all diamonds:


// get all face cards


// get all face cards that are hearts









