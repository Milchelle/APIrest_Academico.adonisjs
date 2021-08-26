'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class Curso extends ValidatorAbstract {
  get rules () {
    return {
      nome: 'required|max:30',
      duracao: 'integer'
    }
  }
}

module.exports = Curso
