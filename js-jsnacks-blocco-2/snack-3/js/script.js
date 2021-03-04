/*
SNACK 3:
Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, 
Gatsby vuole generare una falsa lista di 3 invitati.
*/


// 1 - Array nomi e cognomi
var nomi = ["Alessio", "Luca", "Marco"];
var cognomi = ["Brambilla", "Ferrari", "Rossi"];
var invitati = [];

// 2 - Inizializzare variabili nome e cognome
var nome;
var cognome;

// 3 - Ciclo per stampare 3 “nomi cognomi” casuali dentro una lista
    for ( i = 1; i <= 3; i++ ) {

        nome = nomi[Math.floor(Math.random() * nomi.length)];
        cognome = cognomi[Math.floor(Math.random() * cognomi.length)];
        
        invitati.push(nome + " " + cognome)

    }

// 4 - Stampare array invitati 
console.log(invitati);





