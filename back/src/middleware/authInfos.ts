import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import HandleError from '../utils/HandleError';
import { IHistorySection, IUser, IVideo } from '../types';

export const valInfoHistory = (
  req: Request,
  _res: Response,
  next: NextFunction,
) => {
  const { body }: { body: IHistorySection } = req;
  try {
    if (
      !body
      || !body.title
      || !body.data
    ) {
      throw new HandleError(
        StatusCodes.BAD_REQUEST,
        'Campos inválidos ou faltando.',
      );
    }
    next();
  } catch (error) {
    next(error);
  }
};

export const valInfoVideo = (
  req: Request,
  _res: Response,
  next: NextFunction,
) => {
  const { body } = req;
  const infos: IVideo = JSON.parse(body.infos);
  try {
    if (
      !body
      || !infos
      || !infos.name
      || !infos.description
      || !infos.categorie
      || !infos.sinopse
    ) {
      throw new HandleError(
        StatusCodes.BAD_REQUEST,
        'Campos inválidos ou faltando.',
      );
    }
    next();
  } catch (error) {
    next(error);
  }
};

export const valInfoUser = (
  req: Request,
  _res: Response,
  next: NextFunction,
) => {
  const { body }: { body: IUser } = req;
  try {
    if (!body || !body.email || !body.password) {
      throw new HandleError(
        StatusCodes.BAD_REQUEST,
        'Campos inválidos ou faltando.',
      );
    }
    next();
  } catch (error) {
    next(error);
  }
};

export const valId = (req: Request, _res: Response, next: NextFunction) => {
  const {
    params: { id },
  } = req;
  try {
    if (!id) {
      throw new HandleError(
        StatusCodes.BAD_REQUEST,
        'ID inválido ou faltando.',
      );
    }
    next();
  } catch (error) {
    next(error);
  }
};
