/*
SNACK 6:
Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.
*/

// 1 - Chiedere all'utente un numero N + validazione
do {
    var numero = parseInt(prompt("Scrivi un numero"));
} while (isNaN(numero));

// 2 - Ciclo per stampare il cubo di tutti i numeri prima di N (compreso)
for ( i = 1; i <= numero; i++ ) {
    console.log(Math.pow(i, 3));
}