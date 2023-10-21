// tipo any

const a: any = 888;
const b: any = ["Lucas"];

const result = a + b;

console.log(result);

// Quando o tipo 'any' e inferido implicitamente
let frase;
frase = 'Oi pessoal'

console.log(frase);

// Quando devemos usar o tipo any?

const formulario: {[campoFormulario: string]: any} = {
    nome: "Lucas",
    sobrenome: "Silva",
    idade: 21
}

console.log(formulario);