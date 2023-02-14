
const pintarCarrito = () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
    <h1 class = "modal-header-title">Carrito de compras</h1>
    `;

    modalContainer.append(modalHeader);

    const btnModal = document.createElement("h2");
    btnModal.className = "btn-modal";
    btnModal.innerText = "X";

    btnModal.addEventListener("click", () => {
        modalContainer.style.display = "none";
    });

    modalHeader.append(btnModal);

    carrito.forEach((product) => {
        let carritoContent = document.createElement("div");
        carritoContent.className = "modal-content";
        carritoContent.innerHTML = `
            <img src = "${product.img}">
            <h3 class = "subtitulo2">${product.nombre}</h3>
            <p class = "parrafo">$ ${product.precio}</p>
            <span class ="restar"> - </span>
            <p class = "parrafo">Cantidad: ${product.cantidad}</p>
            <span class ="sumar"> + </span>
            <p class = "parrafo">Total: $ ${product.cantidad * product.precio}</p>
        `;

        modalContainer.append(carritoContent);

        let restar = carritoContent.querySelector(".restar")
        restar.addEventListener("click", () => {
            if (product.cantidad !== 1) {
                product.cantidad--
            }
            saveLocal();
            pintarCarrito();
        });
        let sumar = carritoContent.querySelector(".sumar")
        sumar.addEventListener("click", () => {
            product.cantidad++
            saveLocal();
            pintarCarrito();
        });
        let eliminar = document.createElement("span");
        eliminar.className = "eliminar-prod"
        eliminar.innerText = "X";
        carritoContent.append(eliminar);

        eliminar.addEventListener("click", eliminarProducto);
        eliminar.addEventListener("click", alertaEliminado);
        function alertaEliminado() {
            Toastify({
                text: "Producto eliminado",
                duration: 2000,
                newWindow: true,
                gravity: "bottom",
                position: "right",
                style: {
                    background: "rgb(236, 207, 41)",
                    color: "#000",
                    borderRadius: "10px",
                    fontFamily: 'Outfit',
                },
                onClick: function () { }
            }).showToast();
        };
    });

    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);
    const totalEnvio = total + 1000;

    const totalCompra = document.createElement("div");
    totalCompra.className = "total-content";
    if (total >= 4000) {
        totalCompra.innerHTML = `Total a pagar: $ ${total}. Tiene envío gratis`;
    }  else if (total > 0) {
        totalCompra.innerHTML = `Su compra es de: $  ${total}. Total con envío: $ ${totalEnvio}`;
    }  else {
        totalCompra.innerHTML = `No hay ningún producto en su carrito`
    };

    modalContainer.append(totalCompra);

    //Función pintar botón de 'finalizar compra'
    const pintarBoton = () => {
        const btnFinalizar = document.createElement('button');
        btnFinalizar.className = "btn-finalizar";
        btnFinalizar.textContent = "Finalizar compra"
        modalContainer.appendChild(btnFinalizar)
    };

    if (total > 0) {
        pintarBoton();

    };
};

verCarrito.addEventListener("click", pintarCarrito);

const eliminarProducto = () => {
    const foundId = carrito.find((element) => element.id);

    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId
    });
    carritoCounter();
    saveLocal();
    pintarCarrito();
};

const carritoCounter = () => {
    cantidadCarrito.style.display = "inline-block";

    const carritoLength = carrito.length;
    localStorage.setItem("carritoLength", JSON.stringify(carritoLength));
    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
};

carritoCounter();