import admin from 'firebase-admin';
import { IUser } from '../types';

export const createUser = async (user: IUser) => {
  const collection = admin.firestore().collection('users');
  const existUserEmail = await collection
    .where('email', '==', user.email)
    .get();
  if (existUserEmail.empty) {
    const { id } = await collection.add(user);
    return {
      id,
      ...user,
    };
  }
  return null;
};

export const login = async (user: IUser) => {
  const collection = admin.firestore().collection('users');
  const existUserEmail = await collection
    .where('email', '==', user.email)
    .get();
  if (existUserEmail.empty) {
    return null;
  }
  return existUserEmail.docs.map((doc) => ({ id: doc.id, ...doc.data() }))[0];
};

export const getUserById = async (id: string) => {
  const collection = admin.firestore().collection('users');
  const result = await collection.doc(id).get();
  if (result.exists) return { id: result.id, ...result.data() };
  return null;
};

export const getAllUser = async () => {
  const collection = admin.firestore().collection('users');
  const result = await collection.get();
  if (collection) { return result.docs.map((doc) => ({ id: doc.id, ...doc.data() })); }
  return null;
};

export const updateUser = async (id: string, info: IUser) => {
  const collection = admin.firestore().collection('users');
  const user = await collection.doc(id).get();
  if (user.exists) {
    const updatedUser = await collection.doc(id).update({
      ...info,
    });
    if (updatedUser) {
      const result = await collection.doc(id).get();
      return result.data();
    }
  }
  return null;
};

export const deleteUserById = async (id: string) => {
  const collection = admin.firestore().collection('users');
  const user = await collection.doc(id).get();
  if (user.exists) {
    const result = await collection.doc(id).delete();
    return result;
  }
  return null;
};
