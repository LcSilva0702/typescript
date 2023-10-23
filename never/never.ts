// never em throw exception

function error(message: string): never {
    throw new Error(message);
}

console.log(error('Eu sou foda'));


//never inferido automaticamente

function rejectMessage(){
    return error('Mensagem de erro - 2');
}

console.log(rejectMessage());

//função com loop infinito retorna uma variavel tipo never

const loopInfinito = function loop(){
    while (true){
        console.log('Oi, Developers!')
    }
}

console.log(loopInfinito())

// Diferença entre o void e o never

const algumaCoisaVoid: void = null;

const algumaCoisaNever: never = null;

console.log(algumaCoisaVoid);
console.log(algumaCoisaNever);