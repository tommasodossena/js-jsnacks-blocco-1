/*
SNACK 1:
Il software deve chiedere per 5 volte all’utente di inserire un
numero. Il programma stampa la somma di tutti i numeri
inseriti. Esegui questo programma in due versioni, con il for
e con il while.
*/

// 0 - Inizializzo array numeri
var numero;
var somma = 0;

// 1A for - Chiedere all'utente di inserire un numero ( x 5 volte ) 
// for ( i = 1; i <= 5 ; i++ ) {
//     numero = parseInt(prompt("Inserisci un numero"));
//     somma += numero;
// }

// 1B while - Chiedere all'utente di inserire un numero ( x 5 volte )
var i = 1;

while ( i <= 5) {

    do {
        numero = parseInt(prompt("Inserisci il " + i + "° numero"));
    } while ( isNaN(numero) );

    somma += numero;
    i++;
}

// 2 - Stampare a schermo somma
console.log("La somma dei numeri inseriti è " + somma);



