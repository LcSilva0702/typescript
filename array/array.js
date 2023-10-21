"use strict";
// array com colchetes 
let frutas = ["abacaxi", "Uva"];
console.log(frutas[0]);
// array object 
let frutas1 = ["abacaxi", "Uva"];
console.log(frutas[0]);
// array adicionando com push
let idiomas = ["Portugues", "Ingles"];
console.log(idiomas);
idiomas.push('Madarim');
console.log(idiomas);
// array length
let idiomas1 = ["Portugues", "Ingles"];
console.log(idiomas1.length);
// array com lacos de iteracao
let linguagensArray = ['Portugues', 'Ingles', 'Madarim', 'Japones'];
function funcaoLinguagens(linguagens) {
    for (let i = 0; i < linguagens.length; i++) {
        console.log(linguagens[i]);
    }
}
funcaoLinguagens(linguagensArray);
