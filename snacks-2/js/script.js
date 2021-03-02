/*
SNACK 2:
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.
*/

// 1 - Chiedere all'utente di inserire la prima parola
var first = prompt("Inserisci la prima parola");

// 2 - Chiedere all'utente di inserire la seconda parola
var second = prompt("Inserisci la seconda parola");

// 3 - Validazione dati inseriti
if (isNaN(first) && isNaN(second)) {

    // 4 - Stampare a schermo la parola più corta seguita da quella più lunga
    if (first.length > second.length) {
        alert (second + " " + first);
    } else if (second.length > first.length) {
        alert (first + " " + second);
    } else {
        alert ("Le due parole hanno la medesima lunghezza");
    }

} else {
    alert ("Inserisci delle parole, i numeri non sono ammessi.");
    location.reload();
}