var cards = new Array("ace","king","queen","jack",10,9,8,7,6,5,4,3,2);
var hand = [];

function dealHand(numberOfCards){
    //if numberOfCards is greater than zero
	if(numberOfCards > 0){
	    // Store a random number
		var numCards = cards.length;
    	var randomCard = Math.floor(Math.random()*numCards);
		// Add card to the hand array
		hand.push(cards[randomCard]);
		// Output the card
		console.log("Your card is " + randomCard);
		// remove card selected from cards array
		cards.splice(randomCard , 1);
		// remove from numberOfCards
		numberOfCards--;
		// recursive function call 
		dealHand(numberOfCards);
	}	
}

function goFish(num, guess){
    // if num is greater than zero
	if(num > 0){
	    if(hand[num]===guess){
	      console.log("A Match for", hand[num]);
	      return;
	    }else if(num===0){
	      console.log("Go Fish: No matches for " + guess);
	    }
	    // remove from num
        num--;
	    // recursive function call... remember to use both arguments
	    goFish(num , guess);
	}
}
// Call dealHand and goFish
dealHand(5);
goFish(5, 3);