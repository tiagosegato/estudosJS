export default class Usuario {
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

    get nome() {
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
        return `Nome: ${this.nome}, e-mail: ${this.email}`
    }

    //Método Estático
    // são métodos que não dependem de uma instancia nova, dem de um construtor de classe
    // é um método que não depende das prorpiedades da classe - um método de configuração por exemplo...
    static exibirInfos(nome, email) {
        return `${nome} - ${email}`
    }
}
