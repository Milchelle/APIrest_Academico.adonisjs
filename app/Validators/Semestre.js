'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class Semestre extends ValidatorAbstract {
  get rules () {
    return {
      nome: 'required|100',
      data_inicio: 'date|required',
      date_fim: 'date|required'
    }
  }
}

module.exports = Semestre
