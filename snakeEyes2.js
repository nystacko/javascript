var players = [];
for(var i = 0 ; i < 4 ; i++){
    var promptName = prompt("Please enter your name.");
    players[i] = new Player(promptName);
}
function Player(name){
    this.name=name;
	var score=0;
	this.getScore=function(){
		return score;
	};
	this.addToScore=function(n){
		score+=n;
		return score;
	};
}

// var player1= new Player("Bob");

function rollSingleDice() {
	return Math.floor(Math.random()*6+1);
}
var snakeEyes = false;
var turn=0;
function rollDice(player){
	turn++;
	var die1=rollSingleDice(); 
	var die2=rollSingleDice();
	player.addToScore(die1+die2);
	console.log("Turn "+turn);
	console.log(player.name+" has a score of "+player.getScore()+" so far.");
	while (die1===die2){
		if (die1===1){
			snakeEyes = true;
			console.log("Snake Eyes!");
			return true;
		}else { 
			console.log("Doubles!");       
			return rollDice(player);
		}
	} 
	return;
}
do{
 for (var j = 0; j < players.length; j++){
   if (!snakeEyes){
       console.log(players[j].name);
       rollDice(players[j]);
   } else {
       break;
   }
}
} while (!snakeEyes);
var highScore = 0;
for (var k = 0 ; k < players.length ; k++) {
    thisScore = players[k].getScore();
    console.log(players[k].name + " scored " + thisScore);
    if (thisScore > highScore) {
        highScore = thisScore;
    }
}
var winners = [];
for (var m = 0 ; m < players.length ; m++) {
       thisScore = players[m].getScore();
       if(thisScore === highScore) {
           winners.push(players[m].name);
       }
}
var resultLine = "Congratulations ";
for (var n = 0 ; n < winners.length ; n++) {
    resultLine += winners[n];
    if (n > 0) {
        resultLine += "and";
    }
}
console.log(resultLine + " you have won!");