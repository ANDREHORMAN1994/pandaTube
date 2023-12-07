import { Router } from 'express';
import controllers from '../controllers';
import middleware from '../middleware';
import swaggerCreateUser from '../docs/users/swaggerCreateUser';
import swaggerLoginUser from '../docs/users/swaggerLoginUser';
import swaggerGetUserById from '../docs/users/swaggerGetUserById';
import swaggerGetUsers from '../docs/users/swaggerGetUsers';
import swaggerUpdateUserById from '../docs/users/swaggerUpdateUserById';
import swaggerDeleteUserById from '../docs/users/swaggerDeleteUserById';

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

loginRoutes.use(middleware.validateToken);

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
