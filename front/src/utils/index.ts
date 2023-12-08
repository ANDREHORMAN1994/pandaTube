/* eslint-disable no-console */
import axios from 'axios';

const BASE_EP = 'http://10.0.2.2:3001';

export const getAllVideos = async () => {
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

export const getVideoById = async (id: string) => {
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

export const getVideoFile = (name: string) => {
  const pathFile = `${BASE_EP}/videos/${name}.mp4`;
  return pathFile;
};
