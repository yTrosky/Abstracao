//Agendamento para sistema de dentista

class Agendamento{
    constructor(){
        this.id = '';
        this.data = '';
        this.hora = '';
        this.paciente = '';
        this.dentista = '';
    }
    
    // Métodos
    marcar(){
        console.log('Marcando');
    }
    remarcar(){
        console.log('Remarcando');
    }
    cancelar(){
        console.log('Cancelando');
    }
    confirmar(){
        console.log('Confirmando');
    }
}