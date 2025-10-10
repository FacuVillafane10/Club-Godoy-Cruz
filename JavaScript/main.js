// // Esperar a que el DOM esté completamente cargado
// document.addEventListener('DOMContentLoaded', function() {
//     console.log("📄 DOM cargado completamente");

//     // Verificar cada elemento uno por uno
//     let boton = document.getElementById("#miBoton");
//     console.log("Botón encontrado:", boton);

//     let formulario = document.querySelector(".formulario");
//     console.log("Formulario encontrado:", formulario);

//     let emailInput = document.getElementById("#exampleInputEmail1");
//     console.log("Input email encontrado:", emailInput);

//     let passwordInput = document.getElementById("#exampleInputPassword1");
//     console.log("Input password encontrado:", passwordInput);

//     let checkbox = document.getElementById("#exampleCheck1");
//     console.log("Checkbox encontrado:", checkbox);

//     // Solo agregar event listeners si los elementos existen

//     if (checkbox && passwordInput) {
//         checkbox.addEventListener("change", function() {
//             if (this.checked) {
//                 passwordInput.type = "text";
//             } else {
//                 passwordInput.type = "password";
//             }
//         });
//         console.log("✅ Funcionalidad ver contraseña agregada");
//     } else {
//         console.error("❌ No se encontró checkbox o input de contraseña");
//     }

//     if (formulario) {
//         formulario.addEventListener("submit", function(event) {
//             event.preventDefault();
//             let email = emailInput ? emailInput.value : "";

//             let password = passwordInput ? passwordInput.value : "";
//             let showPassword = checkbox ? checkbox.checked : false;

//             if (email === "" || password === "") {
//                 alert("Por favor, completa todos los campos");
//                 return;
//             }

//             alert(`✅¡¡El Email: ${email} a sido grabado Exitosamente!!✅`);
//         });
//         console.log("✅ Event listener agregado al formulario");
//     } else {
//         console.error("❌ No se encontró el formulario");
//     }
// });

// console.log("🔚 Script terminado de cargar");

// let edad = parseInt( prompt("Ingrese su edad") );

// if (edad >= 18 ) {
//     console.log(`Puede ingresar`);
// }
// else {
//     console.log(`No pódes ingresar por que sos menor`);
// }

// let palabra = "Neuquén"

// palabra = palabra.toLocaleLowerCase()

// palabraLimpia = palabra.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

// console.log(palabraLimpia);

// let palabraAlReves =  palabraLimpia.split('').reverse().join('')

// function isPalindromo(palabraLimpia) {

//     if (palabraLimpia === palabraAlReves){
//         return isPalindromo = true
//     }
//     else{
//         return isPalindromo = false
//     }

// }

// // console.log(isPalindromo(palabraLimpia))

// let Presupuesto1 = prompt("Ingresar Producto 1")
// let Presupuesto2 = prompt("Ingresar Producto 2")
// let Presupuesto3 = prompt("Ingresar Producto 3")
// let Presupuesto4 = prompt("Ingresar Producto 4")

// if (Presupuesto1.length > 0 && Presupuesto2.length > 0 && Presupuesto3.length>0 && Presupuesto4.length > 0) {

//     let productosElegidos = `Los productos elegidos son los siguientes: ${Presupuesto1}, ${Presupuesto2}, ${Presupuesto3} y ${Presupuesto4}`
//     alert(productosElegidos)
// } else {
//     alert("Debes elegir todos los productos")
// }

// Santa Claus 🎅 ha recibido una lista de números mágicos que representan regalos 🎁, pero algunos de ellos están duplicados y
// deben ser eliminados para evitar confusiones. Además, los regalos deben ser ordenados en orden ascendente antes de entregárselos a los elfos.
// Tu tarea es escribir una función que reciba una lista de números enteros (que pueden incluir duplicados) y devuelva una nueva lista sin duplicados,
//  ordenada en orden ascendente.

// let numero1 = 1;
// let numero2 = 5;
// let numero3 = 2;
// let numero4 = 55;
// let numero5 = 5;
// let numero6 = 2;

// let numerosRegalos = [numero1, numero2, numero3, numero4, numero5, numero6];

// const regalos = (numerosRegalos) => Array.from(new Set(numerosRegalos?.sort((a, b) => a - b)));

// console.log(regalos(numerosRegalos));

// a = parseInt( prompt("Ingresar numero a"))
// // b = parseInt( prompt("Ingresar numero b"))

// const num = a => a % 2 === 0 ? "Par" : "Impar" ;
// console.log(num(a));

// const parOImpar = num => num % 2 === 0 ? "par" : "impar";
// console.log(parOImpar(7));  // Resultado esperado: "impar"

// let nombre = prompt("Ingresar nombre")
// let edad = parseInt( prompt("Ingresar edad")) ;
// const crearPersona = (nombre,edad) => (`${nombre},${edad}`);
// console.log(crearPersona(`Su nombre es: ${nombre}` ,` y tu edad es de: ${edad}`))

// Ejercicio 5: Filtrar números mayores a 10

// Crea una función flecha que reciba un array de números y devuelva un nuevo array con los números que sean mayores a 10.


// let cualEliges = parseInt( prompt("Elige tu personaje preferido"));
// let personajes = ["Homero","Marge","Lisa","Bart"];

// const eligePersonaje = cualEliges => cualEliges >= 4 ? "No existe ese personaje" : personajes[cualEliges]
// console.log(eligePersonaje(cualEliges));


