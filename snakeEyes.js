function rollSingleDice()
{
    return Math.floor(Math.random()*6+1);
}

//Make the rollDice function roll dice 
//check for doubles (until there are no more)
//and return the total score.
// var score = 0;

function rollDice(player) { 
    var die1=rollSingleDice(); 
    // console.log("Die 1: " + die1);
    var die2=rollSingleDice(); 
    // console.log("Die 2: " + die2);
    // var score=die1+die2; 
    player.addToScore(die1 + die2);
    // console.log("Score: " + player.getScore());
	while (die1===die2){ 
		if (die1 === 1 && die2 === 1) { 
		console.log("Snake Eyes!");
		snakeEyes = true; 
		return snakeEyes; 
		}
        console.log("Congratulations! Doubles Thrown!");
		die1=rollSingleDice(); 
        // console.log("Die 1: " + die1);
		die2=rollSingleDice();
        // console.log("Die 2: " + die2);
		// score+=die1+die2; 
        player.addToScore(die1 + die2);
        // console.log("Score: " + player.getScore());
        
	}
	return false;
}


function Player (name) {
    this.name = name;
    var score = 0;
    this.addToScore = function(amount) {
      score += amount;
   };
   this.getScore = function() {
      return score;
   };
}

var player1 = new Player("Steve");
// rollDice(player1);

var snakeEyes = false;
var turn = 1;
var prevScore = 0;
while(!snakeEyes) { 
    rollDice(player1);
    console.log("Turn " + turn + ":" + (player1.getScore() - prevScore));
    turn++;
    prevScore = player1.getScore();
}
if (snakeEyes) {
    console.log(player1.name + " scored " + player1.getScore());
}