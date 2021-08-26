'use strict'

const ValidatorAbstract = use('|pp/Validators/ValidatorAbstract')

class Sala extends ValidatorAbstract {
  get rules () {
    return {
      nome: 'required|max:100', 
      capacidade: 'integer',
      tipo: 'required|min:1|max:1'
    }
  }
}

module.exports = Sala
