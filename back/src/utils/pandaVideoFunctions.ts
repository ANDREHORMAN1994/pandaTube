import axios from 'axios';
import path from 'path';
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();

const API_DOWNLOAD = 'https://download-us01.pandavideo.com:7443';
const DIR_FILE = path.join(__dirname, '../../public/videos');

const { API_KEY, API_URL } = process.env;
const LIMIT = 5000;

export const downloadPandaVideoFile = async (videoId: string) => {
  try {
    const content = await axios({
      method: 'post',
      url: `${API_DOWNLOAD}/videos/${videoId}/download`,
      data: {
        Authorization: API_KEY,
      },
      responseType: 'stream',
    });

    if (!fs.existsSync(DIR_FILE)) {
      fs.mkdirSync(DIR_FILE);
    }

    return content.data
      .pipe(fs.createWriteStream(`${DIR_FILE}/${videoId}.mp4`))
      .on('finish', () => true);
  } catch (e) {
    throw new Error('Erro durante o download do vídeo');
  }
};

export const getPandaVideoFile = async () => {
  const endpoint = `${API_URL}/videos?limit=${LIMIT}`;

  const videos = await axios.get(endpoint, {
    headers: {
      Authorization: API_KEY,
    },
  });

  if (videos.status !== 200) {
    throw new Error('Erro ao buscar os videos');
  }

  const { data } = videos;
  return data;
};

export const getAllPandaVideos = async () => {
  const options = {
    method: 'GET',
    url: `${API_URL}/videos`,
    headers: {
      accept: 'application/json',
      Authorization: API_KEY,
    },
  };

  return axios
    .request(options)
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
    });
};

export const getMediaByPath = (directory: string, startOfName: string) => {
  const files = fs.readdirSync(directory);

  if (!files || files.length === 0) {
    return false;
  }

  const file = files.find((f) => f.startsWith(startOfName));

  if (!file) {
    return false;
  }

  return true;
};
