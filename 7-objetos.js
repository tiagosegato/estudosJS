//OBJETOS
// Objetos são estruturas que permitem armazenar dados em pares de chave-valor.
// Eles são úteis para organizar e manipular dados de forma estruturada.
// Em JavaScript, objetos são criados usando chaves {} e podem conter propriedades e métodos.
// Propriedades são os dados armazenados no objeto, enquanto métodos são funções associadas ao objeto.
// Exemplo de criação de um objeto simples

let animal = {
    nome: 'Bob',
    especie: 'Cachorro',
    idade: 3
}

// console.log(animal); //mostra o objeto inteiro

// //acessando as propriedades do objeto por: notação de ponto
// console.log(animal.nome);
// console.log(animal.especie);
// console.log(animal.idade);

// //ou

// console.log(`O animal ${animal.nome}, é um ${animal.especie}, e tem ${animal.idade} anos. `)

//acessando as propriedades do objeto por: notação de colchetes
console.log(animal['nome']);

//Acessando os dados por meio de função
function exibeDadosAnima(objAnimal, dado) {
    return objAnimal[dado];
}

console.log(exibeDadosAnima(animal, 'especie'));






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
/*
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
*/
