// Numeric enums

enum Idioma {
    Portugues,
    Espanhol,
    Ingles,
    Frances
}

console.log(Idioma);

// string enums

enum Dia {
    Segunda = 'SEG',
    Terca = 'TER',
    Quarta = 'QUA',
    Quinta = 'QUI',
    Sexta = 'SEX',
    Sabado = 'SAB',
    Domingo = 'DOM'
}

console.log(Dia)

// Como podemos acessar um valor de um Enum com uma chave: (usando const)

const enum Comida {
    Hamburguer,
    Massa,
    Pizza,
    Torta,
    Churrasco
}

function comida(c: Comida){
    return "Comidas muito apetitosas:"
}

console.log(comida(Comida.Pizza));
//console.log(comida(5))

// Quando usar Enums

enum Tarefa {
    Todo,
    Progress,
    Done,
}

const concluidaTarefa = {
    id: 1,
    status: Tarefa.Done,
    descricao: "Parabens! Tarefa concluida com sucesso!"
}

if(concluidaTarefa.status == Tarefa.Done){
    console.log('Enviar E-email: Tarefa Concluida');
}

