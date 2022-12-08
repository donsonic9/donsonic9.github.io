
// JS perteneciente al index.html

let cssChange = document.getElementById("csslink");
// let cssChangelo = document.getElementById("csslinklo");
let colorButton = document.getElementById("hero");
// let logButton = document.getElementById("herolo");

let counter = 0;

colorButton.addEventListener("click", ()=>{

  if (counter == 0) {
    cssChange.setAttribute("href", "assets/css/styles2.css");
    counter = 1;
  } else if (counter == 1) {
    cssChange.setAttribute("href", "assets/css/styles3.css");
    counter = 2;
  } else if (counter == 2) {
    cssChange.setAttribute("href", "assets/css/styles4.css");
    counter = 3;
  } else if (counter == 3) {
    cssChange.setAttribute("href", "assets/css/styles.css");
    counter = 0;
  }

  // console.log(counter);

});

// logButton.addEventListener("click", ()=>{

//   if (counter == 0) {
//     cssChangelo.setAttribute("href", "assets/css/login2.css");
//     counter = 1;
//   } else if (counter == 1) {
//     cssChangelo.setAttribute("href", "assets/css/login3.css");
//     counter = 2;
//   } else if (counter == 2) {
//     cssChangelo.setAttribute("href", "assets/css/login4.css");
//     counter = 3;
//   } else if (counter == 3) {
//     cssChangelo.setAttribute("href", "assets/css/login.css");
//     counter = 0;
//   }

//   // console.log(counter);

// });