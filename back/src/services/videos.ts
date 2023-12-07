import models from '../models';
import { IVideo } from '../types';
import { getAllPandaVideos } from '../utils/pandaVideoFunctions';

export const createVideo = async (video: IVideo) => {
  const allVideos = await getAllPandaVideos();
  const pandaVideo = allVideos.videos.find((v: any) => v.title === video.ref);
  if (pandaVideo) {
    const newVideo = await models.createVideo({
      ...video,
      videoPlayerId: pandaVideo.id,
      videoPlayerUri: pandaVideo.video_player,
    });
    if (newVideo) return newVideo;
  }
  return null;
};

export const getAllVideos = async () => {
  const allVideos = await models.getAllVideos();
  if (allVideos) return allVideos;
  return null;
};

export const updateVideo = async (id: string, video: IVideo) => {
  const allVideos = await getAllPandaVideos();
  const pandaVideo = allVideos.videos.find((v: any) => v.title === video.ref);
  if (pandaVideo) {
    const updatedVideo = await models.updateVideo(id, {
      ...video,
      videoPlayerId: pandaVideo.id,
      videoPlayerUri: pandaVideo.video_player,
    });
    if (updatedVideo) return updatedVideo;
  }
  return null;
};

export const deleteVideo = async (id: string) => {
  const result = await models.deleteVideo(id);
  if (result) return result;
  return null;
};
