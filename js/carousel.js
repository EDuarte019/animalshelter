const innerCarousel = document.getElementsByClassName("carousel-item");
const next = document.getElementsByClassName("next");
const prev = document.getElementsByClassName("prev");

const images = ["<img class='d-block w-100' src='./img/dog-shelter.jpg' alt='First slide'>","<img class='d-block w-100' src='./img/download.jpeg' alt='Second slide'>","<img class='d-block w-100' src='./img/puppy.jpg' alt='Third slide'>"];

let imageLength= images.length;

// Adding the function to go to the next slide

next.onclick = () =>{
    imageLength  = (imageLength<images.length) ? (imageLength=imageLength+1) : (imageLength=1);
    innerCarousel = images[imageLength-1];
} 

// Adding the function to go to the previous slide
prev.onclick = () =>{
    imageLength = (imageLength<images.length+1 && i>1)?(imageLength=imageLength-1):(imageLength=images.length);
    innerCarousel.innerHTML = images[imageLength-1];
} 