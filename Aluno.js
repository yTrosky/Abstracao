//Auno para sistema de gestão escolar
class Aluno{
    constructor(){
        this.id = '';
        this.nome = '';
        this.email = '';
        this.senha = '';
        this.dataNascimento = '';
        this.ano = '';
        this.turma = '';
        this.contrato = '';
    }
    // Métodos
    matricular(){
        console.log('Matriculando');
    }
    estudar(){
        console.log('Estudando');
    }
    fazerProva(){
        console.log('Fazendo prova');
    }
    entregarTrabalho(){
        console.log('Entregando trabalho');
    }   
}