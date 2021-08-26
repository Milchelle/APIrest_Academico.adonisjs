'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EscolaSchema extends Schema {
  up () {
    this.create('escolas', (table) => {
      table.increments()
      table.string('nome', 140).notNullable()
      table.string('email', 140).notNullable()
      table.string('telefone')
      table.timestamps()
    })
  }

  down () {
    this.drop('escolas')
  }
}

module.exports = EscolaSchema
