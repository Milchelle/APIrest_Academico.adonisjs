'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class TurmaAluno extends ValidatorAbstract {
  get rules () {
    return {
      turma_id: 'integer|required',
      aluno_id:'integer|required'
    }
  }
}

module.exports = TurmaAluno
