import { Request, Response } from 'express';
import { usersQwRepository } from '../../repositories/users.query-repository';
import { HttpStatus } from '../../../core/types/http-statuses';
import { errorsHandlerMiddleware } from '../../../core/middlewares/errors-handler.middleware';

export const usersGetListHandler = async (req: Request, res: Response) => {
  try {
    const usersList = await usersQwRepository.findMany();
    res.status(HttpStatus.Ok_200).send(usersList);
  } catch (e: unknown) {
    errorsHandlerMiddleware(e, res);
  }
};
