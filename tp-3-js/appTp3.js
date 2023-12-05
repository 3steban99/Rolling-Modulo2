// 1- Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla en forma de lista los doce nombres del arreglo.

// const meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]

// document.write("Lista de Meses")

// document.write("<ul>");
// for (let i = 0; i < meses.length; i++) {
//     document.write("<li>" + meses[i] + "</li>");
// }
// document.write("</ul>");

// 2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

// Mostrar la longitud del arreglo.
// Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
// Añade en última posición la ciudad de París.
// Escribe por pantalla el elemento que ocupa la segunda posición.
// Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

// let ciudades = [];

// while (true) {
//     let ciudad = prompt("Ingrese el nombre de una ciudad:");
//     ciudades.push(ciudad);

//     if (ciudad === null) {
//         break;
//     }

//     let continuar = confirm("Desea ingresar otra ciudad?");

//     if (!continuar) {
//         break;
//     }
// }

// let ultimaPosicion = ciudades.length - 1;

// document.write(`El arreglo tiene ${ciudades.length} elementos<br>`);
// document.write("<ul>");
// document.write(`<li> Primer elemento: ${ciudades[0]}</li>`);
// document.write(`<li> Tercer elemento: ${ciudades[2]}</li>`);
// document.write(`<li> Último elemento: ${ciudades[ultimaPosicion]}</li>`);
// document.write("<ul>");

// document.write("-----------------")

// ciudades.push("Paris")
// ciudades.splice(1, 0, 'Barcelona');

// ultimaPosicion = ciudades.length - 1;
// document.write("<ul>");
// document.write(`<li> Último elemento: ${ciudades[ultimaPosicion]}</li>`);
// document.write(`<li> Segundo elemento: ${ciudades[1]}</li>`);
// document.write("<ul>");

// document.write("-----------------")
// document.write("Arreglo de ciudades")

// document.write("<ul>");
// for (let i = 0; i < ciudades.length; i++) {
//     document.write("<li>" + ciudades[i] + "</li>");
// }
// document.write("</ul>");



// 3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.

// function lanzamientoDados() {
//     return Math.floor(Math.random() * 6) + 1;
// }

// function sumarDados() {
//     let dado1 = lanzamientoDados();
//     let dado2 = lanzamientoDados();
//     return dado1 + dado2;
// }

// let conteoSumas = Array(11).fill(0);

// for (let i = 0; i < 50; i++) {
//     let suma = sumarDados();
//     conteoSumas[suma - 2]++;
// }


// document.write("<table border='1'>");
// document.write("<tr><th>Suma</th><th>Apariciones</th></tr>");
// for (let i = 0; i < conteoSumas.length; i++) {
//     document.write(`<tr><td>${i + 2}</td><td>${conteoSumas[i]}</td></tr>`);
// }
// document.write("</table>");


// 4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.

// function esParOImpar(numero) {
//     if (numero % 2 === 0) {
//         return "El número es par";
//     } else {
//         return "El número es impar";
//     }
// }

// // Ejemplo de uso de la función:
// let numero = parseInt(prompt("Ingrese un numero")); // Puedes cambiar este número para probar otros valores
// let resultado = esParOImpar(numero);
// document.write(resultado)

// 5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

// function analizarCadena(cadena) {
//     if (cadena === cadena.toUpperCase()) {
//         return "La cadena está formada solo por mayúsculas";
//     } else if (cadena === cadena.toLowerCase()) {
//         return "La cadena está formada solo por minúsculas";
//     } else {
//         return "La cadena está formada por una mezcla de mayúsculas y minúsculas";
//     }
// }

// let texto = prompt("Ingrese un texto")
// let resultado = analizarCadena(texto)
// document.write(resultado)


// 6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

// La fórmula del perímetro  es p = 2*(a +b)

// function calcPerimetro(lado1,lado2){
//     let perimetro = 2*(lado1+lado2)
//     return perimetro
// }


// let num1 = parseInt(prompt("Ingrese el lado 1"))
// let num2 = parseInt(prompt("Ingrese el lado 2"))

// let resultado = calcPerimetro(num1,num2)
// document.write(`El resultado del perimetro es igual a: ${resultado}`)


// 7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.


// function tablaMultiplicar(numero) {
//     let tabla = "<h2>Tabla de multiplicar del " + numero + "</h2>";
//     tabla += "<ul>";

//     for (let i = 1; i <= 10; i++) {
//         let resultado = numero * i;
//         tabla += `<li>${numero} x ${i} = ${resultado}</li>`;
//     }

//     tabla += "</ul>";

//     document.write(tabla);
// }


// let numeroIngresado = parseInt(prompt("Ingrese un número para ver su tabla de multiplicar:"));


// if (!isNaN(numeroIngresado) && numeroIngresado >=1 && numeroIngresado<=10) {
//     tablaMultiplicar(numeroIngresado);
// } else {
//     console.log("Por favor, ingrese un número válido.");
// }