//variables for count, clickedBoxes, allboxes, winpositions in the game, X and O 
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

// the function that i need after clicking playnow
function startGame()
{
// Get the Player Names 1 and 2 and count of click for them so we dont have inifinite click for each
	let player1 = document.getElementById("player1").value;
	let player2 = document.getElementById("player2").value;

	count = 1;
// Set the clickedBoxes array empty/blank
	clickedBoxes = [];
// Loop with all boxes to set EMPTY value in it and set the click
	for(var b = 0; b < allBoxes.length; b++)
	{
		document.getElementById(allBoxes[b]).innerHTML = "";
		document.getElementById(allBoxes[b]).style.pointerEvents = "auto";
	}
// Hide the winner message, and show whos turn it is 
	document.getElementById("winMessage").style.display = "none";

	document.getElementById("turnMessage").style.display = "block";

	document.getElementById("turnMessage").innerHTML = player1+"'S TURN";
}
// nextPlayer execute when any player made his turn
function nextPlayer(elem) {
// Get the Player Names 1 and 2
	let player1 = document.getElementById("player1").value;
	let player2 = document.getElementById("player2").value;
	if(elem.innerHTML != "") return;
	clickedBoxes.push(elem.id);
// Check if click count is 1, set the first player's turn to X 
    if(count == 1) {

		elem.innerHTML = xTurn;
// Set the click count 2, ceck if clicked box length is less than 4 because 3 is needed to win, then check the winner
		count = 2;
		if(clickedBoxes.length > 4)
			checkWinner();
// Change the next player's turn message
		document.getElementById("turnMessage").innerHTML = player2+"'S TURN";
    }
// Check if click count is and check same for next player, setting player2 to O
	else if(count == 2)
	{
	    elem.innerHTML = oTurn;
// Set the click count 1
        count = 1;
// Check if clicked box length > 4, then check the winner
		if(clickedBoxes.length > 4)
			checkWinner();
// Change the next player's turn message
		document.getElementById("turnMessage").innerHTML = player1+"'S TURN";
    }
}

// function resetGame(){
// 	document.getElementById("restartGame");
// }

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
			else if(document.getElementById(wincombinations[0]).innerHTML == oTurn && document.getElementById(wincombinations[1]).innerHTML == oTurn && document.getElementById(wincombinations[2]).innerHTML == oTurn)
			{

				document.getElementById("turnMessage").style.display = "none";
				document.getElementById("winMessage").style.display = "block";
				document.getElementById("winMessage").innerHTML = player2+" WINS";
				document.getElementById("playButton").style.pointerEvents = "auto";
				disableClicks();
				return false;
			}
			else
			{
// Set the message GAME DRAW and disable all box clicks
				document.getElementById("turnMessage").style.display = "none";
				document.getElementById("winMessage").style.display = "block";
				document.getElementById("winMessage").innerHTML = "GAME DRAW";
				document.getElementById("playButton").style.pointerEvents = "auto";
				disableClicks();
			}
		}
	}
	else
	{
// Check all winning positions combos
		for(var w = 0; w < winPositions.length; w++)
		{
// Get the winning como
			var wincombinations = winPositions[w].split(" ");
			if(document.getElementById(wincombinations[0]).innerHTML == xTurn && document.getElementById(wincombinations[1]).innerHTML == xTurn && document.getElementById(wincombinations[2]).innerHTML == xTurn)
			{
// Set Player 1 and 2 win message and disable all box clicks, also repetative
				document.getElementById("turnMessage").style.display = "none";
				document.getElementById("winMessage").style.display = "block";
				document.getElementById("winMessage").innerHTML = player1+" WINS";
				document.getElementById("playButton").style.pointerEvents = "auto";
				disableClicks();
				return false;
			}
			else if(document.getElementById(wincombinations[0]).innerHTML == oTurn && document.getElementById(wincombinations[1]).innerHTML == oTurn && document.getElementById(wincombinations[2]).innerHTML == oTurn)
			{

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
function stopClicks()
{
// Loop through all boxes
	for(var i = 0; i < allBoxes.length; i++)
	{
// i need tostop the mouse click on each boxes
		document.getElementById(allBoxes[i]).style.pointerEvents = "none";
	}
}
// call the stopClicks function to stop all the box clicks
stopClicks();
//need to make a fucntion that I can invoke later when the game is being played against computer

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
// Allow the PLAY NOW button
		// document.getElementById("playButton").innerHTML = "reset";
		// document.getElementById("playButton").style.pointerEvents = "none";
// Start the game
		startGame();
	}

});