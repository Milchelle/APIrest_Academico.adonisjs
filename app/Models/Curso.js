'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Curso extends Model {
    static getCamposCadastro(){
        return ['nome', 'duracao']
        
    }
}

module.exports = Curso
