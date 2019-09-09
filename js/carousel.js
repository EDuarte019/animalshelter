const innerCarousel = document.getElementsByClassName("carousel-inner");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

const images = [document.getElementsByClassName("item-1"), document.getElementsByClassName("item-2"), document.getElementsByClassName("item-3")];

let imageLength= images.length;

// Adding the function to go to the next slide

next.onclick = () =>{
    imageLength  = (imageLength<images.length) ? (imageLength=imageLength+1) : (imageLength=1);
    innerCarousel.innerHTML = images[imageLength-1].classList.add("active");
    // console.log("next");
}




// Adding the function to go to the previous slide
prev.onclick = () =>{
    imageLength = (imageLength<images.length+1 && i>1)?(imageLength=imageLength-1):(imageLength=images.length);
    innerCarousel.innerHTML = images[imageLength-1];
    // console.log("prev")
} 