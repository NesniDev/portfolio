
// Detectar media querys - api para detectarlo
const checkbox = document.querySelector('#checkbox')
//

if(window.matchMedia('(prefers-color-scheme: dark)').matches){
    // console.log("")
    checkbox.setAttribute('checked', true)
}
//cambiar el modo osucro mediante el boton
//Permite cambiar el estilo de las propiedades o componentes del codigo
// document.body.style.setProperty('--cardGray', 'blue')

//funcion para cambiar el color
checkbox.addEventListener('change', function(event) {
    //si esta checkeada
    if(this.checked){
        
        document.body.classList.add('is-dark-mode')
        document.body.classList.remove('is-light-mode')
    }else{
        document.body.classList.add('is-light-mode')
        document.body.classList.remove('is-dark-mode')
    }
})

// animaciones de letras
const typed = new Typed(".typed", {
    // strings:[
        // "<i class='texto'>Gato</i>", 
        // "<i class='mascota'>perro</i>", 
        // "<i class='mascota'>loro</i>"],  
        stringsElement: '#cadena-texto', // ID del elemento que contiene cadenas de texto a mostrar.
        typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
        startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
        backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
        // smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
        shuffle: false, // Alterar el orden en el que escribe las palabras.
        backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
        loop: true, // Repetir el array de strings
        loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
        showCursor: true, // Mostrar cursor palpitanto
        cursorChar: '|', // Caracter para el cursor
        contentType: 'html', // 'html' o 'null' para texto sin formato
});

const typed2 = new Typed(".typed2", {
    // strings:[
        // "<i class='texto'>Gato</i>", 
        // "<i class='mascota'>perro</i>", 
        // "<i class='mascota'>loro</i>"],  
        stringsElement: '#cadena-texto-proyecto', // ID del elemento que contiene cadenas de texto a mostrar.
        typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
        startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
        backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
        // smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
        shuffle: false, // Alterar el orden en el que escribe las palabras.
        backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
        loop: true, // Repetir el array de strings
        loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
        showCursor: true, // Mostrar cursor palpitanto
        cursorChar: '|', // Caracter para el cursor
        contentType: 'html', // 'html' o 'null' para texto sin formato
});

const typed3 = new Typed(".typed3", {
    // strings:[
        // "<i class='texto'>Gato</i>", 
        // "<i class='mascota'>perro</i>", 
        // "<i class='mascota'>loro</i>"],  
        stringsElement: '#cadena-texto-habilidades', // ID del elemento que contiene cadenas de texto a mostrar.
        typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
        startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
        backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
        // smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
        shuffle: false, // Alterar el orden en el que escribe las palabras.
        backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
        loop: true, // Repetir el array de strings
        loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
        showCursor: true, // Mostrar cursor palpitanto
        cursorChar: '|', // Caracter para el cursor
        contentType: 'html', // 'html' o 'null' para texto sin formato
});
const typed4 = new Typed(".typed4", {
    // strings:[
        // "<i class='texto'>Gato</i>", 
        // "<i class='mascota'>perro</i>", 
        // "<i class='mascota'>loro</i>"],  
        stringsElement: '#cadena-texto-contacto', // ID del elemento que contiene cadenas de texto a mostrar.
        typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
        startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
        backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
        // smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
        shuffle: false, // Alterar el orden en el que escribe las palabras.
        backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
        loop: true, // Repetir el array de strings
        loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
        showCursor: true, // Mostrar cursor palpitanto
        cursorChar: '|', // Caracter para el cursor
        contentType: 'html', // 'html' o 'null' para texto sin formato
});
const typed5 = new Typed(".typed5", {
    strings:[
        "<i class='textoInfo'>Ingeniero de Sistemas</i>",
        "<i class='textoInfo'>Desarrollador Front-End</i>", 
        "<i class='textoInfo'>Especialista en Marketing Estratégico</i>",  
        "<i class='textoInfo'>Técnico en Sistemas</i>"],
        // stringsElement: '#cadena-desarrolloF', // ID del elemento que contiene cadenas de texto a mostrar.
        typeSpeed: 20, // Velocidad en mlisegundos para poner una letra,
        startDelay: 100, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
        backSpeed: 20, // Velocidad en milisegundos para borrrar una letra,
        smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
        shuffle: false, // Alterar el orden en el que escribe las palabras.
        backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
        loop: true, // Repetir el array de strings
        loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
        showCursor: true, // Mostrar cursor palpitanto
        cursorChar: '|', // Caracter para el cursor
        contentType: 'html', // 'html' o 'null' para texto sin formato
});



//mostrar animacion de las secciones

