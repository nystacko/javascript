//Create an object called FizzBuzzPlus
var FizzBuzzPlus = {
    // isFizzBuzzie
    // return true if the provided value is
    // a multiple of 3 or 5 but not both 3 and 5.
    // otherwise it returns false
    // arguments: number - integer
    // returns: true or false - boolean 
    isFizzBuzzie: function(numToTest) {
        if(numToTest % 3 === 0 && numToTest % 5 === 0) {
            return false;
        } else if (numToTest % 3 === 0 || numToTest %5 === 0) {
            return true;
        } else {
            return false;
        }
    },
    //getFizzBuzzSum
    //returns the sum of all the numbers below the maximum provided 
    //which are multiples of 3 or 5 but not both
    //arguments: number - maximum value for search
    //returns: number - sum of the numbers below the maximum which are multiples of 3 or 5 but not both
    getFizzBuzzSum: function (maxValue) {
     var sum = 0;
     for (var i = 1; i < maxValue; i++) {
        if(this.isFizzBuzzie(i)) {
            sum += i;
        }
     }   
     return sum;
    },
    //getFizzBuzzCount
    //returns the count of all the numbers below the maximum provided 
    //which are multiples of 3 or 5 but not both
    //arguments: number - maximum value for search
    //returns: number - count of the numbers below the maximum whihch are multiples of 3 or 5 but not both
    getFizzBuzzCount: function (maxValue) {
     var count = 0;
     for (var i = 1; i < maxValue; i++) {
        if(this.isFizzBuzzie(i)) {
            count ++;
        }
     }   
     return count;
    }
};
//create the following functions:





//getFizzBuzzCount
//returns the count of all the numbers below the maximum provided 
//which are multiples of 3 or 5 but not both
//arguments: number - maximum value for search
//returns: number - count of the numbers below the maximum whihch are multiples of 3 or 5 but not both

//getFizzBuzzAverage
//returns the average(sum/count) of all the numbers below the maximum provided 
//which are multiples of 3 or 5 but not both
//arguments: number - maximum value for search
//returns: number - average(sum/count) of the numbers below the maximum whihch are multiples of 3 or 5 but not both

// FizzBuzzPlus.isFizzBuzzie(3400);
FizzBuzzPlus.getFizzBuzzCount(3400);