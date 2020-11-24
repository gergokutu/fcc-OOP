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
function Dog() {
  this.name = 'Kutyus',
    this.color = 'brown',
    this.numLegs = 4
};