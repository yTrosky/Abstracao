//Usuário para rede social
class Usuario{
    constructor(){
    this.nome = '';
    this.id = '';
    this.email = '';
    this.senha = '';
    this.dataNascimento = '';
    this.descricao = '';
    this.foto = '';
    }

    postar(){
        console.log('Postando');
    }
    comentar(){
        console.log('Comentando');
    }
    curtir(){
        console.log('Curtindo');
    }
}