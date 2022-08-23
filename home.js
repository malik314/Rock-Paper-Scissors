function getComputerChoice() {
    const options = ['Rock', 'Paper', 'Scissors'];
    const rand = Math.floor(Math.random() * options.length);
    return options[rand];
}

function getPlayerChoice(options) {
    options = prompt("Enter a choice: Rock, Paper, or Scissors");
    return options;
}

function round(playerSelection, computerSelection) {
    console.log('Player Choice: ', playerSelection);
    console.log('Computer Choice: ', computerSelection);

    if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        console.log('Computer Wins!');
    } 
    else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        console.log('Player Wins!');
    }
    else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        console.log('Player Wins!');
    }
    else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        console.log('Computer Wins!');
    }
    else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        console.log('Computer Wins!');
    }
    else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        console.log('Player Wins!');
    }
    else if (playerSelection === computerSelection ) {
        console.log('Tie!');
    }
}

let player = getPlayerChoice();
let ai = getComputerChoice();
round(player, ai);