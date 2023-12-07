//Get all elements with the "column" class name
let elements = document.getElementsByClassName("column");

//Full-width images
function one() {
    for (i = 0; i < elements.length; i++) {
        elements[i].style.flex = "100%";
    }
}

//Two images side by side
function two() {
    for (i = 0; i < elements.length; i++) {
        elements[i].style.flex = "50%";
    }
}

//Four images side by side
function four() {
    for (i = 0; i < elements.length; i++) {
        elements[i].style.flex = "25%";
    }
}


var header = document.getElementById("myHeader");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}