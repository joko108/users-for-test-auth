import { Router } from 'express';
import { USERS_ROUTES } from '../constants/users.paths';
import { userInputDtoValidation } from '../validation/user-input-dto.validation';
import { inputValidationResultMiddleware } from '../../core/middlewares/input-validation-result.middleware';
import { usersCreateHandler } from './handlers/users-create.handler';
import { paramIdValidation } from '../../core/middlewares/validation/param-id.validation';
import { usersGetHandler } from './handlers/users-get.handler';
import { usersGetListHandler } from './handlers/users-get-list.handler';

export const usersRouter = Router();

usersRouter
  .get(USERS_ROUTES.ROOT, usersGetListHandler)

  .get(
    USERS_ROUTES.BY_ID,
    paramIdValidation,
    inputValidationResultMiddleware,
    usersGetHandler
  )

  .post(
    USERS_ROUTES.ROOT,
    userInputDtoValidation,
    inputValidationResultMiddleware,
    usersCreateHandler
  );
