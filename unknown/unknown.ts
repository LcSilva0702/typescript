// tipo unknown
let valorVariavel: unknown;

valorVariavel =  true;
valorVariavel = 123;
valorVariavel = [];
valorVariavel = "Oi";

console.log(valorVariavel);

// possiveis erros

let valor: unknown;

//let valor1: boolean = valor;
//let valor2: string = valor; 
//Nunca atribuir o tipo unknown a outro tipo 

// diferenca do any vs unknown

let algumaCoisaAny: any;
let algumaCoisaUnknown: unknown;

console.log(algumaCoisaAny.toFixed(2));
//console.log(algumaCoisaUnknown.toFixed(2));

//correcao de tipo unknown
if(typeof algumaCoisaUnknown === 'number'){
    console.log(algumaCoisaUnknown.toFixed(2));
}