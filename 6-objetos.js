//objetos

/*
// criando o objeto
const Pessoa = {
    nome: "Tiago",
    sobrenome: "Segato",
    idade: 38,
    hobbies: ["futebol", "música", "programação"],
    novaLista: {
        item1: "item1",
        item2: 2
    }
}

// const nome = Pessoa.nome;
// const sobrenome = Pessoa.sobrenome;
// const idade = Pessoa.idade;
// const hobbies = Pessoa.hobbies;

//equivalente ao código acima
const {nome, sobrenome, idade, hobbies} = Pessoa;

console.log(nome, sobrenome, idade, hobbies);

//adicionando um novo item ao objeto
Pessoa.novoItem = "novo item";
console.log(Pessoa);

//acessando um item dentro de um objeto
console.log(Pessoa.novaLista.item2);
*/

//CRIANDO UMA LISTA COM VÁRIOS OBJETOS
const todos = [
    {
        id: 1,
        texto: "Tomar café",
        completo: false
    },
    {
        id: 2,
        texto: "Estudar",
        completo: true
    },
    {
        id: 3,
        texto: "Treinar",
        completo: false
    }
]

console.log(todos);
console.log(todos[2].texto);
