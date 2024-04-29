//Carro para sistema de auguel de carros
class Carro{
    constructor(){
        this.placa = '';
        this.marca = '';
        this.modelo = '';
        this.ano = '';
        this.cor = '';
        this.tipo = '';
    }

    // Métodos
    ligar(){
        console.log('Ligando');
    }
    desligar(){
        console.log('Desligando');
    }
    acelerar(){
        console.log('Acelerando');
    }
    frear(){
        console.log('Freando');
    }
    trocarMarcha(){
        console.log('Trocando marcha');
    }
}