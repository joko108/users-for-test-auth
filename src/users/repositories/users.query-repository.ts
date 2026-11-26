import { ObjectId, WithId } from 'mongodb';
import { User } from '../types/user';
import { usersCollection } from '../../db/collections';

export const usersQwRepository = {
  async findMany(): Promise<WithId<User>[]> {
    return usersCollection.find().toArray();
  },

  async findById(id: string): Promise<WithId<User> | null> {
    return usersCollection.findOne({ _id: new ObjectId(id) });
  },
};
