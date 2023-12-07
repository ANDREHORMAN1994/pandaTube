import { ControllerFunction } from '../../types';

/* eslint-disable arrow-body-style */
const swaggerThumbVideo = (controller: ControllerFunction) => {
  // #swagger.start

  /*
    #swagger.path = '/videos/img/{name}'
    #swagger.method = 'get'
    #swagger.tags = ['Videos']
    #swagger.description = 'Endpoint para acessar a imagem de um vídeo pelo nome.'
  */

  /*
    #swagger.security = [{
      apiKeyAuth: []
    }]
  */

  /*
    #swagger.responses[200] = {
      description: 'Retorna a imagem da thumbnail do vídeo.',
      schema: { $ref: '#/definitions/Video' }
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

export default swaggerThumbVideo;
