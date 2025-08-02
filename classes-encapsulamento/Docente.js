import Usuario from "./Usuario.js";

export default class Docente extends Usuario {
    constructor(nome, email, nascimento, tipo = "docente", ativo = "true") {
        super(nome, email, nascimento, tipo, ativo)
    }
    aprovarEstudante(estudante, curso) {
        return `Estudante ${estudante} aprovado(a) no curso ${curso}, pelo docente ${this.nome}`
    }
}

// const novoDocente = new Docente("Tiago", "tiago@gmail.com", "20/12/1986")
// console.log(novoDocente)
// console.log(novoDocente.exibirInfos())
// console.log(novoDocente.aprovarEstudante("Ana", "POO"))