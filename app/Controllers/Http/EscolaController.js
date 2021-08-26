'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with escolas
 */
const Escola = use('App/Models/Escola')
class EscolaController {
  /**
   * Show a list of all escolas.
   * GET escolas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */

  async index ({ request, response, view }) {
    let{page, perPage} = request.all()
      return Escola.query().paginate(page, perPage)
  }

  /**
   * Render a form to be used for creating a new escola.
   * GET escolas/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new escola.
   * POST escolas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const campos = ['nome', 'email', 'telefone']
    const escola = request.only(campos)
    return await Escola.create(escola)
  }

  /**
   * Display a single escola.
   * GET escolas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await Escola.findOrFail(params.id);
  }

  /**
   * Render a form to update an existing escola.
   * GET escolas/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update escola details.
   * PUT or PATCH escolas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const campos = Escola.getCamposCadastro()
    const dados = request.only(campos)
    const escola = await Escola.findOrFail(params.id)
    escola.merge(dados)
    await escola.save()
    return escola
  }

  /**
   * Delete a escola with id.
   * DELETE escolas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const escola = await Escola.findOrFail(params.id)
    return await escola.delete();
  }
}

module.exports = EscolaController
