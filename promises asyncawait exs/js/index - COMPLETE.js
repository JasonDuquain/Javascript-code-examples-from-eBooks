

//promise.all:

Promise.all([
  new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
  new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
  new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
]).then(alert); // 1,2,3 when promises are ready: each promise contributes an array member

//Please note that the relative order is the same. Even though the first promise takes the longest time to resolve, it is still first in the array of results.


let testNow = function() {
    console.log(`testNow : 1: ${new Date(Date.now())}`);        
    let p = new Promise((resolve, reject) => {
        console.log(`testNow : ?: ${new Date(Date.now())}`);    
        resolve(new Date(Date.now()))
    })
    console.log(`testNow : 2: ${new Date(Date.now())}`);        
    return p;
};

let testLater = function() {
    console.log(`testLater : 1: ${new Date(Date.now())}`);      
    let p = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`testLater : ?: ${new Date(Date.now())}`);   
            resolve(new Date(Date.now()))
        }, 0)
    })
    console.log(`testLater : 2: ${new Date(Date.now())}`);      
    return p;
};

let p = testNow();

p.then((value) => {
    console.log(`testNow : THEN: ${value}`);      
});

p = testLater();

p.then((value) => {
    console.log(`testLater : THEN: ${value}`);     
})



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
let promise = new Promise(function(resolve, reject) {
    resolve(50);
    console.log('me first', new Date(Date.now()));
})

promise.then((data) => console.log(data + ' me third', new Date(Date.now())));

console.log('me second', new Date(Date.now()))




//// Exploring ES6 - block the event loop
document.getElementById('block').addEventListener('click', onClick);

function onClick(event) {
    event.preventDefault();
    
    setStatusMessage('blocking..');
    
    setTimeout(() => {
        sleep(2222);
        setStatusMessage('done');
    }, 0);
}

function setStatusMessage(msg) {
    document.getElementById('statusMessage').textContent = msg;
}

function sleep(ms) {
    let start = Date.now();
    while ((Date.now() - start) < ms);
}


////// ES6 for humans - simple chaining ex
//The executor initiates some async work and then, once that completes, calls either the resolve or reject fn to resolve the promise or reject it if an err occurred.
//Once a promise is created, it can be passed around as a value, essentially representing a placeholder for a future value. This value can be consumed when the promise is fulfilled using .then() method. This method takes a fn that will be passed to the resolved value of the Promise once it is fulfilled.
//if a handler returns a value in a .then() call, it is automatically wrapped in a promise when returned. These .then() calls can be chained

const bond = new Promise((resolve, reject) => {
    resolve("Bond");
});

bond.then((str) => `${str}, James ${str}`)
    .then((str) => `Hello, I’m ${str}!`)
    .then((str) => console.log(str));


/////// ANDREW MEAD promise ex - BASIC

let somePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('it worked');
    }, 1234);
});

somePromise.then((msg) => {
    console.log('sucess: ', msg);
}, (errMsg) => console.log('err: ', errMsg));


// 2nd promise ex - ADVANCED

var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            (typeof a === 'number' && typeof b === 'number') ? resolve(a+b) : reject('args must be nums');
        }, 1500)
    });
};

asyncAdd(5,7).then((res) => {
    console.log('result: ', res);
    return asyncAdd(res, 33);
}).then((res) => {
    console.log('Should be 45', res);
}).catch((errMsg) => console.log(errMsg));





//////// javascript.info ball ex

let btn = document.querySelectorAll('button')[1];
btn.addEventListener('click', go);
  
function go() {
    showCircle(150,150,100).then((div) => {
        div.classList.add('msg-ball');
        div.append("hellooo");
    });
} 

function showCircle(cx, cy, radius) {
    let div = document.createElement('div');
    div.style.width = 0;
    div.style.height = 0;
    div.style.left = `${cx}px`;
    div.style.top = `${cy}px`;
    div.className = 'circle';
    document.body.append(div);
    
    return new Promise((resolve) => {
        setTimeout(() => {
            div.style.width = `${radius * 2}px`;
            div.style.height = `${radius * 2}px`;
            
            div.addEventListener('transitionend', function() {
                resolve(div); //could also be resolve(this)..as long as the  fn in the event listener is not an arrow fn
            }, {once: true});
        }, 0);
    });
}

///chaining loadScript

function loadScript(src) {
    return new Promise(function(resolve, reject) {
        let script = document.createElement('script');
        script.setAttribute('src', src);
        script.onload = () => resolve(script);
        script.onerror = () => reject(new Error(`script load err: ${src}`));
        document.head.append(script);
    });
}

