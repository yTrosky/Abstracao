//Personagem para jogo de RPG

class Personagem{
    constructor(){
        this.id = '';
        this.nome = '';
        this.classe = '';
        this.vida = '';
        this.mana = '';
        this.forca = '';
        this.inteligencia = '';
        this.destreza = '';
        this.resistencia = '';
        this.armadura = '';
        this.magia = '';
    }

    // Métodos
    andar(){
        console.log('Andando');
    }
    correr(){
        console.log('Correndo');
    }
    pular(){
        console.log('Pulando');
    }
    atacar(){
        console.log('Atacando');
    }
    defender(){
        console.log('Defendendo');
    }
}