import admin from 'firebase-admin';
import { IHistorySection } from '../types';

export const createHistory = async (History: IHistorySection) => {
  const newHistorys = {
    ...History,
    createdAt: new Date(),
    updatedAt: null,
  };
  const collection = admin.firestore().collection('historys');
  const { id } = await collection.add(newHistorys);
  return {
    id,
    ...newHistorys,
  };
};

export const getAllHistorys = async () => {
  const collection = admin.firestore().collection('historys');
  const result = await collection.get();
  const allHistorys = result.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  if (allHistorys) return allHistorys;
  return null;
};
