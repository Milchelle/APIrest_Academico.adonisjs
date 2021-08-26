'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Turma extends Model {
    static getCamposCadastro(){
        return ['codigo', 
        'turno', 
        'professor_id', 
        'disciplina_id', 
        'sala_id', 
        'semestre_id' ]
    }
}

module.exports = Turma
