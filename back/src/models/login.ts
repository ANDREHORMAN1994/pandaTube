// import { ObjectId } from 'mongodb';
import db from './connect';
import { IUser } from '../types';

// const collection = db.collection('users');

export const createUser = async (user: IUser) => {
  // const result = await collection.findOne({ email: user.email });
  // if (!result) {
  //   const { insertedId } = await collection.insertOne(user);
  //   return {
  //     _id: insertedId,
  //     ...user,
  //   };
  // }
  return null;
};

export const login = async (user: IUser) => {
  // const result = await collection.findOne({ email: user.email });
  // if (result) return result;
  return null;
};

export const getUserById = async (id: string) => {
  // const user = await collection.findOne({ _id: new ObjectId(id) });
  // if (user) return user;
  return null;
};

export const getAllUser = async () => {
  // const result = await collection.find();
  // const allUsers = await result.toArray();
  // if (allUsers) return allUsers;
  return null;
};

export const updateUser = async (id: string, info: IUser) => {
  // const result = await getUserById(id);
  // if (result) {
  //   const user = await collection.updateOne({ _id: new ObjectId(id) }, {
  //     $set: info,
  //   });
  //   if (user && user.modifiedCount === 1) {
  //     const updatedUser = await getUserById(id);
  //     return updatedUser;
  //   }
  // }
  return null;
};

export const deleteUserById = async (id: string) => {
  // const result = await collection.deleteOne({ _id: new ObjectId(id) });
  // return result.deletedCount > 0;
  return null;
};
