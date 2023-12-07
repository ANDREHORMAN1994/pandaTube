import { ControllerFunction } from '../types';

/* eslint-disable arrow-body-style */
const swaggerGetProducts = (controller: ControllerFunction) => {
  // #swagger.start

  /*
    #swagger.path = '/products'
    #swagger.method = 'get'
    #swagger.tags = ['Products']
    #swagger.description = 'Retornar um array de objetos com todos os produtos cadastrados.'
  */

  /*
    #swagger.security = [{
      apiKeyAuth: []
    }]
  */

  /*
    #swagger.responses[200] = {
      description: 'Produtos retornados com sucesso.',
      schema: [{ $ref: '#/definitions/Product' }]
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
    #swagger.responses[500] = {
      description: 'Internal Server Error.',
      schema: { message: 'Erro interno ao tentar acessar todos os produtos.' }
    }
  */

  // #swagger.end
  return controller;
};

export default swaggerGetProducts;
