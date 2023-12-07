import { ControllerFunction } from '../types';

/* eslint-disable arrow-body-style */
const swaggerUpdateProductById = (controller: ControllerFunction) => {
  // #swagger.start

  /*
    #swagger.path = '/product/{id}'
    #swagger.method = 'patch'
    #swagger.tags = ['Products']
    #swagger.description = 'Retornar um produto atualizado com o ID especificado.'
  */

  /*
    #swagger.parameters['New Infos'] = {
      in: 'body',
      description: 'Novas informações relacionadas ao produto.',
      required: true,
      type: 'object',
      schema: {
        title: 'Apple iPhone 8',
        price: 1334,
        thumbnail: 'http://http2.mlstatic.com/D_773138-MLA43694099481_102020-I.jpg',
        description: 'Smartphone de alto desempenho e bastante elegante.',
      }
    }
  */

  /*
    #swagger.security = [{
      apiKeyAuth: []
    }]
  */

  /*
    #swagger.responses[200] = {
      description: 'Produto atualizado com sucesso.',
      schema: { $ref: '#/definitions/Product' }
    }
  */

  /*
    #swagger.responses[400-1] = {
      description: 'Bad Request.',
      schema: { message: 'ID inválido ou faltando.' }
    }
  */

  /*
    #swagger.responses[400-2] = {
      description: 'Bad Request.',
      schema: { message: 'Campos inválidos ou faltando.' }
    }
  */

  /*
    #swagger.responses[401-1] = {
      description: 'Unauthorized.',
      schema: { message: 'Token não foi provido.' }
    }
  */

  /*
    #swagger.responses[401-2] = {
      description: 'Unauthorized.',
      schema: { message: 'Token inválido.' }
    }
  */

  /*
    #swagger.responses[404] = {
      description: 'Not Found.',
      schema: { message: 'Nenhum produto cadastrado com esse ID.' }
    }
  */

  // #swagger.end
  return controller;
};

export default swaggerUpdateProductById;
