//Grupo de rede social
class Grupo{
    constructor(){
        this.nome = '';
        this.membros = [];
        this.mensagens = [];
        this.fotos = [];
        this.arquivos = [];
    }
    //Métodos
    adicionarMembro(){
        console.log('Adicionando membro...');
    }
    enviarMensagem(){
        console.log('Enviando mensagem...');
    }
    enviarFoto(){
        console.log('Enviando foto...');
    }
    enviarArquivo(){
        console.log('Enviando arquivo...');
    }
    removerMembro(){
        console.log('Excluindo membro...');
    }
    
}