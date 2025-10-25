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
    console.log(i);
  }
}
