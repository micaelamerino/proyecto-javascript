//Funciones
function sumaProductos(producto1 = 0, producto2 = 0) {
    return producto1 + producto2;
}
function saludarCliente() {
    let frase = ("Gracias " + nombreCompleto + " por su compra, pronto nos pondremos en contacto con Ud!");
    alert(frase)
}
function datosCliente() {
    nombreCompleto = prompt("Indique su nombre completo:");
    documento = Number(prompt("Introzuca su DNI:"));
    celular = Number(prompt("Por favor deje un número telefónico de contacto"));
    direccion = prompt("Especifique su dirección:");
}
//Constructor
class Producto {
    constructor(tamaño, color, peso, precio) {
        this.tamaño = tamaño;
        this.color = color;
        this.peso = peso;
        this.precio = precio;
    }
}
//Array
const listaHuevos = []

listaHuevos.push(new Producto("Chico", "blanco", 63, 500))
listaHuevos.push(new Producto("Mediano", "blanco", 70, 1000))
listaHuevos.push(new Producto("Super", "blanco", 77, 1500))
listaHuevos.push(new Producto("Chico", "color", 63, 600))
listaHuevos.push(new Producto("Mediano", "color", 70, 1100))
listaHuevos.push(new Producto("Super", "color", 77, 1600))

alert("Bienvenido al sitio de Avícola Perea, para comenzar a navegar haga click en `Aceptar`\nRecuerde dejar abierta la consola antes de ejecutar");
//Variables
let montoTotal = 0;
let huevoBlanco = 0;
let huevoColor = 0;
let descuento = 0;
let filtroPrecio = 0;
let accionAEjecutar = 0;
let procesoCompra = 0;
let procesoCompra2 = 0;
const carrito = []

accionAEjecutar = Number(prompt("Ingrese el número correspondiente a la acción a realizar : \n1)Ver la lista de productos\n2)Agregar productos \n3)Filtrar producto\n4)Iniciar compra"));

