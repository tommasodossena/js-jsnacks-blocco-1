/*
SNACK 2:
Inserisci un numero, 
se è pari stampa il numero, se è dispari stampa il numero successivo
*/

// 1 - Chiedere all'utente di inserire un numero
do {
    var numero = parseInt(prompt("Inserisci un numero"));
} while ( isNaN(numero) );

// 2 - Se è pari stampare il numero, se è dispari stampare il numero successivo
if ( numero % 2 == 0 ) {
    console.log(numero);
} else {
    console.log(numero + 1);
}
