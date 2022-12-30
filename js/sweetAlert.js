// promesas
(async() => {
    const {value: pais} = await swal.fire({ 
        title: "Bienvenido!", // texto principal
        text: "Espero te guste mi pagina web",// texto en panatalla
        // html: "<></>" // se puede añadir html y estilos en css
        icon: "success", // warning, error, question, etc  
        confirmButtonText: "Hola!",// texto del boton
        footer: "Portafolio - Neider Nieto",// puede ir html o texto plano 
        // width: "90%",
        padding: "1rem", // padding a la alerta
        // background: "#000", // color al fonto de la alerta
        // grow: "row" //fullscreen, row, column 
        backdrop: true,//  fondo oscuroo, true o false
        // timer: 5000, // tiempo para cerrar
        // timerProgressBar: true, // barra de progreso para cerrar
        // toast: true, //  permite que sea una alerta pequeña
        position: "center",// posicion de la alerta 
        allowOutsideClick: false, // si permito que de click fuera de la alerta para cerrarla
        allowEscapeKey: false,// si permito que de escape para cerrarla
        allowEnterKey: true,// texto del boton
        stopKeydownPropagation: false, // parar la propagacion, evita la propagacion de evento, bloquea los atajos de teclado
    
        // INPUTS
    
        // input: "select",
        // inputPlaceholder: "Selecciona tu Pais",
        // inputValue: "",
        // inputOptions: { // recibe un objeto
        //     mexico: "mexico",
        //     españa: "españa"
        // },

        //  customClass:{ se le puede colocar estilos desde clases en css
        // 	container:
        // 	popup: "popup.class"
        // 	header:
        // 	title:
        // 	closeButton:
        // 	icon:
        // 	image:
        // 	content:
        // 	input:
        // 	actions:
        // 	confirmButton:
        // 	cancelButton:
        // 	footer:	   
        // } 

        // BOTONES

        showConfirmButton: true, // true o false boton si se quiere mostrar
        confirmButtonColor: "#012029", // color del boton
        confirmButtonAriaLabel: "confirmar",

        showCancelButton: false,// quitar o colocar
        cancelButtonText: "cancelar", // texto
        // cancelButtonColor: // color del boton
        cancelButtonAriaLabel: "cancelar", // texto para dispositivos con accesibilidad
        
        // ESTILOS CSS DE SWEET ALERT

        // buttonsStyling: //TRUE O FALSE PARA LOS ESTILOS
        // showCloseButton:
        // closeButtonAriaLabel:

        //IMAGEN DE UNA ALERTA

        // imageUrl:
        // imageWidth:
        // imageHeight:
        // imageAlt:
    })
    if(pais){
        swal.fire({
            title: `seleccionaste ${pais}`
        })
    }
})()


// Swal.fire({
	// title:
	// text:
	// html:
	// icon:
	// confirmButtonText:
	// footer:
	// width:
	// padding:
	// background:
	// grow:
	// backdrop:
	// timer:
	// timerProgressBar:
	// toast:
	// position:
	// allowOutsideClick:
	// allowEscapeKey:
	// allowEnterKey:
	// stopKeydownPropagation:

	// input:
	// inputPlaceholder:
	// inputValue:
	// inputOptions:
	
	//  customClass:
	// 	container:
	// 	popup:
	// 	header:
	// 	title:
	// 	closeButton:
	// 	icon:
	// 	image:
	// 	content:
	// 	input:
	// 	actions:
	// 	confirmButton:
	// 	cancelButton:
	// 	footer:	

	// showConfirmButton:
	// confirmButtonColor:
	// confirmButtonAriaLabel:

	// showCancelButton:
	// cancelButtonText:
	// cancelButtonColor:
	// cancelButtonAriaLabel:
	
	// buttonsStyling:
	// showCloseButton:
	// closeButtonAriaLabel:


	// imageUrl:
	// imageWidth:
	// imageHeight:
	// imageAlt:
// });
