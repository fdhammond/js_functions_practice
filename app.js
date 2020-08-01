/ Si por ejemplo, tengo un codigo que "duplica" un numero. como este:
const numero = 30;
console.log("El doble es :" + (30 * 2));
//Puedo ponerlo en una funcion como esta: 
function duplicarTreinta() {
    return 30 * 2;
}
//Si quisiera que el numero a ser duplicado pueda "variar" puedo parametrizar la funcion
// y convertirla en algo como esto:
function duplicar(numero) {
    return numero * 2;
}
// Así, con una funcion, logramos darle "funcionalidad" a un codigo, que
// varia segun la entrada, y sirve para distintos casos. Vamos a un ejercicio.
//1- Tenemos que darle vida a un personaje de un videojuego. El 
// anterior desarrollador dejó escritas estas dos funciones:
function caminar() {
    console.log("Camine un paso");
}
function caminarDosPasos() {
    console.log("Camine dos pasos");
}
// En ese momento, el personaje solo podia caminar 1 o 2 pasos. 
// Pero ahora, el personaje puede caminar de varios pasos a la vez.
// ¿Podes crear una funcion que "haga lo mismo" pero ahora considere 
// la posibilidad de recibir cuantos pasos caminar?
function caminarX(cantPasos) {
    if (cantPasos > 0) {
        console.log(`Avanzar ${cantPasos} pasos`)
    } else if (cantPasos < 0) {
        console.log(`Retrocede ${cantPasos} pasos`)
    } else {
        console.log("Quieto")
    }
}
//2- El desarrollador dejó esta funcion para retroceder
// si llegaba a ser necesario en algun momento. Pero quedó inutil
// por cambio en reglas de negocio (punto anterior). 
// function retrocederX(cantPasos){
//     console.log(`Retrocede ${cantPasos} pasos`)
// }
// Podrias adaptar la logica de la otra funcion para que 
// contemple la posibilidad de retroceder, si recibe un numero de pasos 
// negativo?
// 3- Este es un codigo que sirve para "pasar una Frase a CamelCase":
//Inicializo una frase
let fraseOriginal = "Hola  como estas";
function pasarCamelCase(frase) {
    //Separo la frase en palabras
    let palabras = frase.split(" ");
    //Aca van a ir las palabras Ya con Mayusculas en la Primer Letra
    let palabrasMayusculas = [];
    //Recorro el arreglo de palabras.
    for (let i = 0; i < palabras.length; i++) {
        //Cada item, es una "palabra"
        let palabra = palabras[i];
        //Si la separacion es un espacio (" ") o de largo nulo, ignoro el caso con "continue"
        if (palabra === " " || palabra.length === 0) continue;
        //Separo la palabra actual por letras
        let letras = palabra.split("");
        //Modifico la primer ubicacion del arreglo (Primer Letra)
        letras[0] = letras[0].toUpperCase();
        //Guardo el arreglo (joineado) en el arreglo FINAL
        palabrasMayusculas.push(letras.join(""))
    }
    //Muestro el arreglo FINAL, JOINEADO
    return palabrasMayusculas.join("")
}
console.log(pasarCamelCase(fraseOriginal))
// ¿Podrias convertirlo en una funcion que reciba una frase y devuelva el texto en CamelCase 
//(Sin espacios y con masyusculas)
//4- Gros@s! Necesitamos crear una funcion que devuelva un string
//invertido. Recibe un string y lo devuelve invertido. Ej:
//Entrada: "Hola"
//Salida: "aloH"
//Podes usar estas herramientas: split / reverse / join 
// Ojo, split es funcion de los strings (textos) y las otras, de arreglos.
let palabra = "Hola"
function invertir(entrada) {
    // return entrada.split("").reverse().join("")
    let arrPalabra = entrada.split("")
    let arrInvertido = arrPalabra.reverse()
    let textoInvertido = arrInvertido.join("")
    return textoInvertido
}
console.log(invertir(palabra))

