//globally scoped variable
const dog = "Ragnar";
// console.log(dog);

if (2 + 2 === 4) {
  const dog = "Leonidas";
  //   console.log("inside the if statement", dog);
}
//create a global variable so everyone can use
let total;
//funcional scoped
const add = (a, b) => {
  total = a + b;
  //   console.log("total inside the function", total);
  return total;
};
//calling the function
add(2, 3);
// console.log("total outside the function", total);

//*******************Hoisting *************/
// console.log(pizza);
var pizza = "pineapple";
subtract(10, 5);

function subtract(a, b) {
  const difference = a - b;
  //   console.log("difference inside the function", difference);
  return difference;
}

const multiply = (a, b) => {
  const total = a * b;
  //   console.log("total inside the arrow function", total);
  return total;
};
multiply(2, 6);

//***********copies **********/
const num1 = 10;
let num2 = num1;
num2 = 22;

const arr1 = [1, 2, 3, [4, 5, 6]];
//spread operator is ... and is a 'deep' copy only on one level
const arr2 = [...arr1];
//true deep copy is with JSON parse and JSON stringigy
const arr3 = JSON.parse(JSON.stringify(arr1));
//structured clone
const arr4 = structuredClone(arr1);
arr4[3].push(7);
// console.log({ arr1, arr2, arr3, arr4 });

// asyncronous methods with JS
//syntax for setTimeout is the callback to execute and time in milliseconds when to execute

const timerElement = document.querySelector("#timer");
const messageDivElement = document.querySelector("#message");
const startBtnElement = document.querySelector(".start-btn");
const stopBtnElement = document.getElementById("stop-btn");
const resetBtnElement = document.getElementById("reset-btn");
const closeMessageElement = document.getElementById("close-message");
let number = 0;
let intervalId2;
setTimeout(() => {
  //   console.log("hello");
  //   timerElement.innerText = "Hello";
}, 3000);
//setInterval
// const intervalId = setInterval(() => {
//   console.log("world", number);
//   timerElement.innerText = number;
//   if (number === 5) {
//     //stop the interval
//     clearInterval(intervalId);
//   } else if (number === 3) {
//     console.log("hey thats my lucky number");
//     luckyDivElement.innerText = "hey thats my lucky number";
//     //after one second, erase the text
//     setTimeout(() => {
//       luckyDivElement.innerText = "";
//     }, 1000);
//   }
//   number++;
// }, 1000);

//event listeners
startBtnElement.addEventListener("click", () => {
  intervalId2 = setInterval(() => {
    number++;
    timerElement.innerText = number;
    //stops the timer at 10
    if (number >= 10) {
      clearInterval(intervalId2);
      messageDivElement.innerText = "Boom goes the dynamite";
    } else if (number === 3) {
      messageDivElement.innerHTML = `
        <h3 id="message">Hey thats my lucky number</h3>
`;
      setTimeout(() => {
        messageDivElement.innerText = "";
      }, 4000);
    }
  }, 1000);
});

stopBtnElement.addEventListener("click", () => {
  clearInterval(intervalId2);
});
resetBtnElement.addEventListener("click", () => {
  number = 0;
  timerElement.innerText = number;
});
closeMessageElement.addEventListener("click", () => {
  messageDivElement.innerText = "";
});
