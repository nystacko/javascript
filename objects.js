// CREATING JS OBJECTS

// ALL CODE BELOW IS MISSING VAR DECLARATIONS AND SEMICOLONS

// --------------------
// NEW Operator

person = new Object()
person.name = "Tim Scarfe"
person.height = "6Ft"

person.run = function() {
	this.state = "running"
	this.speed = "4ms^-1"
}

// --------------------
// Literal Notation
// Object Literals

timObject = {
	property1 : "Hello",
	property2 : "MmmMMm",
	property3 : ["mmm", 2, 3, 6, "kkk"],
	method1 : function(){alert("Method had been called" + this.property1)}
};

timObject.method1();
alert(timObject.property3[2]) // will yield 3

// --------------------
// Object Constructor

// Here the function "cat()" is an object constructor.
// Its properties and methods are declared inside it by prefixing them with the keyword "this."
// Constructors create the blueprints for objects, not the object itself.

function cat(name) {
	this.name = name;
	this.talk = function() {
		alert( this.name + " say meeow!" )
	}
} 

cat1 = new cat("felix")
cat1.talk() //alerts "felix says meeow!"

cat2 = new cat("ginger")
cat2.talk() //alerts "ginger says meeow!"

// Add a method to our constructor function through prototyping

cat.prototype.changeName = function(name) {
	this.name = name;
}

firstCat = new cat("pursur")
firstCat.changeName("Bill")
firstCat.talk() //alerts "Bill says meeow!"

// --------------------
// Objects as Associative Arrays
// As you may know, the dot (.) operator can be used to access the [] operator used with arrays.
// These are the same

  object.property
  object["property"]
  
// --------------------
// for/in loop through properties in an object

testObj = {

	prop1:"hello",
	prop2:"hello2",
	prop3:new Array("helloa",1,2)
}

for(x in testObj) alert( x + "-" + testObj[ x ] )




