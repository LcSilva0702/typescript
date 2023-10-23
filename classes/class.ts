//classes
export {};

class Pessoa {
    nome: string;
    sobrenome: string

    constructor(nome: string, sobronome: string) {  
        this.nome = nome
        this.sobrenome = sobronome
    }

    nomeCompleto(): string {
        return `${this.nome} ${this.sobrenome}`
    }
}

const pessoa = new Pessoa('Lucas', 'Silva');

console.log(pessoa.nomeCompleto())

// exemplo 2 classes (Sem constructor)

class Estudante {
    codigoEstudante: number;
    nomeEstudante: string; 
}

// Criar um objeto ou a instancia
const estudante = new Estudante();

// Inicializar o objeto:
estudante.codigoEstudante = 8967;
estudante.nomeEstudante = "Lucas da Costa da Silva"

// Acessar os campos 

console.log(estudante.codigoEstudante, estudante.nomeEstudante)

// exemplo 3 classes(Com constructor)

class Estudante_1 {
    codigoEstudante: number;
    nomeEstudante: string;

    // Definir construtor
    constructor(codigoEstudante: number, nomeEstudante: string) {
        this.codigoEstudante = codigoEstudante
        this.nomeEstudante = nomeEstudante
    }

    // Criar metodo 
    listarEstudante(): void {
        console.log(this.codigoEstudante, this.nomeEstudante);
    }
}

// Acessar os campos
const estudante_1 = new Estudante_1(6545645656, "Lucas");

estudante_1.listarEstudante()