import { Router } from 'express';
import loginRoutes from './login';
import videosRoutes from './videos';

const allRoutes = Router();

allRoutes.use('/', loginRoutes);
allRoutes.use('/', videosRoutes);

export default allRoutes;
