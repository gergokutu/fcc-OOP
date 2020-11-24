let dog = {
  'name': 'Snuffie',
  numLegs: 4,
  sayName: function () { return "The name of this dog is " + dog['name'] + "."; },
  sayLegs() { return `This dog has ${dog.numLegs} legs.`; }
};

console.log('Dog name:', dog.name);
console.log('Number of legs:', dog['numLegs']);
console.log('Say name >', dog.sayName());
console.log('Say name >', dog['sayLegs']());