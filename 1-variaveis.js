//Primeiro script - Libertando da maldição!
// console.log('Hello, World!');

//VARIÁVEIS - var, let e const

/*
var message = 'Hello, World!';
console.log(message);

var idade = 25 //declarando
console.log(idade) //usando

idade = 26 //reatribuindo
console.log(idade)

var n1, n2 //declarando várias variáveis
n1 = 5
n2 = 2
console.log(n1 + n2)
*/

//var - EVITAR
/*
var nome = "João" //declaração
var nome = "Maria" //redeclaração permitida

nome = "Pedro" //reatribuição permitida

console.log(nome)
*/

//let - valores variáveis
/*
let salario = 5000
// let salario = 4000 //ERRO - não redeclara!

salario = 7000 // OK - reatribuição!

console.log(salario)
*/

//const - valores constantes
/*
const PI = 3.1416
//PI = 3.14 //ERRO - não reatribui

console.log(PI)
*/

//EXEMPLO: Escopo de Bloco
/*
let message = 'Hello, World!';
message = 'Welcome!'; //com const não seria possível
console.log(message);

//Exemplo com a let sendo usada em diferentes contextos/escopos
let mensagem = 'Olá, Mundo!';
{
    let mensagem = 'Bem-vindo!'; //com const tambéms seria possível!
}
console.log(mensagem);
*/


//REGRAS para Identificadores:
/*
Podem começar com letra, $, ou _
Não pode começar com números
Pode combinar letras e números
Não pode conter espaços (_ ou camelCase)
Não podem ser palavras reservadas
Maiúsculas e minúsculas são diferentes
É possível usar símbolos e acentos - NÃO RECOMENDADO
JS é Case Sensitive
Usar nomes coerentes!!!
*/


//TIPOS DE DADOS
//String, Number (Infinity, NaN), Boolean, Null, Undefined, Object, Array e Function

//Strings
/*
"Tiago"
'Segato'
`javascript`
*/

//STRINGS
/*
let nome = "Tiago"
let sobrenome = 'Segato'
let cidade = `Fernandópolis`

console.log(nome + sobrenome) // aqui o + concatena
console.log(nome, sobrenome) // e a , separa

console.log("O nome é: " + nome + " e o sobrenome é: " + sobrenome)
console.log(`O nome é: ${nome} e o sobrenome é: ${sobrenome}`)

let textão = `vou colocar um texto
em várias linhas, só permitido com crase`

//Funções para Strings
console.log(nome.length)
console.log(nome.toLowerCase())
console.log(sobrenome.toUpperCase())
*/

//Funções para Strings (MDN)
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String

//NUMBERS
// 7, 3.14, -15, -0.5

/*
let idade = 38      //Inteiro
let preco = 1.99    //Decimal
let valor = 10 / 0  //Infinity

console.log(idade, preco, valor)
console.log("texto" * 2); //NaN

console.log(`O valor do produto é ${preco}`)
console.log(typeof preco) //para verificar os tipos de dados

console.log(idade + 5)
console.log(typeof idade.toString()) //conversão de tipos

console.log(typeof idade)
*/


//BOOLEAN
//true, false

/*
let ativo = true
let logado = false

// Resultados de comparações são Booleanos
let idade = 28
let maiorIdade = idade >= 18

console.log(maiorIdade) // true
*/


//NULL e UNDEFINED

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

//OBJECT
/*
const carro = {
    marca: "Fusca",
    modelo: "Wolkswagen",
    ano: 69,
    acelerar: function () {
        console.log("Vrumm Vrumm")
    }
}

console.log(carro)
console.log(carro.marca)
carro.acelerar()
*/

//ARRAY
/*
const frutas = ["pera", "uva", "maça"]

console.log(frutas)
console.log(frutas[1])
console.log(frutas.length)

//Funções para Arrays (MDN)
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
*/

//FUNCTION
/*
function somar(n1, n2) {
    return (n1 + n2)
    }

    console.log(somar(3, 4))
    */

//CONVERSÕES DE TIPOS
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
+"42" //Number (atalho)

n.toString()
String(n)

Boolean("texto")  // true
Boolean("")       // false
!!"ok"            // true (atalho)

String(true);     // "true"
String(false);    // "false"
*/

//EXERCÍCIOS

/*
Exiba o nome e sobre nome do estudante. Receber separados, mostrar junto!
O curso que ele faz: "Estudante do curso: ???"
Sua média aritmética baseado em 3 notas.
Por fim exiba se ele está aprovado (true) ou reprovado (false)
*/
let nome = "Tiago"
let sobrenome = "Segato"
let curso = "Javascript"
let n1, n2, n3
n1 = 8
n2 = 9
n3 = 0

let media = (n1 + n2 + n3) / 3
let aprovado = media >= 6
//let aprovado = media >= 6 ? "Aprovado" : "Reprovado"

console.log(nome, sobrenome)
console.log(`Estudante do curso: ${curso}`)
console.log(`Média: ${media.toFixed(2)}`)
console.log('O aluno está: ' + aprovado)

