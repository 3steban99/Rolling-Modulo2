// 1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.

// let edad = parseInt(prompt("Ingrese la edad"))

// if(edad >= 18){
//     document.write("Ya puede conducir")
// } else{
//     document.write("No tiene la edad suficiente para conducir")
// }


// 2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

// 0-2: Muy deficiente
// 3-4: Insuficiente
// 5-6: Suficiente
// 7: Bien
// 8-9: Notable
// 10: Sobresaliente

// let nota = parseInt(prompt("Ingrese la nota"))


// switch (nota) {
//     case 0:
//     case 1:
//     case 2:
//         document.write("Muy deficiente")
//         break;

//     case 3:
//     case 4:
//         document.write("Insuficiente")
//         break;
    
//     case 5:
//     case 6:
//         document.write("Suficiente")
//         break;
    
//     case 7:
//         document.write("Bien")
//         break;

//     case 8:
//     case 9:
//         document.write("Notable")
//         break;

//     case 10:
//         document.write("Sobresaliente")
//         break;

//     default:
//         document.write("Numero erroneo")
//         break;
// }


// 3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

// let textos = [];

// while (true) {
//     let texto = prompt("Ingresa una cadena de texto:");

//     if (texto === null) {
//         break;
//     }

//     textos.push(texto);

//     let continuar = confirm("¿Deseas ingresar otra cadena?");
//     if (!continuar) {
//         break;
//     }
// }

// let resultado = textos.join("-");
// console.log(resultado !== '' ? resultado : "No se ingresaron cadenas.");


// 4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

// let suma = 0;

// while (true) {
//     let num = parseInt(prompt("Ingrese un número:"));

//     if (num === null) {
//         break;
//     }

//     if (!isNaN(num)) {
//         suma += num;
//     } else {
//         alert("Por favor, ingrese un número válido.");
//     }

//     let continuar = confirm("¿Deseas ingresar otro numero?");
//     if (!continuar) {
//         break;
//     }
// }

// alert("La suma total de los números ingresados es: " + suma);

// 5- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

// El algoritmo para calcular la letra del dni es el siguiente :

// El número debe ser entre 0 y 99999999
// Debemos calcular el resto de la división entera entre el número y el número 23.
// Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
// Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
// Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».

// const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

// let numDNI = parseInt(prompt("Ingrese el número del DNI"));

// if (!isNaN(numDNI) && numDNI >= 0 && numDNI <= 99999999) {
//     let resultado = numDNI % 23;
//     let letraDNI = letras[resultado];
//     document.write("La letra correspondiente al DNI " + numDNI + " es: " + letraDNI);
// } else {
//     alert("Por favor, ingrese un número válido de DNI (entre 0 y 99999999).");
// }

// 6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

// 1
// 22
// 333
// 4444
// 55555
// 666666
// …….


// for (let i = 1; i <= 30; i++) {
//     let linea = '';

//     for (let j = 1; j <= i; j++) {
//         linea += i;
//     }

//     console.log(linea);
// }


// 7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

// 303030303030303030303030303030303030303030303030303030303030
// 2929292929292929292929292929292929292929292929292929292929
// 28282828282828282828282828282828282828282828282828282828
// …..
// 333
// 22
// 1

// let num = parseInt(prompt("Ingrese un numero"))



// if(num >0 && num <50){
//     for (let i = num; i >= 1; i--) {
//         let linea = '';
    
//         for (let j = 1; j <= i; j++) {
//             linea += i;
//         }
    
//         console.log(linea);
//     }
// }else{
//     console.log("Por favor, ingrese un número válido entre 1 y 50.");
// }



// 8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

// let userInput = parseInt(prompt("Ingrese un número (no mayor a 50):"));

// if (!isNaN(userInput) && userInput > 0 && userInput <= 50) {
//     let piramide = '';
//     for (let i = 1; i <= userInput; i++) {
//         for (let j = 1; j <= i; j++) {
//             piramide += j;
//         }
//         piramide += '\n';
//     }
//     console.log(piramide);
// } else {
//     console.log("Por favor, ingrese un número válido entre 1 y 50.");
// }


