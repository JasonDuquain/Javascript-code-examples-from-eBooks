///////////BIANCA MODULE/CB/CLOSURE EXERCISES




/*

//////////////////// EXERCISES - COMPLETE


////////// CALLBACKS AND MODULES

// Module Pattern
var Car = function() {
  var gasolineLevel = 10;
  function useGas(amt) {
    if (gasolineLevel - amt < 0) {
       console.log('out of gas');     
    } else {
       gasolineLevel -= amt;
       console.log(`gas level is ${gasolineLevel}`)
    }
  }
  
  return {
    radioStation: "104.5",
    changeStation(station) {
      this.radioStation = station;
    },
    go(speed) { useGas(speed) }
  }
}

let myCar = new Car();
console.log(myCar.go(4));
console.log(myCar.go(4));
console.log(myCar.go(4));



////////Higher-Order Fns and Callbacks
var ifElse = function(condition, isTrue, isFalse) {
    
    if (condition) {
        console.log(isTrue);
        return isTrue();
    } else {
        console.log(isFalse);
        return isFalse();
    }

};

ifElse(true, function() { console.log(true); }, function() { console.log(false); });


////////variation
var ifElse = function(condition, isTrue, isFalse) {
    
    (condition) ? isTrue() : isFalse()
    
};

var logTrue = function() { console.log(true); };
var logFalse = function() { console.log(false); };

ifElse(true, logTrue, logFalse);


/////// Passing Args
var ifElse2 = function(condition2, isTrue2, isFalse2, arg) {
    if (condition2) {
        isTrue2(arg);
    } else {
        isFalse2(arg);
    }
};

ifElse2(false, function(x) { console.log(x) }, function(x) { console.log(x) }, 'asdf');


/////2
var funcCaller = function(func, arg) {
    return func(arg);
};

funcCaller(function(x) {console.log(x)}, "test");

/////3
var testArr = ["dd", "ff", "gg"];
var firstVal = function(arr, func) {
    func(arr[0], 0, arr);
}

firstVal(testArr, function(a, b, c) {
    console.log(`a should be dd: ${a} b should be 0: ${b} and c should be the whold arr: ${c}`);
})




///////// CLOSURES

////1.
function nonsense(stg) {
    var blab = function() { // no arg to blab here - she explains why it wouldnt work at 8:10 mark of 06-08.mp4
        console.log(stg);
    };
    
    return blab;
}

var blabLater = nonsense('hay');
var blabAgain = nonsense('hay again');

console.log(blabLater());
console.log(blabAgain());

////2.
let lastNameTrier = function(firstName) {
    const innerFunction = function(lastName) {
        console.log(`${firstName} ${lastName}`);
    }
    
    return innerFunction; 
};

let firstNameTrier = lastNameTrier('jones');
firstNameTrier('tom');
firstNameTrier('bill');

////3.
let storyWriter = function() {
    let story = '';
    return {
        addWords(str) {
            story += str + ' ';
            return story.trim();
        },
        erase() {
            story = '';
        }
    };
};

let farmLoveStory = storyWriter();
farmLoveStory.addWords('start here.');
console.log(farmLoveStory.addWords('keep going.'));


let storyOfMyLife = storyWriter();
storyOfMyLife.addWords('well i');
console.log(storyOfMyLife.addWords('er ah um'));
storyOfMyLife.erase();

*/



////////// HEAD FIRST JS

var passengers = [ 
    { name: "Jane Doloop", paid: true, ticket: "coach" },
    { name: "Dr. Evel", paid: true, ticket: "firstclass" },
    { name: "Sue Property", paid: false, ticket: "firstclass" },
    { name: "John Funcall", paid: true, ticket: "coach" } 
];


/*
/////RETURNING FNS FROM FNS
function createDrinkOrder(passenger) {
    var orderFunction;
    if (passenger.ticket === "firstclass") {
        orderFunction = function () {
            console.log("cocktail or wine?");
        };
    }
    else {
        orderFunction = function () {
            console.log("cola or water?");
        };
    }
    return orderFunction;
}

function serveCustomer(passenger) {
    var getDrinkOrderFunction = createDrinkOrder(passenger);
    getDrinkOrderFunction();
    // get dinner order
    getDrinkOrderFunction();
    // show movie
    // pick up trash
}

function servePassengers(passengers) {
    passengers.forEach((el) => serveCustomer(el));
}

servePassengers(passengers);


//// CALLBACK FNS
function processPassengers(passengers, cb) {
    for (var i = 0; i < passengers.length; i++) {
        if (cb(passengers[i])) {
            return false;
        }
    }
    return true;
}

function checkNoFlyList(passenger) {
    return (passenger.name === 'Dr. Evel');
}

function checkNotPaid(passenger) {
    return (!passenger.paid);
}

var allCanFly = processPassengers(passengers, checkNoFlyList);
if (!allCanFly) {
    console.log('cant take off someone is on the no-fly list');
}

var allPaid = processPassengers(passengers, checkNotPaid);
if (!allPaid) {
    console.log("can't take off: not everyone has paid.");
}


//////////CLOSURES
function makeCounter() {
var count = 0;
	function counter() {
		count++;
		return count;
	}
return counter;
}

var doCount = makeCounter();
console.log(doCount()); //1
console.log(doCount()); //2
console.log(doCount()); //3


/////ex with setTimeout
function setTimer(doneMessage, n) {
	setTimeout(function() {
	console.log(doneMessage);
	}, n);
	doneMessage = "OUCH!";
}

setTimer("Cookies are done!", 1000);


//makePassword takes a password as an arg and returns a fn that accepts a password guess and returns true if the guess matches the password. The fn that’s returned from makePassword is a closure with an environment containing the free variable password. We pass in the value 'secret' to makePassword, so this is the value that’ s stored in the closure’ s environment. And when we invoke tryGuess, we compare the word we pass in (“nope” or “secret”) with the value for password in the environment for tryGuess. 


function makePassword(password) {
    return function guess(passwordGuess) {
        return (passwordGuess === password);
    };
}

var tryGuess = makePassword("secret");
console.log("Guessing 'nope': " + tryGuess("nope"));
console.log("Guessing 'secret': " + tryGuess("secret"));


//the multN function takes a number (call it n) and returns a fn. That fn itself takes a #, multiplies it by n and returns the result. The fn that’s returned from multN is a closure with an environment containing the free variable n. So we invoke multN(3) and get back a fn that multiplies any number you give it by 3.

function multN(n) {
    return function multBy(m) {
        return n*m;
    };
}

var multBy3 = multN(3);
console.log("Multiplying 2: " + multBy3(2));
console.log("Multiplying 3: " + multBy3(3));

var multBy6 = multN(6);
console.log("Multiplying 2: " + multBy6(2));
console.log("Multiplying 3: " + multBy6(3));


//This is a modification of the counter we just created. makeCounter takes no args, but defines a count variable. It then creates and returns an obj w/ 2 methods, increment and clear. This method increments the count variable and returns it and the other one sets count back to 0.

//The increment and clear methods have a free variable, count. So, increment and clear are a closure w/ an environment containing the variable count. Now, we call makeCounter and get back an obj with a method (that is a closure). We invoke the method in the usual way, and when we do, the method references the variable count in its environment.


function makeCounter() {
    var count = 0;
    return {
        increment() {
            count++;
            return count;
        },
        clear() {
            count = 0;
            return count;
        }
    };
}

var counter = makeCounter();
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.clear());
console.log(counter.increment());
console.log(counter.increment());

*/


