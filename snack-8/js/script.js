/*
SNACK 8:
Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che compongono il numero.
*/

// 1 - Chiedere all'utente di inserire un numero di 4 cifre
do {
    var numero = prompt("Inserisci un numero di 4 cifre")
} while (numero.length != 4);

// 2 - Inizializzare somma 
var somma = 0;

// 3 - Calcolare somma cifre numero [i]
for ( i = 0; i < numero.length; i++ ) {
    somma += parseInt(numero[i]);
}

// 4 - Stampare in console somma cifre numero
console.log(somma);



