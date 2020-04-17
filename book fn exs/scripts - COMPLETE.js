/// Juan udemy course
const countries = ['london', 'new york', 'madrid', 'paris', 'berlin']

function newCountry(country, cb) {
    setTimeout(() => {
        countries.push(country);
        cb();
    }, 1111);
}

function displayCountries() {
    setTimeout(function() {
        let html = '';
        countries.forEach(function(country) {
            html += `<li>${country}</li>`
        });
        document.body.innerHTML = html;
    }, 1111);
}

displayCountries();
newCountry('atlanta', displayCountries);
displayCountries();
newCountry('key west', displayCountries);


//// Stephen G udemy course
// Rest and Spread together
function validateShoppingList(...items) {
	
	if (items.indexOf('milk') < 0) {
		return [ 'milk', ...items ];
	}
	return items;
}

console.log(validateShoppingList('oranges', 'bread', 'eggs'));

///////// Stephen H udemy course
// basic higher order fn

var sum = function(x, y) {
    return x + y;
};

var run = function(fn, a, b) {
    console.log(fn(a, b));
};

run(sum, 10, 5);

run(function(x, y) {
    return x * y;
}, 10, 5);


/// callback - YT
let students = [
    {name: "james", score: 100, school: "East"},
    {name: "steve", score: 40, school: "East"},
    {name: "gabe", score: 90, school: "West"},
    {name: "rachel", score: 85, school: "East"},
    {name: "jane", score: 95, school: "West"},
    {name: "lynn", score: 75, school: "East"}
];

let processStudents = function(data, callback) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].school.toLowerCase() === "east") {
            if (typeof callback === "function") {
                callback(data[i]);
            }
        }
    }
}

processStudents(students, function(obj) {
    if (obj.score > 60) {
        console.log(`${obj.name} passed`);
    }
});

function determineTotal() {
    let total = 0;
    let count = 0;
    
    processStudents(students, function(obj) {
        total += obj.score;
        count++;
    });
    
    console.log(`total score ${total} - total count: ${count}`);
}

determineTotal();

/// closure
(function() {
    var cnt = 0,
        item1 = document.querySelector('#item1'),
        item2 = document.querySelector('#item2');

    var print = function() {
        console.log(cnt);
    };

    item1.addEventListener('click', function() {
        cnt++;
        print();
    });

    item2.addEventListener('click', function() {
        cnt++;
        print();
    });
})();

//counter(); - not needed now that the above fn is an IIFE

//closure2 
(function() {
    
    var clicked = false;
    
    document.querySelector('#logo').addEventListener('click', function() {
        (clicked) ? console.log("You have clicked the logo again.") : console.log("You have clicked this logo for the first time.");
        
        clicked = true;
    });
     
})();



///// What the heck is the event loop

//foreach is not running the cb asynchronously, its running it within the current stack so these console logs blk the stack (they happen fast so its not noticeable)

[1,2,3].forEach((i) => console.log(i));

function asyncForEach(arr, cb) {
    arr.forEach(function() {
        setTimeout(cb, 0);
    });
}

asyncForEach([1,2,3], function(i) {
    console.log(i);
})


// The event loop and the rise of async programming article

/* The programming style of using callbacks is also called continuation-passing style (CPS), because the next step (the continuation) is explicitly passed as a param. This gives an invoked fn more control over what happens next and when. The following code illustrates CPS: */

console.log('A');
identity('B', function step2(result2) {
    console.log(result2);
    identity('C', function step3(result3) {
       console.log(result3);
    });
    console.log('D'); // inside the 1st identity call
});
console.log('E');

// Output: A E B D C

function identity(input, cb) {
    setTimeout(function () {
        cb(input);
    }, 0);
}

/* For each step, the control flow of the prg continues inside the cb. This leads to nested fns, which are sometimes referred to as cb hell. However, you can often avoid nesting, because JS's fn declarations are hoisted (their definitions are evaluated at the beginning of their scope). That means that you can call ahead and invoke fns defined later in the prg. The following code uses hoisting to flatten the previous ex. */

console.log('A');
identity('B', step2);
function step2(result2) {
    // The program continues here
    console.log(result2);
    identity('C', step3);
    console.log('D');
}
function step3(result3) {
   console.log(result3);
}
console.log('E');


///////javascript.info - Callbacks

