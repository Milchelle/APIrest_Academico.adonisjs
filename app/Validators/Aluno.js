'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class Aluno extends ValidatorAbstract{
  get rules () {
    return {
      nome: 'required|max:50',
      cpf: 'min:14|max:14',
      data_nascimento: 'date',
      matricula: 'max:10|required',
      email: 'email|:100',
      telefone: 'max:15|required',
      cep: 'max:8',
      logradouro: 'max:100',
      complemento: 'max:100',
      bairro: 'max:100',
      UF: 'min:2|max:2',
      municipio: 'integer'

    }
  }
}


module.exports = Aluno
