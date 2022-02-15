// const form = document.querySelector("form");
// console.log(form);

// const checkFirstName = (firstName, lastName) => {
//   if (firstName.value.length < 2) {
//     window.alert(`Your ${firstName.name} needs to be greater than 1 character`);
//     return false;
//   }
//   if (lastName.value.length < 2) {
//     window.alert(`Your ${lastName.name} needs to be greater than 1 character`);
//     return false;
//   }
//   return true;
// };

// // const checkPassword = (password)=>{
// //     const myRegex =
// // }
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const firstName = document.querySelector(".firstName");
//   const lastName = document.querySelector(".lastName");
//   // const password = document.querySelector(".password");

//   if (checkFirstName(firstName, lastName)) {
//     //send stuff to database
//     const userData = {
//       firstName: firstName.value,
//       lastName: lastName.value,
//     };
//     console.log(userData);
//   }
//   //   window.alert("Your form needs to be fixed");
//   console.log(firstName);
// });

const url = "https://pokeapi.co/api/v2/pokemon/ditto";
//FETCH
// lets you access apis
const pokemon = fetch(url).then();
console.log(pokemon);

// GET - gets info
// POST - send info
// PATCH updates something
// DELETE - deletes something

// HTTP methods
// Create Read Update Delete (CRUD)
