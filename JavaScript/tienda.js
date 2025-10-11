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
