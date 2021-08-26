'use strict'

/*
|--------------------------------------------------------------------------
| ProfessorSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Professor = use('App/Models/Professor')

class ProfessorSeeder {
  async run () {
  }
}

module.exports = ProfessorSeeder
