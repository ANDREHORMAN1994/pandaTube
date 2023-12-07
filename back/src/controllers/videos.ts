import { StatusCodes } from 'http-status-codes';
import { NextFunction, Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
import services from '../services';
import HandleError from '../utils/HandleError';
import { IVideo, RequestWithToken } from '../types';
import {
  downloadPandaVideoFile,
  getMediaByPath,
  getPandaVideoFile,
} from '../utils/pandaVideoFunctions';

const DIR_FILE = path.join(__dirname, '../../tmp/img');
const DIR_FILE_VIDEO = path.join(__dirname, '../../tmp/videos');

export const createVideo = async (
  req: RequestWithToken,
  res: Response,
  next: NextFunction,
) => {
  const { body } = req;
  const infos: IVideo = JSON.parse(body.infos);
  const baseApi = `${req.protocol}://${req.get('host')}/videos/img/`;
  const imgUri = `${baseApi}${req?.file?.filename}`;
  try {
    const newVideo = await services.createVideo({ ...infos, imgUri });
    if (newVideo) {
      return res.status(StatusCodes.CREATED).json(newVideo);
    }
    throw new HandleError(
      StatusCodes.INTERNAL_SERVER_ERROR,
      'Erro interno ao tentar cadastrar um video.',
    );
  } catch (error) {
    next(error);
  }
};

export const downloadVideo = async (
  req: RequestWithToken,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;

    const videoExists = await getMediaByPath(DIR_FILE_VIDEO, id);
    if (videoExists) {
      console.log('Vídeo já foi baixado anteriormente.');
      return res.status(200).json({ message: 'Vídeo já baixado anteriormente' });
    }

    const data = await getPandaVideoFile();
    console.log('data', data);
    if (!data || (data && !data.videos.length)) {
      throw new Error('Nenhum video encontrado');
    }

    const downloadPromises = data.videos.map(async () => {
      await downloadPandaVideoFile(id);
    });

    await Promise.all(downloadPromises);
    console.log('Download concluído!!!');

    return res.status(200).json({ message: 'Download concluído com sucesso' });
  } catch (error) {
    next(error);
  }
};

export const getAllVideos = async (
  _req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const allVideos = await services.getAllVideos();
    if (allVideos) {
      return res.status(StatusCodes.OK).json(allVideos);
    }
    throw new HandleError(
      StatusCodes.INTERNAL_SERVER_ERROR,
      'Erro interno ao tentar acessar todos os videos.',
    );
  } catch (error) {
    next(error);
  }
};

export const getImageByName = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { name } = req.params;
  const pathFile = `${DIR_FILE}/${name}`;
  try {
    if (!fs.existsSync(pathFile)) {
      throw new HandleError(
        StatusCodes.INTERNAL_SERVER_ERROR,
        'Erro interno ao tentar acessar a imagem.',
      );
    }

    const contentFile = fs.readFileSync(pathFile);
    res.setHeader('Content-Type', 'image/jpeg');

    return res.status(200).send(contentFile);
  } catch (error) {
    next(error);
  }
};

export const updateVideo = async (req: Request, res: Response, next: NextFunction) => {
  const { params: { id }, body } = req;
  const infos: IVideo = JSON.parse(body.infos);
  const baseApi = `${req.protocol}://${req.get('host')}/videos/img/`;
  const imgUri = `${baseApi}${req?.file?.filename}`;
  try {
    const video = await services.updateVideo(id, { ...infos, imgUri });
    if (video) {
      return res.status(StatusCodes.OK).json(video);
    }
    throw new HandleError(
      StatusCodes.NOT_FOUND,
      'Nenhum video cadastrado com esse ID.',
    );
  } catch (error) {
    next(error);
  }
};

export const deleteVideo = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const {
    params: { id },
  } = req;
  try {
    const result = await services.deleteVideo(id);
    if (result) {
      return res.status(StatusCodes.NO_CONTENT).send();
    }
    throw new HandleError(
      StatusCodes.NOT_FOUND,
      'Nenhum video cadastrado com esse ID.',
    );
  } catch (error) {
    next(error);
  }
};
