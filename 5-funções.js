// Funções 

// Bloco de código contendo instruções que resolvem algum problema específico
// Ações executadas assim que são chamdas ou em decorrência de algum evento
// Pode receber parâmetros e retornar um resultado

//estrutura da função
/*
função nome(parâmetros) {
    // código da função
    retorno resultado;
}

//chamada da função
nome(parâmetros)
*/

//Exemplos
function basica() {
    console.log('Olá, Mundo!');
}
basica();

/*
function sum(a, b) {
    return a + b;
}
console.log(sum(2, 3)); // 5 


//outra maneira de fazer a mesma coisa
function sum2(a, b) {
    console.log(a + b);
}

sum2(2, 3); // 5


//Função dentro de uma variável
let v = function sum(a, b) {
    return a + b;
}

console.log(v(2, 3)); // 5


//arrow function
const sum3 = (a, b) => {
    return a + b;
}

ou 

const sum4 = (a, b) => a + b;

//EXERCÍCIOS

//1 - verificar se o número é par ou ímpar
//2 - criar o fatorial de um número

function parOuImpar(numero) {
    if (numero % 2 === 0) {
        return "O número é par";
    } else {
        return "O número é ímpar";
    }
}

let result = parOuImpar(5);
console.log(resultado); // O número é ímpar

function fatorial(numero) {
    let resultado = 1;
    for (let i = 2; i <= numero; i++) {
        resultado *= i;
    }
    return resultado;
}
*/





