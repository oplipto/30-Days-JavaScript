let myAttempts = 0;
let myMaxAttempts = 10;

let myRandom = Math.floor(Math.random() * 100);
while (myAttempts < myMaxAttempts) {

    let myNumber = parseInt(prompt("Guess a number between 1 and 100"));

    if (myNumber < myRandom) {
        console.log("You guessed too low!");
    } 
    
    else if (myNumber > myRandom) {
        console.log("You guessed too high!");
    } 
    
    else {
       console.log("You guessed right!");
       break;
    }
    myAttempts++;
}

if (myAttempts === myMaxAttempts) {
    console.log("You have reached the maximum number of attempts");
}