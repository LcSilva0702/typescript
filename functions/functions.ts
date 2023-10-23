// function (Named function)

function somarNumeros (num1: number, num2: number): number{
    return num1 + num2;
}

const resultado1 = somarNumeros(2, 2);

console.log(resultado1);

// função anônima (Function Expression)

const saudar = function (mensagem: string){
    return mensagem
}

console.log(saudar('Olá Developers!'));

// arrow function

const saudar_03 = (mensagem: string) => {
    return mensagem
}

console.log(saudar_03('Olá Developers!'));

// function construtor

const saudar_04 = new Function ('mensagem', 'return "Fala "+ mensagem ')

console.log(saudar_04("Galera!"));
