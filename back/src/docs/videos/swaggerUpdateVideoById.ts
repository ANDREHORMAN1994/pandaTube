import { ControllerFunction } from '../../types';

/* eslint-disable arrow-body-style */
const swaggerUpdateVideoById = (controller: ControllerFunction) => {
  // #swagger.start

  /*
    #swagger.path = '/video/{id}'
    #swagger.method = 'patch'
    #swagger.tags = ['Videos']
    #swagger.description = 'Retornar um vídeo atualizado com o ID especificado.'
  */

  /*
    #swagger.parameters['New Video'] = {
      in: 'body',
      description: 'Novas informações relacionadas ao vídeo.',
      required: true,
      type: 'object',
      schema: {
        infos: {
          name: 'Top Gang 2',
          categorie: 'comédia',
          sinopse: 'Filme de comédia muito engraçado.',
          description: '1993 ‧ Comédia/Ação ‧ 1h 26m',
        }
        img: {
          type: 'string',
          format: 'binary',
        },
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
      description: 'Vídeo atualizado com sucesso.',
      schema: { $ref: '#/definitions/Video' }
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
      schema: { message: 'Nenhum vídeo cadastrado com esse ID.' }
    }
  */

  // #swagger.end
  return controller;
};

export default swaggerUpdateVideoById;