function loadScript(src, cb) {
  let script = document.createElement('script');
  script.setAttribute('src', src);
  script.addEventListener('load', () => cb(script));
  document.head.append(script);
}

loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', (script) => {
  console.log(`${script.src} is loaded`);
  console.log( _ ); // fn declared in the loaded script
});

//// load 2 scripts sequentially --cb in cb--
loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', function(script) {
  console.log(`the ${script.src} is loaded, let's load one more`);
  
  loadScript("https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js", function(script) {
    console.log(`the second script is loaded`);
  });

});

//// handle errors
function loadScript(src, cb) {
    let script = document.createElement('script');
    script.setAttribute('src', src);

    script.addEventListener('load', () => cb(null,script));
    script.addEventListener('error', () => cb(new Error(`script load err for ${src}`)));
    document.head.append(script);
}

loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', function(err, script) {
    if (err) {
        console.log(err);
    } else {
        console.log(`the ${script.src} is loaded, let's load one more`);
            loadScript("https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js", function(err, script) {
            if (err) {
                console.log(err);
            } else {
                console.log(`the second script is loaded`);
            }
      });
    }
});


/* In the task Animated circle an animated growing circle is shown. Now let’s say we need not just a circle, but to show a message inside it. The message should appear after the animation is complete (the circle is fully grown).

In the solution of the task, the function showCircle(cx, cy, radius) draws the circle, but gives no way to track when it’s ready.

Add a cb arg: showCircle(cx, cy, radius, cb) to be called when the animation is complete. The cb should receive the circle <div> as an arg. BEFORE (START and COMPLETE html is in index.html -- do all JS in index.html file):

<head>
  <meta charset="utf-8">
  <style>
    .circle {
      transition-property: width, height, margin-left, margin-top;
      transition-duration: 2s;
      position: fixed;
      transform: translateX(-50%) translateY(-50%);
      background-color: red;
      border-radius: 50%;
    }
  </style>
</head>

<body>

  <button onclick="showCircle(150, 150, 100)">showCircle(150, 150, 100)</button>

  <script>
  function showCircle(cx, cy, radius) {
    let div = document.createElement('div');
    div.style.width = 0;
    div.style.height = 0;
    div.style.left = cx + 'px';
    div.style.top = cy + 'px';
    div.className = 'circle';
    document.body.append(div);

    setTimeout(() => {
      div.style.width = radius * 2 + 'px';
      div.style.height = radius * 2 + 'px';
    }, 0);
  }
  </script>

</body>

*/




/////// JS NOVICE TO NINJA

/// rest params
function mean(...values) {
    
    let total = 0;
    for(const value of values) {
        total += value;
    }
    
    return (total / values.length).toFixed(2);
}

console.log(mean(1, 2, 3));
console.log(mean(2, 5, 7, 9));

//BASIC CB
function sing(song,cb) {
console.log(`I'm singing along to ${song}.`);
cb();
}

function dance() {
console.log("I'm moving my body to the groove.");
}

sing('Let It Go', dance);

//Fn taking an anon fn as a cb
sing('Let It Go', ()=>{ console.log("I'm standing on my head.");});


//cb ex with setTimeout
function wait(message, cb, seconds){
	setTimeout(cb,seconds * 1000);
	console.log(message);
}

function selfDestruct(){
	console.log('BOOOOM!');
}

wait('This tape will self-destruct in five seconds ... ', selfDestruct, 5);

console.log('Hmmm, should I accept this mission or not ...?');


//cb ex with setTimeout - wait() is invoked last, despite the wait time being set to 0 seconds
function wait(message, cb, seconds){
	setTimeout(cb,seconds * 1000);
	console.log(message);
}

function selfDestruct(){
	console.log('BOOOOM!');
}

wait('This tape will self-destruct IMMEDIATELY ... ', selfDestruct, 0);

console.log('Hmmm, should I accept this mission or not ...?');


//We could have a fn and make it more generic by adding a cb param, so a calculation is performed on the random # before it’s returned, but if the cb is not supplied it will still calculate a random # between the 2 args provided:

function random(a, b, cb) {
    if (b === undefined) b = a, a = 1; // if only one arg is supplied, assume the lower limit is 1
        let result = Math.floor((b - a + 1) * Math.random()) + a;
    
    if (cb) {
        result = cb(result);
    }
    
    return result;
}

