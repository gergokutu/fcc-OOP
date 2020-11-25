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


