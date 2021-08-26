'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with disciplinas
 */
const Disciplina = use('App/Models/Disciplina')
class DisciplinaController {
  /**
   * Show a list of all disciplinas.
   * GET disciplinas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let{page, perPage} = request.all()
      return Disciplina.query().paginate(page, perPage) 
    
  }

  /**
   * Render a form to be used for creating a new disciplina.
   * GET disciplinas/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new disciplina.
   * POST disciplinas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const campos = ['nome', 'horas', 'curso_id']
    const disciplina = request.only(campos)
    return await Disciplina.create(disciplina)
  }

  /**
   * Display a single disciplina.
   * GET disciplinas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await Disciplina.findOrFail(params.id);
  }

  /**
   * Render a form to update an existing disciplina.
   * GET disciplinas/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update disciplina details.
   * PUT or PATCH disciplinas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const campos = Disciplina.getCamposCadastro()
    const dados = request.only(campos)
    const disciplina = await Disciplina.findOrFail(params.id)
    disciplina.merge(dados)
    await disciplina.save()
    return disciplina
  }

  /**
   * Delete a disciplina with id.
   * DELETE disciplinas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const disciplina = await Disciplina.findOrFail(params.id)
    return await disciplina.delete();
  }
}

module.exports = DisciplinaController
