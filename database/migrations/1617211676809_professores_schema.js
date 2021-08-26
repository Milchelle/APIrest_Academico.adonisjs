'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProfessoresSchema extends Schema {
  up () {
    this.create('professores', (table) => {
      table.increments()
      table.string('nome', 100).notNullable()
      table.bigInteger('cpf').notNullable()
      table.string('matricula', 20).notNullable()
      table.decimal('salario')
      table.string('email', 100)
      table.string('telefone', 15)
      table.timestamps()
    })
  }

  down () {
    this.drop('professores')
  }
}

module.exports = ProfessoresSchema
