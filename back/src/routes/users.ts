import { Router } from 'express';
import controllers from '../controllers';
import middleware from '../middleware';
import swaggerCreateUser from '../docs/swaggerCreateUser';
import swaggerLoginUser from '../docs/swaggerLoginUser';
import swaggerGetUserById from '../docs/swaggerGetUserById';
import swaggerGetUsers from '../docs/swaggerGetUsers';
import swaggerUpdateUserById from '../docs/swaggerUpdateUserById';
import swaggerDeleteUserById from '../docs/swaggerDeleteUserById';

const loginRoutes = Router();

loginRoutes.post(
  '/user',
  middleware.valInfoUser,
  middleware.createPassHash,
  swaggerCreateUser(controllers.createUser),
);

loginRoutes.post(
  '/login',
  middleware.valInfoUser,
  swaggerLoginUser(controllers.login),
);

// loginRoutes.use(middleware.validateToken);

loginRoutes.get(
  '/users/:id',
  middleware.valId,
  swaggerGetUserById(controllers.getUserById),
);

loginRoutes.get(
  '/users',
  swaggerGetUsers(controllers.getAllUser),
);

loginRoutes.patch(
  '/users/:id',
  middleware.valId,
  middleware.valInfoUser,
  middleware.createPassHash,
  swaggerUpdateUserById(controllers.updateUser),
);

loginRoutes.delete(
  '/users/:id',
  middleware.valId,
  swaggerDeleteUserById(controllers.deleteUserById),
);

export default loginRoutes;
