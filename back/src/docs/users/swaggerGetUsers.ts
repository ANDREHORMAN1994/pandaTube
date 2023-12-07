import { ControllerFunction } from '../../types';

/* eslint-disable arrow-body-style */
const swaggerGetUsers = (controller: ControllerFunction) => {
  // #swagger.start

  /*
    #swagger.path = '/users'
    #swagger.method = 'get'
    #swagger.tags = ['Users']
    #swagger.description = 'Retornar um array de objetos com todos os usuários cadastrados.'
  */

  /*
    #swagger.security = [{
      apiKeyAuth: []
    }]
  */

  /*
    #swagger.responses[200] = {
      description: 'Usuários encontrados com sucesso.',
      schema: [{ $ref: '#/definitions/User' }]
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
      schema: { message: 'Erro interno ao tentar acessar todos os usuários.' }
    }
  */

  // #swagger.end
  return controller;
};

export default swaggerGetUsers;
