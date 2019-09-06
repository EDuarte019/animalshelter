
export default (params) => {
    
    const innerCarousel = document.getElementsByClassName("innerCarousel");
    const next = document.getElementsByClassName("next");
    const prev = document.getElementsByClassName("prev");
    
    const images = [document.getElementsByClassName("item-1"),document.getElementsByClassName("item-2"),document.getElementsByClassName("item-3")];
    
    let i= images.length;
    
    // Adding the function to go to the next slide
    
    next.onclick = () =>{
        i = (i<images.length)?(i=i+1):(i=1);
        innerCarousel = images[i-1];
    } 
    
    // Adding the function to go to the previous slide
    next.onclick = () =>{
        i = (i<images.length+1 && i>1)?(i=i-1):(i=images.length);
        innerCarousel = images[i-1];
    } 
};
