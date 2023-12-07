import { ControllerFunction } from '../../types';

/* eslint-disable arrow-body-style */
const swaggerUpdateUserById = (controller: ControllerFunction) => {
  // #swagger.start

  /*
    #swagger.path = '/users/{id}'
    #swagger.method = 'patch'
    #swagger.tags = ['Users']
    #swagger.description = 'Retornar um usuário atualizado com o ID especificado.'
  */

  /*
    #swagger.parameters['New Infos'] = {
      in: 'body',
      description: 'Novas informações do usuário.',
      required: true,
      type: 'object',
      schema: {
        name: 'Fulano',
        email: 'fulano@gmail.com',
        password: '654321'
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
      description: 'Usuário atualizado com sucesso.',
      schema: { $ref: '#/definitions/User' }
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
      schema: { message: 'Nenhum usuário cadastrado com esse ID.' }
    }
  */

  /*
    #swagger.responses[500-1] = {
      description: 'Internal Server Error.',
      schema: { message: 'Erro interno ao tentar atualizar o usuário.' }
    }
  */

  /*
    #swagger.responses[500-2] = {
      description: 'Internal Server Error.',
      schema: { message: 'Erro ao tentar criar o hash da senha.' }
    }
  */

  // #swagger.end
  return controller;
};

export default swaggerUpdateUserById;
