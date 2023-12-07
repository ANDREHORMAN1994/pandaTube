import { StatusCodes } from 'http-status-codes';
import HandleError from '../utils/HandleError';
import models from '../models';
import { IUser } from '../types';

export const createUser = async (user: IUser) => {
  const newUser = await models.createUser(user);
  if (newUser) return newUser;
  throw new HandleError(
    StatusCodes.CONFLICT,
    'Já existe um usuário cadastrado com esse email.',
  );
};

export const login = async (user: IUser) => {
  const result = await models.login(user);
  if (result) {
    return result;
  }
  throw new HandleError(
    StatusCodes.NOT_FOUND,
    'Esse usuário não existe.',
  );
};

export const getUserById = async (id: string) => {
  const user = await models.getUserById(id);
  if (user) return user;
  return null;
};

export const getAllUser = async () => {
  const allUsers = await models.getAllUser();
  if (allUsers) return allUsers;
  return null;
};

export const updateUser = async (id: string, user: IUser) => {
  const newUser = await models.updateUser(id, user);
  if (newUser) return newUser;
  throw new HandleError(
    StatusCodes.NOT_FOUND,
    'Nenhum usuário cadastrado com esse ID.',
  );
};

export const deleteUserById = async (id: string) => {
  const result = await models.deleteUserById(id);
  if (result) return result;
  return null;
};
