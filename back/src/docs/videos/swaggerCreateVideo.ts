import { ControllerFunction } from '../../types';

/* eslint-disable arrow-body-style */
const swaggerCreateVideo = (controller: ControllerFunction) => {
  // #swagger.start

  /*
    #swagger.path = '/video'
    #swagger.method = 'post'
    #swagger.tags = ['Videos']
    #swagger.description = 'Criar um novo vídeo com os dados fornecidos no corpo da requisição.'
  */

  /*
    #swagger.parameters['New Video'] = {
      in: 'body',
      description: 'Informações para criar um novo vídeo.',
      required: true,
      type: 'object',
      schema: { $ref: '#/definitions/NewVideoBody' }
    }
  */

  /*
    #swagger.security = [{
      "apiKeyAuth": []
    }]
  */

  /*
    #swagger.responses[201] = {
      description: 'Vídeo criado com sucesso.',
      schema: { $ref: '#/definitions/Video' }
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
      schema: { message: 'Erro interno ao tentar criar um vídeo.' }
    }
  */

  // #swagger.end
  return controller;
};

export default swaggerCreateVideo;
