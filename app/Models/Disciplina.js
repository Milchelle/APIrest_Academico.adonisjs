'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Disciplina extends Model {
    static getCamposCadastro(){
        return ['nome', 'horas', 'curso_id']
    }
}

module.exports = Disciplina
