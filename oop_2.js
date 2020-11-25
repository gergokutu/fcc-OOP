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
// Object is a supertype for all objects in JavaScript.
console.log('True >', Object.prototype.isPrototypeOf(Dog.prototype));


