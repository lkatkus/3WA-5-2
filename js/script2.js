// CAROUSEL SELECTOR
var carousel = document.getElementById("carousel");
var carouselViewport = document.getElementById("carousel-viewport");
var carouselContainer = document.getElementById("carousel-item-container");

// BUTTON SELECTORS
var btnToggle = document.getElementById("slider-toggle");
var btnPrevious = document.getElementById("slider-previous");
var btnNext = document.getElementById("slider-next");
var btnRandom = document.getElementById("slider-random");

var itemCurrentActive = 0;
var itemNextActive = 0;

// BUTTON EVENT LISTENER
btnToggle.addEventListener("click", toggle);
btnPrevious.addEventListener("click", previous);
btnNext.addEventListener("click", next);
btnRandom.addEventListener("click", random);

function toggle(){
    let x = carousel.querySelector("#carousel-viewport");
    x.classList.toggle("d-none");
}

function previous(){
    // GET ELEMENTS IN CONTAINER
    let carouselItems = carouselContainer.querySelectorAll(".carousel-item");

    // FIND CURRENT ACTIVE
    for(var i = 0, j = carouselItems.length; i < j; i++){
        if(carouselItems[i] == carouselContainer.querySelector(".carousel-item.active")){
            itemCurrentActive = i;
            break;
        }
    }

    // FIND NEXT ACTIVE
    if(itemCurrentActive == 0){
        itemNextActive = carouselItems.length-1;
    }else{
        itemNextActive = itemCurrentActive - 1;
    }

    // APPLY CLASS
    carouselItems[itemCurrentActive].classList.remove("active");
    carouselItems[itemNextActive].classList.add("active");

    center(itemNextActive);
}

function next(){
    // GET ELEMENTS IN CONTAINER
    let carouselItems = carouselContainer.querySelectorAll(".carousel-item");

    // FIND CURRENT ACTIVE
    for(var i = 0, j = carouselItems.length; i < j; i++){
        if(carouselItems[i] == carouselContainer.querySelector(".carousel-item.active")){
            itemCurrentActive = i;
            break;
        }
    }

    // FIND NEXT ACTIVE
    if(itemCurrentActive == carouselItems.length-1){
        itemNextActive = 0;
    }else{
        itemNextActive = itemCurrentActive + 1;
    }

    // APPLY CLASS
    carouselItems[itemCurrentActive].classList.remove("active");
    carouselItems[itemNextActive].classList.add("active");

    console.log(itemNextActive);
    center(itemNextActive);
}

function random(){


    // GET ELEMENTS IN CONTAINER
    let carouselItems = carouselContainer.querySelectorAll(".carousel-item");

    // GENERATE RANDOM BASED ON NUMBER OF ELEMENTS
    let random = Math.floor(Math.random()*carouselItems.length);

    // REMOVE CURRENT ACTIVE
    carouselContainer.querySelector(".carousel-item.active").classList.remove("active")

    // ADD RANDOM ACTIVE
    carouselItems[random].classList.add("active");

    center(random);
}

function center(active){
    // GET ELEMENTS IN CONTAINER
    let carouselItems = carouselContainer.querySelectorAll(".carousel-item");

    // FIND ACTIVE OFFSET
    let itemOffset = carouselItems[active].offsetLeft;

    // OFFSET ACTIVE
    carouselContainer.style.left = -itemOffset + "px";
}

function checkAspectRation(){

    // VIEWPORT ASPECT RATIO
    let viewportAspect = ((carouselContainer.getBoundingClientRect()).width) / ((carouselContainer.getBoundingClientRect()).height);

    // IMAGE ASPECT RATIO
        // GET ACTIVE IMAGE
        let activeImg = document.querySelector(".carousel-item.active > img");

        // GET IMAGE ASPECT RATIO
        let imgAspect = ((activeImg.getBoundingClientRect()).width) / ((activeImg.getBoundingClientRect()).height);

    // APPLY PORTRAIT OR LANDSCAPE MODE
    if(imgAspect > viewportAspect){
        console.log("HEIGHT");
        activeImg.classList.remove("imgLandscape");
        activeImg.classList.add("imgPortrait");
    }else{
        console.log("WIDTH");
        activeImg.classList.remove("imgPortrait");
        activeImg.classList.add("imgLandscape");
    }

}

// GLOBAL LISTENER
window.addEventListener('resize', function(){
    center(itemNextActive);
    checkAspectRation();
});
