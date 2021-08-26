'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SemestresSchema extends Schema {
  up () {
    this.create('semestres', (table) => {
      table.increments()
      table.string('nome', 100).notNullable()
      table.date('data_inicio').notNullable()
      table.date('date_fim').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('semestres')
  }
}

module.exports = SemestresSchema