/* Normally, a value returned by a .then handler is immediately passed to the next handler. But there’s an exception. If the returned value is a promise, then the further execution is suspended until it settles. After that, the result of that promise is given to the next .then handler. Returning promises allows us to build chains of async actions.

Here each loadScript call returns a promise, and the next .then runs when it resolves. Then it initiates the loading of the next script. So scripts are loaded one after another. */

loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js")
    .then(function(script) {
        return loadScript("https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js")
    })
    .then(function(script) {
        return loadScript("http://underscorejs.org/underscore-min.js")
    })
    .then(function(script) {
    // use functions declared in scripts to show that they indeed loaded
        console.log( _ );
        console.log( $ );
        console.log( _.where([1,2,3]) );
});

////Complete solution using Promise.all() but this is making the calls in parallel..there is no way to call 'console.log( _ );' until the end..in the above example it can be called in the 1st then fn:

function loadScript(src) {
    return new Promise((resolve, reject) => {
        let script = document.createElement('script');
        script.setAttribute('src', src);
        script.onload = () => resolve(script);
        script.onerror = () => reject(new Error(`script load err: ${src}`));
        document.head.append(script);
    })
}

Promise.all([
    loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js"),
    loadScript("https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"),
    loadScript("http://underscorejs.org/underscore-min.js")
])
.then((script) => {
    console.log(script) // array of the 3 returned scripts
    console.log(script[0]) //lodash script
    console.log( _ );
    console.log( $ );
    console.log( _.where([1,2,3]) );
})
//note that the relative order is the same. Even if the first promise takes the longest time to resolve, it is still first in the array of results
  

  
//////// Treehouse Promises (01-02.mp4)

let calcPromise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve(1+1);
    }, 1000);
});

let calcPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1 + 2), 500);
});

function addTwo(val) {
	//console.log(val);
    return val + 2;
}

function printFinalVal(nextVal) {
    console.log(`the final val is ${nextVal}`);
}

//when we return the following, the new value is passed in to the resolver of the next promise.

calcPromise
    .then(addTwo)
    .then(addTwo)
    .then(printFinalVal);

calcPromise2
    .then(addTwo)
    .then(addTwo)
    .then(printFinalVal);


///////////// Scotch.io Promises for Dummies

const isMomHappy = true; // change to see diff result

const willIGetPhone = new Promise(function(resolve, reject) {
    if (isMomHappy) {
        const phone = {
            brand: 'samsung',
            color: 'black'
        };
        resolve(phone);
    } else {
        const reason = new Error('mom is not happy');
        reject(reason);
    }
});

// 2nd promise
const showOff = function(phone) {
    return new Promise(
        function(resolve, reject) {
            const msg = `i have a new ${phone.color} ${phone.brand} phone`;
            resolve(msg);
        }
    );
};

// you can shorten it with Promise.resolve():
// 2nd promise - shortened
/*
const showOff = function(phone) {
    const msg = `i have a new ${phone.color} ${phone.brand} phone`;
    console.log(`i print before the message: ${msg}`);
    return Promise.resolve(msg);
};
*/

const askMom = function () {
    console.log('before asking');
    willIGetPhone
        .then(showOff) // 2nd promise - You can only start the showOff promise after the willIGetNewPhone promise.
        .then(function (fulfilled) { // you got a new phone..The fulfilled value is the value you pass in your promise resolve(success_value). So, it will be the phone obj.
            console.log(fulfilled); // output: { brand: 'Samsung', color: 'black' }..once the 2nd promise is chained the output will be 'i have a new black samsung phone'
        })
        .catch(function (err) { // mom didn't buy it
            console.log(err.message); //mom is not happy. the error value is exactly the value you pass in your promise reject(fail_value). So, it will be reason in our case. 
        });
    console.log('after asking'); // this prints BEFORE the called promise returns so shows that JS is asynchronous (Anything that needs to wait for the promise to proceed, you put that in .then)
};

askMom();


///////// JS Novice to Ninja

const dice = {
    sides: 4,
    roll() {
        return Math.floor(this.sides * Math.random()) + 1;
    }
}

console.log('Before the roll');

const promise = new Promise((resolve, reject) => {
    const n = dice.roll();
    setTimeout(() => (n > 1) ? resolve(n) : reject(n), n * 1000)
});

promise.then((result) => console.log(`I rolled a ${result}`))
.catch((badResult) => console.log(`Drat! ... I rolled a ${badResult}`));

dice.roll();

console.log('After the roll');

///////// Obj Oriented JS - use Node with no other code on page then remove
let fs = require('fs');

function readFileWithPromises(filename) {
    return new Promise(function(resolve, reject) {
        fs.readFile(filename, (err, data) => (err) ? reject(err) : resolve(data));
    });
}

