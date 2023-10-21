// array com colchetes 

let frutas: string[] = ["abacaxi", "Uva"]

console.log(frutas[0]);

// array object 

let frutas1: Array<string> = ["abacaxi", "Uva"]

console.log(frutas[0]);

// array adicionando com push

let idiomas: Array<string> = ["Portugues", "Ingles"];
console.log(idiomas)
idiomas.push('Madarim')
console.log(idiomas)

// array length

let idiomas1: Array<string> = ["Portugues", "Ingles"];
console.log(idiomas1.length);

// array com lacos de iteracao

let linguagensArray: Array<string> = ['Portugues', 'Ingles', 'Madarim', 'Japones'];

function funcaoLinguagens(linguagens:string[]){
    for (let i = 0; i < linguagens.length; i++) {
        console.log(linguagens[i])
    }
}

funcaoLinguagens(linguagensArray)