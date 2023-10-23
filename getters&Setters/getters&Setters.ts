export {}

//exemplo 1

class Quadrado {
    private largura = 6;
    private altura = 12;

    get calcularQuadrado(){
        return this.altura * this.largura;
    }
}

console.log(new Quadrado().calcularQuadrado)

// exemplo 2 - set

class Pessoa {
    nome: string;


    retornarNomePessoa(setNomePessoa: string){
        this.nome = setNomePessoa
    }
}

const pessoa = new Pessoa();
pessoa.retornarNomePessoa('Lucas da Costa da Silva');
console.log(pessoa.nome);

// Exemplo 2 Get [Mais complexo]

class Estudante {
    private nome = "Lucas Silva";
    private semestre: number;
    private curso: string;

    public get nomeEstudante(){
        return this.nome;
    }
}

const estudante = new Estudante();
const resultado = estudante.nomeEstudante;
console.log(resultado);


// Exemplo 4 - Set/Get [Mais complexo]

class Estudante2 {
    nome: string;
    semestre: number;
    curso: string;

    constructor(nomeEstudante: string, semestreEstudante: number, cursoEstudante: string){
        this.nome = nomeEstudante;
        this.semestre = semestreEstudante;
        this.curso = cursoEstudante
    }

    public get cursos() {
        return this.curso;
    }

    public set cursos(setCurso: string){
        this.curso = setCurso;
    }   
}

const estudante2 = new Estudante2("Lucas Silva", 3 , "Sistema da informação");
console.log(estudante2)

// setter call
estudante2.curso = "Analise e de sistemas";

// getter call
console.log(estudante2.cursos)