readFileWithPromises('file.txt')
    .then((data) => console.log(data.toString()))
    .catch((error) =>  console.log('dohh'))

/*
One use case is to create an iterable over promises. Let's assume that you have a list of URLs you want to visit and parse the results. You can create promises for each of the fetch URL calls and use them individually, or you can create an iterator w/ all the URLs and use the promise in one go. The Promise.all() method takes the iterable of promises as an arg. When all of the promises are fulfilled, an array is filled with their results. Consider the following code as an example:

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
    return new Promise((resolve, reject) => {
        for (let i = seconds; i >= 0; i--) {
            setTimeout(() => {
                (i > 0) ? console.log(i + '...') : resolve(console.log('go'));
            }, (seconds - i) * 1000);
        }
    });
}

const p = countdown(4)
	.then(function () {
    console.log("countdown completed");
})
	.catch(function (err) {
    console.log(`countdown has an error: ${err.message}`);
});


//Let’s modify our countdown fn to have an err condition. If we’re superstitious, and we’ll have an err if we have to count the # 13:

function countdown(seconds) {
    return new Promise(function (resolve, reject) {
        for (let i = seconds; i >= 0; i--) {
            setTimeout(function () {
                if (i === 13) return reject(new Error(" NOT COUNTING THAT"));
                if (i > 0) console.log(i + '...');
                else resolve(console.log("GO!"));
            }, (seconds - i) * 1000);
        }
    });
}

//To improve countdown, we’ll use Node’s EventEmitter. While it’s possible to
//use EventEmitter with a function like countdown, it’s designed to be used //with a class. So we’ll make our countdown function into a Countdown class //instead:

const EventEmitter = require('events').EventEmitter;
class Countdown extends EventEmitter {
    constructor(seconds, superstitious) {
        super();
        this.seconds = seconds;
        this.superstitious = !!superstitious;
    }
    go() {
        const countdown = this;
        const timeoutIds = [];
        return new Promise(function (resolve, reject) {
            for (let i = countdown.seconds; i >= 0; i--) {
                timeoutIds.push(setTimeout(function () {
                    if (countdown.superstitious && i === 13) {
                        // clear all pending timeouts
                        timeoutIds.forEach(clearTimeout);
                        return reject(new Error("NOT COUNTING THAT"));
                    }
                    countdown.emit('tick', i);
                    if (i === 0) resolve();
                }, (countdown.seconds - i) * 1000));
            }
        });
    }
}

const c = new Countdown(15, true)
    .on('tick', function (i) { // note we can chain the call to 'on'
        if (i > 0) console.log(i + '...');
    });
c.go()
    .then(function () {
        console.log('GO!');
    })
    .catch(function (err) {
        console.error(err.message);
    })
    
  

function launch() {
    return new Promise(function (resolve, reject) {
        console.log("Lift off!");
        setTimeout(function () {
            resolve("In orbit!");
        }, 2 * 1000); // a very fast rocket indeed
    });
}


/// promise chaining
const c1 = new Countdown(5)
.on('tick', i => console.log(i + '...'));
c1.go()
    .then(launch)
    .then(function (msg) {
        console.log(msg);
    })
    .catch(function (err) {
        console.error("Houston, we have a problem....");
    })



/////////JSKit - Doggy Promises

var doggies = [
    'http://www.javascriptkit.com/javatutors/dog1.png',
    'http://www.javascriptkit.com/javatutors/dog2.png',
    'http://www.javascriptkit.com/javatutors/dog3.png',
    'http://www.javascriptkit.com/javatutors/dog4.png'
]

let doggyPlayground = document.querySelector('#doggyplayground');
let doggyPlayground2 = document.querySelector('#doggyplayground2');
let doggyPlayground3 = document.querySelector('#doggyplayground3');
	
	
/* Chaining Promises

function getImage(url) {
    return new Promise(function(resolve, reject) {
        var img = new Image();
        img.addEventListener('load', () =>  resolve(url));
        img.addEventListener('error', () =>  reject(url));
        img.setAttribute('src', url);
    });
}



//////CLEANER getImage call solution:
/*
getImage('http://www.javascriptkit.com/javatutors/dog1.png')
.then((url) => {
    console.log(`${url} fetched`);
	
	// This next line fetches "dog2.png" and returns a promise obj. By returning a promise obj inside then(), the next then() waits for that promise to resolve before running, accepting as its param the data passed on by the new promise obj. This is the key to chaining mult promises together- by returning another promise inside the then() method. 
	
    return getImage('http://www.javascriptkit.com/javatutors/dog2.png')
})
.then(function(url){
    console.log(`${url} fetched`);
})
.catch(function(url){
    console.log(`${url} failed to load`);
})
*/


