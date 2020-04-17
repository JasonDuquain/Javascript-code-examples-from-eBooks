
////////promise.all:



//the relative order is the same. Even though the first promise takes the longest time to resolve, it is still first in the array of results.

let testNow = function() {
  console.log(`testNow : 1: ${new Date(Date.now())}`); 
  
}

let testLater = function() {
  console.log(`testLater : 1: ${new Date(Date.now())}`);  
  
}



/*

1. testNow : 1: Fri Mar 15 2019 08:27:36
2. testNow : ?: Fri Mar 15 2019 08:27:36
3. testNow : 2: Fri Mar 15 2019 08:27:36
4. testLater : 1: Fri Mar 15 2019 08:27:36
5. testLater : 2: Fri Mar 15 2019 08:27:36 --> END OF MAIN PRG 
6. testNow : THEN: Fri Mar 15 2019 08:27:36 --> then() handler put on the FRONT of the queue
7. testLater : ?: Fri Mar 15 2019 08:27:36 --> setTimeout() placed its handler at the END of the event queue 
8. testLater : THEN: Fri Mar 15 2019 08:27:36 --> once the 2nd promise was fulfilled, the 2nd then() handler placed at FRONT of event queue

*/






// the executor runs immediately before anything that appears after it in the src code. the fulfillment and rejection handlers are always added to the end of the job queue after the executor has completed:





////// Exploring ES6 - block the event loop

document.getElementById('block').addEventListener('click', onClick);

function onClick(event) {

}

function setStatusMessage(msg) {
    
}

function sleep(ms) {
    
}


////// ES6 for humans - simple chaining ex




/////// andrew mead promise ex - BASIC





//// 2nd promise ex - ADVANCED





//////// javascript.info ball ex

let btn = document.querySelector('button');
btn.addEventListener('click', go);
  
function go() {
    
}

function showCircle(cx, cy, radius) {
    let div = document.createElement('div');
    div.style.width = 0;
    div.style.height = 0;
    div.style.left = `${cx}px`;
    div.style.top = `${cy}px`;
    div.className = 'circle';
    document.body.append(div);
    
    
}

///// chaining loadScript



/////// Treehouse Promises (01-02.mp4)






//when we return the following, the new value is passed in to the resolver of the next promise.




///////////// Scotch.io Promises for Dummies

var isMomHappy = true; // change to see diff result



// 2nd promise


// you can shorten it with Promise.resolve():



///////// JS Novice to Ninja

const dice = {
    sides: 4,
    roll() {
        return Math.floor(this.sides * Math.random()) + 1;
    }
}

//console.log('Before the roll');



//console.log('After the roll');



///////// Obj Oriented JS - use Node with no other code on page then remove



/* One interesting use case is to create an iterable over promises. Let's assume that you have a list of
URLs you want to visit and parse the results. You can create promises for each of the fetch URL
calls and use them individually, or you can create an iterator w/  all the URLs and use the
promise in one go. The Promise.all() method takes the iterable of promises as an argument.
When all of the promises are fulfilled, an arr is filled with their results. Consider the following
code as an ex:

Promise.all([
    f1(),
    f2()
])
.then(([r1,r2]) => {
    //
})
.catch(err => {
    //..
});

*/


//////// Learning JS 3rd edition - use Node for last ex 
function countdown(seconds) {
    
}





//Let’s modify our countdown fn to have an error condition. If we’re superstitious we’ll have an err if we have to count the 13:



//To improve countdown, we’ll use Node’s EventEmitter. While it’s possible to
//use EventEmitter with a function like countdown, it’s designed to be used //with a class. So we’ll make our countdown function into a Countdown class //instead:

//const EventEmitter = require('events').EventEmitter;




function launch() {
    
}


/// promise chaining






/////////JSKit - Doggy Promises

var doggies = [
    'http://www.javascriptkit.com/javatutors/dog1.png',
    'http://www.javascriptkit.com/javatutors/dog2.png',
    'http://www.javascriptkit.com/javatutors/dog3.png',
    'http://www.javascriptkit.com/javatutors/dog4.png'
];

/*
let doggyPlayground = document.querySelector('#doggyplayground');
let doggyPlayground2 = document.querySelector('#doggyplayground2');
let doggyPlayground3 = document.querySelector('#doggyplayground3');
*/	

function getImage(url) {
    
}







function displayImages(images) {
    
}

function displayImagesAtOnce(images) {
    
}

function displayImagesBestOfBothWorlds(images) {
    
}

function demo1(){
    doggyPlayground.innerHTML = '';
    displayImages(doggies);
}

function demo2(){
    doggyplayground2.innerHTML = 'Fetching doggies...';
    displayImagesAtOnce(doggies);
}

function demo3(){
    doggyPlayground3.innerHTML = '';
    displayImagesBestOfBothWorlds(doggies);
}


///////////// Jonas Course





