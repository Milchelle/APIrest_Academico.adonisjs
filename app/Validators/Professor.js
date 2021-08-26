'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class Professor extends ValidatorAbstract {
  get rules () {
    return {
      nome: 'required|max:100',
      cpf: 'required|min:10|max:10',
      matricula: 'required|min:20|max:20',
      salario: 'integer',
      email: 'email|max:100',
      telefone: 'max:15'
    }
  }
}

module.exports = Professor
