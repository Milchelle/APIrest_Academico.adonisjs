'use strict'

/*
|--------------------------------------------------------------------------
| TurmaAlunoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const TurmaAluno = use('App/Models/TurmaAluno')

class TurmaAlunoSeeder {
  async run () {
  }
}

module.exports = TurmaAlunoSeeder
