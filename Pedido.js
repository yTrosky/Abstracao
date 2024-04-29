//Pedido para sistema de delivery
class Pedido{
    constructor(){
        this.id = '';
        this.valor = '';
        this.endereco = '';
        this.restaurante = '';
        this.entregador = '';
        this.status = '';
        this.frete = '';
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