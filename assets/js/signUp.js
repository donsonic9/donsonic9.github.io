
// JS perteneciente al login.html

let cssChange = document.getElementById("csslink");
let colorButton = document.getElementById("hero");

let counter = 0;

colorButton.addEventListener("click", ()=>{
  if (counter == 0) {
    cssChange.setAttribute("href", "assets/css/custom-2.css");
    counter = 1;
  } else if (counter == 1) {
    cssChange.setAttribute("href", "assets/css/custom-3.css");
    counter = 2;
  } else if (counter == 2) {
    cssChange.setAttribute("href", "assets/css/custom-4.css");
    counter = 3;
  } else if (counter == 3) {
    cssChange.setAttribute("href", "assets/css/custom-1.css");
    counter = 0;
  }
  
});