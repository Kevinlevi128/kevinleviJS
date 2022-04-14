/*
function solicitarNombreYApellido(){
    let nombreIngresado = prompt("Ingresar nombre y apellido");
   console.log("Turno para: " + nombreIngresado);
}
    solicitarNombreYApellido();
    solicitarNombreYApellido();
*/
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