///Creating a sequence of promises
/*
Ok, so we know the basic idea of chaining promises together is to return another promise inside the then() method. But manually chaining promises together can quickly become unmanageable. For longer chains, what we need is a way to start with an empty promise obj and programmatically pile on the desired then() and catch() methods to form the final sequence of promises. With promises, we can create a blank promise obj that's resolved to begin with with the line:

var resolvedPromise = Promise.resolve();

There is also Promise.reject() to create a blank promise obj that's already in the rejected state. Why would we want a new promise obj that's already resolved you may ask? Well, it makes for a perfect promise obj to chain additional promises together, since an already resolved promise obj will automatically jump to the first then() method added to it, and kick start the chain of events.

We can use a resolved promise obj to create a sequence of promises, by piling on then() and catch() methods to it. For ex (use the getImage fn from the chaining promises ex):
*/

/*
var sequence = Promise.resolve();
 
doggies.forEach(function(targetimage){ // doggies array is above
    sequence = sequence.then(function(){
        return getImage(targetimage)
    }).then(function(url){
        console.log(`${url} fetched`)
    }).catch(function(err){
        console.log(`${err} failed to load`)
    })
})	

remove all the code above when complete - up to the 'Chaining promises title above'
*/	
	
function getImage(url) {
    return new Promise(function(resolve, reject) {
        var img = new Image();
        var rand = Math.round(Math.random() * 1000); // add random delay to resolve and reject to accentuate asynchronicity
        img.addEventListener('load', function() {
            setTimeout(function() {
                resolve(url);
            }, rand);
        });
        img.addEventListener('error', function() {
            setTimeout(function() {
                reject(url);
            }, rand);
        })
        img.setAttribute('src', url);
    })
}

function displayImages(images) {
    var targetImage = images.shift(); // process doggies images one at a time
    if (targetImage) {
        getImage(targetImage)
            .then(function(url) {
            // load image then...
            var dog = document.createElement('img');
            dog.setAttribute('src', url);
            doggyPlayground.append(dog); // add image to DIV
            displayImages(images); // recursion- call displayimages() again to process next image/doggy
        }).catch(function(url) {
            // handle an image not loading
            console.log(`err loading ${url}`);
            displayImages(img); // recursion- call displayimages() again to process next image/doggy
        })
    }
}

function displayImagesAtOnce(images) {
    var doggyPromises = images.map(getImage); // call getImage on each array element and return array of promises
    Promise.all(doggyPromises)
        .then(function (urls) {
        doggyPlayground2.innerHTML = '';
        for (let i = 0; i < urls.length; i++) {
            var dog = document.createElement('img');
            dog.setAttribute('src', urls[i]);
            doggyPlayground2.appendChild(dog);
        }
    }).catch(function (urls) {
        console.log(`err fetching some imgs: ${urls}`);
    })
}

function displayImagesBestOfBothWorlds(images) {
    var doggyPromises = images.map(getImage); // create sequence of promises to act on each one in succession
    var sequence = Promise.resolve();
    doggyPromises.forEach(function(curPromise) {
        sequence = sequence.then(function() {
            return curPromise
        }).then(function(url) {
            var dog = document.createElement('img');
            dog.setAttribute('src', url)
            doggyPlayground3.append(dog);
        }).catch(function(err) {
            console.log(`${err} failed to load`);
        })                      
    })
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

const getIDs = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([523, 882, 432, 974]); // this is the data we want to return from the fulfilled promise ([523, 882, 432, 974])
    }, 1111);
});

const getRecipe = (recID) => {
    return new Promise((resolve, reject) => {
        setTimeout((ID) => {
           const recipe = {title: 'pasta', publisher: 'jonas'};
            resolve(`${ID}: ${recipe.title}`)
        }, 1111, recID);
    });
};

const getRelated = (publisher) => { //this one is created as a fn because we have to pass the recID into the promise. this one has to happen in a sequence because we can only load a related recipe if we know the publisher we are looking for 
    return new Promise((resolve, reject) => {
        setTimeout((pub) => {
            const recipe = {title: 'pizza', publisher: 'jonas'};
            resolve(`${pub}: ${recipe.title}`);    
        }, 1111, publisher);    
    });
};

getIDs.then((IDs) => { // the cb fn param (IDs, in this ex) is the result of the successful promise ([523, 882, 432, 974], in this ex)
    console.log(IDs);
    return getRecipe(IDs[2]); // this returns a promise
})
    .then((recipe) => {
    console.log(recipe);
    return getRelated('jonas s');
})
    .then((recipe) => {
    console.log(recipe);
})
    .catch((error) => {
    console.log('error');
});






