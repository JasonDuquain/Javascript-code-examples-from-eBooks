
////////****  Obj Oriented JS - 3rd edition  ****/////////


// concat() merges arrays together
let arr = [6,8];
let concatted = [1, 2].concat([3, 5], arr, [7, 11]);
console.log(concatted);
console.log(arr); //unchanged - concat is not destructive

// join() turns an arr into a stg. The separator param is a stg with comma as the default value:
let join = [1,2,3].join(' is less than ');
console.log(join); //1 is less than 2 is less than 3

let jon = ['j', 'o', 'n'];
let stgjoin = jon.join();
let stgjoin2 = jon.join("");
console.log(stgjoin); // j,o,n
console.log(stgjoin2); //jon


// slice() extracts a piece of the arr and returns it as a new arr, w/o modifying the src arr:
var a = ['apple', 'banana', 'js', 'css', 'orange'];
console.log(a.slice(2,4)); // ["js", "css"]
console.log(a); //["apple", "banana", "js", "css", "orange"]

// sort() sorts an arr. Optionally accepts a cb fn for custom sorting. The cb fn receives 2 arr elements as args and should return 0 if they are equal, a positive # if the first is greater, and a negative # if the 2nd is greater.
var a = [101, 99, 1, 5];
function customSort(a, b) {
    if (a > b) {
        return 1;
    } else if (a < b) {
        return -1;
    } else {
        return 0;
    }
}

console.log(a.sort());
console.log(a.sort(customSort));

let todos = [
    { name: 'yay',bcompleted: false },
    { name: 'bay', completed: false },
    { name: 'hay', completed: false }
];

todos.sort(function(a, b) {
    return (a.name < b.name) ? -1 : 1; 
});

console.log(todos); 

// splice() removes and adds elements at the same time. The 1st param is where to start removing, the 2nd is how many items to remove and the rest of the params are new elements to be inserted in the place of the removed ones:
var a = ['apple', 'banana', 'js', 'css', 'orange'];
console.log(a.splice(2,2,'pear', 'kiwi')); //["js", "css"] 
console.log(a); // ["apple", "banana", "pear", "kiwi", "orange"] - DESTRUCTIVE


// indexOf() searches the arr and returns the index of the 1st match. Returns -1 if there's no match. 
var ar = ['one', 'two', 'one', 'two'];
console.log(ar.indexOf('two')); //1
console.log(ar.indexOf('tw')); //-1
console.log(ar.indexOf('two', 2)); //3

// every() - you provide a cb fn that tests each element of the arr. Your cb is given the same args as forEach() and it must return true or false depending on whether the given element satisfies your test. If all elements satisfy your test, every() returns true. If at least 1 doesn't, every() returns false:
function hasEye(el, idx, arr) {
    return el.indexOf('i') !== -1;
}

console.log(['itsy', 'bitsy','spider'].every(hasEye));
console.log(['eency', 'weency', 'spider'].every(hasEye));

// If at some point during the loop it becomes clear that the result will be false, the loop stops and returns false:
console.log(['eee', 'aaa', 'ooo'].every(hasEye));


// some() - like every(), only it returns true if at least 1 element satisfies your test:
console.log(['itsy', 'eency', 'spider'].some(hasEye));
console.log(['eency', 'weency', 'teency'].some(hasEye));


// filter() - similar to some() and every() but it returns a new arr of all elements that satisfy your test:
console.log(['itsy', 'bitsy', 'spider'].filter(hasEye));
console.log(['eency', 'weency', 'spider'].filter(hasEye));


// map() - similar to forEach() because it executes a cb for each element, but additionally it constructs a new arr with the returned values of your cb and returns it. 
function uc(el, idx, arr) {
    return el.toUpperCase();
}

console.log(['eency', 'weency', 'spider'].map(uc));


// reduce() executes your cb for each element of the arr. Your calcblback returns a value. This value is passed back to your cb with the next iteration. The whole arr is eventually reduced to a single value:
function sum(res, element, idx, arr) {
    return res + element;
}

console.log([1, 2, 3].reduce(sum));

// Optionally you can pass a start value which will be used by the first cb call:
console.log([1, 2, 3].reduce(sum, 100));


function concat(result_so_far, el) {
    return "" + result_so_far + el;
}

console.log([1, 2, 3].reduce(concat));
console.log([1, 2, 3].reduceRight(concat));


// find() returns the 1st arr element for which the cb fn returns true. If there is no such element, it returns undefined:
console.log([4, -2, 3].find((x) => x < 0));


// findIndex() returns the index of the 1st element for which the cb fn returns true. If there is no such element, it returns -1:
console.log([4, -2, 3].findIndex((x) => x < 0));


/////////  ******  Learning React  *******  ///////////

const schools = [ "Yorktown", "Washington & Lee", "Wakefield" ];

// Array.filter is a built-in fn that produces a new arr from a src arr. This function takes a predicate as its only arg. A predicate is a fn that always returns a Boolean value: true or false. Array.filter invokes this predicate once for every item in the arr.
const wSchools = schools.filter((school) => school[0] === "W")
console.log(wSchools);

// When it is time to remove an item from an arr we should use Array.filter over Array.pop or Array.splice because Array.filter is immutable. In this next sample, the cutSchool function returns new arrays that filter out specific school names:

//ES6 - very concise but hard to read
const cutSchool = (cut, list) =>
list.filter((school) => school !== cut)

console.log(cutSchool("Washington & Lee", schools).join(" * "));

// ES5
const cutSchool = function(cut, list) {
    return list.filter(function(school) {
        return school !== cut;
    })
}

