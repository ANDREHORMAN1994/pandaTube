import { ControllerFunction } from '../../types';

/* eslint-disable arrow-body-style */
const swaggerGetUserById = (controller: ControllerFunction) => {
  // #swagger.start

  /*
    #swagger.path = '/users/{id}'
    #swagger.method = 'get'
    #swagger.tags = ['Users']
    #swagger.description = 'Retornar um usuário com o ID especificado.'
  */

  /*
    #swagger.security = [{
      apiKeyAuth: []
    }]
  */

  /*
    #swagger.responses[200] = {
      description: 'Usuário encontrado com sucesso.',
      schema: { $ref: '#/definitions/User' }
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
    #swagger.responses[500] = {
      description: 'Internal Server Error.',
      schema: { message: 'Erro interno ao tentar encontrar o usuário pelo id.' }
    }
  */

  // #swagger.end
  return controller;
};

export default swaggerGetUserById;
