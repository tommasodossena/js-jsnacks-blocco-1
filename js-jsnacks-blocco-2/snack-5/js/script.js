/*
SNACK 5:
Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi casuali all’array che ha meno elementi, fino a quando ne avrà tanti quanti l’altro.
*/


// 1 - Definire gli array
var array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var array2 = [11, 12, 13, 14, 15];

var lArray = [];
var sArray = [];

if ( array1.length > array2.length ) {
    lArray = array1;
    sArray = array2;
} else if ( array2.length > array1.length ) {
    lArray = array2;
    sArray = array1;
} else {
    alert("Gli array hanno la medesima lunghezza.");
}

// 3 - Aggiungere elementi casuali all’array che ha meno elementi
while ( sArray.length < lArray.length) {
    var random = Math.floor(Math.random() * 100);
    sArray.push(random);
}

// 4 - Stampare lunghezza array e array
console.log(lArray.length, sArray.length);
console.log(lArray, sArray);