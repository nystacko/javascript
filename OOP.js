// recreate your Candy class here
function Candy(name) {
  this.name = name;
}

// extend the prototype of Candy with a "printName" method
Candy.prototype.printName = function() {
console.log(this.name);  
};

// testing code for your method
var chocolate = new Candy("chocolate");
chocolate.printName();

var gummyBears = new Candy("gummy bears");
gummyBears.printName();
// ---------------------------
// we set up a base class
function Candy() {
    this.sweet = true;
}

// create a "Chocolate" class with a "type" argument
function Chocolate(type) {
    this.type = type;
}

// say that Chocolate inherits from Candy
Chocolate.prototype = new Candy();

// create a "choc" object using the Chocolate constructor 
// that has a "type" of "milk"
var choc = new Chocolate("milk");

// print the sweet and type properties of choc
console.log(choc.sweet);
console.log(choc.type);
