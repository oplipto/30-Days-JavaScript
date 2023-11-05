let myFun = (num1, num2) => {
    console.log(num1 + num2);
    return;
}

// myFun(10,20)

let myFun2 = (num1, num2) => {
    console.log(num1 * num2);
    return;
}

// myFun2(20,20)

let myFun3 = (num1, num2) => {
    console.log(Math.max(num1, num2));
    return;
}

// myFun3(20,40)

let myFun4 = (num1, num2) => {
    console.log(Math.min(num1, num2));
    return;
}

// myFun4(12,45)

let myOddOrEven = (num) => {
  if (num % 2 == 0) {
    console.log('Even');
  } else {
    console.log('Odd');
  }
}

// myOddOrEven(10)

let myCheck = (num1, num2) => {
 if (num1 === num2) {
   console.log('Equal');
 } else {
   console.log('Not Equal');
 }
}

// myCheck(10, 20)

let myArea = (length, width) => {
  if (length <= 0 || width <= 0) {
    console.log('Please enter a valid number');
  } else {
    console.log(length * width);
  }
}

// myArea(20, 20)

let mycircle = (radius) => {
  if (radius <= 0) {
    console.log('Please enter a valid number');
  } else {
    console.log(Math.PI * (radius ** radius));
  }
}

// mycircle(10)

let myReverseString;

myReverseString = (str) => {
  str = str.split('').reverse().join('')
  console.log(str);
}

// myReverseString('hola')



