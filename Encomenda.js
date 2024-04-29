//Encomenda para sistema de frete
class Encomenda{
    constructor(){
        this.id = '';
        this.peso = '';
        this.altura = '';
        this.largura = '';
        this.comprimento = '';
        this.valor = '';
        this.destino = '';
        this.origem = '';
    }

    // Métodos
    calcularFrete(){
        console.log('Calculando frete');
    }
    rastrear(){
        console.log('Rastreando');
    }
    enviar(){
        console.log('Enviando');
    }
    receber(){
        console.log('Recebendo');
    }
}