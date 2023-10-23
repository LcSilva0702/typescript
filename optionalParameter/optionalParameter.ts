// optional parameter

function informarDadosPessoa(idPessoa: number, nome: string, email?: string){
    console.log(`Id Funcionário: ${idPessoa}, nome: ${nome}`);

    if( email !== undefined){
        console.log(`Email: ${email}`)
    }
}

informarDadosPessoa(1, "Lucas");
informarDadosPessoa(2, "Lucas", "lucas.silva@tikal.tech")

// exemplo 2

function mensagemLog(mensagem: string, usuarioId?: number){
    const horaLog = new Date().toLocaleTimeString();

    console.log(horaLog, mensagem, usuarioId || 'Usuario nao conectado')
}

mensagemLog('Teste');
mensagemLog('Teste', 2)

//exemplo 3

type Pessoa1 = {
    idFuncionario: number;
    nome: string;
    idade?: number;
    email?: string;
};

let pessoa10: Pessoa1;

pessoa10 = {
    idFuncionario: 1234,
    nome: "Lucas",
    idade: 21,
    email: "lucas.silva@tikal.tech"
}

console.log(pessoa10);