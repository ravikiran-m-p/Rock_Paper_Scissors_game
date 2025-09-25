const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice(){
    return choices[Math.floor(Math.random() * choices.length)];
}

function getWinner(player, computer){
    if(player === computer) 
        return "It's a tie!";
    if(
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    )
        return "You win!";
    return "Computer wins!";
}

function playGame(playerChoice){
    const computerChoice = getComputerChoice();
    const result = getWinner(playerChoice, computerChoice);
    alert(`You chose ${playerChoice}.\nComputer chose ${computerChoice}.\n${result}`);
}

rockBtn.addEventListener('click', () => playGame('rock'));
paperBtn.addEventListener('click', () => playGame('paper'));
scissorsBtn.addEventListener('click', () => playGame('scissors'));
