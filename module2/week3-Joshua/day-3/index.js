//*************basic callback example************
// function func1(callback) {
//   setTimeout(() => {
//     console.log("Hi");
//     callback();
//   }, 3000);
// }

// function func2() {
//   setTimeout(() => {
//     console.log("Goodbye!");
//   }, 100);
// }

// func1(func2);

const directions = [
  "Starting point: Ironhack Miami",
  "↑ Head east on SW 8th St/Carlos Arboleya toward SW 1st Avenue",
  "➔ Turn right onto S Miami Ave",
  "* Chipotle Mexican Grill 891 S Miami Ave, Miami",
];

function getDirections(step, callback, errorCallback) {
  const foundStep = directions[step];
  setTimeout(() => {
    if (!foundStep) {
      errorCallback("Instructions not found.");
    } else {
      callback(foundStep);
    }
  }, 500);
}

// // **************** Callback Hell **************
// getDirections(
//   0,
//   (step1) => {
//     console.log(step1);
//     getDirections(
//       1,
//       (step2) => {
//         console.log(step2);
//         getDirections(
//           2,
//           (step3) => {
//             console.log(step3);
//             getDirections(
//               3,
//               (step4) => {
//                 console.log(step4);
//               },
//               (err) => {
//                 console.log(err);
//               }
//             );
//           },
//           (err) => {
//             console.log(err);
//           }
//         );
//       },
//       (err) => {
//         console.log(err);
//       }
//     );
//   },
//   (theError) => {
//     console.log(theError);
//   }
// );

// *********************** Promises ******************
//creating a promise
const ourPromise = new Promise((resolve, reject) => {
  const ourSecretData = "Ragnar sleeps more than he is awake";
  if (2 + 2 === 4) {
    resolve(ourSecretData);
  } else {
    reject("Sorry you dont have access");
  }
});
const ourPromise2 = new Promise((resolve, reject) => {
  const ourSecretData = "This is the second promise....";
  if (2 + 2 === 4) {
    resolve(ourSecretData);
  } else {
    reject("Error Error Error");
  }
});
//consuming a promise
// with the .then() and .catch() method
// ourPromise
//   .then((data) => {
//     console.log(data);
//     return ourPromise2;
//   })
//   .then((data2) => {
//     console.log(data2);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("this happens always");
//   });

//with async and await
//syntax for an arrow function
// const handleOurPromises = async()=>{}
async function handleOurPromises() {
  try {
    const response1 = await ourPromise;
    const response2 = await ourPromise2;
    console.log({ response1, response2 });
  } catch (error) {
    console.log(error);
  } finally {
    console.log("hello from the finally block");
  }
}
//make sure to call the function
// handleOurPromises();

//************** Promise.all() **********/
// Promise.all([ourPromise, ourPromise2])
//   .then((responseToPromiseAll) => {
//     console.log(responseToPromiseAll);
//   })
//   .catch((err) => console.log(err));

// using an API with fetch
fetch("https://rickandmortyapi.com/api/character")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    const chars = data.results;
    chars.forEach((oneChar) => {
      console.log(oneChar.name);
    });
  })
  .catch((err) => console.log(err));
