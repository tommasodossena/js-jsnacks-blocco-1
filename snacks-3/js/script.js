/*
SNACK 3:
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri
inseriti.
*/

// 1 - Inizializzare la variabile somma
var numeri = [];
var somma = 0;

// 2 - Chiedere all'utente di inserire 10 numeri e li sommo
for ( i = 0; i < 10; i++) {
    numeri.push(parseInt(prompt("Inserisci un numero")));
    somma += numeri[i];
}

// 3 - Stampare a schermo la somma dei numeri inseriti
alert("La somma dei valori inseriti è " + somma);