import Usuario from "./Usuario.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

const novoUsuario = new Usuario('Tião', 'tiao@gmail.com', '23/04/1980')
console.log(novoUsuario)
console.log(novoUsuario.exibirInfos())

//Encapsulamento (problema) cosigo acessar e manipular valores da classe Usuario daqui
novoUsuario.nome = 'Mané'
console.log(novoUsuario.exibirInfos())
console.log(novoUsuario.nome) 