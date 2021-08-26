'use strict'

/*
|--------------------------------------------------------------------------
| DisciplinaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Disciplina = use('App/Models/Disciplina')

class DisciplinaSeeder {
  async run () {
    await Disciplina.createMany([
      {nome: 'Backend', horas: 90, curso_id: 1},
      {nome: 'Frontend', horas: 90, curso_id: 1},
      {nome: 'Mobile', horas: 90, curso_id: 1},
      {nome: 'Direito Penal', horas: 60, curso_id: 3},
      {nome: 'Direito Civil', horas: 60, curso_id: 3},
      {nome: 'Direito Trabalista', horas: 60, curso_id: 3},
      {nome: 'Anatomia', horas: 60, curso_id: 2},
    ])
  }
}

module.exports = DisciplinaSeeder
