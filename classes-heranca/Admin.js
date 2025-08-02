import Usuario from "./Usuario.js";

export default class Admin extends Usuario {
    // não possui atributos específicos
    constructor(nome, email, nascimento, tipo = "admin", ativo = "true") {//indico os atributos que serão usados - todos
        super(nome, email, nascimento, tipo, ativo)
    }
    //herda a função exibirInfos()
    criarCurso(nomeCurso, qtdVagas) {
        return `Curso ${nomeCurso} criado com ${qtdVagas} vagas, por ${this.nome}`
    }
}

// const novoAdmin = new Admin("João", "jao@gmail.com", "10/07/1990")
// console.log(novoAdmin)
// console.log(novoAdmin.exibirInfos())
// console.log(novoAdmin.criarCurso("Javascript Backend", 25))