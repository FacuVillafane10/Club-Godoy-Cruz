let carrito = [];

// Actualiza el contador del carrito
function actualizarContadorCarrito() {
  const botonCarrito = document.querySelector(".botonCarrito .botonCantidad");

  if (botonCarrito) {
    botonCarrito.textContent = carrito.reduce(
      (acc, producto) => acc + producto.cantidad,
      0
    );
  }
}

// Agrega un producto al carrito
function agregarProductoAlCarrito(productoId, nombre, precio) {
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
}

// Actualiza el detalle de la compra en el modal
function actualizarDetalleCompra() {
  const listaCompra = document.querySelector(".listaCompra");
  const totalPrecio = document.getElementById("totalPrecio");

  // Verificar si los elementos existen en el DOM antes de intentar acceder a ellos
  if (!listaCompra || !totalPrecio) {
    console.error("No se encontraron los elementos necesarios para actualizar el carrito.");
    return;  // Sale de la función si los elementos no existen
  }

  listaCompra.innerHTML = "";  // Limpiar la lista de productos

  let total = 0;

  carrito.forEach((producto) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span class="productoNombre">${producto.nombre} x ${producto.cantidad}</span>
      <span class="productoPrecio">$${(producto.precio * producto.cantidad).toLocaleString()}</span>
    `;
    listaCompra.appendChild(li);
    total += producto.precio * producto.cantidad;
  });

  totalPrecio.textContent = total.toLocaleString();  // Actualiza el precio total
}

const botonesAgregar = document.querySelectorAll(".botonAgregar");
botonesAgregar.forEach((boton) => {
  boton.addEventListener("click", () => {
    const producto = boton.closest(".productos");
    const productoId = producto.getAttribute("data-id");
    const nombre = producto.getAttribute("data-nombre");
    const precio = parseFloat(producto.getAttribute("data-precio"));
    agregarProductoAlCarrito(productoId, nombre, precio);
    guardarCarrito(); // Guarda el carrito después de agregar un producto
  });
});

// Muestra el contenido del carrito al hacer click en el botón del carrito
const verProductos = document.querySelector(".botonCantidad");
verProductos.addEventListener("click", () => {
  if (carrito.length === 0) {
    mostrarModalVacio();
  } else {
    mostrarModalCarrito();
  }
});

// Muestra un mensaje si el carrito está vacío
function mostrarModalVacio() {
  const modalBody = document.querySelector("#exampleModal .modal-body");
  const modalTitle = document.querySelector("#exampleModal .modal-title");

  modalBody.innerHTML = `<p>El carrito está vacío.</p>`;
  modalTitle.innerHTML = `<p>No se puede realizar la compra</p>`;
  const modal = new bootstrap.Modal(document.getElementById("exampleModal"));
  modal.show();
}

// Muestra los detalles del carrito en el modal
function mostrarModalCarrito() {
  const modalBody = document.querySelector("#exampleModal .modal-body");
  const modalTitle = document.querySelector("#exampleModal .modal-title");
  
  let productosDetalle = "";
  let total = 0;

  carrito.forEach((producto) => {
    productosDetalle += `
      <p>${producto.nombre} x ${producto.cantidad} - $${(producto.precio * producto.cantidad).toLocaleString()}</p>
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
}

// Realiza la compra cuando se confirma
const realizarCompra = document.querySelector(".compraCarrito");
realizarCompra.addEventListener("click", () => {
  if (carrito.length === 0) {
    mostrarModalVacio();
  } else {
    confirmarCompra();
  }
});

// Confirmar compra en el modal
function confirmarCompra() {
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
  // Vaciar el carrito después de la compra
  carrito = [];
  actualizarContadorCarrito();
};

//local storadge para cuando actualizan la página, no perder la compra
function guardarCarrito() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}


function recuperarCarrito() {
  const carritoGuardado = localStorage.getItem("carrito");
  if (carritoGuardado) {
    carrito = JSON.parse(carritoGuardado);
  }
  actualizarContadorCarrito();
  actualizarDetalleCompra();
}

// Llamar a recuperarCarrito() cuando se carga la página
document.addEventListener("DOMContentLoaded", recuperarCarrito);
