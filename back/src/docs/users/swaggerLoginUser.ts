import { ControllerFunction } from '../../types';

/* eslint-disable arrow-body-style */
const swaggerLoginUser = (controller: ControllerFunction) => {
  // #swagger.start

  /*
    #swagger.path = '/login'
    #swagger.method = 'post'
    #swagger.tags = ['Users']
    #swagger.description = 'Autenticar o usuário com o email e a senha retornando um token JWT.'
  */

  /*
    #swagger.parameters['Login'] = {
      in: 'body',
      description: 'Informações para autenticação do usuário.',
      required: true,
      type: 'object',
      schema: {
        email: 'andre@gmail.com',
        password: '123456'
      }
    }
  */

  /*
    #swagger.responses[200] = {
      description: 'Usuário autenticado com sucesso.',
      schema: {
        _id: 'abc123',
        name: 'André Horman',
        email: 'andre@gmail.com',
        password: '123456',
        token: 'Hash do token JWT'
      }
    }
  */

  /*
    #swagger.responses[400] = {
      description: 'Bad Request.',
      schema: { message: 'Campos inválidos ou faltando.' }
    }
  */

  /*
    #swagger.responses[401] = {
      description: 'Unauthorized.',
      schema: { message: 'A senha está errada ou incompatível.' }
    }
  */

  /*
    #swagger.responses[404] = {
      description: 'Not Found.',
      schema: { message: 'Esse usuário não existe.' }
    }
  */

  // #swagger.end
  return controller;
};

export default swaggerLoginUser;
