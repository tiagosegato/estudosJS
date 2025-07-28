//JSON - JavaScript Object Notation
// É uma forma de representar dados estruturados em texto, muito utilizada para troca de informações entre sistemas.
// JSON é baseado em dois formatos: objetos (chave-valor) e arrays (listas).
// É fácil de ler e escrever, tanto para humanos quanto para máquinas.
// Em JavaScript, podemos converter objetos e arrays para JSON e vice-versa usando JSON.stringify e JSON.parse. 

//sintaxe JSON  
// - não são atribuídos a variáveis (nome do arquivo descreve o objeto)
// - não é considerado um tipo de dado válido em JavaScript 
// - tanto chaves quanto valores ficam entre "" (aspas duplas sempre)
// - os valores devem ser tipos de dados válidos (string, number, object, array, boolean ou null)
// - Não pode conter funções ou comentários    

// Exemplo de JSON -  todo list 
/*
[
    {
        "id": 1,
        "texto": "Tomar café",
        "completo": false
    },
    {
        "id": 2,
        "texto": "Estudar",
        "completo": true
    },
    {
        "id": 3,
        "texto": "Treinar",
        "completo": false
    }
]
*/

/*
//importando o json
//import estudante from './estudante.json'; //mais comum
const estudante = require('./estudante.json'); //nativo do node, já converte o arquivo em objeto
console.log(estudante);

//convertendo objeto em String JSON 
const stringEstudante = JSON.stringify(estudante);
console.log(stringEstudante);
console.log(typeof stringEstudante);
console.log(stringEstudante.nome); //não consigo acessar o nome do estudante, pois agora é uma string

//convertendo String em objeto
const objetoEstudante = JSON.parse(stringEstudante);
console.log(objetoEstudante);
console.log(typeof objetoEstudante);
console.log(objetoEstudante.nome); //acessando o nome do estudante
*/

/*
const estudantes = require('./estudantes.json'); //importando o json
//console.log(estudantes);

//função para localizar item na lista de objetos
function listaEstudante(lista, chave, valor) { //lista = lista de objetos do json, chave = chave e valor = valor
    return lista.find((estudante) => estudante[chave].includes(valor));
}

const estudanteListado = listaEstudante(estudantes, 'nome', 'Juliet');
console.log(estudanteListado); 
*/