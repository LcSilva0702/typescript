// uso simples de tuplas

let pessoa: [string, string, number];
pessoa = ['Lucas', 'Back-End developer', 21];

console.log(pessoa);

//acessando valores de tuplas
let pessoa1: [string, string, number];
pessoa1 = ['Lucas', 'Back-End developer', 21]

console.log(pessoa1[1]);

// tuplas com labels
let pessoa2: [nome: string, cargo: string, idade: number] = ['Lucas', 'Back-End developer', 21];

console.log(pessoa2);

//tuplas com spread operator
let listaFrutas: [string, ...string[]] = ['🍍', '🍊', '🍎', '🍉', '🥭'];

console.log(...listaFrutas);

// lista heterogena - tuplas 

let listaFrutas2: [Number, boolean, ...string[]] = [5, true, ...listaFrutas];

console.log(listaFrutas2)

// Uso de funcao com tuplas

function listarPessoas(nomes: string[], idades: number[]) {
    return [...nomes, ...idades]
}

let resultado = listarPessoas(['Nicole', 'Lucas'], [20,21])

console.log(resultado);

// labeled tuples com Spread Operator numa funcao 

type Nome = 
    | [primeiroNome: string, sobrenome: string]
    | [primeiroNome: string, nomeDoMeio: string, sobrenome: string]

function criarPessoas(...nome: Nome){
    return [...nome];
}

console.log(criarPessoas("Lucas", "Silva"));
console.log(criarPessoas("Lucas", "Da Costa", "Da Silva"))