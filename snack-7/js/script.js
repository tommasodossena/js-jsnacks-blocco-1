/*
SNACK 7:
Stampa le potenze di 2 fino a 1000.
*/

// 1 - Inizializzo variabile i
var x = 0

// 2 - Ciclo per stampare potenze di 2 fino a 512
while ( (Math.pow(2, x) < 1000) ) {
    console.log(Math.pow(2, x));
    x++
}