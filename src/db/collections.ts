import { Collection, Db } from 'mongodb';
import { User } from '../users/types/user';

// Collections names.
export const USERS_COLLECTION_NAME = 'users';

// Define collection.
export let usersCollection: Collection<User>;

// Init collections.
export const initCollection = (db: Db): void => {
  usersCollection = db.collection<User>(USERS_COLLECTION_NAME);
};
