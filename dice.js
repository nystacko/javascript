function rollSingleDice()
{
    return Math.floor(Math.random()*6+1);
}

//Make the rollDice function roll dice 
//check for doubles (until there are no more)
//and return the total score.
// var score = 0;

function rollDice() { 
    var die1=rollSingleDice(); 
    console.log("Die 1: " + die1);
	var die2=rollSingleDice(); 
    console.log("Die 2: " + die2);
	var score=die1+die2; 
    console.log("Score: " + score);
	while (die1===die2){ 
        console.log("Congratulations! Doubles Thrown!");
		die1=rollSingleDice(); 
        console.log("Die 1: " + die1);
		die2=rollSingleDice();
        console.log("Die 2: " + die2);
		score+=die1+die2; 
        console.log("Score: " + score);
	}
	return score;
}
rollDice();
