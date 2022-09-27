
var count = 1;
var clickedBoxes = [];
var gameOver = false;

var allBoxes = 
["b1","b2","b3",
 "b4","b5","b6",
 "b7","b8","b9"];
var winPositions = ["b1 b2 b3","b4 b5 b6","b7 b8 b9","b1 b4 b7","b2 b5 b8","b3 b6 b9","b1 b5 b9","b3 b5 b7"];
const xTurn = "X";
const oTurn = "O";


function startGame() {
	let player1 = document.getElementById("player1").value;
	let player2 = document.getElementById("player2").value;

	count = 1;
	clickedBoxes = [];
	for(var b = 0; b < allBoxes.length; b++)
	{
		document.getElementById(allBoxes[b]).innerHTML = "";
		document.getElementById(allBoxes[b]).style.pointerEvents = "auto";
	}
	document.getElementById("winMessage").style.display = "none";
	document.getElementById("turnMessage").style.display = "block";

	document.getElementById("turnMessage").innerHTML = player1+"'S TURN";
}

function nextPlayer(elem) {
	let player1 = document.getElementById("player1").value;
	let player2 = document.getElementById("player2").value;
	if(elem.innerHTML != "") return;
	clickedBoxes.push(elem.id);

    if(count == 1) {

		elem.innerHTML = xTurn;
		count = 2;
		if(clickedBoxes.length > 4)
			checkWinner();
		document.getElementById("turnMessage").innerHTML = player2+"'S TURN";
    }
	else if(count == 2){
	    elem.innerHTML = oTurn;
        count = 1;
		if(clickedBoxes.length > 4)
			checkWinner();
		document.getElementById("turnMessage").innerHTML = player1+"'S TURN";
    }
}



function checkWinner()
{
	let player1 = document.getElementById("player1").value;
	let player2 = document.getElementById("player2").value;
// Check all 9 boxes are filled up and then we want to check whos winning
	if(clickedBoxes.length == 9)
	{
		for(var w = 0; w < winPositions.length; w++)
		{
// Get the winning combination
			var wincombinations = winPositions[w].split(" ");
// check one by one winning combination with player's clicked boxes values
			if(document.getElementById(wincombinations[0]).innerHTML == xTurn && document.getElementById(wincombinations[1]).innerHTML == xTurn && document.getElementById(wincombinations[2]).innerHTML == xTurn)
			{
// Set Player 1  and 2 win message and disable all box clicks, repeptative maybe i can condense?
				document.getElementById("turnMessage").style.display = "none";
				document.getElementById("winMessage").style.display = "block";
				document.getElementById("winMessage").innerHTML = player1+" WINS";
				document.getElementById("playButton").style.pointerEvents = "auto";
				disableClicks();
				return false;
			}
			else if(document.getElementById(wincombinations[0]).innerHTML == oTurn && document.getElementById(wincombinations[1]).innerHTML == oTurn && document.getElementById(wincombinations[2]).innerHTML == oTurn){
				document.getElementById("turnMessage").style.display = "none";
				document.getElementById("winMessage").style.display = "block";
				document.getElementById("winMessage").innerHTML = player2+" WINS";
				document.getElementById("playButton").style.pointerEvents = "auto";
				disableClicks();
				return false;
			}
			else{
// Set the message GAME DRAW and disable all box clicks
				document.getElementById("turnMessage").style.display = "none";
				document.getElementById("winMessage").style.display = "block";
				document.getElementById("winMessage").innerHTML = "GAME DRAW";
				document.getElementById("playButton").style.pointerEvents = "auto";
				disableClicks();
			}
		}
	}
	else{
// Check all winning positions combos and getting winning combo
		for(var w = 0; w < winPositions.length; w++) {
			var wincombinations = winPositions[w].split(" ");
			if(document.getElementById(wincombinations[0]).innerHTML == xTurn && document.getElementById(wincombinations[1]).innerHTML == xTurn && document.getElementById(wincombinations[2]).innerHTML == xTurn)
			{
// Set Player 1 and 2 win message and disable all box clicks
				document.getElementById("turnMessage").style.display = "none";
				document.getElementById("winMessage").style.display = "block";
				document.getElementById("winMessage").innerHTML = player1+" WINS";
				document.getElementById("playButton").style.pointerEvents = "auto";
				disableClicks();
				return false;
			}
			else if(document.getElementById(wincombinations[0]).innerHTML == oTurn && document.getElementById(wincombinations[1]).innerHTML == oTurn && document.getElementById(wincombinations[2]).innerHTML == oTurn){
				document.getElementById("turnMessage").style.display = "none";
				document.getElementById("winMessage").style.display = "block";
				document.getElementById("winMessage").innerHTML = player2+" WINS";
				document.getElementById("playButton").style.pointerEvents = "auto";
				disableClicks();
				return false;
			}
		}
	}
}
function stopClicks() {
	for(var i = 0; i < allBoxes.length; i++)
	{
// i need to stop the mouse click on each boxes
		document.getElementById(allBoxes[i]).style.pointerEvents = "none";
	}
}
stopClicks();

// When you click on Play Now button i need outcomes based on whats in player boxes
document.getElementById("playButton").addEventListener("click", function() {
	let player1 = document.getElementById("player1").value.trim();
	let player2 = document.getElementById("player2").value.trim();
// Checking if player 1 name is empty, then display error message
	if(player1 == "")
	{
		document.getElementById("error").innerHTML = "";
		document.getElementById("error").innerHTML = "Please Enter Player Name 1";
		document.getElementById("player1").focus();
		return false;
	}
// Check if player 1 name is not empty and player 2 name is empty then thats when we introduce the comp
	else if(player1 != "" && player2 == "")
	{
		
		let player2 = document.getElementById("player2").value = "Computer"
		return false;
	}
// Check if player 1 and 2 both name are not empty
	else if(player1 != "" && player2 != "")
	{
// Make readonly those both name fields
		document.getElementById("player1").setAttribute("readonly","readonly");
		document.getElementById("player2").setAttribute("readonly","readonly");
// Empty the error message and Hide it
		document.getElementById("error").innerHTML = "";
		document.getElementById("error").style.display = "none";
// Start the game
		startGame();
	}
});

//added this function to add a random symbol when its the computers turn
function computerTurn(){
	console.log("hello")
	if (player2.value === "Computer"){
		console.log("it worked")
		let clickedBoxes = [];
		let player2 = oTurn;
		randombox = Math.ceil(Math.random() * clickedBoxes.length -1)
		// clickedBoxes[randombox].push(innerHTML = player2);
		
	}

}


