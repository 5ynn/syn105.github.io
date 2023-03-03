// variables 
const arrow = document.getElementById("arrow");
const dropdownMenu = document.getElementById("dropdown");
const dropdownBtn = document.getElementById("btn");
const page = document.getElementById("page");


// function to make menu functional 
function toggleClass() {
    const dropdown = document.getElementById("dropdown");
    dropdown.classList.toggle("reveal");
    const arrow = document.getElementById("arrow");
    arrow.classList.toggle("arrow");
};
