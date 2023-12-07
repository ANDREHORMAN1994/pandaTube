import admin from 'firebase-admin';
import { IVideo } from '../types';

export const createVideo = async (video: IVideo) => {
  const newVideos = {
    ...video,
    createdAt: new Date(),
    updatedAt: null,
  };
  const collection = admin.firestore().collection('videos');
  const { id } = await collection.add(newVideos);
  return {
    id,
    ...newVideos,
  };
};

export const getAllVideos = async () => {
  const collection = admin.firestore().collection('videos');
  const result = await collection.get();
  const allVideos = result.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  if (allVideos) return allVideos;
  return null;
};

export const updateVideo = async (id: string, video: IVideo) => {
  const collection = admin.firestore().collection('videos');
  const updatedVideo = await collection.doc(id).update({
    ...video,
    updatedAt: new Date(),
  });
  if (updatedVideo) {
    const result = await collection.doc(id).get();
    return result.data();
  }
  return null;
};

export const deleteVideo = async (id: string) => {
  const collection = admin.firestore().collection('videos');
  const result = await collection.doc(id).delete();
  if (result) return result;
  return null;
};
