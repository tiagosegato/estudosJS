import Usuario from "./Usuario.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

const novoUsuario = new Usuario('Tião', 'tiao@gmail.com', '23/04/1980')//construtor
console.log(novoUsuario)
console.log(novoUsuario.exibirInfos())

//Encapsulamento (corrigido) NÃO cosigo acessar e manipular valores da classe Usuario daqui
//Se chamar o campo nome sem o # aqui, ele entende que é um novo atributo e cria ele
//com o #, indica que é o atributo privado ca classe Usuario e não permite o acesso

// novoUsuario.#nome = 'Mané' //não altero
// console.log(novoUsuario.#nome) //não acesso
// console.log(novoUsuario.exibirInfos())

//const novoAdmin = new Admin("João", "jao@gmail.com", "10/07/1990")
//console.log(novoAdmin.nome) //esse nome está vindo do método get, ou seja não está mais acessando o atributo em si

novoUsuario.nome = "Sebastião" //usando o setter para atribuir um novo valor
console.log(novoUsuario.nome) //usando o getter para acessar e retornar o valor
