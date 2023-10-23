export {}

// exemplo 1 - public

class Estudante {
    codigoEstudante: number;
    nomeEstudante: string
}

const estudante = new Estudante();
estudante.codigoEstudante = 201;
estudante.nomeEstudante = "Lucas";

console.log(estudante.codigoEstudante, estudante.nomeEstudante);

// exemplo 2 - private
class Estudante_2 {
    codigoEstudante: number;
    nomeEstudante: string;
    private idade: number;

    constructor(codigoEstudante: number, nomeEstudante: string, idade: number){
        this.codigoEstudante = codigoEstudante;
        this.nomeEstudante = nomeEstudante;
        this.idade = idade
    }

    retornarDadosEstudante(){
        return `${this.codigoEstudante}, ${this.nomeEstudante}, ${this.idade}`;
    }
}

const estudante_2 = new Estudante_2(54647684,"Lucas", 21);

console.log(estudante_2.retornarDadosEstudante());

// exemplo 3 - protected

class Estudante_3 {
    codigoEstudante: number;
    protected nomeEstudante: string;

    constructor(codigoEstudante: number, nomeEstudante: string){
        this.codigoEstudante = codigoEstudante
        this.nomeEstudante = nomeEstudante
    }   
}

class Pessoa extends Estudante_3 {
    private curso: string

    constructor(codigoEstudante: number, nomeEstudante: string, curso: string) {
        super(codigoEstudante, nomeEstudante);
        this.curso = curso        
    }

    retornarDadosAlunos(){
        return `${this.codigoEstudante}, ${this.nomeEstudante}, ${this.curso}`
    }
}

const estudante_3 = new Pessoa(45645456,"45645", "1454545")
console.log(estudante_3.retornarDadosAlunos());


// readonly

class Funcionario {
    readonly dataNascimento: Date;

    constructor(dataNascimento: Date) {
        this.dataNascimento = dataNascimento;
    }
}

const funcionario = new Funcionario(new Date(2002, 6, 2))
// funcionario.dataNascimento = new Date(2002, 6, 2)

// exemplo 2

class Funcionario_2 {
    constructor(readonly dataNascimento: Date){
        this.dataNascimento = dataNascimento
    }
}

// exemplo 3

class Funcionario_3{
    nome: string;
    readonly codigoFunciona: number

    constructor(nome: string, codigoFunciona: number){
        this.nome = nome;
        this.codigoFunciona = codigoFunciona
    }
}

const func = new Funcionario_3("Lucas", 4454654654);
func.nome = "LC"
//func.codigoFunciona = 4747488

// exemplo 4 com readonly

interface IFuncionario {
    codigoFuncionario: number;
    nomeEmpregado: string;
} 

const funcionario1: Readonly<IFuncionario> = {
    codigoFuncionario: 5485,
    nomeEmpregado: "Lucas"
}

//funcionario1.codigoFuncionario = 456655

const funcionario2: IFuncionario = {
    codigoFuncionario: 5645645,
    nomeEmpregado: "Lucas"
}