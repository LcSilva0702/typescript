// exemplo basico object

const pessoa = {
    nome: "Lucas",
    sobrenome: "Silva",
    idade: "21",
    funcao: "Back-end developer"
}

console.log(pessoa);

// object com parametros de função 

function onboarding01(funcionario: { nome: string }){
    return "Seja bem-vindo " + funcionario.nome
}

console.log(onboarding01({ nome: 'Lucas Silva'}));

//object nomeados

interface Pessoa {
    nome: string;
    funcao: string;
}

function onboarding02(pessoa: Pessoa){
    return (
        'Seja bem-vindo ' +
        pessoa.nome +
        '! ' +
        'Sua função aqui na empresa será ' +
        pessoa.funcao
    )
}

console.log(onboarding02({ nome: "Lucas Silva", funcao: "Desenvolvedor Back-End" }));

// object com type alias

type Pessoa03 = {
    nome: string,
    funcao: string,
    linguagem: string
}

function onboarding03(pessoa: Pessoa03){
    return (
        'Seja bem-vindo ' +
        pessoa.nome +
        '! ' +
        'Sua função aqui na empresa será ' +
        pessoa.funcao +
        " você trabalhará com a linguagem " +
        pessoa.linguagem
    )
}

console.log(onboarding03({ nome: "Lucas Silva", funcao: "Desenvolvedor Back-End", linguagem: "TS/JS"}));


// Usando optional no object

interface Pessoa04 {
    nome: string;
    funcao: string;
    linguagem: string;
    email?: string
}

function onboarding04(pessoa: Pessoa04){
    return (
        'Seja bem-vindo ' +
        pessoa.nome +
        '! ' +
        'Sua função aqui na empresa será, ' +
        pessoa.funcao +
        " você trabalhará com a linguagem. " +
        pessoa.linguagem
    )
}

console.log(onboarding03({ nome: "Lucas Silva", funcao: "Desenvolvedor Back-End", linguagem: "TS/JS"}));


// propriedade "readonly" (Se deseja proibir que os devs não modifiquem um determinando objeto use o readonly)

interface Pessoa05 {
    nome: string;
    funcao: string;
    linguagem: string;
    readonly email: string
}

function onboarding05(pessoa: Pessoa05){
    return (
        'Seja bem-vindo ' +
        pessoa.nome +
        '! ' +
        'sua função aqui na empresa será ' +
        pessoa.funcao +
        " você trabalhará com a linguagem " +
        pessoa.linguagem +
        " seu e-mail será " +
        pessoa.email
    )
}

console.log(onboarding05({ nome: "Lucas Silva", funcao: "Desenvolvedor Back-End", linguagem: "TS/JS", email: "lucas.silva@tikal.tech"}));


// tipos de extensões herança

interface Mae {
    nome: string;
}

interface Pai {
    sobrenome: string;
}

interface Filha extends Mae, Pai{
    idade: number;
}

const filha: Filha = {
    nome: 'Lucas',
    sobrenome: 'Silva',
    idade: 21
}

console.log(filha);

// Tipos de interseções

interface Cachorro {
    tipo: string
}

interface Gato {
    tipo: string
}

type Animal = Cachorro & Gato;

// Generic objects

type Usuario = {
    nome: string;
    email: string;
}

type Admin = {
    nome: string;
    email: string;
    admin: true;
}

const usuario: Usuario = {
    nome: 'Lucas',
    email: 'lucas.silva@tikal.tech'
}

const admin: Admin = {
    nome: "Lucas",
    email: "lucas.silva@tikal.tech",
    admin: true
}

function acessarSistema<T>(usuario: T): T{
    return usuario
}

console.log(acessarSistema<Usuario>(usuario));
console.log(acessarSistema<Admin>(admin));

// function acessarSistema(usuario: Usuario): Usuario{
//     return usuario
// }

// console.log(acessarSistema(usuario));