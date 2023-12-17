/******************************************************************************
Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, OCaml, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
class Aventureiro {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = 'ataque desconhecido';
        }

        return `o ${this.tipo} atacou usando ${ataque}`;
    }
}

// Obtém entrada do usuário (substitua pelo método gets real)
function gets() {
    return prompt('Digite um valor: ');
}

// Cria uma instância da classe Aventureiro
let tipo = gets();
let nome = gets('jose');
let idade = parseInt(gets('15'));
let heroi = new Aventureiro(nome, idade, tipo);

// Chama o método atacar e exibe a mensagem resultante
let mensagemAtaque = heroi.atacar();
print(mensagemAtaque);

