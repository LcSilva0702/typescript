// never em throw exception

function error(message: string): never {
    throw new Error(message);
}

console.log(error('Eu sou foda'));