export {}

// exemplo 1

class Funcionario {
    static contratacoes = 0;

    constructor(private nome: string, private sobrenome: string, private titulo: string){
        Funcionario.contratacoes++
    }
}

const funcionario1 = new Funcionario("Lucas", "Silva", "Developer");
const funcionario2 = new Funcionario("Vanessa", "Costa", "Manicure");
console.log(Funcionario.contratacoes);


// exemplo 2
class Funcionario1 {
    private static contratacoes = 0

    constructor(private nome: string, private sobrenome: string, private titulo: string){
        Funcionario1.contratacoes++
    }

    public static retornarContratacoes(){
        return Funcionario1.contratacoes;
    }
}

const funcionario3 = new Funcionario1("Lucas", "Silva", "Developer");
const funcionario4 = new Funcionario1("Vanessa", "Costa", "Manicure");

console.log(Funcionario1.retornarContratacoes());

// exemplo 3
type Raca = 'Spitz Alemão' | 'Buldogue' | 'Pug' | 'Yorkshire' | 'Poodle' | 'chitzu';

class Cachorro {
    public nome: string;
    public idade: number;
    public racas: Raca[];
    public static QTD_CACHORRO_VENDIDO = 0;

    constructor(nome: string, idade: number, racas: Raca[]){
        this.nome = nome;
        this.idade = idade;
        this.racas = racas;

        Cachorro.QTD_CACHORRO_VENDIDO++;
        console.log(Cachorro.QTD_CACHORRO_VENDIDO)
    }

    public exibirInformacao(): void {
        console.log(`O cachorro ${this.nome} tem ${this.idade}.`);
    }
}

const cachorro1 = new Cachorro("Tailson", 1, ["chitzu"])