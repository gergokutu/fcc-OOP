// Change the Prototype to a New Object
function Dog(name) {
  this.name = name;
};

Dog.prototype = {
  numLegs: 2,
  eat: function () {
    console.log('nom nom');
  },
  describe() {
    console.log(`My name is ${this.name}.`)
  }
};
