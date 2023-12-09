import models from '../models';
import { IHistorySection } from '../types';

export const createHistory = async (history: IHistorySection) => {
  const newHistory = await models.createHistory(history);
  if (newHistory) return newHistory;
  return null;
};

export const getAllHistorys = async () => {
  const allHistorys = await models.getAllHistorys();
  if (allHistorys) return allHistorys;
  return null;
};
