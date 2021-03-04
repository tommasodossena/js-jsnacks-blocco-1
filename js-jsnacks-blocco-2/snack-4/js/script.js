/*
SNACK 4:
Crea un array di numeri interi 
e fai la somma di tutti gli elementi che sono in posizione dispari
*/

// 1 - Creare array di numeri interi (da 1 a 100)
var numeri = [];

for ( i=0; i<=100; i++ ) {
    numeri.push(i);
}
// console.log(numeri)

// 2 - Sommare tutti gli elementi che sono in posizione dispari
var somma = 0;

for ( i=0; i<=100; i++) {
    if ( numeri[i] % 2 != 0 ) {
        somma += numeri[i];
    }
}

// 3 - Stampare somma numeri dispari
console.log("La somma dei numeri dispari da 1 a 100 è " + somma);
