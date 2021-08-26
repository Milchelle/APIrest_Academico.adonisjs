'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with salas
 */
const Sala = use('App/Models/Sala')
class SalaController {
  /**
   * Show a list of all salas.
   * GET salas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let{page, perPage} = request.all()
      return Sala.query().paginate(page, perPage)
  }

  /**
   * Render a form to be used for creating a new sala.
   * GET salas/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new sala.
   * POST salas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const campos = ['nome', 'capacidade', 'tipo']
    const sala = request.only(campos)
    return Sala.create(sala)
  }

  /**
   * Display a single sala.
   * GET salas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await Sala.findOrFail(params.id);
  }

  /**
   * Render a form to update an existing sala.
   * GET salas/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update sala details.
   * PUT or PATCH salas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const campos = Sala.getCamposCadastro()
    const dados = request.only(campos)
    const sala = await Sala.findOrFail(params.id)
    sala.merge(dados)
    await sala.save()
    return sala
  }

  /**
   * Delete a sala with id.
   * DELETE salas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const sala = await Sala.findOrFail(params.id)
    return await sala.delete();
  }
}

module.exports = SalaController
