alert ("Bienvenidos a LA MORADA")

let nombre= prompt ("Ingresa tu nombre:")
let apellido= prompt ("Ingresa tu apellido:")
let pass= parseInt (prompt ("Ingrese su pass:"))
const edad= prompt ("Coloca tu edad")
let cbu= confirm ("Ingrese su huella")



if (nombre === "Gonzalo" && apellido === "Esquivel" && pass === 1422) {
    console.log ("Hola como estas " + nombre + " " + apellido + "?");
}
else {
    console.warn ("¡" + nombre +" "+ apellido + "⚠ Tus datos son incorrectos");
}


console.log ("Continuámos.")


let precio= prompt ("¿Deseas alquiar una cabaña?")

if (precio<3500) {alert ("Haz tu reserva")}
else if (precio>3500, precio<4000) {alert ("Elige el pecio entre 3500 y 4000")}
else if (precio>=3000) {alert ("Podemos acepta este minimo")}


alert ("Gracias por tu reserva")


console.log ("Revisemos el calendario")

for (let i = 0; i <= 10; i++) {
    console.log ("Iteración n°:", i)}

console.log ("Que fecha deseas elegir")

let final= parseInt (prompt ("Ingresa la fecha deseada"))

for (let i = 0; i <= final; i++) {
    console.log ("Iteración n°:", i)}



let persona = ""
let password = ""
let login = false


while(login === false) {
    persona = prompt("Ingresa tu nombre:") 
    password = prompt("Ingresa tu contraseña:") 
    if (persona === "Gonzalo" && password === "1422") {
        console.log("Bienvenido", persona) 
        login = true
    } else {
        alert("⚠Este usuario no esta registrado")
    }
}