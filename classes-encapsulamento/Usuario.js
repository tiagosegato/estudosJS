export default class Usuario {
    //protegendo os atributos (privados)
    #nome
    #email
    #nascimento
    #tipo
    #ativo
    constructor(nome, email, nascimento, tipo, ativo = true) {
        this.#nome = nome
        this.#email = email
        this.#nascimento = nascimento
        this.#tipo = tipo || "estudante"
        this.#ativo = ativo
    }

    //Métodos acessores (getters e setters)
    get nome() { //get é um tipo especial de método que é somente leitura
        return this.#nome
    }
    get email() {
        return this.#email
    }
    get nascimento() {
        return this.#nascimento
    }
    get tipo() {
        return this.#tipo
    }
    get ativo() {
        return this.#ativo
    }

    set nome(novoNome) {
        // a vantagem de usar o set é que aqui dentro eu posso fazer uma verificação 
        // para ver quem está acessando e modificando o atributo
        this.#nome = novoNome
    }
    set email(novoEmail) {
        this.#email = novoEmail
    }
    set nascimento(novoNascimento) {
        this.#nascimento = novoNascimento
    }
    set tipo(novoTipo) {
        this.#tipo = novoTipo
    }
    set ativo(novoAtivo) {
        this.#ativo = novoAtivo
    }

    exibirInfos() {
        return `Nome: ${this.nome}, e-mail: ${this.email}` //retira os # para acessar os gets
    }
}

// const novoUsuario = new Usuario("Maria", "maria@gmail.com", "07/08/1999")
// console.log(Usuario)
// console.log(novoUsuario)
// console.log(novoUsuario.exibirInfos())