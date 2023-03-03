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
let coffeeImage = document.getElementById("coffeeImage");

// attach the openlightbox function to the image we want to display
// by assigning it to the "onclick" eventhandler property
coffeeImage.onclick = openLightbox;

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
