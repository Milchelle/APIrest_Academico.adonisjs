'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class Disciplina extends ValidatorAbstract {
  get rules () {
    return {
      nome: 'required|max:25',
      horas: 'integer',
      curso_id: 'integer'
      
    }
  }
}

module.exports = Disciplina
