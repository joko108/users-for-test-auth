import { Request, Response } from 'express';
import { UserAttributes } from '../../applicatons/dtos/user.attributes';
import { usersService } from '../../applicatons/users.service';
import { mapToUserViewModel } from '../mappers/map-to-user.view-model';
import { HttpStatus } from '../../../core/types/http-statuses';
import { errorsHandlerMiddleware } from '../../../core/middlewares/errors-handler.middleware';

export const usersCreateHandler = async (
  req: Request<{}, {}, UserAttributes>,
  res: Response
) => {
  try {
    const createdUserId = await usersService.create(req.body);

    // Find user by id.
    const createdUser = await usersService.findById(createdUserId);

    const userViewModel = mapToUserViewModel(createdUser);
    res.status(HttpStatus.Created_201).send(userViewModel);

  } catch (e: unknown) {
    errorsHandlerMiddleware(e, res);
  }
};
