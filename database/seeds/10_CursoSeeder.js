'use strict'

/*
|--------------------------------------------------------------------------
| CursoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Curso = use('App/Models/Curso')

class CursoSeeder {
  async run () {
    await Curso.createMany([
      {id: 1, nome: 'Análise e Desenvolvimento de Sistemas', duracao: 5},
      {id: 2, nome: 'Redes de Computadores', duracao: 5},
      {id: 3, nome: 'Direito', duracao: 10},
      {id: 4, nome: 'Enfermagem', duracao: 8},
      {id: 5, nome: 'Jogos Digitais', duracao: 6},
      {id: 6, nome: 'Psicologia', duracao: 8},
    ])
  }
}

module.exports = CursoSeeder
