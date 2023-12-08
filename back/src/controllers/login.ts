import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
// import { WithId } from 'mongodb';
import { IUser, RequestWithToken } from '../types';
import HandleError from '../utils/HandleError';
import services from '../services';
import { createHashLogin } from '../middleware/authJWT';
import { comparePassHash } from '../middleware/authPassword';

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
  const { body }: { body: IUser } = req;
  try {
    const newUser = await services.createUser(body);
    if (newUser) return res.status(StatusCodes.CREATED).json(newUser);

    throw new HandleError(
      StatusCodes.INTERNAL_SERVER_ERROR,
      'Erro interno ao tentar criar o usuário.',
    );
  } catch (error) {
    next(error);
  }
};

export const login = async (req: RequestWithToken, res: Response, next: NextFunction) => {
//   const { body }: { body: IUser } = req;
//   try {
//     const user = await services.login(body);
//     const userWithId = user as WithId<IUser>;
//     const token = createHashLogin(userWithId);
//     const userInfos = { ...userWithId, token };
//     req.token = token;
//     comparePassHash(body.password, userInfos, res, next);
//   } catch (error) {
//     next(error);
//   }
};

export const getUserById = async (req: Request, res: Response, next: NextFunction) => {
  const { params: { id } } = req;
  try {
    const user = await services.getUserById(id);
    if (user) {
      return res.status(StatusCodes.OK).json(user);
    }
    throw new HandleError(
      StatusCodes.INTERNAL_SERVER_ERROR,
      'Erro interno ao tentar encontrar o usuário pelo id.',
    );
  } catch (error) {
    next(error);
  }
};

export const getAllUser = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const allUsers = await services.getAllUser();
    if (allUsers) {
      return res.status(StatusCodes.OK).json(allUsers);
    }
    throw new HandleError(
      StatusCodes.INTERNAL_SERVER_ERROR,
      'Erro interno ao tentar acessar todos os usuários.',
    );
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  const { params: { id }, body } = req;
  try {
    const user = await services.updateUser(id, body);
    if (user) {
      return res.status(StatusCodes.OK).json(user);
    }
    throw new HandleError(
      StatusCodes.INTERNAL_SERVER_ERROR,
      'Erro interno ao tentar atualizar o usuário.',
    );
  } catch (error) {
    next(error);
  }
};

export const deleteUserById = async (req: Request, res: Response, next: NextFunction) => {
  const { params: { id } } = req;
  try {
    const result = await services.deleteUserById(id);
    if (result) {
      return res.status(StatusCodes.NO_CONTENT).send();
    }
    throw new HandleError(
      StatusCodes.NOT_FOUND,
      'Nenhum usuário cadastrado com esse ID.',
    );
  } catch (error) {
    next(error);
  }
};
