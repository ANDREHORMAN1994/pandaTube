import { ControllerFunction } from '../types';

/* eslint-disable arrow-body-style */
const swaggerDeleteProductById = (controller: ControllerFunction) => {
  // #swagger.start

  /*
    #swagger.path = '/product/{id}'
    #swagger.method = 'delete'
    #swagger.tags = ['Products']
    #swagger.description = 'Deletar um produto identificado pelo ID fornecido na rota.'
  */

  /*
    #swagger.security = [{
      apiKeyAuth: []
    }]
  */

  /*
    #swagger.responses[204] = {
      description: 'Produto deletado com sucesso.'
    }
  */

  /*
    #swagger.responses[400] = {
      description: 'Bad Request.',
      schema: { message: 'ID inválido ou faltando.' }
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

export default swaggerDeleteProductById;
