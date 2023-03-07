// obtain lightbox element references

let lightboxContainer = document.getElementById("lightboxContainer");
let lightboxBackground = document.getElementById("lightboxBackground");
let lightbox = document.getElementById("lightbox");
let lightboxCloser = document.getElementById("lightboxCloser");

// create a function that makes the lightbox appear
// and set the light box image src

function openLightbox() {
    lightboxContainer.classList.add("display");
    lightbox.src = this.src;
}

// get references to the image to display in the lightbox

// let coffeeImage = document.getElementById("coffeeImage");
// let coffeeImage2 = document.getElementById("coffeeImage2");
// let coffeeImage3 = document.getElementById("coffeeImage3");
// let coffeeImage4 = document.getElementById("coffeeImage4");
// let coffeeImage5 = document.getElementById("coffeeImage5");
// let coffeeImage6 = document.getElementById("coffeeImage6");
// let coffeeImage7 = document.getElementById("coffeeImage7");
// let coffeeImage8 = document.getElementById("coffeeImage8");
// let coffeeImage9 = document.getElementById("coffeeImage9");
// let coffeeImage10 = document.getElementById("coffeeImage10");
// let coffeeImage11 = document.getElementById("coffeeImage11");

// gallery group

 let imgs = document.getElementsByClassName("imgs");

//  create loop

for(let i = 0; i < imgs.length; i++) {
    let img = imgs[i];
    img.onclick = openLightbox;
}

// attach the openlightbox function to the image we want to display
// by assigning it to the "onclick" eventhandler property

// coffeeImage.onclick = openLightbox;
// coffeeImage2.onclick = openLightbox;
// coffeeImage3.onclick = openLightbox;
// coffeeImage4.onclick = openLightbox;
// coffeeImage5.onclick = openLightbox;
// coffeeImage6.onclick = openLightbox;
// coffeeImage7.onclick = openLightbox;
// coffeeImage8.onclick = openLightbox;
// coffeeImage9.onclick = openLightbox;
// coffeeImage10.onclick = openLightbox;
// coffeeImage11.onclick = openLightbox;

// create a function that makes the lightbox disappear
// and clears the lightbox img src

function closeLightbox() {
    lightboxContainer.classList.remove("display");
    lightbox.src = "";
}

// attach the closerlightbox function to each closer elements
// "onclick" eventhandler property; this will execute
// closerlightbox() whenever the element is clicked

lightboxBackground.onclick = closeLightbox;
lightboxCloser.onclick = closeLightbox;

// get references to all elements with "closer" class
let closers = document.getElementsByClassName("closer");
// loop through all closer elements and attach a click function
for (let i = 0; i < closers.item.length; i++) {
    let closer = closers[i];
    closer.onclick = closeLightbox;
}
