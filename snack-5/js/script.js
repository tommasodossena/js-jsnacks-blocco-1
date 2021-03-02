/*
SNACK 5:
Crea un array vuoto. 
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.
*/

// 0 - Creare array vuoto
var array = [];

// 1 - Inizializzare variabile number
var number;

// 2 - Chiedere all'utente di inserire 6 volte un numero e verificare se è dispari
for ( i = 0; i < 6; i++) {
    number = (parseInt(prompt("Inserisci un numero")));
    if ( !isNaN(number) && number % 2 == 1 ) {
        array.push(number);
    }
}

// 3 - Stampare a schermo array
alert(array);
