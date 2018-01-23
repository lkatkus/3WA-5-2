

    // CAROUSEL SELECTOR
    var carousel = document.getElementById("carousel");
    var carouselContainer = document.getElementById("carousel-container");

    // BUTTON SELECTORS
    var btnToggle = document.getElementById("slider-toggle");
    var btnPrevious = document.getElementById("slider-previous");
    var btnNext = document.getElementById("slider-next");
    var btnRandom = document.getElementById("slider-random");

    // BUTTON EVENT LISTENER
    btnToggle.addEventListener("click", toggle);
    btnPrevious.addEventListener("click", previous);
    btnNext.addEventListener("click", next);
    btnRandom.addEventListener("click", random);

    function toggle(){
        console.log("toggle");
        carouselContainer.classList.toggle("d-none");
    }

    function previous(){

            let carouselItems = carouselContainer.querySelectorAll(".carousel-item");
            let itemActive = carouselContainer.querySelector(".carousel-item.active");

            let itemCurrentActive;
            let itemNextActive;

            for(let i = 0; i < carouselItems.length; i++){
                if(carouselItems[i] == itemActive){
                    itemCurrentActive = i;
                }
            }

            if(itemCurrentActive === 0){
                itemNextActive = carouselItems.length-1;
            }else{
                itemNextActive = itemCurrentActive -1;
            }

            carouselItems[itemCurrentActive].classList.remove("active");
            carouselItems[itemNextActive].classList.add("active");

            center(itemNextActive);
    }

    function next(){

        let carouselItems = carouselContainer.querySelectorAll(".carousel-item");
        let itemActive = carouselContainer.querySelector(".carousel-item.active");

        let itemCurrentActive;
        let itemNextActive;

        for(let i = 0; i < carouselItems.length; i++){
            if(carouselItems[i] == itemActive){
                itemCurrentActive = i;
            }
        }

        if(itemCurrentActive == carouselItems.length-1){
            itemNextActive = 0;
        }else{
            itemNextActive = itemCurrentActive + 1;
        }

        carouselItems[itemCurrentActive].classList.remove("active");
        carouselItems[itemNextActive].classList.add("active");

        center(itemNextActive);

    }

    function random(){

        // REMOVING ACTIVE FROM CURRENT
        let itemActive = carouselContainer.querySelector(".carousel-item.active");
        if(itemActive){
            itemActive.classList.remove("active");
        }else{
            console.log("NO ACTIVE");
        }

        // ADD RANDOM ACTIVE
        let carouselItems = carouselContainer.querySelectorAll(".carousel-item");
        let rand = Math.floor(Math.random() * carouselItems.length);
        console.log(rand);
        carouselItems[rand].classList.add("active");

        center(rand);

    }

    function center(active){

        // GET MAIN CONTAINER CENTER
        let containerCenter = carousel.getBoundingClientRect().width/2;

        // GET IMAGE OFFSET
        let carouselItems = carouselContainer.querySelectorAll(".carousel-item");
        let containerOffset = (carouselContainer.getBoundingClientRect()).left;

        let imgLeft = (carouselItems[active].getBoundingClientRect()).left;
        let imgWidth = (carouselItems[active].getBoundingClientRect()).width/2;

        let x = containerCenter - (imgLeft + imgWidth - containerOffset);

        if(x < 0){
            x = -x;
        }

        console.log("CONTAINER OFFSET " + containerOffset);
        console.log("IMG LEFT " + imgLeft);
        console.log("X " + x);

        carouselContainer.style.left = x + "px";
    }

center(1);
