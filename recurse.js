// Here is the function using a for loop
function countSheepWithLoop(number) {    
  for (i = 1; i <= number; i++) {
    if (i === number) {
      console.log("Zzzzzz");
    }
    console.log("Another sheep jumps over the fence.");
  }
}

// And here is the recursive function
function countSheep(number) {
  if (number === 0) {
    // Put your base case here
    console.log("Zzzzzz");
    return;
  } else {
	console.log("Another sheep jumps over the fence.");
	// Define the variable newNumber as 
	// 1 less than the input variable number
	 var newNumber = number - 1;
	// Recursively call the function
	// with newNumber as the parameter
	countSheep(newNumber);
  }
}

// Call your new recursive function:
countSheep(10);

// ---------------------

// Create an empty array called "stack"
var stack = [];
// Here is our recursive function
function power(base, exponent) {
  // Base case 
  if ( exponent === 0 ) {
    return 1;
  }
  // Recursive case
  else {
	stack[exponent - 1] = base * power(base, exponent - 1);
    return stack[exponent - 1];
  }
}

//---------------------
// Write a function to get the factorial of a number.

var factorial = function(int) {
  if (int === 0) {
    return 1;
  }
  
  // This is it! Recursion!!
  return int * factorial(int - 1);
};
factorial(10);