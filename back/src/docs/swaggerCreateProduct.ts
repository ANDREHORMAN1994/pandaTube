import { ControllerFunction } from '../types';

/* eslint-disable arrow-body-style */
const swaggerCreateProduct = (controller: ControllerFunction) => {
  // #swagger.start

  /*
    #swagger.path = '/product'
    #swagger.method = 'post'
    #swagger.tags = ['Products']
    #swagger.description = 'Criar um novo produto com os dados fornecidos no corpo da requisição.'
  */

  /*
    #swagger.parameters['New Product'] = {
      in: 'body',
      description: 'Informações para criar um novo produto.',
      required: true,
      type: 'object',
      schema: {
        title: 'Apple iPhone 13',
        price: 4449,
        thumbnail: 'http://http2.mlstatic.com/D_916682-MLA47782359266_102021-I.jpg',
        description: 'Smartphone de alto desempenho e bastante elegante.'
      }
    }
  */

  /*
    #swagger.security = [{
      "apiKeyAuth": []
    }]
  */

  /*
    #swagger.responses[201] = {
      description: 'Produto criado com sucesso.',
      schema: { $ref: '#/definitions/Product' }
    }
  */

  /*
    #swagger.responses[400] = {
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
    #swagger.responses[500] = {
      description: 'Internal Server Error.',
      schema: { message: 'Erro interno ao tentar criar um produto.' }
    }
  */

  // #swagger.end
  return controller;
};

export default swaggerCreateProduct;
