//Arrays (vetor) - Variáveis compostas
/*
const num = [1, 2, 3, 4, 5];

console.log(num);
console.log(num[0]);

//adicionando elementos no array
num[5] = 6;
console.log(num);

num.push(7);
console.log(num);
*/

/*
//Manipulando as listas
const nomes = ['Tiago', 'Segato', 'Silva', 10, false]

console.log(nomes[1]) //acessa o item x da lista
console.log(nomes.length) //tamanho da lista

nomes[2] = "Alessandra" //altera o item x da lista
console.log(nomes)

nomes.push('Ferro') //adiciona um item no final lista
console.log(nomes)

nomes.pop() //remove o último item da lista
console.log(nomes)

nomes.splice(2, 1) //remove o item da posição 2 da lista e apenas 1 elemento da lista
console.log(nomes)

nomes.shift() //remove o primeiro item da lista
console.log(nomes)

nomes.unshift('Tiago') //adiciona um item no início da lista
console.log(nomes)

console.log(nomes.indexOf('Segato')) //retorna o índice do item na lista

//Para saber mais (MDN):
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array
*/

/*
//Executando a lista num laço de repetição
let num = [10, 20, 30, 40, 50];
for (let pos = 0; pos < num.length; pos++) {
    console.log(num[pos]);
}

//ou...
for (let pos of num) { //pos acessa os valores diretamente
    console.log(pos)
}
*/

/*
//forEach
let compras = [10, 1.99, 100, 20.12];
let total = 0

compras.forEach(function (valor) { //Função de callback
    total = total + valor; // valor representa cada item do for (forEach)
});

//compras.forEach(valor => total += valor); //função como arrow function

console.log(`A soma das compras é ${total.toFixed(2)}`)
*/

/*
//map, filter e reduce
const idades = [15, 20, 25, 30, 35, 40, 45, 50, 55, 60]

//Usando map: Transforma cada elemento e retorna um novo array com os resultados (mesmo tamanho do original).
const idadex2 = idades.map(function (idade) {
    return idade * 2 // A diferença para o forEach é que o map tem o return
})

//const idadex2 = idades.map((idade) => idade * 2);// versão com arrow functions

console.log(idadex2)

//Usando filter: Filtra elementos com base em uma condição e retorna um novo array só com os que atendem (pode ser menor).
const idadePar = idades.filter(function (idade) {
    return idade % 2 === 0 // retorna um novo array com itens baseados na condição (idades pares)
})
console.log(idadePar)

//Usando reduce: Reduz o array a um único valor acumulando resultados (ex.: soma total).
const somaIdades = idades.reduce(function (soma, idade) { //sempre vai ter um acumulador (soma) e o valor atual (idade)
    return soma + idade //reduz o array em um único valor
})
console.log(somaIdades)
*/

//RESUMINDO...
// map → Transforma e mantém o tamanho.
// filter → Seleciona e pode reduzir o tamanho.
// reduce → Agrega em um valor único (mais flexível, mas complexo).

