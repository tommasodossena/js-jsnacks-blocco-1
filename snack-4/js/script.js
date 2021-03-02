/*
SNACK 4:
In un array sono contenuti i nomi degli invitati alla festa del grande Inzaghi, 
chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
*/

// 0 - Array lista invitati
var list = ["Samuele", "Tommaso", "Pippo", "Franco"];

// 1 - Chiedi all'utente il suo nome
var nome = prompt("Inserisci il tuo nome");

// 2 - Valore standard controllo
var check = false;

// 3 - Ciclo controllo invitati lista
for (var i = 0; i < list.length; i++) {
    if ( nome.toLowerCase() == list[i].toLowerCase() ) {
        check = true;
    }
}

// 4 - Stampa a schermo se può partecipare o no alla festa.
if ( check == true ) {
    alert("Puoi entrare");
} else {
    alert("Non puoi entrare");
}

