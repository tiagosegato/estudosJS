import Usuario from "./Usuario.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

const novoUsuario = new Usuario('Tião', 'tiao@gmail.com', '23/04/1980') //construtor
console.log(novoUsuario.exibirInfos())

const novoAdmin = new Admin('Mário', 'mario@gmail.com', '15/09/1999')
console.log(novoAdmin.exibirInfos())

//Usando o método estático, sem instanciar um novo objeto
const dadosFicticios = Usuario.exibirInfos('José', 'zeh@gmail.com')
console.log(dadosFicticios)