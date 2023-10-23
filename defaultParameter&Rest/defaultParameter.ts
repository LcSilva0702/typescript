// exemplo 1

function descontoCompra(preco: number, desconto = 0.08 ){
    return preco * (1 - desconto);
};

console.log(descontoCompra(100));

// exemplo 2

function exibirMensagem(mensagem: string, saudar = 'Fala, pessoal!'){
    return saudar + " " + mensagem + "!";
};

console.log(exibirMensagem("Hoje vou termina o type", "AEEEEEEEEEEEEEEEEEE"));

// exemplo 3
function exibirNome (nome: string, sobrenome = "Silva"){
    return nome + " " + sobrenome
}

const resultado_1 = exibirNome("Lucas");
const resultado_2 = exibirNome("Lucas", undefined);
//const resultado_3 = exibirNome("Lucas", "Da Costa Da Silva", "Teste");
const resultado_4 = exibirNome("Lucas", "Silva")

console.log(resultado_1);
console.log(resultado_2);
//console.log(resultado_3);
console.log(resultado_4)