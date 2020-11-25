// Change the Prototype to a New Object
function Dog(name) {
  this.name = name;
};

Dog.prototype = {
  // Manually changing the prototype to a new object
  // Erases the constructor property from the prototype
  // Do not forget to define the constructor property!!!
  constructor: Dog,
  numLegs: 2,
  eat: function () {
    console.log('nom nom');
  },
  describe() {
    console.log(`My name is ${this.name}.`)
  }
};

// An object inherits its prototype
// directly from the constructor function
// that created it.
// Check the prototype
let terrier = new Dog('Huba');
console.log('Should be true >', Dog.prototype.isPrototypeOf(terrier));

let prototypeProps = [];
for (let prop in terrier) {
  if (!terrier.hasOwnProperty(prop)) prototypeProps.push(prop);
};
console.log('Huba:', terrier);
console.log('Prototype props of terrier:', prototypeProps);
terrier.describe();

// Prototype chain
// Object is a supertype (parent) for all objects in JavaScript.
console.log('True >', Object.prototype.isPrototypeOf(Dog.prototype));

// Use Inheritance So You Don't Repeat Yourself
function Cat(name) {
  this.name = name;
};

Cat.prototype = {
  constructor: Cat,
  // eat: function () {
  //   console.log("nom nom nom");
  // }
};

function Bear(name) {
  this.name = name;
};

Bear.prototype = {
  constructor: Bear
  // eat: function () {
  //   console.log("nom nom nom");
  // }
};

function Animal() { };

Animal.prototype = {
  constructor: Animal,
  eat: function () {
    console.log("nom nom nom");
  }
};

// Not the best for inheritance
// let grizzly = new Animal();
// Instead >
let grizzly = Object.create(Animal.prototype);
let wildCat = Object.create(Animal.prototype);
