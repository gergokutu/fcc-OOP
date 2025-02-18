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
// let grizzly = Object.create(Animal.prototype);
// let wildCat = Object.create(Animal.prototype);

// When an object inherits its prototype from another object,
// it also inherits the supertype's constructor property.
Cat.prototype = Object.create(Animal.prototype);
Bear.prototype = Object.create(Animal.prototype);

let grizzly = new Bear('Maci Laci');
let wildCat = new Cat('Sushi');

grizzly.eat();
console.log('Bear constructor inherited from Animal >', grizzly.constructor);

// Reset an Inherited Constructor Property
Cat.prototype.constructor = Cat;
Bear.prototype.constructor = Bear;
console.log('Bear constructor after setting back >', grizzly.constructor);

// Add Methods After Inheritance
Bear.prototype.sound = function () { console.log('Wraaarr!'); };
Cat.prototype.sound = function () { console.log('Meow!'); };
grizzly.sound();
wildCat.sound();

// Override Inherited Methods > same as adding new
Cat.prototype.eat = function () { console.log('lefety lefety'); };
wildCat.eat();