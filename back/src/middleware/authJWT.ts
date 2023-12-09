import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { NextFunction, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { IUser, RequestWithToken } from '../types';
import HandleError from '../utils/HandleError';

dotenv.config();
const secret = process.env.JWT_SECRET || 'minhasenha123';

export const createHashLogin = (user: IUser) => {
  const token = jwt.sign(user, secret, { expiresIn: '1h' });
  return token;
};

export const validateToken = (req: RequestWithToken, _res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  const { headers: { authorization: token } } = req;

  if (!authHeader || !token) {
    const error = new HandleError(
      StatusCodes.UNAUTHORIZED,
      'Token não foi provido',
    );
    return next(error);
  }

  jwt.verify(token, secret, (err, decoded: string | jwt.JwtPayload | undefined) => {
    if (err || typeof decoded === 'string') {
      const error = new HandleError(
        StatusCodes.UNAUTHORIZED,
        'Token inválido',
      );
      return next(error);
    }

    // console.log(decoded, 'infos token');
    if (decoded) {
      req.user = decoded as IUser;
    }
    return next();
  });
};
