'use strict'

/*
|--------------------------------------------------------------------------
| EscolaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Escola = use('App/Models/Escola')

class EscolaSeeder {
  async run () {
    await Escola.createMany([
    {nome: 'IESB', email: 'FaculdadeIesb@iesb.edu.br', telefone: '33541002'}
    ])

  }
}

module.exports = EscolaSeeder
