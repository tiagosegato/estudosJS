//Primeiro script - Libertando da maldição!
//console.log('Hello, World!');

/*
var message = 'Hello, World!';
console.log(message);

var n1, n2
n1 = 5
n2 = 2
console.log(n1 + n2)
*/

//Identificadores:
/*
Podem começar com letra, $, ou _
Não pode começar com números
Pode combinar letras e números
É possível usar símbolos e acentos
Não pode conter espaços (_ ou camelCase)
Não podem ser palavras reservadas
Maiúsculas e minúsculas são diferentes
Usar nomes coerentes
JS é Case Sensitive!!!
*/

//let

/*
let message = 'Olá, Mundo!';
var message = 'Bem-vindo!'; //com const não seria possível
console.log(message);


//Exemplo com a let sendo usada em diferentes contextos
let message = 'Olá, Mundo!';
{
    let message = 'Bem-vindo!'; //com const não seria possível
}
console.log(message);


//Tipos de Dados:
//String, Number (Infinity, NaN), Boolean, Null, Undefined, Object (Array), Function
*/

//Strings
/*
"Tiago"
'Segato'
`javascript`
*/

//Strings
/*
let nome = "Tiago"
let sobrenome = 'Segato'
let cidade = `Fernandópolis`

console.log(nome + sobrenome)
console.log(nome, sobrenome)
console.log("O nome é: " + nome + " e o sobrenome é: " + sobrenome)
console.log(`O nome é: ${nome} e o sobrenome é: ${sobrenome}`)
*/

//Funções
/*
console.log(nome.length)
console.log(nome.toLowerCase())
console.log(sobrenome.toUpperCase())
*/

// mais funções em MDN...
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String#m%C3%A9todos

//Numbers
//7, 3.14, -15, -0.5

/*
let idade = 38
let preco = 1.99
let valor = 10 / 0

console.log(`O valor do produto é ${preco}`)
console.log(typeof idade)
console.log("texto" * 2);

console.log(idade + 5)
console.log(typeof idade.toString())

console.log(typeof idade)
*/


//Boolean
//true, false

/*
let ativo = true
let logado = false

let idade = 8

let maiorIdade = idade >= 18

console.log(maiorIdade)
*/


//Null e Undefined

/*
const x = null //esse está vazio
const y = undefined //esse não foi definido

let usuario = null
let senha     //undefined

usuario = 'tiagosegato'
senha = '123456'

console.log(usuario)
console.log(senha)
*/


//Conversões de Tipo
/*
let num = "10"
let numero = Number(num)

let val = 123
let valor = String(val)

console.log(typeof num)
console.log(typeof numero)
console.log(typeof val)
console.log(typeof valor)

Number.parseFloat(n)
Number.parseInt(n)
Number(n)

n.toString()
String(n)
*/