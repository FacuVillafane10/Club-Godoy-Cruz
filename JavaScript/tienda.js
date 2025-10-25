let carrito = [];

function actualizarContadorCarrito() {
  const botonCarrito = document.querySelector(".botonCarrito .botonCantidad");

  if (botonCarrito) {
    botonCarrito.textContent = carrito.reduce(
      (acc, producto) => acc + producto.cantidad,
      0
    );
  }
}

function agregarProductoAlCarrito(productoId, nombre, precio) {
  const productoExistente = carrito.find(
    (producto) => producto.id === productoId
  );

  if (productoExistente) {
    productoExistente.cantidad++;
  } else {
    carrito.push({
      id: productoId,
      nombre: nombre,
      precio: precio,
      cantidad: 1,
    });
  }

  actualizarContadorCarrito();

  actualizarDetalleCompra();
}

function actualizarDetalleCompra() {
  const listaCompra = document.querySelector(".listaCompra");
  const totalPrecio = document.getElementById("totalPrecio");

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
  });
});

actualizarContadorCarrito();

function hizoClick() {
  if (carrito.length === 0) {
    const modalBody = document.querySelector("#exampleModal .modal-body");
    const modalFooter = document.querySelector("#exampleModal .modal-footer");
    const modalTitle = document.querySelector("#exampleModal .modal-title");

    modalBody.innerHTML = `<p>El carrito está vacío.</p>`;    
    modalTitle.innerHTML = `<p>No se puede realizar la compra</p>`
    // const botonConfirmar = modalFooter.querySelector("#confirmaCompraCarrito");
    // if (botonConfirmar) {
    //   botonConfirmar.remove();
    // }
    const modal = new bootstrap.Modal(document.getElementById("exampleModal"));
    modal.show();
    return;
  }

  const modalBody = document.querySelector("#exampleModal .modal-body");
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
  
    const modalTitle = document.querySelector("#realizaCompra .modal-title");    
    modalTitle.innerHTML = `<p>Compra a Realizar</p>`
    modalBody.innerHTML = `<h5>Detalle de la Compra</h5> ${productosDetalle}   <p><strong>Total: $${total.toLocaleString()}</strong></p>`;

  const modal = new bootstrap.Modal(document.getElementById("exampleModal"));
  modal.show();
}

const verProductos = document.querySelector(".botonCantidad");
verProductos.addEventListener("click", hizoClick);


const realizarCompra = document.querySelector(".compraCarrito");
realizarCompra.addEventListener("click", realizarCompraCarrito); 
function realizarCompraCarrito() {
  const botonCarrito = document.querySelector(".compraCarrito");

  if (carrito.length === 0) {
    const modalBody = document.querySelector("#realizaCompra .modal-body");
    const modalFooter = document.querySelector("#realizaCompra .modal-footer");
    const modalTitle = document.querySelector("#realizaCompra .modal-title");
    modalBody.innerHTML = `<p>No hay productos ingresados en el Carrito de Compras.</p>`;
    modalTitle.innerHTML = `<p>No se puede realizar la compra</p>`
    // const botonConfirmar = modalFooter.querySelector("#confirmaCompra");
    // if (botonConfirmar) {
    //   botonConfirmar.remove();
    // }

    const modal = new bootstrap.Modal(document.getElementById("realizaCompra"));
    modal.show();
    return;
  } else {
    const modalBody = document.querySelector("#realizaCompra .modal-body");        
    // const botonConfirmar = modalFooter.querySelector("#confirmaCompra");

    let productosDetalle = "";

    let total = 0;
    // if (botonConfirmar) {
    //   botonConfirmar.push();
    // }
    carrito.forEach((producto) => {
      productosDetalle += `
        <p>${producto.nombre} x ${producto.cantidad} - $${(producto.precio * producto.cantidad).toLocaleString()}</p>
      `;
      total += producto.precio * producto.cantidad;
    });

    const modalTitle = document.querySelector("#realizaCompra .modal-title");
    
    modalTitle.innerHTML = `<p>Compra a Realizar</p>`
    modalBody.innerHTML = `<h5>Detalle de la Compra</h5> ${productosDetalle} <p><strong>Total: $${total.toLocaleString()}</strong></p>`;
        
    const modal = new bootstrap.Modal(document.getElementById("realizaCompra"));
    modal.show();
  }
}


