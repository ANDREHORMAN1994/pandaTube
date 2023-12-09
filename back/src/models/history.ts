import admin from 'firebase-admin';
import { IHistorySection } from '../types';

export const createHistory = async (history: IHistorySection) => {
  const newHistorys = {
    ...history,
    createdAt: new Date(),
    updatedAt: null,
  };
  const collection = admin.firestore().collection('historys');
  const existHistory = await collection.where('title', '==', newHistorys.title).get();
  if (existHistory.empty) {
    const { id } = await collection.add(newHistorys);
    return {
      id,
      ...newHistorys,
    };
  }
  const updateHistory = await collection.doc(existHistory.docs[0].id).update({
    data: [...existHistory.docs[0].data().data, ...newHistorys.data],
    updatedAt: new Date(),
  });
  if (updateHistory) {
    const result = await collection.doc(existHistory.docs[0].id).get();
    return result.data();
  }
  return null;
};

export const getAllHistorys = async () => {
  const collection = admin.firestore().collection('historys');
  const result = await collection.get();
  const allHistorys = result.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  if (allHistorys) return allHistorys;
  return null;
};
