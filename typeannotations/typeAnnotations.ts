// => Variaveis [Type annotations]
let nome: string = "Lucas";
console.log(nome)

// => Array 
let animais: string[] = ["Elefante", "Cachorro"];
console.log(animais)


// => Objeto 
let carro: {
    nome: string;
    ano: number;
    preco: number
}

carro = {nome: "Toyota", ano: 2019, preco: 80.000};

console.log(carro);

// => function 

function multiplicarNumero(num1: number,  num2: number){
    return num1 * num2;
}

console.log(multiplicarNumero(2,5))