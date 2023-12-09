import { Router } from 'express';
import middleware from '../middleware';
import controllers from '../controllers';

const historyRoutes = Router();

historyRoutes.get(
  '/history',
  controllers.getAllHistorys,
);

historyRoutes.post(
  '/history',
  middleware.valInfoHistory,
  controllers.createHistory,
);

export default historyRoutes;
