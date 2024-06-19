// Arrays e Objetos

//let numeros = {};
//console.log(typeof numeros);

let cliente = {
    nome: "Fulano",
    idade: 34
};
console.log(`Nome: ${cliente.nome} - Idade: ${cliente.idade}`);

cliente.telefone = "(31) 98033-9090"; // Incluir uma nova chave e valor

console.log(`Nome: ${cliente.nome} - Idade: ${cliente.idade} - Telefone: ${cliente.telefone}`);

delete cliente.idade; // Excluir um valor da chave idade

console.log(`Nome: ${cliente.nome} - Idade: ${cliente.idade} - Telefone: ${cliente.telefone}`);

cliente.nome = "Maria"; // Atualizar o valor setando a chave correspondente

console.log(`Nome: ${cliente.nome} - Idade: ${cliente.idade} - Telefone: ${cliente.telefone}`);