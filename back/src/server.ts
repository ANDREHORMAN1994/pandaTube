import express, { NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { StatusCodes } from 'http-status-codes';
import swaggerUi from 'swagger-ui-express';
import swaggerFile from '../swagger_output.json';
import connect from './models/connect';
import allRoutes from './routes';
import html from './utils/initialHTML';
import { ICustomError } from './types';

dotenv.config();

const CDN_SWAGGER_UI = 'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css';
const PORT = process.env.PORT || 3001;
const URL = process.env.BASE_URL || 'http://localhost:3001';
const CORS_OPTIONS = {
  origin: '*',
  credentials: true,
};

const app = express();

app.use(cors(CORS_OPTIONS));
app.use(express.json());

connect();

app.get('/', (_req: Request, res: Response) => {
  /* #swagger.ignore = true */
  res.send(html);
});

app.use(
  '/docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerFile, { customCssUrl: CDN_SWAGGER_UI }),
);
app.use(allRoutes);

app.use(
  (err: ICustomError, _req: Request, res: Response, _next: NextFunction) => {
    // console.log(err, 'error');
    if (err && err.statusCode) {
      const { message, statusCode } = err;
      return res.status(statusCode).json({ error: message });
    }
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: 'Internal Server Error' });
  },
);

app.listen(PORT, () => {
  console.log(`Rodando na porta: ${PORT}\nAcesse: ${URL}/`);
});
