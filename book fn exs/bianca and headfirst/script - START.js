///////////BIANCA MODULE/CB/CLOSURE EXERCISES

////// Module Pattern



//////Higher-Order Fns and Callbacks




////////variation



/////////// 1. Passing Args


/////2


/////3
var testArr = ["dd", "ff", "gg"];




///////// CLOSURES
////1.



////2.



////3.









////////// HEAD FIRST JS

var passengers = [ 
    { name: "Jane Doloop", paid: true, ticket: "coach" },
    { name: "Dr. Evel", paid: true, ticket: "firstclass" },
    { name: "Sue Property", paid: false, ticket: "firstclass" },
    { name: "John Funcall", paid: true, ticket: "coach" } 
];



/////RETURNING FNS FROM FNS
function createDrinkOrder(passenger) {
    
}

function serveCustomer(passenger) {
    
}

function servePassengers(passengers) {
    
}

servePassengers(passengers);


//// CALLBACK FNS
function processPassengers(passengers, cb) {
    
}

function checkNoFlyList(passenger) {
    
}

function checkNotPaid(passenger) {
    
}




//////////CLOSURES
function makeCounter() {
  
}




/////ex with setTimeout
function setTimer(doneMessage, n) {
	
}




//makePassword takes a password as an arg and returns a fn that accepts a password guess and returns true if the guess matches the password. The fn that’s returned from makePassword is a closure with an environment containing the free variable password. We pass in the value 'secret' to makePassword, so this is the value that’ s stored in the closure’ s environment. And when we invoke tryGuess, we compare the word we pass in (“nope” or “secret”) with the value for password in the environment for tryGuess. 

function makePassword(password) {
  
}





//the multN function takes a number (call it n) and returns a fn. That fn itself takes a #, multiplies it by n and returns the result. The fn that’s returned from multN is a closure with an environment containing the free variable n. So we invoke multN(3) and get back a fn that multiplies any number you give it by 3.

function multN(n) {
  
}



//This is a modification of the counter we just created. makeCounter takes no args, but defines a count variable. It then creates and returns an obj w/ 2 methods, increment and clear. This method increments the count variable and returns it and the other one sets count back to 0.

//The increment and clear methods have a free variable, count. So, increment and clear are a closure w/ an environment containing the variable count. Now, we call makeCounter and get back an obj with a method (that is a closure). We invoke the method in the usual way, and when we do, the method references the variable count in its environment.


function makeCounter() {
  
}




