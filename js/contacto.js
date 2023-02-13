//Datos de contacto

const formulario = document.getElementById('form');
formulario.addEventListener('submit', actionSubmit);
form.addEventListener("submit", capturarDatos);

//Función asíncrona para recibir los datos de contacto al mail personal mediante la API 'Formspree'
async function actionSubmit(event) {
    event.preventDefault()

    const form = new FormData(this)
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            'Accept': 'application/json'
        }
    })
};

//Función para capturar datos de contacto y enviar 'swal' correspondiente
function capturarDatos(e) {
    e.preventDefault()

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje").value;

    (nombre === "" || apellido === "" || email === "" || mensaje === "") ? swal('Oops...', 'Complete todos los campos', 'error') : swal(`¡Gracias ${nombre}, formulario completado exitosamente!`, "", "success");

    form.reset();
};