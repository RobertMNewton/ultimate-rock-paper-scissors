function computerChoice () {
    var  i = Math.random();

    if (i < 1 / 3) {
        return "rock";
    } else if (i > 1 / 3 && i < 2 / 3) {
        return "paper";
    } else {
        return "scissors";
    }

}

function playerChoice() {
    var selection = prompt("Pick rock, paper or scissors.").toLowerCase();

    return selection;
} 

function playRound(playerSelection, computerSelection) {
    var win = ["rockscissors", "paperrock", "scissorspaper"];

    if (playerSelection == computerSelection) {
        return "It's a tie";
    }
    
    var i;
    for (i = 0; i < win.length; i++) {
        if  (playerSelection + computerSelection == win[i]) {
            return "The player has won";
        } else if (computerSelection + playerSelection == win[i]) {
            return "The computer has won";
        }
    }

}

var i;
for (i = 0; i < 5; i++) {
    alert(playRound(playerChoice(), computerChoice()));
}