/*
class Pessoa {
    constructor(nome, sobrenome, idade) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }

    falar() {
        console.log(`Meu nome é ${this.nome} ${this.sobrenome}`);
    }

    static apresentar() {
        console.log('Bem vindo!')
    }
}

const pessoa = new Pessoa('Luiz', 'Miranda', 30);
console.log(pessoa);

pessoa.falar();

Pessoa.apresentar();
*/

/*
//HERANÇA
//classe pai    
class Animal {
    constructor(nome) {
        this.nome = nome;
    }

    falar() {
        console.log(`${this.nome} está falando`);
    }
}

//classse filha
class Cachorro extends Animal{
    constructor(nome) {
        super(nome);
    }
    
    latir() {
        console.log(`${this.nome} está latindo`);
    }
}


const animal1 = new Animal('Cachorro');
animal1.falar();


const cachorro = new Cachorro('Bob');
cachorro.falar();//esta usando o metodo falar da classe pai
cachorro.latir();
*/

//export default class Usuario{...} -  caso vá usar essa classe em um arquivo separado (fazer o import nos demais arquivos)
class Usuario {
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

const novoUsuario = new Usuario("Tiago", "tiago@gmail.com", "20/12/1986")
//console.log(Usuario)
//console.log(novoUsuario)
//console.log(novoUsuario.exibirInfos())

//HERANÇA da Classe Admin
class Admin extends Usuario {
    // não possui atributos específicos
    constructor(nome, email, nascimento, tipo = "admin", ativo = "true") {//indico os atributos que serão usados - todos
        super(nome, email, nascimento, tipo, ativo)
    }
    //herda a função exibirInfos()
    criarCurso(nomeCurso, qtdVagas) {
        return `Curso ${nomeCurso} criado com ${qtdVagas} vagas.`
    }
}

const novoAdmin = new Admin("João", "jao@gmail.com", "10/07/1990")
//console.log(novoAdmin)
//console.log(novoAdmin.exibirInfos())
//console.log(novoAdmin.criarCurso("NodeJS", 25))

//HERANÇA da Classe Docente
class Docente extends Usuario {
    constructor(nome, email, nascimento, tipo = "docente", ativo = "true") {
        super(nome, email, nascimento, tipo, ativo)
    }
    aprovarEstudante(estudante, curso) {
        return `Estudante ${estudante} aprovado no curso ${curso}, pelo docente ${this.nome}`
    }
}

const novoDocente = new Docente("Maria", "maria@gmail.com", "07/08/1999")
//console.log(novoDocente)
//console.log(novoDocente.exibirInfos())
//console.log(novoDocente.aprovarEstudante("Tiago", "NodeJS"))



