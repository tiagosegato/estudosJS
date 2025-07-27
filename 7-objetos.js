//OBJETOS
// Objetos são estruturas que permitem armazenar dados em pares de chave-valor.
// Eles são úteis para organizar e manipular dados de forma estruturada.
// Em JavaScript, objetos são criados usando chaves {} e podem conter propriedades e métodos.
// Propriedades são os dados armazenados no objeto, enquanto métodos são funções associadas ao objeto.
// Exemplo de criação de um objeto simples

// const animal = {
//     nome: 'Bob',
//     especie: 'Cachorro',
//     idade: 3
// }

// console.log(animal); //mostra o objeto inteiro

// //acessando as propriedades do objeto por: notação de ponto
// console.log(animal.nome);
// console.log(animal.especie);
// console.log(animal.idade);

// //ou

// console.log(`O animal ${animal.nome}, é um ${animal.especie}, e tem ${animal.idade} anos. `)

//acessando as propriedades do objeto por: notação de colchetes
// console.log(animal['nome']);

// //Acessando os dados por meio de função
// function exibeDadosAnima(objAnimal, dado) {
//     return objAnimal[dado];
// }

// //chamando a função
// console.log(exibeDadosAnima(animal, 'nome'))//precisa passar o objeto e o valor da chave que deseja acessar
// console.log(exibeDadosAnima(animal, 'especie'));

//se você tentar acessar uma propriedade que não existe, o resultado será undefined
//console.log(animal.peso); //undefined

// //adicionando um novo item ao objeto
// animal.peso = 10;
// console.log(animal.peso);

// //alterando um item do objeto
// animal.idade = 4;
// console.log(animal.idade);

// //removendo um item do objeto
// delete animal.especie;
// console.log(animal);

// //criando um objeto vazio
// const carro = {};
// console.log(carro);

// carro.modelo = 'Fusca'
// console.log(carro)


//OBJETOS COMPOSTOS
// Objetos podem conter outros objetos, formando estruturas mais complexas.
// Exemplo de um objeto com outros objetos ou arrays dentro dele 

// criando o objeto
// const pessoa = {
//     nome: "Tiago",
//     sobrenome: "Segato",
//     idade: 38,
//     hobbies: ["futebol", "música", "programação"],
//     endereco: {
//         rua: "Rua Central",
//         numero: 127,
//         complemento: "Apto 101"
//     }
// }

// //acessando um item da lista de hobbies
// console.log(pessoa.hobbies[1]); //música

// //acessando um item do objeto dentro do objeto
// console.log(pessoa.endereco.rua); //Rua Central

// //???
// // const nome = pessoa.nome;
// // const sobrenome = pessoa.sobrenome;
// // const idade = pessoa.idade;
// // const hobbies = pessoa.hobbies;

// //equivalente ao código acima
// const {nome, sobrenome, idade, hobbies} = pessoa;

// console.log(nome, sobrenome, idade, hobbies);

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

//OBJETOS COM FUNÇÕES
// Objetos podem conter funções, que são chamadas de métodos.
// Métodos são funções associadas a um objeto e podem acessar as propriedades do objeto usando a palavra-chave `this`.
// Exemplo de um objeto com um método   
const estudante = {
    nome: "Tiago",
    idade: 38,
    curso: "JavaScript",
    media: 7,
    estaAprovado: function () {
        return this.media >= 6 ? true : false;
    }
}

console.log(estudante.estaAprovado()); //true