switch (accionAEjecutar) {
    case 1:
        listaHuevos.forEach(element => console.log(element));
        break;
    case 2:
        do {
            let preguntaDatos = new Producto(prompt("Ingrese el tamaño del huevo"), prompt("Ingrese el color del huevo"), Number(prompt("Ingrese el peso en gramos")), Number(prompt("Ingrese el precio del maple")));
            listaHuevos.push(preguntaDatos)
        } while (confirm("Desea seguir agregando?")) {
        }
        listaHuevos.forEach(element => console.log(element));
        break;
    case 3:
        filtroAEjecutar = Number(prompt("Ingrese el número que corresponda según la la acción a ejecutar:\n1)Filtrat por precio\n2)Filtrar por color"));
        switch (filtroAEjecutar) {
            case 1:
                filtroPrecio = Number(prompt("Para productos menores a $500 ingrese 1\nPara productos menores a $1000 ingrese 2\nPara productos mayores a $1000 ingrese 3"));
                if (filtroPrecio == 1) {
                    const productos = listaHuevos.filter((element) => element.precio <= 500)
                    console.log(productos)
                } else if (filtroPrecio == 2) {
                    const productos = listaHuevos.filter((element) => element.precio <= 1000)
                    console.log(productos)
                } else if (filtroPrecio == 3) {
                    const productos = listaHuevos.filter((element) => element.precio > 1000)
                    console.log(productos)
                } else {
                    alert("Opción no válida")
                }
                break;
            case 2:
                filtroColor = prompt("Ingrese `color` o `blanco`:").toLowerCase();
                if (filtroColor == "color") {
                    const productos = listaHuevos.filter((element) => element.color.includes("color"));
                    console.log(productos)
                } else if (filtroColor == "blanco") {
                    const productos = listaHuevos.filter((element) => element.color.includes("blanco"));
                    console.log(productos)
                } else {
                    alert("Opción no válida")
                }
        }
        break;
    case 4:
        do {
            huevoBlanco = Number(prompt("HUEVOS BLANCOS: \n Seleccioná un producto introduciendo el monto corresponiente \n Maple chico $500 \n Maple mediano $1000 \n Maple grande $1500"));
            huevoColor = Number(prompt("HUEVOS DE COLOR: \n Seleccioná un producto introduciendo el monto corresponiente \n Maple chico $600 \n Maple mediano $1100 \n Maple grande $1600"));
            carrito.push(huevoBlanco, huevoColor)
            montoTotal += sumaProductos(huevoBlanco, huevoColor);
        } while (confirm("Desea seguir comprando?")) {
        }
        procesoCompra = Number(prompt("Ingrese la opción según el paso a seguir:\n 1)Ver carrito y monto a pagar\n2)Continuar compra"));
        if (procesoCompra == 1) {
            carrito.forEach(element => console.log(element));
            alert("Los productos seleccionados son:\n" + carrito + "\nEl total a pagar es " + montoTotal)
            console.log("El total a pagar es " + montoTotal)
            break;
        } else if (procesoCompra == 2) {
            if (montoTotal > 5000) {
                descuento = montoTotal * 0.85;
                alert("Su compra fue mayor a $5000, obtuvo un descuendo del 15%, su monto se redujo de $" + montoTotal + " a $" + descuento)
            } else if (montoTotal > 3000) {
                descuento = montoTotal * 0.90;
                alert("Su compra fue mayor a $3000, obtuvo un descuendo del 10%, su monto se redujo de $" + montoTotal + " a $" + descuento)
            } else {
                alert("El monto total es de $" + montoTotal + ", no obtuvo ningún descuento")
            }
        }
        procesoCompra2 = Number(prompt("Indique el paso para continuar con su compra:\n1)Agregar productos\n2)Ver formas de entrega"));
        if (procesoCompra2 == 1) {
            do {
                huevoBlanco = Number(prompt("HUEVOS BLANCOS: \n Seleccioná un producto introduciendo el monto corresponiente \n Maple chico $500 \n Maple mediano $1000 \n Maple grande $1500"));
                huevoColor = Number(prompt("HUEVOS DE COLOR: \n Seleccioná un producto introduciendo el monto corresponiente \n Maple chico $600 \n Maple mediano $1100 \n Maple grande $1600"));
                carrito.push(huevoBlanco, huevoColor)
                montoTotal += sumaProductos(huevoBlanco, huevoColor);
            } while (confirm("Desea seguir comprando?")) {
            }
            if (montoTotal > 5000) {
                descuento = montoTotal * 0.85;
                alert("Su compra fue mayor a $5000, obtuvo un descuendo del 15%, su monto se redujo de $" + montoTotal + " a $" + descuento)
            } else if (montoTotal > 3000) {
                descuento = montoTotal * 0.90;
                alert("Su compra fue mayor a $3000, obtuvo un descuendo del 10%, su monto se redujo de $" + montoTotal + " a $" + descuento)
            } else {
                alert("El monto total es de $" + montoTotal + ", no obtuvo ningún descuento")
            }
            formaEntrega = Number(prompt("Indicanos cómo te gustaría recibir tu compra: \n Opción 1) Retiro en el local \n Opción 2) Envío a domicilio \n Por favor introduzca en la casilla el número de la opción de preferencia"));

            if (formaEntrega == 1) {
                alert("A continuación le solicitaremos algunos datos para realiza la reserva de su compra");
                datosCliente();
                saludarCliente();
            }
            else if (formaEntrega == 2) {
                if (descuento > 5000) {
                    alert("Su compra supera los $5000, tiene envío gratis, le solicitaremos algunos datos para la entrega");
                    datosCliente();
                    saludarCliente();
                } else if (montoTotal < 5000) {
                    alert("El valor de envío es de $1000, el monto final de su compra más el envío es de $" + (montoTotal + 1000) + " le solicitaremos algunos datos para la entrega")
                    datosCliente();
                    saludarCliente();
                }
            }
        } else if (procesoCompra2 == 2) {
            formaEntrega = Number(prompt("Indicanos cómo te gustaría recibir tu compra: \n Opción 1) Retiro en el local \n Opción 2) Envío a domicilio \n Por favor introduzca en la casilla el número de la opción de preferencia"));

            if (formaEntrega == 1) {
                alert("A continuación le solicitaremos algunos datos para realiza la reserva de su compra");
                datosCliente();
                saludarCliente();
            }
            else if (formaEntrega == 2) {
                if (descuento > 5000) {
                    alert("Su compra supera los $5000, tiene envío gratis, le solicitaremos algunos datos para la entrega");
                    datosCliente();
                    saludarCliente();
                } else if (montoTotal < 5000) {
                    alert("El valor de envío es de $1000, el monto final de su compra más el envío es de $" + (montoTotal + 1000) + " le solicitaremos algunos datos para la entrega")
                    datosCliente();
                    saludarCliente();
                }
            }
        }
    default:
}

    




