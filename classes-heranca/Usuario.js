export default class Usuario {
    constructor(nome, email, nascimento, tipo, ativo = true) {//setando ativo como true 
        this.nome = nome
        this.email = email
        this.nascimento = nascimento
        this.tipo = tipo || "estudante" //caso não defina o tipo, será estudante
        this.ativo = ativo
    }
    exibirInfos() {
        return `Nome: ${this.nome}, e-mail: ${this.email}`
    }
}

// const novoUsuario = new Usuario("Maria", "maria@gmail.com", "07/08/1999")
// console.log(Usuario)
// console.log(novoUsuario)
// console.log(novoUsuario.exibirInfos())