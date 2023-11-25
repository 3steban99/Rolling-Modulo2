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


// 4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.


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

let num = parseInt(prompt("Ingrese un numero"))



if(num >0 && num <50){
    for (let i = num; i >= 1; i--) {
        let linea = '';
    
        for (let j = 1; j <= i; j++) {
            linea += i;
        }
    
        console.log(linea);
    }
}else{
    console.log("Por favor, ingrese un número válido entre 1 y 50.");
}