function square(n) {
    return n*n;
}

console.log(random(1, 10, square));
console.log(random(1, 5, (n) => 2 * n ));
console.log(random(1, 3));


//fn that returns fns
function greeter(greeting = 'Hello') {
	return function() {
		console.log(greeting);
	}
}

const englishGreeter = greeter();
englishGreeter();
const frenchGreeter = greeter('Bonjour');
frenchGreeter();

//closure1
function closure() {
	const a = 1.8;
	const b = 32;
	return (c) => c * a + b;
}

const toFahrenheit = closure();
console.log(toFahrenheit(30));

//closure2

function counter(start){
	let i = start;
	return function() {
		return i++;
	}
}

const count = counter(1);
console.log(count()); //1
console.log(count()); //2



/////////LEARNING JS
function sum(arr, f) {
// if no function is supplied, use a "null function" that
// simply returns its argument unmodified
	if (typeof f != 'function') {
        (f) = x => x;
    }
    
	return arr.reduce((a, x) => a += f(x), 0);
}

console.log(sum([1, 2, 3])); // returns 6
console.log(sum([1, 2, 3], x => x*x)); // returns 14
console.log(sum([1, 2, 3], x => Math.pow(x, 3))); // returns 36

//recursion
function findNeedle(haystack) {
    if(haystack.length === 0) return "no haystack here";
    if(haystack.shift() === 'needle') return "found it"
    return findNeedle(haystack); // haystack has one fewer element
}

console.log(findNeedle(['hay', 'hay', 'needle', 'hay', ]));


///////////OO JS 3RD EDITION

/// default params
function t(fog_level=1, spark_level=fog_level){
    console.log(`Fog Level: ${fog_level} and spark_level: ${spark_level}`);
}
function s(fog_level=10, spark_level = fog_level*10){
    console.log(`Fog Level: ${fog_level} and spark_level: ${spark_level}`);
}
console.log(t(10));
console.log(s(10));
console.log(t(10, 20)); // no default params used


/// rest params
function sayThings(tone, ...quotes){
    console.log(Array.isArray(quotes)); 
    console.log(`In ${tone} voice, I say ${quotes}`)
}

sayThings("Morgan Freeman", "good luck", "hay", "Amen");


//spread operator
function sumAll(a,b,c){
    return a+b+c
}
var numbers = [6,7,8];

//ES5 way of passing arr as an arg of a fn
console.log(sumAll.apply(null,numbers)); 
//ES6 Spread operator
console.log(sumAll(...numbers));

var midweek = ['Wed', 'Thu'];
var weekend = ['Sat', 'Sun'];
var week = ['Mon','Tue', ...midweek, 'Fri', ...weekend];
console.log(week);


//basic cb
function invokeAdd(a, b) {
return a() + b();
}

function one() {
return 1;
}
function two() {
return 2;
}

console.log(invokeAdd(one, two)); // --returns 3
console.log(invokeAdd(function () {return 1; }, function () {return 2; })); //pass the cb's as anon fn expressions -- returns 3

//multByTwo and addOne
function multiplyByTwo(a, b, c, cb) {
	var i, ar = [];
	for (i = 0; i < 3; i++) {
		ar[i] = cb(arguments[i] * 2);
	}
	return ar;
}

function addOne(a) {
	return a + 1;
}

let myarr = multiplyByTwo(1, 2, 3, addOne);
console.log(myarr); // returns 3,5,7

/*
using REST PARAMS!!

function multiplyByTwo(cb, ...rest) {
    var i, ar = [];
    for (i = 0; i < rest.length; i++) {
        ar[i] = cb(rest[i] * 2);
    }
    return ar;
}

function addOne(a) {
    return a + 1;
}

myarr = multiplyByTwo(addOne, 1, 2, 3, 4, 5);
console.log(myarr); // returns 3,5,7,9,11


*/

//using an anony fn
var ans = multiplyByTwo(1, 2, 3, function (a) {
return a + 1;
}); // returns 3,5,7;
console.log(ans);


//////closure
var a = "global variable";
	var F = function () {
		var b = "local variable";
		var N = function () {
		var c = "inner local";
		return b;
	};
	
	return N;

};

var inner = F();
console.log(inner()); //"local variable"


//////closure2
var inner; // placeholder
var F = function () {
	var b = "local variable";
	var N = function () {
		return b;
	};
	
inner = N;

};

