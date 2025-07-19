//Arrays (vetor) - Variáveis compostas

let num = [1, 2, 3, 4, 5];
console.log(num);

console.log(num[0]); //mostra o primeiro item

//adicionando elementos no array
num[5] = 6;
num.push(6);

//Manipulando as listas
const nomes = ['Tiago', 'Segato', 'Silva', 10, false]

console.log(nomes[1]) //acessa o item x da lista
console.log(nomes.length) //tamanho da lista

nomes[2] = "Le" //altera o item x da lista

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


//Executando a lista num laço de repetição
let num = [1, 2, 3, 4, 5];
for (let pos = 0; pos < num.length; pos++) {
    console.log(num);
}

//ou...
for (let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}


//map, filter e reduce
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

//Usando map
const numerox2 = numbers.map(function (number) {
    return number * 2
})
console.log(numerox2)

//Usando filter
const ages = [15, 20, 25, 30, 35, 40, 45, 50, 55, 60]

const evenAges = ages.filter(function (age) {
    return age % 2 === 0
})
console.log(evenAges)

//Usando reduce
const sumAges = ages.reduce(function (sum, age) {
    return sum + age
})
console.log(sumAges)

