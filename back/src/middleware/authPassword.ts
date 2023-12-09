import bcrypt from 'bcrypt';
import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import HandleError from '../utils/HandleError';
import { IUser } from '../types';

export const createPassHash = (
  req: Request,
  _res: Response,
  next: NextFunction,
) => {
  const { body }: { body: IUser } = req;
  const saltRounds = 10;
  try {
    bcrypt.hash(body.password.toString(), saltRounds, (err, hash): void => {
      if (err || !hash) {
        const error = new HandleError(
          StatusCodes.INTERNAL_SERVER_ERROR,
          'Erro ao tentar criar o hash da senha',
        );
        return next(error);
      }
      req.body.password = hash;
      next();
    });
  } catch (error) {
    next(error);
  }
};

export const comparePassHash = (
  password: string,
  user: IUser,
  res: Response,
  next: NextFunction,
) => {
  bcrypt.compare(password, user.password, (_err, result) => {
    if (result) {
      // console.log('Senha correta!');
      return res.status(StatusCodes.OK).json(user);
    }
    // console.log('Senha incorreta!');
    const error = new HandleError(
      StatusCodes.UNAUTHORIZED,
      'A senha está errada ou incompatível.',
    );
    next(error);
  });
};
