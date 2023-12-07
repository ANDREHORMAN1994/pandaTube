import { ControllerFunction } from '../../types';

/* eslint-disable arrow-body-style */
const swaggerGetVideos = (controller: ControllerFunction) => {
  // #swagger.start

  /*
    #swagger.path = '/videos'
    #swagger.method = 'get'
    #swagger.tags = ['Videos']
    #swagger.description = 'Retornar um array de objetos com todos os vídeos cadastrados.'
  */

  /*
    #swagger.security = [{
      apiKeyAuth: []
    }]
  */

  /*
    #swagger.responses[200] = {
      description: 'Vídeos retornados com sucesso.',
      schema: [{ $ref: '#/definitions/Video' }]
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
      schema: { message: 'Erro interno ao tentar acessar todos os vídeos.' }
    }
  */

  // #swagger.end
  return controller;
};

export default swaggerGetVideos;
