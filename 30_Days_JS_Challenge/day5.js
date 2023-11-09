let myChoice = prompt("Do you want to play a game? (yes/no)");

if (myChoice === "yes") {
  console.log("Great choice!");
  let myName = prompt("Enter Your Name");
  console.log(
    `Welcome to the game, ${myName}! You are about to embark on a journey of a lifetime.`
  );

  let myGameInfoChoice = prompt(
    "Do you want to know more about the game? (yes/no)"
  );

  if (myGameInfoChoice === "yes") {
    let myGameInfo = `Characters:

      1. The Player Character (PC): A resilient survivor with fragmented memories and a deep, mysterious past.

      2. Ally: A survivor who holds crucial information about your past and the enigma of the wasteland.

      3. Antagonist: A sinister figure controlling a valuable resource and guarding the secrets of the wasteland.`;
    console.log(myGameInfo);
  }

  let myGameStart = prompt("Are you ready to start the game? (yes/no)");

  if (myGameStart === "yes") {
    console.log("Let's begin!");

    let myPuzzleChoice = prompt(
      `You find yourself in a pitch-black room, the air thick with tension. Two massive iron gates, one to your left and one to your right, are the only visible way out. A cryptic message is etched into the wall:

        "Two paths, two choices, but only one leads to freedom. Choose wisely, or forever be trapped in darkness."

        Which path do you choose? (left/right)`
    );

    if (myPuzzleChoice === "left") {
      console.log(`The Deadly Left Gate:

        As you confidently step through the left gate, you find yourself in a dimly lit chamber. The air is heavy with an unnatural chill, and an eerie silence surrounds you. There is no way back, and your only option is to move forward.
        
        The chamber gradually grows darker, and you begin to feel an unsettling presence. Panic grips your heart as you realize that you are not alone. Shadowy figures start to emerge from the darkness, and their mournful whispers fill the air. You cannot discern their faces or intentions, but an overwhelming dread washes over you.
        
        Desperate to escape, you try to backtrack, but the left gate has vanished, leaving you trapped in this sinister realm. The ghostly figures draw nearer, and their chilling hands reach out for you. In your final moments, you realize that you have chosen a path that leads to a grim and inescapable fate.
        
        Your journey through the left gate ends in a chilling demise, a stark reminder that not all paths lead to salvation. Sometimes, the choices we make in life can have fatal consequences, and in this dark chamber, there is no way to change your destiny.`);
      console.log("Game Over!");
    } else if (myPuzzleChoice === "right") {
      console.log(`What Lies Ahead:
        You enter a corridor shrouded in darkness. You hear faint, unsettling whispers from both directions. The corridor appears endless, and there's no turning back.`);
      
      let mySecondStepChoice = prompt("Still Want To Go Ahead? (yes/no)");

      if (mySecondStepChoice === "no") {
        console.log("Game Over!");
      } else if (mySecondStepChoice === "yes") {
        let myThirdStep = `The Mirror Room
              As you proceed, you suddenly find yourself in a mirrored room, with countless reflections of yourself staring back. The walls are covered in cryptic symbols, and a voice echoes through the room, saying, "To move forward, find your true reflection."`;

        console.log(myThirdStep);

        let myThirdStepChoice = prompt(
          "Do you want to look for your true reflection? (yes/no)"
        );

        if (myThirdStepChoice === "yes") {
          let myLastStep = prompt(`If you could possess a superhuman ability, which would you pick?

                  A) Super-speed
                  B) Telekinesis, the power to move objects with your mind
                
                Choose A or B`);
          
          let myCap = myLastStep.toUpperCase();

          if (myCap === "A") {
            console.log(
              "You chose super-speed!, you are trapped in a time loop, and your journey ends here."
            );
          } else if (myCap === "B") {
            console.log(
              "You chose telekinesis!, you are trapped in a time loop, and your journey ends here."
            );
          }
        }
      }
    }
  }
} else {
  console.log("Good luck!");
}
