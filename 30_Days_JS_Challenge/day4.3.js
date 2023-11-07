let myChoice = prompt('Rock, Paper, or Scissors?').toLowerCase();

function computerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

const compChoice = computerChoice();

if (myChoice === compChoice) {
    console.log("It's a tie!");
} else if (
    (myChoice === 'rock' && compChoice === 'scissors') ||
    (myChoice === 'paper' && compChoice === 'rock') ||
    (myChoice === 'scissors' && compChoice === 'paper')
) {
    console.log(`You win! Computer chose ${compChoice}.`);
} else {
    console.log(`You lose! Computer chose ${compChoice}.`);
}
