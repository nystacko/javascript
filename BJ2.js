// Card Constructor

function Card(suit , number) {
    var mySuit = suit;
    var myNumber = number;
    this.getNumber = function() {
        return myNumber;
    };
    this.getSuit = function() {
        return mySuit;
    };
    this.getValue = function() {
        if(myNumber === 1) {
            return 11;
        } else if (myNumber > 9) {
            return 10;
        } else {
            return myNumber;
        }
    };
} // end Card

var deal = function() {
    var suit = Math.floor(Math.random()*4+1);
    var number = Math.floor(Math.random()*13+1);
    var card = new Card(suit , number);
    return card;
}; // end deal fx

function Hand() {
    var cards = [];
    cards.push(deal());
    cards.push(deal());
    this.getHand = function() {
        return cards;
    };
    this.score = function() {
        var numCards = cards.length;
        var total = 0;
        var aces = 0;
        for(var i = 0 ; i < numCards ; i++) {
            total += cards[i].getValue();
            if(cards[i].getNumber() === 1) {
                aces++;
            }
        }
        
        while(total > 21 && aces > 0) {
                total -= 10;
                aces--;
            }
        
        return total;
    };
    this.printHand = function() {
        var hand = "";
        var suits = ["Spades" , "Hearts" , "Diamonds" , "Clubs"];
        var rank = [" Ace ", " 2 ", " 3 ", " 4 ", " 5 ", " 6 ", " 7 ", " 8 ", " 9 ", " 10 ", " Jack ", " Queen ", " King "];
        var numCards = cards.length;
        for(var j = 0 ; j < numCards ; j++) {
            var mySuit = cards[j].getSuit();
            var myRank = cards[j].getNumber();
            var myCard = rank[myRank - 1] + " of " + suits[mySuit - 1];
            hand += myCard;
            
        }
        return hand;
    };
    this.hitMe = function() {
        cards.push(deal());
    };
} // end Hand constructor

var playAsDealer = function() {
    // Create a new Hand
    var dealerHand = new Hand();
    // Check the score of the hand
    var dealerScore = dealerHand.score();
    // While score < 17, hitMe
    while(dealerHand.score() < 17) {
        dealerHand.hitMe();
        // dealerScore = dealerHand.score();
    }
    // return the Hand
    return dealerHand;
}; // end playAsDealer

var playAsUser = function() {
    // Create a new Hand
    var userHand = new Hand();
    var hit = confirm("Your hand is: " + userHand.printHand()  + " \n For a total of: " + userHand.score() + ". Click OK to hit. \n Click cancel to stand.");
    while(hit) {
        userHand.hitMe();
        hit = confirm("Your hand is: " + userHand.printHand() +  " \n For a total of: " + userHand.score() + ". Click OK to hit again. \n Click cancel to stand.");
    }
    return userHand;
}; // end playAsUser

var declareWinner = function(userHand, dealerHand) {
    var dealerScore = dealerHand.score();
    var userScore = userHand.score();
    var result = ["You win!" , "You lose!" , "You tied!"];
    if(userScore > 21){
        if(dealerScore > 21){
            return result[2];
        } else {
        return result[1];
        }
    } else if(dealerScore > 21) {
        return result[0];
    } else if(userScore > dealerScore){
        return result[0];
    } else if(userScore === dealerScore) {
        return result[2];
    } else {
        return result[1];
    }
}; // End declareWinner

var playGame = function() {
    var userHand = playAsUser();
    var dealerHand = playAsDealer();
    var whoWon = declareWinner(userHand, dealerHand);
    console.log("The user's hand is " + userHand.printHand() + " \n For a total of: " + userHand.score());
    console.log("\n The dealer's hand is " + dealerHand.printHand() + " \n For a total of: " + dealerHand.score());
    console.log("\n" + whoWon);
};

playGame();

// ------------------
// POSSIBLE DECK FUNCTION, NOT USED

function Deck() {
    var deck = [];

    this.shuffle = function() {
        deck = [];
        for (var s = 1; s < 4; s++) {
            for (var n = 1; n < 13; n++) {
                deck.push(new Card(s, n));
            }
        }

        deck.sort(function() {return 0.5 - Math.random()});
    };

    this.deal = function() {
        if (deck.length < 1) {
            console.log("Out of cards, you need to shuffle!");
            return null;
        }
        return deck.pop();
    };
}