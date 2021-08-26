'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class Escola extends ValidatorAbstract {
  get rules () {
    return {
      nome: 'required|max:140',
      email: 'email|max:140/required'
    }
  }
}

module.exports = Escola
