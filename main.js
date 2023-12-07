//Get all elements with the "column" class name
let elements = document.getElementsByClassName("column");

//Declare a loop variable
let i = 0;

//Full-width images
function fullWidth() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "100%";
  }
}

//Two images side by side
function twoImagesSideBySide() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "50%";
  }
}

//Four images side by side
function fourImagesSideBySide() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "25%";
  }
}
