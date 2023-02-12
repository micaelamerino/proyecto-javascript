//Datos de contacto
const form = document.getElementById("form");
form.addEventListener("submit", capturarDatos);

function capturarDatos(e) {
    e.preventDefault()

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje").value;

    (nombre === "" || apellido === "" || email === "" || mensaje === "") ? swal('Oops...', 'Complete todos los campos', 'error') : swal(`¡Gracias ${nombre}, formulario completado exitosamente!`, "", "success");

    form.reset();

    };