const highSchools = schools.map((school) => `${school} High School`)
console.log(highSchools.join("\n"));


// If you need to xform an arr into an obj, you can use Array.map in conjunction with Object.keys. Object.keys is a method that can be used to return an arr of keys from an obj.
const schoolsObjs = {
    "Yorktown": 10,
    "Washington & Lee": 2,
    "Wakefield": 5
}

const schoolArray = Object.keys(schoolsObjs).map(key =>
    ({
        name: key,
        wins: schoolsObjs[key]
    })
);

console.log(schoolArray);


// The reduce and reduceRight fns can be used to xform an arr into any value, including a #, stg, Boolean, obj, or even a fn. Let’s say we need to find the maximum number in an arr of #s. We need to xform an arr into a #; therefore, we can use reduce:
const ages = [21,18,42,40,64,63,34];

const maxAge = ages.reduce((max, age) => {
    console.log(`${age} > ${max} = ${age > max}`);
    return (age > max) ? age : max;
    
}, 0);

console.log('maxAge is:', maxAge);


/////////  ******  JS Novice to Ninja  *******  ///////////

let avengers = ['Iron Man', 'Thor'];
avengers = [...avengers, ...['Hulk', 'Hawkeye'] ];
console.log(avengers); // ["Iron Man", "Thor", "Hulk", "Hawkeye"]

console.log(avengers.splice(2, 1, 'Scarlet Witch'));
console.log(avengers); // ["Iron Man", "Thor", "Scarlet Witch", "Hawkeye"] splice is destructive

avengers.splice(3,0,'Quicksilver');
console.log(avengers); // ["Iron Man", "Thor", "Scarlet Witch", "Quicksilver", "Hawkeye"]
console.log(avengers.includes('Thor')); //true
console.log(avengers.includes('Th')); //false


console.log(['red','green','blue'].map( (el, idx, arr) => `element ${idx} is ${el}. There are ${arr.length} items total.`));

// use reduce() to calculate the avg word length in a sentence
const sentence = 'The quick brown fox jumped over the lazy dog';
const words = sentence.split(' ');
const total = words.reduce( (acc,word) => acc + word.length,0 );
console.log(total);
const average = total/words.length;
console.log(average)

const sentenceTwo = 'that react course in sitepoint was garbageeeee';
const wordsTwo = sentenceTwo.split(' ');
const totalTwo = wordsTwo.reduce( (acc,word) => acc + word.length,0 );
console.log(totalTwo);
const averageTwo = totalTwo/wordsTwo.length;
console.log(averageTwo.toFixed(2));

//find all truthy values with filter()
const array = [ 0, 1, '0', false, true, 'hello' ];
console.log(array.filter(Boolean));

const arrayTwo = [ 0, 1, '0', false, true, 'hello' ];
console.log(arrayTwo.filter((x) => !x));


//chaining
console.log([1,2,3].map((x) => x*x ).reduce((acc,x) => acc + x ));

const sales = [ 100, 230, 55];
totalAfterTaxSales = sales.map( (amount) => amount * 1.15).reduce( (acc,val) => acc + val );
console.log(totalAfterTaxSales);


//////// ****** Speaking and Learning JS ****** ///////////

// If you set an array’s length to 0, then it becomes empty. That allows you to clear an array for someone else.
var arra = [ 'a', 'b', 'c' ];
arra.length = 0;

// this approach can be slow, because each arr element is explicitly deleted. creating a new empty arr is often faster:
var arra = [ 'a', 'b', 'c' ];
arra = [];

// be aware of the fact that setting an array’s length to 0 affects everybody who shares the arr:
var a1 = [1, 2, 3];
var a2 = a1;
a1.length = 0;
console.log(a1); // []
console.log(a2); // []

// In contrast, assigning an empty arr doesn’t:
var a1 = [1, 2, 3];
var a2 = a1;
a1 = [];
console.log(a1); // []
console.log(a2); // [1,2,3]


const arrOb = [{ name: "Suzanne" }, { name: "Pam" }, { name: "Zeke" }];
console.log(arrOb.sort((a, b) => a.name > b.name));
console.log(arrOb.sort((a, b) => a.name[1] < b.name[1])); // arr sorted reverse alphabetically by 2nd letter of name property


// Consider this ex where we have our items and corresponding prices in two separate arrays, and we want to combine them:
const items = ["Widget", "Gadget"];
const prices = [9.95, 22.95];
const cart = items.map((x, i) => ( { name: x, price: prices[i]} )); 
console.log(cart); // [{ name: "Widget", price: 9.95 }, { name: "Gadget", price: 22.95 }]


const cards = [];
for (let suit of ['H', 'C', 'D', 'S']) {
    for (let value = 1; value <= 13; value++) {
        cards.push({ suit, value });
    } 
} // hearts, clubs, diamonds, spades

// get all cards with value 2:
console.log(cards.filter((c) => c.value === 2));
// [ { suit: 'H', value: 2 },
// { suit: 'C', value: 2 },
// { suit: 'D', value: 2 },
// { suit: 'S', value: 2 } ]

// each value is 2 becuase we keep redeclaring value = 1 on every instance of the loop??

// (for the following, we will just list length, for compactness)
// get all diamonds:
console.log(cards.filter((c) => c.suit === 'D')); // length: 13
// get all face cards
console.log(cards.filter((c) => c.value > 10)); // length: 12
// get all face cards that are hearts
console.log(cards.filter((c) => c.value > 10 && c.suit === 'H')); // length: 3








