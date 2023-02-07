//Datos de contacto
let form = document.getElementById("form");
form.addEventListener("submit", capturarDatos);

function capturarDatos(e) {
    e.preventDefault()

    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let email = document.getElementById("email").value;
    let mensaje = document.getElementById("mensaje").value;

    if (nombre === "" || apellido === "" || email === "" || mensaje === "") {
        swal('Oops...', 'Complete todos los campos', 'error');
    } else {
        swal(`¡Gracias ${nombre}, formulario completado exitosamente!`, "", "success");
    };
};

