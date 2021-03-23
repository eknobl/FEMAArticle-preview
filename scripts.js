
"use strict"
// VARIABLES
const mainButton = document.querySelector(".mainButton");
const secondContainer = document.querySelector(".secondContainer");
const secondContainerArrow = document.querySelector(".secondContainerArrow");

mainButton.addEventListener("click", function() { // AGREGA EVENT LISTENER A CADA BOTON
  secondContainer.classList.remove("hidden"); 
  secondContainerArrow.classList.remove("hidden");// ELIMINA LA CLASE "HIDDEN" DE MODAL
});

let closingWindow = function () { // See cheatsheets: DRY Function 1
    secondContainer.classList.add("hidden"); 
    secondContainerArrow.classList.add("hidden"); 
  }

document.addEventListener("keydown", function (e) {
    console.log(e.key);
    // IF e.key = "ESCAPE" AND (NOT) MODAL CONTAINS CLASS "HIDDEN" { THEN
    if (e.key === "Escape" && !secondContainer.classList.contains("hidden")) {
      closingWindow();
    } 
});

/*



closeModal.addEventListener("click", closingWindow); // See cheatsheets: DRY Function 1
overlay.addEventListener("click", closingWindow);

//WHEN FUNCTIONS HAVE (), IS BECAUSE THEY ARE GOING TO BE CALLED INMMEDIATLY




*/


