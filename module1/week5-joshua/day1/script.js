//this grabs the h1 element from the html file via the element 'h1'
const h1Element = document.querySelector("h1");
// const likeButtonElement = document.getElementById("pet-like");
// const deleteButtonElement = document.querySelector("#pet-delete");
const addPetButtonElement = document.getElementById("add-pet");
//targeting with the query selector an 'ID'
// const petsContanierElement = document.querySelector("#pets-container");
//targetting with the .getElementById
const petsContanierElement = document.getElementById("pets-container");
// const petCardElement = document.querySelector(".pet-card");
//this changes the text of the h1 to whatever you want
h1Element.innerText = "Hello Yall";
//this will change the style, the color of the text
h1Element.style.color = "rgba(102, 10, 10, 1)";

// petsContainerElement.style.backgroundColor = "blue";
// petCardElement.style.backgroundColor = "green";

const pets = [
  { name: "Ragnar", age: 5, image: "./assets/ragnar.png" },
  { name: "Reaper", age: 12, image: "./assets/reaper.png" },
  { name: "Harry", age: 8, image: "./assets/harry.png" },
];

//********Event listeners ************/
//add an event listener to the button we grabbed above
//the add event listener takes two arguments... the type and a callback function
// likeButtonElement.addEventListener("click", () => {
//   console.log("clicked");
//   //this adds the class once
//   //   petCardElement.classList.add("liked");
//   //this removes a class once
//   // petCardElement.classList.remove('liked')
//   //the toggle checks if the class is there already, if so... it removes it
//   // if the class is not there, then it will add it
//   petCardElement.classList.toggle("liked");
// });
// deleteButtonElement.addEventListener("click", () => {
//   console.log("delete clicked");
//   //the .remove will delete the code on the browser
//   //   petCardElement.remove();
//   //the .display = 'none'
//   petCardElement.style.display = "none";
// });

addPetButtonElement.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * pets.length);
  console.log("add pet clicked", randomIndex);
  const ourNewArticle = document.createElement("article");
  ourNewArticle.classList.add("pet-card");
  ourNewArticle.innerHTML = ` <img src=${pets[randomIndex].image} alt=${pets[randomIndex].name}/>
        <h3>Name: ${pets[randomIndex].name} </h3>
        <h3>Age: ${pets[randomIndex].age} </h3>
        <button id="pet-like">Liked</button>
        <button id="pet-delete-btn">Delete</button>`;
  //this actually adds the new element to the DOM
  petsContanierElement.appendChild(ourNewArticle);

  //after adding the new pet to the DOM we remove them from the array with the .splice()
  const removedPet = pets.splice(randomIndex, 1);

  //after removing the pet from the array with the .splice(), we add the event listeners to each pet
  const likeBtn = ourNewArticle.querySelector("#pet-like");
  likeBtn.addEventListener("click", () => {
    console.log("liked");
    ourNewArticle.classList.toggle("liked");
  });
  //delete button
  const deleteBtn = ourNewArticle.querySelector("#pet-delete-btn");
  deleteBtn.addEventListener("click", () => {
    // console.log("hello ");
    //this just hides the article but doesnt delete it
    // ourNewArticle.style.display = "none";
    //this actually deletes the code from the browswer
    ourNewArticle.remove();
    pets.push(removedPet);
  });
});
