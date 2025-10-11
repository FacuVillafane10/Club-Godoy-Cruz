// Array para almacenar los productos en el carrito
let carrito = [];

// Función para actualizar el contador del carrito
function actualizarContadorCarrito() {
  // Seleccionamos el ícono o botón del carrito para mostrar la cantidad de productos
  const botonCarrito = document.querySelector('.botonCarrito .botonCantidad');
  
  // Asegurarse de que el carrito tiene productos antes de actualizar el contador
  if (botonCarrito) {
    botonCarrito.textContent = carrito.reduce((acc, producto) => acc + producto.cantidad, 0); // Suma las cantidades de todos los productos
  }
}

// Función para agregar productos al carrito
function agregarProductoAlCarrito(productoId, nombre, precio) {
  // Verificamos si el producto ya está en el carrito
  const productoExistente = carrito.find(producto => producto.id === productoId);

  if (productoExistente) {
    // Si el producto ya existe en el carrito, solo incrementamos la cantidad
    productoExistente.cantidad++;
  } else {
    // Si no existe, lo agregamos con cantidad 1
    carrito.push({
      id: productoId,
      nombre: nombre,
      precio: precio,
      cantidad: 1
    });
  }

  // Actualizar el contador del carrito
  actualizarContadorCarrito();
  
  // Actualizar el detalle de la compra y el precio total
  actualizarDetalleCompra();
}

// Función para actualizar el detalle de la compra
function actualizarDetalleCompra() {
  const listaCompra = document.querySelector('.listaCompra');
  const totalPrecio = document.getElementById('totalPrecio');
  
  // Limpiar la lista de productos del carrito
  listaCompra.innerHTML = '';

  let total = 0;

  // Crear una lista de productos en el carrito y calcular el total
  carrito.forEach(producto => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span class="productoNombre">${producto.nombre} x ${producto.cantidad}</span>
      <span class="productoPrecio">$${(producto.precio * producto.cantidad).toLocaleString()}</span>
    `;
    listaCompra.appendChild(li);
    total += producto.precio * producto.cantidad;
  });

  // Mostrar el precio total en la interfaz
  totalPrecio.textContent = total.toLocaleString();
}

// Obtener todos los botones de "Agregar"
const botonesAgregar = document.querySelectorAll('.botonAgregar');

// Añadir un evento a cada botón para agregar el producto al carrito
botonesAgregar.forEach(boton => {
  boton.addEventListener('click', () => {
    // Obtener los datos del producto
    const producto = boton.closest('.productos');
    const productoId = producto.getAttribute('data-id');
    const nombre = producto.getAttribute('data-nombre');
    const precio = parseFloat(producto.getAttribute('data-precio'));

    // Agregar el producto al carrito
    agregarProductoAlCarrito(productoId, nombre, precio);
  });
});

// Inicializar el contador del carrito y el detalle de la compra al cargar la página
actualizarContadorCarrito();

function hizoClick() {
  // Verificamos si el carrito está vacío
  if (carrito.length === 0) {
    // Si está vacío, mostramos el modal con un mensaje adecuado
    const modalBody = document.querySelector('#exampleModal .modal-body'); // Seleccionamos el contenido del modal correctamente
    modalBody.innerHTML = `<p>El carrito está vacío.</p>`;
    
    // Abrimos el modal
    const modal = new bootstrap.Modal(document.getElementById('exampleModal'));
    modal.show();
    return;
  }

  // Si el carrito tiene productos, mostramos los detalles en el modal
  const modalBody = document.querySelector('#exampleModal .modal-body'); // Seleccionamos el contenido del modal
  let productosDetalle = '';

  // Crear el detalle de los productos y calcular el total
  let total = 0;
  carrito.forEach(producto => {
    productosDetalle += `
      <p>${producto.nombre} x ${producto.cantidad} - $${(producto.precio * producto.cantidad).toLocaleString()}</p>
    `;
    total += producto.precio * producto.cantidad;
  });

  // Actualizar el contenido del modal con los productos y el total
  modalBody.innerHTML = `
    <h5>Detalle de la Compra</h5>
    ${productosDetalle}
    <p><strong>Total: $${total.toLocaleString()}</strong></p>
  `;

  // Abrir el modal
  const modal = new bootstrap.Modal(document.getElementById('exampleModal'));
  modal.show();
}

// Seleccionamos el botón de carrito para agregar el evento de clic
const verProductos = document.querySelector('.botonCantidad');
verProductos.addEventListener('click', hizoClick);
