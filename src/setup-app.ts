import express, { Express } from "express";
import { USERS_PATH } from './users/constants/users.paths';
import { usersRouter } from './users/routers/users.router';

export const setupApp = (app: Express) => {
  app.use(express.json());

  app.use(USERS_PATH, usersRouter);
};
