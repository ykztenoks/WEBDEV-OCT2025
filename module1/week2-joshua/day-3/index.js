//***************if / else **************/
const age = 20;
// if (age > 21) {
//   console.log("wow you are able to legally drink a beer");
// } else if (age === 21) {
//   console.log("wow you are just barely able to drink");
// } else {
//   console.log("you are still a baby and cant drink legally");
// }

//***************switch *************/

const charName = "Cersei";

// switch (charName) {
//   case "Jon":
//     console.log("house Targaryen");
//     break;
//   case "Aria":
//     console.log("you are house Stark");
//     break;
//   case "Tyrion":
//   case "Jamie":
//   case "Cersei":
//     console.log("greedy Lannisters");
//     break;
//   default:
//     console.log("you are not so important");
// }

//*****************for loop ************/
//syntax needs three things
// 1. where to start (let i=0)
// 2. where to stop (i < 25)
// 3. how much to increment i by each round (i++)

//for loop that counts to 25
for (let i = 1; i <= 25; i += 1) {
  //   console.log("hello", i);
}
//for loop in reverse counting from 50 by 2s
for (let i = 50; i >= 0; i -= 1) {
  if (i % 2 === 0) {
    // console.log(i);
  }
}

//FIZZ BUZZ Challenge
//write a for loop that counts from 1 to 100
// if the number is divisible by 3 .... then console.log('Fizz')
// if the number is divisible by 5 .... then console.log('Buzz')
// if the number is divisible by 3 and 5 .... then console.log('Fizz Buzz')
//else you just log the number

// for (let i = 1; i <= 50; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("Fizz Buzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

//****************while loop ***********/
// let counter = 11;
// while (counter <= 10) {
//   console.log("while loop", counter);
//   counter++;
// }

//***************do while loop */
// let number = 0;
// do {
//   console.log("inside the do while", number);
//   number++;
// } while (number < 15);

//for loop that counts to 20
// if the number is 10, 11, or 12 then skip those numbers
// if the number is 18 the break out the loop
for (let i = 0; i <= 20; i++) {
  if (i === 10 || i === 11 || i === 12) {
    continue;
  } else if (i === 19) {
    break;
  } else {
    console.log(i);
  }
}
