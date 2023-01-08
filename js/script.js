//Calcular el total de compra
//Si el monto total es mayor a $5000 aplicar descuento del 15%, si es mayor a $3000 aplicar descuento del 10%, sino "no hay descuento"
//Retira su compra en el local o desea que se la enviemos?
//Si el monto total con el descuento ya aplicado es mayor a $5000 "tiene envio gratis", si el monto es menor a $5000 calcular el total más el envío cuyo valor es de $1000 (suma)

class Producto {
    constructor(nombre, color, peso, proteinas, calorias, precio){
        this.nombre=nombre;
        this.color=color;
        this.peso=peso;
        this.proteinas=proteinas;
        this.calorias=calorias;
        this.precio=precio;
        this.info=`Huevo ${this.nombre}, ${this.color}, pesa ${this.peso} gr, contiene ${this.proteinas} gr de proteina y ${this.calorias} kcal, el maple cuesta $ ${this.precio}`;
    }
    VerInfo(){
        alert(this.info)
    }
}

const prod1 = new Producto ("chico", "blanco", 63, 8, 93, 500);
const prod2 = new Producto ("mediano", "blanco", 70, 9, 108, 1000);
const prod3 = new Producto ("super", "blanco", 77, 10, 120, 1500);
const prod4 = new Producto ("chico", "color", 63, 8, 93, 600);
const prod5 = new Producto ("mediano", "color", 70, 9, 108, 1100);
const prod6 = new Producto ("super", "color", 77, 10, 120, 1600);

prod1.VerInfo();
prod2.VerInfo();
prod3.VerInfo();
prod4.VerInfo();
prod5.VerInfo();
prod6.VerInfo();

function sumaProductos (producto1=0 , producto2=0){
    return producto1+producto2;
}
function saludarCliente (){
    let frase = ("Gracias " + nombreCompleto + " por su compra!");
    alert(frase)
}

let montoTotal = 0;
let huevoBlanco = 0;
let huevoColor = 0;
let descuento = 0;

do{
    huevoBlanco = Number(prompt("HUEVOS BLANCOS: \n Seleccioná un producto introduciendo el monto corresponiente \n Maple chico $500 \n Maple mediano $1000 \n Maple grande $1500"));
    huevoColor = Number(prompt("HUEVOS DE COLOR: \n Seleccioná un producto introduciendo el monto corresponiente \n Maple chico $600 \n Maple mediano $1100 \n Maple grande $1600"));
    montoTotal+=sumaProductos(huevoBlanco,huevoColor);
} while (confirm ("Desea seguir comprando?")){
}

if (montoTotal>5000){
    descuento = montoTotal*0.85;
    alert("Su compra fue mayor a $5000, obtuvo un descuendo del 15%, su monto se redujo de $" + montoTotal + " a $" + descuento)
} else if (montoTotal>3000){
    descuento = montoTotal*0.90;
    alert("Su compra fue mayor a $3000, obtuvo un descuendo del 10%, su monto se redujo de $" + montoTotal + " a $" + descuento)
} else {
    alert ("El monto total es de $" + montoTotal + ", no obtuvo ningún descuento")
}

let retiroLocal = 1;
let envioDomicilo = 2;
let formaEntrega;
let nombreCompleto;
let documento;
let celular;
let direccion;

formaEntrega = Number(prompt("Indicanos cómo te gustaría recibir tu compra: \n Opción 1) Retiro en el local \n Opción 2) Envío a domicilio \n Por favor introduzca en la casilla el número de la opción de preferencia"));

if (formaEntrega == 1) {
    alert("A continuación le solicitaremos algunos datos para realiza la reserva de su compra");
    nombreCompleto = prompt("Indique su nombre completo:");
    documento = Number(prompt("Introzuca su DNI:"));
    celular = Number(prompt("Por favor deje un número telefónico de contacto"));
    saludarCliente();
} else if (formaEntrega == 2) {
    if (descuento > 5000) {
        alert("Su compra supera los $5000, tiene envío gratis, le solicitaremos algunos datos para la entrega");
        nombreCompleto = prompt("Indique su nombre completo:");
        documento = Number(prompt("Introzuca su DNI:"));
        celular = Number(prompt("Por favor deje un número telefónico de contacto"));
        direccion = prompt("Especifique su dirección:");
        saludarCliente();
    } else if (montoTotal < 5000) {
        alert("El valor de envío es de $1000, el monto final de su compra más el envío es de $" + (montoTotal + 1000) + " le solicitaremos algunos datos para la entrega")
        nombreCompleto = prompt("Indique su nombre completo:");
        documento = Number(prompt("Introzuca su DNI:"));
        celular = Number(prompt("Por favor deje un número telefónico de contacto"));
        direccion = prompt("Especifique su dirección:");
        saludarCliente();
    }
}

    




