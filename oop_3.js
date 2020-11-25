// Use a MIXIN to add common behavior between unrelated objects
let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

let glideMixin = (obj) => {
  obj.glide = () => {
    console.log("Glide method added");
  };
};

glideMixin(bird);
glideMixin(boat);
bird.glide();

// Use ClOSURE to protect properties within an object from being modified externally
// In JavaScript, a function always has access to the context in which it was created.
// This is called closure.
function Bird() {
  // public variable
  this.name = "Birdy";
  // private variable
  let weight = 15;
  // publicly available method that a bird object can use
  this.getWeight = function () {
    return weight;
  };
};

let strucc = new Bird();
console.log(strucc.getWeight());

// Immediately Invoked Function Expression (IIFE)
// Runs itself
(function () {
  console.log("A cozy nest is ready");
})();