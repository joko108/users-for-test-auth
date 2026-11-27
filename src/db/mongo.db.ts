import { Db, MongoClient } from 'mongodb';
import { SETTINGS } from '../settings/config';
import { initCollection } from './collections';

export let client: MongoClient;

export const runDb = async (url: string): Promise<void> => {
  client = new MongoClient(url);
  const db: Db = client.db(SETTINGS.DB_NAME);

  initCollection(db);

  try {
    await client.connect();
    await db.command({ ping: 1 });
    console.log('✅Connected to database');
  } catch (er) {
    await client.close();
    throw new Error(`❌Can't connect to database, ${er}`);
  }
};
