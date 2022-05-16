/*
function solicitarNombreYApellido(){
    let nombreIngresado = prompt("Ingresar nombre y apellido");
   console.log("Turno para: " + nombreIngresado);
}
    solicitarNombreYApellido();
    solicitarNombreYApellido();
*/
/*
var nombre = prompt("ingresa tu nombre");
alert("Bienvenido al turnero " + nombre)


function Persona(nombre, apellido, edad, calle) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.calle = calle;
}
let nombreIngresado = prompt("Ingresar nombre")
let apellidoIngresado = prompt("Ingresar apellido");
let edadIngresada = prompt("Ingresar edad")
let calleIngresada = prompt("Ingresar calle")
const persona1 = new Persona("Turno 1 para: " + nombreIngresado, "Apellido: " + apellidoIngresado, "Edad: " + edadIngresada, "Calle: " + calleIngresada);

console.log(persona1.nombre);
console.log(persona1.apellido);
console.log(persona1["edad"]);
console.log(persona1["calle"]);

let nombreIngresado1 = prompt("Ingresar nombre")
let apellidoIngresado1 = prompt("Ingresar apellido");
let edadIngresada1 = prompt("Ingresar edad")
let calleIngresada1 = prompt("Ingresar calle")

const persona2 = new Persona("Turno 2 para: " + nombreIngresado1, "Apellido: " + apellidoIngresado1, "Edad: " + edadIngresada1, "Calle: " + calleIngresada1);

console.log(persona2.nombre);
console.log(persona2.apellido);
console.log(persona2["edad"]);
console.log(persona2["calle"]);

let nombreIngresado2 = prompt("Ingresar nombre")
let apellidoIngresado2 = prompt("Ingresar apellido");
let edadIngresada2 = prompt("Ingresar edad")
let calleIngresada2 = prompt("Ingresar calle")

const persona3 = new Persona("Turno 3 para: " + nombreIngresado2, "Apellido: " + apellidoIngresado2, "Edad: " + edadIngresada2, "Calle: " + calleIngresada2);

console.log(persona3.nombre);
console.log(persona3.apellido);
console.log(persona3["edad"]);
console.log(persona3["calle"]);
*/
/*
function crearPersona (turno) {

    let nombreIngresado = prompt("Ingresar nombre")

    let apellidoIngresado = prompt("Ingresar apellido");

    let edadIngresada = prompt("Ingresar edad");

    let calleIngresada = prompt("Ingresar calle");

    const persona = new Persona("Turno " + turno + " para: " + nombreIngresado, "Apellido: " + apellidoIngresado, "Edad: " + edadIngresada, "Calle: " + calleIngresada);
    
    return persona;
}
const persona = crearPersona(1);

console.log(persona);
*/





//ARRAY
/*
class Producto {
    constructor(nombre, talle, precio) {
        this.nombre  = nombre.toUpperCase();
        this.talle = talle
        this.precio  = parseFloat(precio);  
        this.vendido = false;
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
    vender() {
        this.vendido = true
    }
}
//Declaramos un array de productos para almacenar objetos
const productos = [];

productos.push(new Producto("Pantalones", "S", "500"));
productos.push(new Producto("Remeras", "S", "200"));
productos.push(new Producto("Shorts", "S", "300"));
productos.push(new Producto("Vestidos", "S", "800"));
//Iteramos el array con for...of para modificarlos a todos
for (const producto of productos)
    producto.sumaIva();
console.log(productos);
*/
/*
let = prendas = [];
class Producto {
    constructor(nombre, talle, precio) {
        this.nombre = nombre.toUpperCase();
        this.talle = talle
        this.precio = parseFloat(precio);

    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
}
var nombre = prompt("ingresa tu nombre");
alert("Bienvenido a la tienda " + nombre)
alert("Ingrese los datos a continuación para la busqueda de las prendas disponibles y con su precio final.")
console.log(nombre);

prendas.push(new Producto(prompt("Nombre de prenda: "),
    prompt("Talle de prenda: "),
    prompt("Precio: "),
));
console.log(prendas);
for (const producto of prendas)
    producto.sumaIva();
*/


/*
const productos = [
{  id: 1,  nombre: "Arroz", precio: 125 },
{  id: 2,  nombre: "Fideo", precio: 70 },
{  id: 3,  nombre: "Pan"  , precio: 50},
{  id: 4,  nombre: "Flan" , precio: 100}];

for (const producto of productos) {
let contenedor = document.createElement("div");
//Definimos el innerHTML del elemento con una plantilla de texto
contenedor.innerHTML = `<h3> ID: ${producto.id}</h3>
              <p>  Producto: ${producto.nombre}</p>
              <b> $ ${producto.precio}</b>`;
document.body.appendChild(contenedor);
}
*/

// DOM Y EVENTOS
let parrafo = document.createElement("p");
parrafo.innerHTML = "<h2>Completo el formulario correctamente?<h2>";
document.body.append(parrafo);
let texto = document.createElement("p");
texto.innerHTML = "<h3>Si completo el formulario por favor seleccione el boton enviar, en caso contrario lo puede corregir o limpiar.<h3>";
document.body.append(texto);



let miFormulario = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e) {
    console.log(e);
    //Cancelamos el comportamiento del evento
    e.preventDefault();
    //Obtenemos el elemento desde el cual se disparó el evento
    let formulario = e.target;
    console.log("e.target", formulario);
    //Obtengo el valor del primero hijo <input type="text">
    console.log(formulario.children[0].value);
    //Obtengo el valor del segundo hijo <input type="number"> 
    console.log(formulario.children[1].value);
    console.log(formulario.children[2].value);
    console.log(formulario.children[3].value);
    console.log(formulario.children[4].value);
    console.log(formulario.children[7].value);
    console.log(formulario.children[9].value);
    console.log(formulario.children[17].value);
    console.log("Formulario Enviado");
}

localStorage.clear();
const productos = [
    { id: "R", nombre: "Remera", precio: 200 },
    { id: "S", nombre: "Short", precio: 300 },
    { id: "P", nombre: "Pantalones", precio: 500 },
    { id: "V", nombre: "Vestidos", precio: 800 },
];

for (const producto of productos) {
    let contenedor = document.createElement("div");
    //Definimos el innerHTML del elemento con una plantilla de texto
    contenedor.innerHTML = `<h3> ID: ${producto.id}</h3>
                            <p>  Producto: ${producto.nombre}</p>
                            <strong> $ ${producto.precio}</strong>
                            <button onclick="agregarProducto('${producto.id}')">Comprar </boton>
                            `;
    document.body.appendChild(contenedor);
}

function agregarProducto(id) {
    const carrito = JSON.parse(localStorage.getItem('carrito'));
    const nuevoCarrito = [];
    const producto = productos.find((elemento) => elemento.id === id);
    if (carrito) {
        nuevoCarrito.push(...carrito, producto);
        localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
    } else {
        nuevoCarrito.push(producto);
        localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
    }
}

let usuario;
let usuarioEnLS = JSON.stringify(localStorage.getItem("usuario"))
if (usuarioEnLS) {
    usuario = usuarioEnLS
} else {
    usuario = prompt("Ingrese su nombre de usuario")
}