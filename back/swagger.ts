import dotenv from 'dotenv';
import swaggerAutogen from 'swagger-autogen';

swaggerAutogen();
dotenv.config();

const URL = process.env.BASE_URL || 'http://localhost:3001';
const OUTPUTFILE = './swagger_output.json';
const ENDPOINTSFILES = ['./src/routes/*.ts', './src/docs/*.ts'];

const DOC = {
  info: {
    version: '1.0.0',
    title: 'PandaTube API',
    description: 'Documentação da minha API',
  },
  host: URL.split('//')[1],
  basePath: '/',
  schemes: URL.includes('https') ? ['https'] : ['http'],
  consumes: ['application/json'],
  produces: ['application/json'],
  tags: [
    {
      name: 'Users',
      description: 'Endpoints relacionados aos usuários',
    },
    {
      name: 'Videos',
      description: 'Endpoints relacionados aos videos',
    },
  ],
  securityDefinitions: {
    apiKeyAuth: {
      type: 'apiKey',
      in: 'header', // can be "header", "query" or "cookie"
      name: 'Authorization',
      description: 'Adicione aqui o Token de Acesso!',
    },
  },
  definitions: {
    User: {
      id: 'abc123',
      $name: 'André Horman',
      $email: 'andre@gmail.com',
      $password: '123456',
    },
    Video: {
      id: 'abc123',
      $name: 'Top Gang 2',
      $categorie: 'comédia',
      $sinopse: 'Filme de comédia muito engraçado.',
      $description: '1993 ‧ Comédia/Ação ‧ 1h 26m',
      createdAt: '2021-06-21T18:30:09.000Z',
      updatedAt: '2021-06-21T18:30:09.000Z',
    },
    NewVideoBody: {
      $infos: {
        name: 'Top Gang 2',
        categorie: 'comédia',
        sinopse: 'Filme de comédia muito engraçado.',
        description: '1993 ‧ Comédia/Ação ‧ 1h 26m',
      },
      $img: {
        type: 'string',
        format: 'binary',
      },
    },
  },
};

// Gere a documentação Swagger
swaggerAutogen(OUTPUTFILE, ENDPOINTSFILES, DOC);
