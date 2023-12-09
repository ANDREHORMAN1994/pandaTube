import { StatusCodes } from 'http-status-codes';
import { NextFunction, Request, Response } from 'express';
import services from '../services';
import HandleError from '../utils/HandleError';
import { RequestWithToken } from '../types';

export const createHistory = async (
  req: RequestWithToken,
  res: Response,
  next: NextFunction,
) => {
  const { body } = req;
  try {
    const newHistory = await services.createHistory(body);
    if (newHistory) {
      return res.status(StatusCodes.CREATED).json(newHistory);
    }
    throw new HandleError(
      StatusCodes.INTERNAL_SERVER_ERROR,
      'Erro interno ao tentar cadastrar um histórico.',
    );
  } catch (error) {
    next(error);
  }
};

export const getAllHistorys = async (
  _req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    console.log('allHistorys');
    const allHistorys = await services.getAllHistorys();
    if (allHistorys) {
      return res.status(StatusCodes.OK).json(allHistorys);
    }
    throw new HandleError(
      StatusCodes.INTERNAL_SERVER_ERROR,
      'Erro interno ao tentar acessar todos os históricos.',
    );
  } catch (error) {
    next(error);
  }
};
