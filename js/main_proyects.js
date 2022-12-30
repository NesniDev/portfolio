// Detectar media querys - api para detectarlo
const checkbox = document.querySelector('#checkbox')
//

if(window.matchMedia('(prefers-color-scheme: dark)').matches){
    console.log("")
    checkbox.setAttribute('checked', true)
}
//cambiar el modo osucro mediante el boton
//Permite cambiar el estilo de las propiedades o componentes del codigo
// document.body.style.setProperty('--cardGray', 'blue')

//funcion para cambiar el color
checkbox.addEventListener('change', function(event) {
    //si esta checkeada
    if(this.checked){
        
        document.body.classList.remove('is-light-mode')
        document.body.classList.add('is-dark-mode')
    }else{
        document.body.classList.remove('is-dark-mode')
        document.body.classList.add('is-light-mode')
    }
})

// animaciones de letras

// const typed2 = new Typed(".typed2", {

//         stringsElement: '#cadena-texto-proyecto', // ID del elemento que contiene cadenas de texto a mostrar.
//         typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
//         startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
//         backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
//         // smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
//         shuffle: false, // Alterar el orden en el que escribe las palabras.
//         backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
//         loop: true, // Repetir el array de strings
//         loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
//         showCursor: true, // Mostrar cursor palpitanto
//         cursorChar: '|', // Caracter para el cursor
//         contentType: 'html', // 'html' o 'null' para texto sin formato
// });


//mostrar animacion de las secciones

const seccionDeNav = document.getElementById("bar-nav");
const seccionDeProjects = document.getElementById("seccionProjects");
const seccionDeFooter = document.getElementById("seccionFooter");


const cargarImagen = (entradas, observador) => {

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

observador.observe(seccionDeNav);
observador.observe(seccionDeProjects);
observador.observe(seccionDeFooter);

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

