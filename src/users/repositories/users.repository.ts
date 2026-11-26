import { WithId, ObjectId } from 'mongodb';
import { User } from '../types/user';
import { usersCollection } from '../../db/collections';

export const usersRepository = {
  async findById(id: string): Promise<WithId<User> | null> {
    return usersCollection.findOne({ _id: new ObjectId(id) });
  },

  async create(newUser: User): Promise<string> {
    const insertResult = await usersCollection.insertOne({ ...newUser });
    return insertResult.insertedId.toString();
  },

  async delete(id: string): Promise<boolean> {
    const isDeleted = await usersCollection.deleteOne({ _id: new ObjectId(id) });
    return isDeleted.deletedCount > 0;
  },
};