F();
console.log(inner()); //"local variable"


///////closure3
function F(param) {
	var N = function () {
		return param;
	};
	
param++;
return N;

}

var inner = F(123);
console.log(inner()); //124


/// closures in a loop

function F() {
    let arr = [];
    for (var i = 0; i < 3; i++) {
        arr[i] = function () {
            return i;
        };
    }
    
    return arr;
}

var arr = F();

console.log(arr[0]());
console.log(arr[1]());
console.log(arr[2]());

// not quite as expected. What happened? All 3 fns point to the same local var: i. Why? The fns don't remember values, they only keep a link (reference) to the environment where they were created. In this case, the i var happens to live in the environment where the 3 fns were defined. So, all fns, when they need to access the value, reach back to the environment and find the most current value of i. After the loop, the i var's value is 3. So, all 3 fns point to the same value.

//So, how do you implement the correct behavior? The answer is to use another closure, as shown in the following:

function G() {
    var arr = [], i;
    for (i = 0; i < 3; i++) {
        arr[i] = (function (x) {
            return function () {
                return x;
            };
        })(i);
    }
    
    return arr;
}

var arr = G();

console.log(arr[0]());
console.log(arr[1]());
console.log(arr[2]());

//Here, instead of just creating a fn that returns i, you pass the i var's current value to another immediate fn. In this fn, i becomes the local value x, and x has a different value every time.

//Alternatively, you can use a normal (as opposed to an immediate) inner fn to achieve the same result. The key is to use the middle fn to localize the value of i at every iteration:

function H() {
    
    function binder(x) {
        return function () {
            return x;
        };
    }
    
    var arr = [];
    for (var i = 0; i < 3; i++) {
        arr[i] = binder(i);
    }
    
    return arr;
    
}

var arr = H();

console.log(arr[0]());
console.log(arr[1]());
console.log(arr[2]());


//ex of several techniques
var a = (function () {
    function someSetup() {
        var setup = 'done';
    }

    function actualWork() {
        console.log('Worky-worky');
    }
    
    someSetup();
    return actualWork;
}());

a(); //  worky-worky



////////////YOU DONT KNOW JS - KYLE
//closure
function foo() {
	var a = 2;
	
	function bar() {
		console.log( a );
	}
	
	return bar;
}

var baz = foo();
baz(); // 2 


/////closure2
function foo() {
	var a = 2;
	function baz() {
		console.log( a ); // 2
	}
	
	bar( baz );
}

function bar(fn) {
	fn(); // look ma, I saw closure!
}

console.log(foo());


//////closure3
var fn;
function foo() {
	var a = 2;
	function baz() {
		console.log( a );
	}
	fn = baz; // assign baz to global variable
}

function bar() {
	fn(); // look ma, I saw closure!
}

foo();
bar(); // 2


//////closure4a
for (var i=1; i<=5; i++) {
	(function(){
		var j = i;
		setTimeout( function timer(){
			console.log( j );
			}, j*1000 );
		})();
}

////variation
for (var i=1; i<=5; i++) {
	(function(j){
		setTimeout( function timer(){
			console.log( j );
			}, j*1000 );
		})( i );
}

//or 
for (var i=1; i<=5; i++) {
	let j = i; // block-scope for closure
	setTimeout( function timer(){
		console.log( j );
		}, j*1000 );
}

//or
for (let i=1; i<=5; i++) {
	setTimeout( function timer(){
		console.log( i );
	}, i*1000 );
}

/////BIANCA COURSE
//Higher-Order Fns and Callbacks

var ifElse = function(condition, isTrue, isFalse) {
    
    if (condition) {
        console.log(isTrue);
        return isTrue();
    } else {
        console.log(isFalse);
        return isFalse();
    }

};

ifElse(true, 
       function() { console.log(true); },
       function() { console.log(false); }
      );


// Passing Args
var ifElse2 = function(condition2, isTrue2, isFalse2, arg) {
    if (condition2) {
        isTrue2(arg);
    } else {
        isFalse2(arg);
    }
};

ifElse2(false, function(x) { console.log(x) }, function(x) { console.log(x) }, 'asdf');


//////////Closures
var closureAlert = function() {
    var x = "i am a var stuck in a closure";
    
    var alerter = function() {
        console.log(x);  
    };
    
    setTimeout(alerter, 1000);
    
    console.log('will still run right after');
};

