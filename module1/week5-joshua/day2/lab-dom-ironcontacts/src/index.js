// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");

// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);

// Get the element from the spliced array
const randomContact = splicedArr[0];

const exampleRow = document.createElement("tr");
exampleRow.innerHTML = `
  <td>
    <img src="${randomContact.pictureUrl}" />
  </td>
  <td> ${randomContact.name} </td>
  <td> ${randomContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

tableBody.appendChild(exampleRow);
//this is for the random first celeb
//delete button
const deleteBtn = exampleRow.querySelector(".btn-delete");
deleteBtn.addEventListener("click", () => {
  console.log("delete clicked");
  // ourRow.remove();
  exampleRow.style.display = "none";
});
//like button
const likeBtn = exampleRow.querySelector(".btn-like");
likeBtn.addEventListener("click", () => {
  console.log("like clicked");
  likeBtn.classList.toggle("selected");
});

const firstThree = contacts.splice(0, 3);
firstThree.forEach((oneCeleb) => {
  const ourRow = document.createElement("tr");
  ourRow.innerHTML = `
  <td>
    <img src="${oneCeleb.pictureUrl}" />
  </td>
  <td> ${oneCeleb.name} </td>
  <td> ${oneCeleb.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete blah pizza">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

  tableBody.appendChild(ourRow);

  //delete button
  const deleteBtn = ourRow.querySelector(".btn-delete");
  deleteBtn.addEventListener("click", () => {
    console.log("delete clicked");
    // ourRow.remove();
    ourRow.style.display = "none";
  });
  //like button
  const likeBtn = ourRow.querySelector(".btn-like");
  likeBtn.addEventListener("click", () => {
    console.log("like clicked");
    likeBtn.classList.toggle("selected");
  });
});

// Bonus: ITERATION 4 - Add Random Contacts
buttonAddRandom.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * contacts.length);
  const randomPerson = contacts[randomIndex];
  //cut the person from the array so not to duplicate
  contacts.splice(randomIndex, 1);

  //add the random person to the DOM
  const exampleRow = document.createElement("tr");
  exampleRow.innerHTML = `
  <td>
    <img src="${randomPerson.pictureUrl}" />
  </td>
  <td> ${randomPerson.name} </td>
  <td> ${randomPerson.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

  tableBody.appendChild(exampleRow);

  //delete button
  const deleteBtn = exampleRow.querySelector(".btn-delete");
  deleteBtn.addEventListener("click", () => {
    console.log("delete clicked");
    // ourRow.remove();
    exampleRow.style.display = "none";
  });
  //like button
  const likeBtn = exampleRow.querySelector(".btn-like");
  likeBtn.addEventListener("click", () => {
    console.log("like clicked");
    likeBtn.classList.toggle("selected");
  });
});
