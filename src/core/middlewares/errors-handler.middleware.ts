import { Response } from 'express';
import { AppError } from '../types/app-error';
import { createErrorMessage } from './input-validation-result.middleware';
import { HttpStatus } from '../types/http-statuses';

export const errorsHandlerMiddleware = (error: unknown, res: Response): void => {
  // For 404, 401, 403 etc.
  if (isAppError(error)) {
    res
      .status(error.statusCode)
      .send(createErrorMessage(error.extensions));
    return;
  }

  // For 500.
  res.sendStatus(HttpStatus.InternalServerError_500);
};

// Helper for errorsHandler.
const isAppError = (error: unknown): error is AppError => {
  return (
    typeof error === 'object'
    && error !== null
    && 'statusCode' in error
    && 'extensions' in error
  );
};
