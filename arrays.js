//array 1: the suits
var suits = ["clubs","hearts","diamonds","spades"];

//array 2: the ranks
var ranks = [2,3,4,5,6,7,8,9,10,"J","Q","K","A"];

//using for loops, modify the "deck" array so that it becomes a 
//two-dimensional array that stores every card in the deck; 
//e.g. [1, "clubs"], [2, "clubs"],etc...["A", "spades"]
var deck = [];
for(var i = 0 ; i < suits.length ; i++){
        for(var j = 0 ; j < ranks.length ; j++){
            var card = [i , j];
            deck.push(card);
        }
    }
    
    
// -----------------------
//This is an associative array of the results of the student roll call.
//If the value of the key is false, then the student was absent.
var students = {"robert":false,"joe":true,"sharon":true};

//Loop over the students associative array. If the student was present
//output their name to the console
for (var key in students) {  
    var value = students[key];
    if(value) {
        console.log(key);
    }
}
// --------------------------
var hand = [{"suit":"clubs", "rank":8} , {"suit":"spades", "rank":"A"} , {"suit":"hearts", "rank":2} , {"suit":"hearts", "rank":"K"} , {"suit":"clubs", "rank":9}];
for(var i = 0 ; i< hand.length ; i++) {
    for (var key in hand[i]) {  
    var value = hand[i][key];
   console.log(key + " " + value);
}
}