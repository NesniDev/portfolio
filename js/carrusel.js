// function App(){}
//     window.onload = function(event){
//         var app = new App();
//         window.app = app;
//     }

//     App.prototype.processingButton = function(event){
//         const btn = event.currentTarget;
//         const carruselList = event.currentTarget.parentNode;
//         const track = event.currentTarget.parentNode.querySelector("#track");
//         const carrusel = track.querySelectorAll(".carrusel");

//         const carruselWidth = carrusel[0].offsetWidth;

//         const trackWidth = track.offsetWidth;
//         const listWidth = carruselList.offsetWidth;

//         track.style.left == "" ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0,-2) * -1)
        
//         btn.dataset.button == "button-prev" ? prevAction(leftPosition, carruselWidth, track) : nextAction(leftPosition, trackWidth, listWidth, carruselWidth, track);
//         // if( btn.dataset.button == "button-prev"){

//         //     prevAction(leftPosition, carruselWidth, track);
            
//         // }
//         // if( btn.dataset.button == "button-next"){

            
//         //     nextAction(leftPosition, trackWidth, listWidth, carruselWidth, track)
            
//         // }

//     }

//     let prevAction = (leftPosition, carruselWidth, track) => {
        
//         if(leftPosition > 0){
//             track.style.left = `${-1 * (leftPosition - carruselWidth)}px`;
//         }
//     }
//     let nextAction = (leftPosition, trackWidth, listWidth, carruselWidth, track) => {
        
//         if(leftPosition < (trackWidth - listWidth)){
//             track.style.left = `${-1 * (leftPosition + carruselWidth)}px`;
//         }
//     }


    // document.addEventListener("DOMContentLoaded",()=>{
    
//     const Elementcarrusel = document.querySelectorAll(".carousel")
//     M.Carousel.init(Elementcarrusel, {
//         duration: 150,
//         dist: -80, //animacion distancia
//         shift: 5,
//         padding: 5,
//         numVisible: 3,
//         noWrap: false,
//         fullWidth: true

//     })
//     setTimeout(()=>{
//         M.Carousel.getInstance(carouselElem[0]).next();
//      },3000);

// })


// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

// function showSlides(n) {
//     let i;
//     let slides = document.getElementsByClassName("img_carrusel_cont");
//     let dots = document.getElementsByClassName("dot");

//     if (n > slides.length) { slideIndex = 1 };
//     if (n < 1) { slideIndex = slides.length };

//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }

//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }

//     slides[slideIndex - 1].style.display = "block";
//     dots[slideIndex - 1].className += " active";
// }

(function(){
    const sliders = [...document.querySelectorAll(".carrusel_body")]
    const arrowNext = document.querySelector("#next")
    const arrowBefore = document.querySelector("#before")

    let value;

    arrowNext.addEventListener("click", ()=>changePosition(1))
    arrowBefore.addEventListener("click", ()=>changePosition(-1))

    function changePosition(change){
        const currentElement = Number(document.querySelector(".carrusel_body-show").dataset.id)
        
        value = currentElement;
        value+= change;

        console.log(sliders.length);

        if(value === 0 || value == sliders.length+1){
            value = value === 0 ? sliders.length : 1;
        }

        sliders[currentElement-1].classList.toggle("carrusel_body-show")
        sliders[value-1].classList.toggle("carrusel_body-show")

    }
})()
