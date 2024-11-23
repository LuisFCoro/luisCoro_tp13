/*


// Ejercicio 1

function showNumbers(numeroIngresado){
    for(let i=1; i <= 10; i++){
        console.log(numeroIngresado + i); //Imprimir numeros siguientes
    }
}

showNumbers(50);  // Imprimir en pantalla



// Ejercicio 2

function printEveryThree (){
    console.log("Numeros del 1 al 57, saltando de tres en tres: ");
    for(let i=1;i<=57;i=i+3){
        console.log(i);
    }
}

printEveryThree(); // Imprimir resultado


// Ejercicio 3


function totalSummation(){
    let sumatoria = 0;
    for(let i=0; i<= 100; i++){
        sumatoria= sumatoria + i;
    }
    console.log(`La sumatoria de todos los numeros del 1 al 100 es de: ${sumatoria}`);

}

totalSummation();


// Ejercicio 4


function showToUpperCase(texto) {
    console.log("Letras de la cadena en mayúsculas:");
    for (let i = 0; i < texto.length; i++) {
        console.log(texto[i].toUpperCase());
    }
}

showToUpperCase("mi nombre es luis fernando coro");


// Ejercicio 5

function returnPairs(numeros) {
    const pares = [];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            pares.push(numeros[i]);
        }
    }
    return pares;
}

console.log(returnPairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); 

*/

// Exportar funciones

module.exports = {
    showNumbers,
    printEveryThree,
    totalSummation,
    showToUpperCase,
    returnPairs
    }