const seccionNav = document.getElementById("bar-nav");
const seccionPersonal = document.getElementById("seccionPersonal");
const seccionSlide = document.getElementById("seccionSlide");
const seccionProjects = document.getElementById("seccionProjects");
const seccionTools = document.getElementById("seccionTools");
const seccionContact = document.getElementById("seccionContact");
const seccionFooter = document.getElementById("seccionFooter");


const cargarImagen = (entradas, observador) => {
    // console.log(entradas);
    // console.log(observador);
    entradas.forEach((entrada) => {
        if(entrada.isIntersecting){
            // console.log("la imagen esta en el viewport");
            entrada.target.classList.add("visible");
        }else{
            entrada.target.classList.remove("visible")
        }
    });
}

const observador = new IntersectionObserver(cargarImagen, {
    root: null,
    rootMargin: "0px 0px 0px 0px",
    threshold: 0.01
});

observador.observe(seccionNav);
observador.observe(seccionPersonal);
observador.observe(seccionSlide);
observador.observe(seccionProjects);
observador.observe(seccionTools);
observador.observe(seccionContact);
observador.observe(seccionFooter);

// menu hamburguer

const menuhamburguer = document.querySelector(".nav__hamburguer");
const menuclose = document.querySelector(".nav__close");
const menuList = document.querySelector(".menu-list");
const logo = document.querySelector(".brand");
const darkmode = document.querySelector(".dark-mode");

menuhamburguer.addEventListener("click", () => {
    
    menuList.classList.toggle("activado");
    menuhamburguer.classList.toggle("close");
    menuclose.classList.toggle("mostrar");
    logo.classList.toggle("activado")
    darkmode.classList.toggle("activado")
});


menuclose.addEventListener("click", () => {
    menuList.classList.remove("activado");
    menuclose.classList.remove("mostrar");
    menuhamburguer.classList.remove("close");
    logo.classList.remove("activado")
    darkmode.classList.remove("activado")
})


 //verificar formualrio

 const formulario = document.querySelector(".formulario")

 formulario.addEventListener("submit", SubmitPress)

async function SubmitPress(event){
    event.preventDefault();
    const form = new FormData(this) //formulario - this - eventcurrenttarget
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers:{
            "Accept": "application/json"
        }
    })
    if(response.ok){
        this.reset()
        Swal.fire({
            color: '#fff',
            title: 'Genial!',
            text: 'Haz enviado el formulario con éxito, muchas gracias por tu aporte!',
            position: 'center',
            icon: 'success',
            background:"rgba(54, 70, 93, .99)",
            showConfirmButton: true,
            confirmButtonText: "OK",
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: true,
            timerProgressBar: true,
            timer: 5000
        })
    }
    // console.log(formData.get("name"));
    // botonmail.setAttribute("href", `mailto:neidernieto@unisangil.edu.co?subject=${formData.get('name')}${formData.get('email')}&body=${formData.get('message')}`)
    // botonmail.click()

}

// SCROLL HACIA ARRIBA
const up = document.querySelector(".button-up")
// document.querySelector(".button-up").addEventListener("click", ScrollUp)
const iconos = document.querySelector(".social-fixed")
up.addEventListener("click", ()=>{
    ScrollUp()
})

function ScrollUp(){
    let currentScroll = document.documentElement.scrollTop;
        if(currentScroll > 0){
            window.requestAnimationFrame(ScrollUp)
            window.scrollTo(0, currentScroll - (currentScroll / 10));
            up.style.transform = "scale(0)"
        }
}

window.onscroll = function(){
    let scroll = document.documentElement.scrollTop;
    

    if(screen.width < 800){
            if(scroll > 3000){ //3400
                up.style.transform = "scale(1)"
                iconos.style.display = "none"
            }else if(scroll < 3000){
                // alert(scroll)
                up.style.transform = "scale(0)"
                iconos.style.display = "flex"
            }
    }else if(screen.width > 800 ){
            
            if(scroll > 2200){ //3400
                up.style.transform = "scale(1)"
                iconos.style.display = "none"
            }else if(scroll < 2200){
                // alert(scroll)
                up.style.transform = "scale(0)"
                iconos.style.display = "flex"
            }
    }

}


// MODAL

const modalshow = document.querySelector(".modal");
const btn = document.querySelector(".btn");
const btncerrar = document.querySelector(".modal_botonClose")
btn.addEventListener("click", (e)=>{
    e.preventDefault()
    modalshow.classList.toggle("modal--show");
})
btncerrar.addEventListener("click", (e)=>{
    e.preventDefault()
    modalshow.classList.remove("modal--show");
})

//CARRUSEL

function slider(){
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

        if(value === 0 || value == sliders.length+1){
            value = value === 0 ? sliders.length : 1;
        }

        sliders[currentElement-1].classList.toggle("carrusel_body-show")
        sliders[value-1].classList.toggle("carrusel_body-show")
    }
}

slider()

