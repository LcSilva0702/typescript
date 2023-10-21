"use strict";
// uso simples de tuplas
let pessoa;
pessoa = ['Lucas', 'Back-End developer', 21];
console.log(pessoa);
//acessando valores de tuplas
let pessoa1;
pessoa1 = ['Lucas', 'Back-End developer', 21];
console.log(pessoa1[1]);
// tuplas com labels
let pessoa2 = ['Lucas', 'Back-End developer', 21];
console.log(pessoa2);
//tuplas com spread operator
let listaFrutas = ['🍍', '🍊', '🍎', '🍉', '🥭'];
console.log(...listaFrutas);
// lista heterogena - tuplas 
let listaFrutas2 = [5, true, ...listaFrutas];
console.log(listaFrutas2);
// Uso de funcao com tuplas
function listarPessoas(nomes, idades) {
    return [...nomes, ...idades];
}
let resultado = listarPessoas(['Nicole', 'Lucas'], [20, 21]);
console.log(resultado);
function criarPessoas(...nome) {
    return [...nome];
}
console.log(criarPessoas("Lucas", "Silva"));
console.log(criarPessoas("Lucas", "Da Costa", "Da Silva"));
