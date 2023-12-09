import { Router } from 'express';
import loginRoutes from './users';
import videosRoutes from './videos';
import historyRoutes from './history';

const allRoutes = Router();

allRoutes.use('/', loginRoutes);
allRoutes.use('/', videosRoutes);
allRoutes.use('/', historyRoutes);

export default allRoutes;
