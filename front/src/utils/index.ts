/* eslint-disable no-console */
import axios from 'axios';
import { type IUser, type IMovie, type IError, type IHistorySection } from 'src/types';

const BASE_EP = 'http://10.0.2.2:3001';

export const login = async (infoUser: IUser): Promise<IUser | IError> => {
  const options = {
    method: 'POST',
    url: `${BASE_EP}/login`,
    data: infoUser,
  };

  return axios
    .request(options)
    .then((response: any) => response.data)
    .catch((error: any) => error.response.data);
};

export const createUser = async (infoUser: IUser): Promise<IUser | IError> => {
  const options = {
    method: 'POST',
    url: `${BASE_EP}/user`,
    data: infoUser,
  };

  return axios
    .request(options)
    .then((response: any) => response.data)
    .catch((error: any) => error.response.data);
};

export const createHistory = async (infoHistory: IHistorySection, token: string): Promise<IHistorySection | IError> => {
  const options = {
    method: 'POST',
    url: `${BASE_EP}/history`,
    data: infoHistory,
    headers: { Authorization: `Bearer ${token}` },
  };

  return axios
    .request(options)
    .then((response: any) => response.data)
    .catch((error: any) => error.response.data);
};

export const updateUserById = async (id: string, infoUser: IUser, token: string): Promise<IUser | IError> => {
  const options = {
    method: 'PATCH',
    url: `${BASE_EP}/users/${id}`,
    data: infoUser,
    headers: { Authorization: `Bearer ${token}` },
  };

  return axios
    .request(options)
    .then((response: any) => response.data)
    .catch((error: any) => error.response.data);
};

export const getUserById = async (id: string, token: string): Promise<IUser | IError> => {
  const options = {
    method: 'GET',
    url: `${BASE_EP}/users/${id}`,
    headers: { Authorization: `Bearer ${token}` },
  };

  return axios
    .request(options)
    .then((response: any) => response.data)
    .catch((error: any) => error.response.data);
};

export const getAllHistory = async (token: string): Promise<IHistorySection[] | IError> => {
  const options = {
    method: 'GET',
    url: `${BASE_EP}/history`,
    headers: { Authorization: `Bearer ${token}` },
  };

  return axios
    .request(options)
    .then((response: any) => response.data)
    .catch((error: any) => error.response.data);
};

export const getAllVideos = async (token: string): Promise<IMovie[] | IError> => {
  const options = {
    method: 'GET',
    url: `${BASE_EP}/videos`,
    headers: { Authorization: `Bearer ${token}` },
  };

  return axios
    .request(options)
    .then((response: any) => response.data)
    .catch((error: any) => error.response.data);
};

export const getVideoById = async (id: string, token: string): Promise<IMovie | IError> => {
  const options = {
    method: 'GET',
    url: `${BASE_EP}/videos/${id}`,
    headers: { Authorization: `Bearer ${token}` },
  };

  return axios
    .request(options)
    .then((response: any) => response.data)
    .catch((error: any) => error.response.data);
};

export const downloadVideo = async (id: string,token: string): Promise<{ message: string } | IError> => {
  const options = {
    method: 'GET',
    url: `${BASE_EP}/videos/download/${id}`,
    headers: { Authorization: `Bearer ${token}` },
  };

  return axios
    .request(options)
    .then((response: any) => response.data)
    .catch((error: any) => error.response.data);
};

export const getVideoFile = (name: string): string => {
  const pathFile = `${BASE_EP}/videos/${name}.mp4`;
  return pathFile;
};
