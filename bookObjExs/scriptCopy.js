//// HEAD FIRST JS
// We need a FN, dogCatcher, that returns true if the OBJ passed to it is a Dog, and false otherwise.

function dogCatcher(obj) {
    return (obj instanceof Dog) ? true : false;
}

function Cat(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}

var meow = new Cat("Meow", "Siamese", 10);
var fido = {name: "Fido", breed: "Mixed", weight: 38};

function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}

Dog.prototype.bark = function() {
    (this.weight > 25) ? alert(this.name + " says Woof!") : alert(this.name + " says Yip!");
}

var spot = new Dog("Spot", "Chihuahua", 10);
var dogs = [meow, fido, spot];

let isDog = dogs.filter((el, idx) => {
    if (dogCatcher(el)) {
        console.log(el.name + ' is a dog');
        return el;
    }
    
});

console.log(isDog);

/////// dogs and showdogs


function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}

Dog.prototype.species = "Canine";
Dog.prototype.sitting = false;
Dog.prototype.sit = function() {
    if (this.sitting) {
       console.log(`${this.name} is already sitting`); 
    } else {
        console.log(`${this.name} is now sitting`);
        this.sitting = true;
    }
}
Dog.prototype.bark = function() {
	(this.weight > 25) ? console.log(this.name + " says Woof!") : console.log(this.name + " says Yip!");
};
Dog.prototype.run = function() {
    console.log("Run!");
};
Dog.prototype.wag = function() {
    console.log("Wag!");
};                  
  
function ShowDog(name, breed, weight, handler) {
    // let the Dog constructor handle this
    Dog.call(this, name, breed, weight);
    this.handler = handler;
}

// We want the ShowDog prototype to be a Dog instance
ShowDog.prototype = new Dog();
/////OR
//ShowDog.prototype = Object.create(Dog.prototype);
/////OR
//Object.setPrototypeOf(ShowDog.prototype, Dog.prototype);

// We do this to make sure the constructor property is correct
ShowDog.prototype.constructor = ShowDog;


ShowDog.prototype.league = "Webville";
ShowDog.prototype.bait = function() {
	console.log("Bait");
};
ShowDog.prototype.gait = function(kind) {
	console.log(kind + "ing");
};


var fido = new Dog("Fido", "Mixed", 38);
var fluffy = new Dog("Fluffy", "Poodle", 30);
var spot = new Dog("Spot", "Chihuahua", 10);

//override the prototype method: bark
spot.bark = function() {
	console.log(this.name + " says WOOF!");
};

var scotty = new ShowDog("Scotty", "Scottish Terrier", 15, "Cookie");
var beatrice = new ShowDog("Beatrice", "Pomeranian", 5, "Hamilton");

fido.bark();
spot.bark(); // called on the instance
scotty.bark();
beatrice.bait();
scotty.gait("Walk");

if (scotty instanceof Dog) {
    console.log("Scotty is a Dog");
}
if (scotty instanceof ShowDog) {
    console.log("Scotty is a ShowDog");
}

console.log("Fido constructor is " + fido.constructor);
console.log("Scotty constructor is " + scotty.constructor);

/////// Learning JS
const o = { a: 1, b: 2, c: 3};
for(let prop in o) {
	if(!o.hasOwnProperty(prop)) continue; //continue === Skip to the next step in the loop.
	console.log(`${prop}: ${o[prop]}`);
} 

Object.keys(ob).forEach((el) => console.log(`${el} ${ob[el]}`));

Object.values(ob).forEach((el) => console.log(`${el}`));

Object.entries(ob).forEach((el) => console.log(`${el} and is it an array?  ${Array.isArray(el)}`));


const op = { apple: 1, xochitl: 2, balloon: 3, guitar: 4, xylophone: 5, };
Object.keys(op)
	.filter(prop => prop.match(/^x/))
	.forEach(prop => console.log(`${prop}: ${op[prop]}`));

//basic car class	
class Car {
	constructor(make, model) {
		this.make = make;
		this.model = model;
		this.userGears = ['P', 'N', 'R', 'D'];
		this.userGear = this.userGears[0];
}
	shift(gear) {
        if (this.userGears.indexOf(gear) < 0) {
            throw new Error(`invalid gear: ${gear}`);
        }
        this.userGear = gear;
    }
}	

console.log(typeof Car); //"function"
const car1 = new Car("Tesla", "Model S");
const car2 = new Car("Mazda", "3i");
console.log(car1 instanceof Car); //true
console.log(car1 instanceof Object); //true
console.log(Object.getPrototypeOf(car1)); //Car
console.log(Object.getPrototypeOf(Object.getPrototypeOf(car1))); // Object
car1.shift('D');
car2.shift('R');
console.log(car1.userGear); //D
console.log(car2.userGear); //R

//car class with dyn props
class CarD {
	constructor(make, model) {
		this.make = make;
		this.model = model;
		this._userGears = ['P', 'N', 'R', 'D'];
		this._userGear = this._userGears[0];
	}
	get userGear() { return this._userGear; }
	set userGear(value) {
		if(this._userGears.indexOf(value) < 0)
		throw new Error(`Invalid gear: ${value}`);
		this._userGear = value;
}
	shift(gear) { this.userGear = gear; }
}

const car3 = new CarD("Tesla", "Model S");
const car4 = new CarD("Mazda", "3i");


//enumerating OBJs revisited
class Super {
	constructor() {
	this.name = 'Super';
	this.isSuper = true;
	}
}

// this is valid, but not a good idea...
Super.prototype.sneaky = 'not recommended!';
class Sub extends Super {
	constructor() {
	super();
	this.name = 'Sub';
	this.isSub = true;
	}
}

const obj = new Sub();
for(let p in obj) {
	console.log(`${p}: ${obj[p]}` +
	(obj.hasOwnProperty(p) ? '' : ' (inherited)'));
}


//Obj property attribs
const objc = { foo: "bar" };
console.log(Object.getOwnPropertyDescriptor(objc, 'foo'));

///////////////JS Novice to Ninja
//Object.create()

const Human = {
	arms: 2,
	legs: 2,
	walk() { console.log('Walking'); }
}

const lois = Object.create(Human);
console.log(lois);
console.log(Human.isPrototypeOf(lois)); //true
console.log(lois.hasOwnProperty('arms')); //false
lois.shoes = 'nike';
console.log(lois.hasOwnProperty('shoes')); //true


////////// Object Oriented JS

function Shape() {
    this.name = 'Shape';
    this.toString = function () {
        return this.name;
    };
    
}

function TwoDShape(){
    this.name = '2D shape';
}

function Triangle(side, height){
    this.name = 'Triangle';
    this.side = side;
    this.height = height;
    this.getArea = function () {
        return this.side * this.height / 2;
    };
}

//The code that performs the inheritance magic is as follows:
TwoDShape.prototype = new Shape();
Triangle.prototype = new TwoDShape();

// overwriting the prototype (as opposed to just adding properties to it), has side effects on the constructor property. Therefore, it's a good idea to reset the constructor property after inheriting:

TwoDShape.prototype.constructor = TwoDShape;
Triangle.prototype.constructor = Triangle;

var my = new Triangle(5, 10);
console.log(my.getArea());
console.log(my.constructor === Triangle); // remember '.constructor' is on the Triangle prototype..the my instance accesses it by looking up the prototype chain

console.log(my instanceof Shape);
console.log(my instanceof TwoDShape);
console.log(my instanceof Triangle);
console.log(Shape.prototype.isPrototypeOf(my));
console.log(TwoDShape.prototype.isPrototypeOf(my));
console.log(Triangle.prototype.isPrototypeOf(my));

