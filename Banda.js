//Banda para serviço de streaming 
class Banda{
    constructor(){
        this.nome = '';
        this.genero = '';
        this.ano = '';
        this.integrantes = [];
        this.musicas = [];
    }
    // Métodos
    tocar(){
        console.log('Tocando');
    }
    pausar(){
        console.log('Pausando');
    }
    compartilhar(){
        console.log('Compartilhando');
    }
}