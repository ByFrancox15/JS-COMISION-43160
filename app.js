alert("¡BUENAS BIENVENIDO A ESTE CUESTIONARIO!")

// Datos de la persona que esta ingresando a nuestro sitio web
let datos1 = prompt("Ingresa Tu Nombre")
let datos2 = prompt("Ingresa Tu Apellido")

alert("Los Datos Fueron Guardados Con Exito")

alert ("Hola Espero Te Vaya Genial En Este Cuestionario \nNombre: "+ datos1 + "\nApellido: " + datos2)

// Empieza el cuestionario con las preguntas
let respuestaCorrecta1 = "America"; 
let respuestaUsuario1 = prompt("¿Bolivia En Que Continente Se Encuentra? \n(RECUERDA ESCRIBIR TODAS LAS RESPUESTAS EN MINUSCULA)");

while (respuestaUsuario1 !== respuestaCorrecta1.toLowerCase()) {
  respuestaUsuario1 = prompt("Respuesta incorrecta, \nMe Esperaba Mas De Ti. \nIntenta nuevamente: \n¿Bolivia En Que Continente Se Encuentra?");
}

alert("¡Respuesta correcta!");

let respuestaCorrecta2 = "Europa"; 
let respuestaUsuario2 = prompt("¿España En Que Continente Se Encuentra? \n(RECUERDA ESCRIBIR TODAS LAS RESPUESTAS EN MINUSCULA)");

while (respuestaUsuario2 !== respuestaCorrecta2.toLowerCase()) {
  respuestaUsuario2 = prompt("Respuesta incorrecta, \n¿En Serio Te Equivocaste?. \nIntenta nuevamente: \n¿España En Que Continente Se Encuentra?");
}

alert("¡Respuesta correcta!");

let respuestaCorrecta3 = "Asia"; 
let respuestaUsuario3 = prompt("¿En Que Continente Se Encuentra Japon? \n(RECUERDA ESCRIBIR TODAS LAS RESPUESTAS EN MINUSCULA)");

while (respuestaUsuario3 !== respuestaCorrecta3.toLowerCase()) {
  respuestaUsuario3 = prompt("Respuesta incorrecta, \nMe Decepcionaste. \nIntenta nuevamente: \n¿En Que Continente Se Encuentra Japon?");
}

alert("¡Respuesta correcta!");

let respuestaCorrecta4 = "Africa"; 
let respuestaUsuario4 = prompt("¿En Que Continente Se Encuentra Madagascar? \n(RECUERDA ESCRIBIR TODAS LAS RESPUESTAS EN MINUSCULA)");

while (respuestaUsuario4 !== respuestaCorrecta4.toLowerCase()) {
  respuestaUsuario4 = prompt("Respuesta incorrecta, \nEsta Era Mas Dificil Te La Dejo Pasar. \nIntenta nuevamente: \n¿En Que Continente Se Encuentra Madagascar?");
}

alert("¡Respuesta correcta!");

let respuestaCorrecta5 = "Maputo"; 
let respuestaUsuario5 = prompt("¿Cual Es La Capital De Mozambique? \n(RECUERDA ESCRIBIR TODAS LAS RESPUESTAS EN MINUSCULA)");

while (respuestaUsuario5 !== respuestaCorrecta5.toLowerCase()) {
  respuestaUsuario5 = prompt("Respuesta incorrecta, \nEsta Re Facil Nose Que Te Paso. \nIntenta nuevamente: \n¿Cual Es La Capital De Mozambique?");
}

alert("¡Respuesta correcta! \nEntiendo Tuviste Que Buscarlo");


// SUMA EN LA CONSOLA
let num1 = 5000;
let num2 = 3000;
let resultadoSuma = num1 + num2;

console.log("Suma:");
console.log(num1 + " + " + num2 + " = " + resultadoSuma);


// RESTA EN LA CONSOLA
let num3 = 9000;
let num4 = 5000;
let resultadoResta = num3 - num4;

console.log("Resta:");
console.log(num3 + " - " + num4 + " = " + resultadoResta);


// MULTIPLICACION EN LA CONSOLA
let num5 = 200;
let num6 = 500;
let resultadoMultiplicacion = num5 * num6;

console.log("Multiplicación:");
console.log(num5 + " * " + num6 + " = " + resultadoMultiplicacion);
