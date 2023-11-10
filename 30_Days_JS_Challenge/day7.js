let myScore = 0;
let myQuizApp = prompt('Enter your name: ');
console.log(`Welcome to my quiz app ${myQuizApp}!, You have to answer 5 questions, Good luck!`);

let iAmReady = prompt('Are you ready?');

function askQuestion() { if (iAmReady === 'yes') {
    alert('Let\'s start!');

    let myQuestionOne = prompt(`Question: Which is the world's longest river?

    A) Nile
    B) Amazon
    C) Yangtze
    D) Mississippi
    `)

    if (myQuestionOne === 'A' || myQuestionOne === 'a') {
        alert('Correct!');
        myScore++;
        console.log(`Your score is ${myScore}`);
    } else {
        alert('Wrong!');
        console.log(`Your score is ${myScore}`);
    }

    let myQuestionTwo = prompt(`Question: What is the center of an atom called?

    A) Neutron
    B) Nucleus
    C) Proton
    D) Electron
    `)

    if (myQuestionTwo === 'B' || myQuestionTwo === 'b') {
        alert('Correct!');
        myScore++;
        console.log(`Your score is ${myScore}`);
    } else {
        alert('Wrong!');
        console.log(`Your score is ${myScore}`);
    }

    let myQuestionThree = prompt(`Question: Who is credited with painting the Mona Lisa?

    A) Leonardo da Vinci
    B) Michelangelo
    C) Vincent van Gogh
    D) Pablo Picasso
    `)

    if (myQuestionThree === 'A' || myQuestionThree === 'a') {
        alert('Correct!');
        myScore++;
        console.log(`Your score is ${myScore}`);

    } else {
        alert('Wrong!');
        console.log(`Your score is ${myScore}`);
    }

    let myQuestionFour = prompt(`Question: What is the value of π (pi) approximately equal to?

    A) 3.14
    B) 2.71
    C) 4.21
    D) 1.62
    `)

    if (myQuestionFour === 'A' || myQuestionFour === 'a') {
        alert('Correct!');
        myScore++;
        console.log(`Your score is ${myScore}`);
        
    } else {
        alert('Wrong!');
        console.log(`Your score is ${myScore}`);
    }

    let myQuestionFive = prompt(`ho wrote the play "Hamlet"?

    A) William Shakespeare
    B) Charles Dickens
    C) Jane Austen
    D) Mark Twain`)

    if (myQuestionFive = 'A' || myQuestionFive === 'a') {
        alert('Correct!');
        myScore++;
        console.log(`Your score is ${myScore}`);
        
    } else {
        alert('Wrong!');
        console.log(`Your score is ${myScore}`);
    }

    if (myScore === 5) {
        console.log('Congratulations! You got all answers correct!');
    } else if (myScore >= 3 && myScore <= 4) {
        console.log('Good job! You got most answers correct!');
    } else if (myScore === 0) {
        console.log('Well tried, try next time!');
    } else {
        console.log('You got some answers correct, keep trying!');
    }

    console.log(`Your final score is ${myScore}`);
   
} 
}

askQuestion();