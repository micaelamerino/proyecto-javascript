const formulario = document.getElementById('form');
formulario.addEventListener('submit', actionSubmit);
//Función asíncrona para recibir los datos de contacto al mail personal mediante la API 'Formspree'
async function actionSubmit(e) {
    e.preventDefault()

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje").value;

    if (nombre === "" || apellido === "" || email === "" || mensaje === ""){
        swal('Oops...', 'Complete todos los campos', 'error')
    } else {
        const form = new FormData(this)
        const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            'Accept': 'application/json'
        }
    });
    
    if(response.ok){
        swal(`¡Gracias ${nombre} ${apellido}, formulario enviado exitosamente!`, "", "success")
    }
        formulario.reset();
    };
};