import express from 'express';
import { setupApp } from './setup-app';
import { SETTINGS } from './settings/config';
import { runDb } from './db/mongo.db';

const bootstrap = async () => {
  const app = express();
  setupApp(app);

  const port = SETTINGS.PORT;

  await runDb(SETTINGS.MONGO_URL);

  app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
  });
};

bootstrap();
