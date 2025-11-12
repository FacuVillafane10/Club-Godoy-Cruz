let carrito = [];

function actualizarContadorCarrito() {

try{
    const botonCarrito = document.querySelector(".botonCarrito .botonCantidad");

  if (botonCarrito) {
    botonCarrito.textContent = carrito.reduce(
      (acc, producto) => acc + producto.cantidad,
      0
    );
  }

  } catch (error) {    
  console.error("Se ha producido un error al intentar actualiza contador del Carrito :", error.message);
  }
}


function agregarProductoAlCarrito(productoId, nombre, precio) {
  try{
  const productoExistente = carrito.find(
    (producto) => producto.id === productoId
  );

  if (productoExistente) {
    productoExistente.cantidad++;
  } else {
    carrito.push({
      id: productoId,
      nombre,
      precio,
      cantidad: 1,
    });
  }

  actualizarContadorCarrito();
  actualizarDetalleCompra();
  } catch (error) {    
  console.error("Se ha producido un error al intentar agregar un producto al Carrito :", error.message);
  }
}


function actualizarDetalleCompra() {
  const listaCompra = document.querySelector(".listaCompra");
  const totalPrecio = document.getElementById("totalPrecio");

  
  if (!listaCompra || !totalPrecio) {
    console.error(
      "No se encontraron los elementos necesarios para actualizar el carrito."
    );
    return; 
  }

  listaCompra.innerHTML = ""; 

  let total = 0;

  carrito.forEach((producto) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span class="productoNombre">${producto.nombre} x ${
      producto.cantidad
    }</span>
      <span class="productoPrecio">$${(
        producto.precio * producto.cantidad
      ).toLocaleString()}</span>
    `;
    listaCompra.appendChild(li);
    total += producto.precio * producto.cantidad;
  });

  totalPrecio.textContent = total.toLocaleString(); 
}

const botonesAgregar = document.querySelectorAll(".botonAgregar");
botonesAgregar.forEach((boton) => {
  boton.addEventListener("click", () => {
    const producto = boton.closest(".productos");
    const productoId = producto.getAttribute("data-id");
    const nombre = producto.getAttribute("data-nombre");
    const precio = parseFloat(producto.getAttribute("data-precio"));
    agregarProductoAlCarrito(productoId, nombre, precio);
    guardarCarrito(); 
  });
});

const verProductos = document.querySelector(".botonCarrito");
verProductos.addEventListener("click", () => {
  if (carrito.length === 0) {
    mostrarModalVacio();
  } else {
    mostrarModalCarrito();
  }
});

function mostrarModalVacio() {
  try {
  const modalBody = document.querySelector("#exampleModal .modal-body");
  const modalTitle = document.querySelector("#exampleModal .modal-title");

  modalBody.innerHTML = `<p>El carrito está vacío.</p>`;
  modalTitle.innerHTML = `<p>No se puede realizar la compra</p>`;
  const modal = new bootstrap.Modal(document.getElementById("exampleModal"));
  modal.show();
  } catch (error) {    
  console.error("Se ha producido un error al intentar mostrar Modal vacío del Carrito :", error.message);
  }
}

function mostrarModalCarrito() {
  try {
    
  const modalBody = document.querySelector("#exampleModal .modal-body");
  const modalTitle = document.querySelector("#exampleModal .modal-title");

  let productosDetalle = "";
  let total = 0;

  carrito.forEach((producto) => {
    productosDetalle += `
      <p>${producto.nombre} x ${producto.cantidad} - $${(
      producto.precio * producto.cantidad
    ).toLocaleString()}</p>
    `;
    total += producto.precio * producto.cantidad;
  });

  modalTitle.innerHTML = `Compra a Realizar`;
  modalBody.innerHTML = `
    <h5>Detalle de la Compra</h5>
    ${productosDetalle}
    <p><strong>Total: $${total.toLocaleString()}</strong></p>
  `;
  const modal = new bootstrap.Modal(document.getElementById("exampleModal"));
  modal.show();

  } catch (error) {    
  console.error("Se ha producido un error al intentar mostrar Modal del Carrito :", error.message);
  }
}

const realizarCompra = document.querySelector(".compraCarrito");
realizarCompra.addEventListener("click", () => {
  if (carrito.length === 0) {
    mostrarModalVacio();
  } else {
    confirmarCompra();
  }
});



function confirmarCompra() {

  try {
  


  const modalBody = document.querySelector("#realizaCompra .modal-body");
  const modalTitle = document.querySelector("#realizaCompra .modal-title");

  let productosDetalle = "";
  let total = 0;

  carrito.forEach((producto) => {
    productosDetalle += `  
      <p>${producto.nombre} x ${producto.cantidad} - $${(producto.precio * producto.cantidad).toLocaleString()}</p>
    `;
    total += producto.precio * producto.cantidad;
  });

  modalTitle.innerHTML = `Compra Confirmada`;
  modalBody.innerHTML = ` 
    <h5>Detalle de la Compra</h5>
    ${productosDetalle}
    <p><strong>Total: $${total.toLocaleString()}</strong></p>
  `;

  const modal = new bootstrap.Modal(document.getElementById("realizaCompra"));
  modal.show();

  carrito = []; 

  guardarCarrito()
  actualizarContadorCarrito();
  actualizarDetalleCompra();


  
  } catch (error) {
  console.error("Se ha producido un error al intentar Confirmar la Compra:", error.message);
}
}



function guardarCarrito() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

function recuperarCarrito() {

  try {
    
  const carritoGuardado = localStorage.getItem("carrito");
  if (carritoGuardado) {
    carrito = JSON.parse(carritoGuardado);
  }
  actualizarContadorCarrito();
  actualizarDetalleCompra();
  
  } catch (error) {    
  console.error("Se ha producido un error al intentar Recuperar el Carrito :", error.message);
  }
}

document.addEventListener("DOMContentLoaded", recuperarCarrito);


const vaciarCarritoButton = document.querySelector(".vaciarCarrito");

if (vaciarCarritoButton) {
  vaciarCarritoButton.addEventListener("click", () => {
    carrito = [];

    localStorage.removeItem("carrito");

    actualizarContadorCarrito();
    actualizarDetalleCompra();
  });
}



// Simulando una operación asincrónica, como un request a un servidor.
function realizarOperacionAsincronica() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exito = true; // Cambiar a false para simular un error
      if (exito) {
        resolve(); // Si todo va bien, resolvemos la promise
      } else {
        reject('Hubo un error al procesar la compra.'); // Si algo sale mal, rechazamos la promise
      }
    }, 2000); // Simula un proceso que tarda 2 segundos
  });
}