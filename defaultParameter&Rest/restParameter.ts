// exemplo 1

function somarNumeros(...numeros : number[]){
    let total = 0

    numeros.forEach((numero) => (total += numero))

    return total;
}

console.log(somarNumeros(10,54,64,56,456,4,56,4654,54,65,465,4,54,5));

// exemplo 2

class Produtos {
    public exibirProdutos (...produtos: string[]): void{
        for (const produto of produtos) {
            console.log(produto);
        }
    }
}

const departamentoInformatica: Produtos = new Produtos();

console.log('Todos os produtos do departamento:');

departamentoInformatica.exibirProdutos(
    'Mouse',
    'Teclado',
    'pen-drive'
)