import { createPassHash, comparePassHash } from './authPassword';
import { createHashLogin, validateToken } from './authJWT';
import {
  valInfoVideo, valInfoUser, valId, valInfoHistory,
} from './authInfos';

export default {
  valInfoVideo,
  valInfoUser,
  createPassHash,
  comparePassHash,
  createHashLogin,
  validateToken,
  valId,
  valInfoHistory,
};
