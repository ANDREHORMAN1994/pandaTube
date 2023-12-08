/* eslint-disable no-console */
import axios from 'axios';
import { type IMovie } from 'src/types';

const BASE_EP = 'http://10.0.2.2:3001';

export const getAllVideos = async (): Promise<IMovie[]> => {
  const options = {
    method: 'GET',
    url: `${BASE_EP}/videos`,
  };

  return axios
    .request(options)
    .then((response: any) => response.data)
    .catch((error: any) => {
      console.log(error);
    });
};

export const getVideoById = async (id: string): Promise<IMovie> => {
  const options = {
    method: 'GET',
    url: `${BASE_EP}/videos/${id}`,
  };

  return axios
    .request(options)
    .then((response: any) => response.data)
    .catch((error: any) => {
      console.log(error);
    });
};

export const downloadVideo = async (id: string): Promise<{ message: string }> => {
  const options = {
    method: 'GET',
    url: `${BASE_EP}/videos/download/${id}`,
  };

  return axios
    .request(options)
    .then((response: any) => response.data)
    .catch((error: any) => {
      console.log(error);
    });
};

export const getVideoFile = (name: string): string => {
  const pathFile = `${BASE_EP}/videos/${name}.mp4`;
  return pathFile;
};
