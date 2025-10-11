let carrito = [];

const botones = document.querySelectorAll(".botonAgregar");

// Usando forEach para un código más limpio
botones.forEach(boton => {
  boton.addEventListener("click", () => { // Usamos una función flecha para más claridad
    const productoPadre = boton.closest(".productos");

    // Obtenemos los datos del producto del elemento padre
    const id = parseInt(productoPadre.dataset.id);
    const nombre = productoPadre.dataset.nombre;
    const precio = parseFloat(productoPadre.dataset.precio);

    const producto = {
      id,
      nombre,
      precio, 
      cantidad: 1,
    };

    carrito.push(producto);
    
    let precioTotal = 0;
    carrito.forEach((item) => (precioTotal += item.precio * item.cantidad));

    console.log(
      `El producto ingresado es: ${producto.nombre} y su precio es: $${producto.precio}`
    );
    console.log(`El total de la compra es: $${precioTotal}`);
  });   
});