closureAlert();


//closure with obj
function counter() {
    var n = 0;
    return {
        count() { return ++n },
        reset() { n = 0 }
    };
}

var myCounter = counter();
console.log(myCounter.count()); //1
console.log(myCounter.count()) //2


//SITEPOINT - Demsytifying closures. CBs and IIFEs article
//basic
function fullName(fn, ln, cb) {
    console.log(`my name is ${fn} ${ln}`);
    cb(ln);
}

var greeting = function(ln) {
    console.log(`welcome mr. ${ln}`);
}

fullName('benny', 'hill', greeting);

//same ex using an anon fnfunction fullName(firstName, lastName, callback){
fullName("Jackie", "Chan", function(lastname){console.log('Welcome Mr. ' + lastname);});


// cb using 2 diff fns 

// Generic function with common data
function publish(item, author, cb){   
  console.log(item);
  var date = new Date();

  cb(author, date);
}

// Callback function with specific data
function messages(author, time){   
  var sendTime = time.toLocaleTimeString();
  console.log("Sent from " + author + " at " + sendTime);
}

// Callback function with specific data
function articles(author, date){   
  var pubDate = date.toDateString();
  console.log("Written by " + author);
  console.log("Published " + pubDate);
}

publish("How are you?", "Monique", messages);
publish("10 Tips for JS Developers", "Jane Doe", articles);


////CB with arg from anthony node.js course 

function greet(cb) {
	console.log('Hello!');
	var data = {
		name: 'John Doe'
	};
	
	cb(data);
}

greet(function(obj) {
	console.log('The callback was invoked!');
	console.log(obj);
});

greet(function(obj) {
	console.log('A different callback was invoked!');
	console.log(obj.name);
});




/////////////////////// IIFEs/MODULEs ///////////////

 // JS NOVICE TO NINJA

(function() {
    
// block A
    const name = 'Block A';
    console.log(`Hello from ${name}`);
}());

(function() {
// block B
    const name = 'Block B';
    console.log(`Hello from ${name}`);  
}());

// Hello from Block A
// Hello from Block B


// https://www.youtube.com/watch?v=ljExIKfwxPM (IIFE And The Module Pattern)
var iife = (function () {
    
    var example = {};
    
    function test() {
        console.log('hay');    
    };
    
    example.alert = function() {
       //console.log('hello'); 
        test();
    }
    
    return example;
    
    
    
})();


// console.log(iife.alert());


// Jonas budgety app - implementing the module pattern (1st half)
// https://www.udemy.com/the-complete-javascript-course/learn/v4/t/lecture/5869222?start=0

//IIFE allows us to have data privacy by creating a new scope that is not visible from the outside scope. so we cannot access x and add from the outside

var budgetController = (function() {
    
    var x = 23;
    
    var add = function(a) {
        return x + a;
    }
    
    //the secret of the module pattern is that the iife returns an obj that contains the fns that we went to be public (the fns we want to give the outside scope access to)
    
    
    return {
        publicTest(b) {
           console.log(add(b)); 
        }
    }
    
    // publicTest being able to use x and add is an example of closure..it can access those even after the iife has returned
    
})();


//console.log(budgetController.x); //undefined - cannot access x as it is prvt
//console.log(budgetController.publicTest(3)); //26


///// Kyle Simpson Module Pattern

var foo = (function() {
    
    var o = { bar: "bar" };
    
    return {
        bar() {
            console.log(o.bar);
        }
    };
    
})();

foo.bar();

////// Beginning NODE.js Revealing Module Pattern

function printableMessage() {
    var message = 'hello';

    function setMessage(newMessage) {
        if (!newMessage) throw new Error('cannot set empty message');
            message = newMessage;
    }
    function getMessage() {
        return message;
    }
    function printMessage() {
        console.log(message);
    }
    return {
        setMessage: setMessage,
        getMessage: getMessage,
        printMessage: printMessage
    };
}

// Pattern in use
var awesome1 = printableMessage();
console.log(awesome1.printMessage()); // hello

var awesome2 = printableMessage();
console.log(awesome2.setMessage('hi'));
console.log(awesome2.printMessage()); // hi
// Since we get a new object everytime we call the module function
// awesome1 is unaffected by awesome2

console.log(awesome1.printMessage()); // hello

