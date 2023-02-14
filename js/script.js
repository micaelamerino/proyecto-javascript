const contentCard = document.getElementById("content-card");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modalContainer");
const cantidadCarrito = document.getElementById("cantidadCarrito");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

//Función asíncrona para "traer" los productos del archivo "data.json"
const getProducts = async () =>{
    const response = await fetch("../data.json");
    const data = await response.json();

    data.forEach((product) => {
        let content = document.createElement("div");
        content.className = "card text-center";
        content.innerHTML = `
        <img src = "${product.img}">
        <h5 class = "subtitulo1">${product.nombre}</h5>
        <p class = "parrafo">$ ${product.precio}</p>`;
        contentCard.append(content);
    
        let btnComprar = document.createElement("button");
        btnComprar.className = "btn-comprar";
        btnComprar.innerText = "Comprar";
        content.append(btnComprar);
    
        contentCard.append(content)
    
        btnComprar.addEventListener("click", () => {
    
            const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);
    //Si se repite la selección del producto para agregar al carrito: realiza una copia de ese producto y aumenta la cantidad
            if(repeat){
                carrito.map((prod) =>{
                    if(prod.id === product.id){
                        prod.cantidad++
                    }
                })
            } else {
                //Si el producto es ingresado al carrito por primera vez realiza un push con sus propiedades
                carrito.push({
                    id: product.id,
                    img: product.img,
                    nombre: product.nombre,
                    precio: product.precio,
                    cantidad: product.cantidad,
                });
            };
            carritoCounter();
            saveLocal();
        });

        //Evento de alerta para confirmar que el producto se agregó al carrito
        btnComprar.addEventListener("click", alertaAgregado)
        function alertaAgregado(){
            Toastify({
                text: "Agregado al carrito",
                duration: 2000,
                newWindow: true,
                gravity: "bottom", 
                position: "right", 
                style: {
                  background: "rgba(156, 207, 45)",
                  color: "#000",
                  borderRadius: "10px",
                  fontFamily: 'Outfit',
                },
                onClick: function(){} 
              }).showToast();
        };
    });
};
getProducts();

//Guardar carrito en el local storage
const saveLocal =() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}





