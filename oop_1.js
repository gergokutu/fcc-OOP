let dog = {
  'name': 'Snuffie',
  numLegs: 4,
  sayName: function () { return 'The name of this dog is ' + dog['name'] + '.'; },
  normalThis: function () { return 'Not in arrow function > ' + this.name },
  arrowThis: () => { return 'Be careful > ' + this.name },
  sayLegs() { return `This dog has ${dog.numLegs} legs.`; },
};

console.log('Dog name:', dog.name);
console.log('Number of legs:', dog['numLegs']);
console.log('Say name >', dog.sayName());
console.log('Say name >', dog['sayLegs']());
console.log('Normal this:', dog.normalThis());
console.log('Arrow this:', dog.arrowThis());

// Define a constructor function
// Not working with arrow function > because of this!!!
// Start it with capital letter
function Dog() {
  this.name = 'Kutyus',
    this.color = 'brown',
    this.numLegs = 4
};

let kutyus = new Dog();
console.log('kutyus:', kutyus);

// More flexible constructors
// They can accept parameters
function Dog2(name, color) {
  this.name = name,
    this.color = color,
    this.numLegs = 4
};

let terrier = new Dog2('Huba', 'black&brown');
console.log('terrier:', terrier);

// Verify an Object's Constructor with instanceof
function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

// Only change code below this line
let myHouse = new House(2);
console.log('Should be true >', myHouse instanceof House);

// Own props > hasOwnProperty()
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];

for (let prop in canary) {
  if (canary.hasOwnProperty(prop)) {
    ownProps.push(prop);
  };
};
console.log('Props of canary [ name, numLegs ] >', ownProps);

// Use Prototype Properties to Reduce Duplicate Code
function Bird(name) {
  this.name = name;
}

Bird.prototype.numLegs = 2;

let bird1 = new Bird("Rigo");
let bird2 = new Bird("Strucc");
console.log('bird1:', bird1);
console.log('bird2:', bird2);
console.log('bird1.numLegs:', bird1.numLegs);
console.log('bird2.numLegs:', bird2.numLegs);