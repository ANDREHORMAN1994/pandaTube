import dotenv from 'dotenv';
import swaggerAutogen from 'swagger-autogen';

swaggerAutogen();
dotenv.config();

const URL = process.env.BASE_URL || 'http://localhost:3001';
const OUTPUTFILE = './swagger_output.json';
const ENDPOINTSFILES = ['./src/docs/*.ts'];

const DOC = {
  info: {
    version: '1.0.0',
    title: 'Challenge Allu API',
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
      name: 'Products',
      description: 'Endpoints relacionados aos produtos',
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
      _id: 'abc123',
      $name: 'André Horman',
      $email: 'andre@gmail.com',
      $password: '123456',
    },
    Product: {
      _id: 'abc123',
      $title: 'Apple iPhone 13',
      $price: 4449,
      $thumbnail:
        'http://http2.mlstatic.com/D_916682-MLA47782359266_102021-I.jpg',
      $description: 'Smartphone de alto desempenho e bastante elegante.',
      createdAt: '2021-06-21T18:30:09.000Z',
      updatedAt: '2021-06-21T18:30:09.000Z',
    },
  },
};

// Gere a documentação Swagger
swaggerAutogen(OUTPUTFILE, ENDPOINTSFILES, DOC);
