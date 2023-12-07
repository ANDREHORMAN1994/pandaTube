import { ControllerFunction } from '../../types';

/* eslint-disable arrow-body-style */
const swaggerDownloadVideo = (controller: ControllerFunction) => {
  // #swagger.start

  /*
    #swagger.path = '/videos/download/{id}'
    #swagger.method = 'get'
    #swagger.tags = ['Videos']
    #swagger.description = 'Realiza o Download do vídeo com o id passado como parâmetro.'
  */

  /*
    #swagger.security = [{
      apiKeyAuth: []
    }]
  */

  /*
    #swagger.responses[200] = {
      description: 'Download concluído com sucesso',
      schema: { message: 'Download concluído com sucesso' }]
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

export default swaggerDownloadVideo;
