'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class Turma  extends ValidatorAbstract{
  get rules () {
    return {
     codigo: 'required|max:10',
     turno: 'required|min:1|max:1',
     professor_id:'integer|required',
     disciplina_id: 'integer|required',
     sala_id: 'integer|required',
     semestre_id:'integer|required'

    }
  }
}

module.exports = Turma
