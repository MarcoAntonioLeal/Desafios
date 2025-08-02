class monstro {
    constructor(nome, tipo, nivel, habilidade) {
        this.nome = nome
        this.tipo = tipo
        this.nivel = nivel
        this.habilidade = habilidade
    }
}

console.log(new monstro('charmander', 'fogo', 30, 'Bola de fogo'))