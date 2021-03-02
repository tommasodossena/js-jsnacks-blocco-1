/*
L’utente inserisce due numeri in successione, con due prompt. 
Il software stampa il maggiore.
*/

// Chiedere all'utente di inserire il primo numero
var first = parseInt(prompt("Inserisci il primo numero"));

// Chiedere all'utente di inserire il secondo numero
var second = parseInt(prompt("Inserisci il secondo numero"));

// Stampare a schermo il numero maggiore
if (first > second) {
    alert ("Il numero più alto è " + first);
} else if (second > first) {
    alert ("Il numero più alto è " + second);
} else {
    alert ("I numeri sono uguali");
}