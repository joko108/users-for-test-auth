import { Request, Response } from 'express';
import { usersQwRepository } from '../../repositories/users.query-repository';
import { notFoundError } from '../../../core/errors/errors.middleware';
import { HttpStatus } from '../../../core/types/http-statuses';
import { mapToUserViewModel } from '../mappers/map-to-user.view-model';
import { errorsHandlerMiddleware } from '../../../core/middlewares/errors-handler.middleware';

export const usersGetHandler = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const user = await usersQwRepository.findById(req.params.id);

    if (!user) {
      throw notFoundError('User not found', 'id');
    }

    const userViewModel = mapToUserViewModel(user);

    res.status(HttpStatus.Ok_200).send(userViewModel);
  } catch (e: unknown) {
    errorsHandlerMiddleware(e, res);
  }
};