// 9- Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal.


// for (let i = 1; i <= 500; i++) {
//     console.log(i);

//     if (i % 4 === 0) {
//         console.log(i + " (Múltiplo de 4)");
//     }
    
//     if (i % 9 === 0) {
//         console.log(i + " (Múltiplo de 9)");
//     }

//     if (i % 5 === 0 && i % 25 !== 0) {
//         console.log("————————————————————-");
//     }
// }


// 10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

// let filas = parseInt(prompt("Ingrese el número de filas:"));
// let columnas = parseInt(prompt("Ingrese el número de columnas:"));

// let contador = filas * columnas;

// document.write("<table border='1'>");

// for (let i = 0; i < filas; i++) {
//     document.write("<tr>");

//     for (let j = 0; j < columnas; j++) {
//         document.write("<td>" + contador + "</td>");
//         contador--;
//     }

//     document.write("</tr>");
// }

// document.write("</table>");


// 11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor.

// let nombre1 = prompt("Ingrese el primer nombre:");
// let edad1 = parseInt(prompt("Ingrese la primera edad:"));

// let nombre2 = prompt("Ingrese el segundo nombre:");
// let edad2 = parseInt(prompt("Ingrese la segunda edad:"));

// let nombre3 = prompt("Ingrese el tercer nombre:");
// let edad3 = parseInt(prompt("Ingrese la tercera edad:"));

// let mayorEdad = Math.max(edad1, edad2, edad3);

// if (mayorEdad === edad1) {
//     console.log("El mayor es: " + nombre1);
// } else if (mayorEdad === edad2) {
//     console.log("El mayor es: " + nombre2);
// } else {
//     console.log("El mayor es: " + nombre3);
// }


// 12- Realiza un script que genere un número aleatorio entre 1 y 99

// let numeroAleatorio = Math.floor(Math.random() * 99) + 1;
// console.log("El número aleatorio entre 1 y 99 es: " + numeroAleatorio);


// 13- Realiza un script que pida un texto y lo muestre en mayúsculas.

// let texto = prompt("Ingrese un texto:");
// let textoEnMayusculas = texto.toUpperCase();

// console.log("Texto en mayúsculas: " + textoEnMayusculas);

// 14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.

// let texto = prompt("Ingrese una cadena de texto:");
// let textoConGuiones = "";

// for (let i = 0; i < texto.length; i++) {
//     textoConGuiones += texto[i];
//     if (i !== texto.length - 1) {
//         textoConGuiones += "-";
//     }
// }

// console.log("Texto con guiones: " + textoConGuiones);



// 15- Realiza un script que cuente el número de vocales que tiene un texto.

// let texto = prompt("Ingrese un texto:");
// let contadorVocales = 0;

// for (let i = 0; i < texto.length; i++) {
//     let caracter = texto.charAt(i).toLowerCase();

//     if (caracter === 'a' || caracter === 'e' || caracter === 'i' || caracter === 'o' || caracter === 'u') {
//         contadorVocales++;
//     }
// }

// console.log("El texto tiene " + contadorVocales + " vocales.");


// 16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.

// let texto = prompt("Ingrese una cadena de texto:");
// let textoAlReves = "";

// for (let i = texto.length - 1; i >= 0; i--) {
//     textoAlReves += texto.charAt(i);
// }

// console.log("Texto al revés: " + textoAlReves);


// 17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.


// let texto = prompt("Ingrese un texto:");
// let posicion = -1;

// for (let i = 0; i < texto.length; i++) {
//     let caracter = texto.charAt(i).toLowerCase(); 

//     if ('aeiou'.includes(caracter)) {
//         posicion = i;
//         break;
//     }
// }

// if (posicion !== -1) {
//     console.log("La primera vocal está en la posición: " + posicion);
// } else {
//     console.log("No se encontraron vocales en el texto.");
// }

