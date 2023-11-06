let myAsk = prompt('Enter 1 for Addition and 2 for Subtraction 3 for Multiplication and 4 for Division')

myChoice = parseInt(myAsk)

if (myChoice == 1) {
    let num1 = prompt('Enter first number')
    let num2 = prompt('Enter second number')
    let num3 = parseInt(num1)
    let num4 = parseInt(num2)
    let sum = num3 + num4
   console.log(`The addition is ${sum}`);
}

else if (myChoice == 2) {
    let num1 = prompt('Enter first number')
    let num2 = prompt('Enter second number')
    let num3 = parseInt(num1)
    let num4 = parseInt(num2)
    let sub = num3 - num4
    console.log(`The subtraction is ${sub}`);
}

else if (myChoice == 3) {
    let num1 = prompt('Enter first number')
    let num2 = prompt('Enter second number')
    let num3 = parseInt(num1)
    let num4 = parseInt(num2)
    let mul = num3 * num4
  console.log(`The multiplication is ${mul}`); 
}

else if (myChoice == 4) {
    let num1 = prompt('Enter first number')
    let num2 = prompt('Enter second number')
    let num3 = parseInt(num1)
    let num4 = parseInt(num2)
    let div = num3 / num4
  console.log(`The division is ${div}`);
} else {
    console.log('Invalid Input');
}