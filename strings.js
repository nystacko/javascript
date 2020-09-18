var str1 = "It was the best of times";
var str2 = "It was the worst of times";

// extend String's prototype here
String.prototype.futureDickens = function() {
    // Takes any string and replaces word "was" with words "will be"
	var replacement = "";
    var original = this.toString();
    replacement = original.replace("was", "will be");  
    return replacement;
};

console.log( str1.futureDickens() );
console.log( str2.futureDickens() );