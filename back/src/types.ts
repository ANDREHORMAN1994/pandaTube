/* eslint-disable no-unused-vars */
import { NextFunction, Request, Response } from 'express';

export type ControllerFunction = (
  _req: Request,
  _res: Response,
  _next: NextFunction,
) => void;

export interface ICustomError extends Error {
  statusCode?: number;
}

export interface IUser {
  name?: string;
  email: string;
  password: string;
}

export interface IHistory {
  id: string;
  name: string;
  description: string;
  hour: string;
}

export interface IHistorySection {
  title: string;
  data: IHistory[];
  createdAt?: Date;
  updatedAt?: Date | null;
}

export interface IUserWithId extends IUser {
  id: string;
}

export interface RequestWithToken extends Request {
  token?: string;
  user?: IUser;
}

export interface IVideo {
  name: string;
  description: string;
  categorie: string;
  ref: string;
  sinopse: string;
  imgUri?: string;
  videoPlayerId?: string;
  videoPlayerUri?: string;
}
