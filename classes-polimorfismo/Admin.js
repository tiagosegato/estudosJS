import Usuario from "./Usuario.js";

export default class Admin extends Usuario {
    constructor(nome, email, nascimento, tipo = "admin", ativo = "true") {
        super(nome, email, nascimento, tipo, ativo)
    }

    //Override - sobrescrever o método
    exibirInfos() { //mesma função que tem na classe pai, porém modificada (com outro parâmetro)
        return `Nome: ${this.nome}, e-mail: ${this.email}, é: ${this.tipo}`
    }

    //outra implementação da mesma função
    // exibirInfos() {
    //     const infos = super.exibirInfos() //tem a mesma execução da superclasse
    //     return `${infos} + ${this.tipo}` //+ alguma coisa, que a torna diferente (polimorfo)
    // }

    criarCurso(nomeCurso, qtdVagas) {
        return `Curso ${nomeCurso} criado com ${qtdVagas} vagas, por ${this.nome}`
    }
}
