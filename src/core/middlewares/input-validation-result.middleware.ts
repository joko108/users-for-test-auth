import { Request, Response, NextFunction} from 'express';
import { ValidationError, validationResult } from 'express-validator';
import { ErrorExtensions } from '../types/app-error';
import { HttpStatus } from '../types/http-statuses';
import { ValidationErrorType } from '../types/validation-error-type';

// Wraps errors in a single format
export const createErrorMessage = (error: ErrorExtensions[]): ValidationErrorType => {
  return { errorsMessages: error };
}

// Helper to middleware of express-validator.
const formatError = (error: ValidationError): ErrorExtensions => {
  if (error.type === 'field') {
    return { field: error.path, message: error.msg };
  }
  return { field: '', message: error.msg };
};

// Middleware to collect errors of express-validator.
export const inputValidationResultMiddleware = (
  req: Request, res: Response, next: NextFunction
) => {
  const errors = validationResult(req)
    .formatWith(formatError)
    .array({ onlyFirstError: true });

  if (errors.length > 0) {
    res.status(HttpStatus.BadRequest_400).json(createErrorMessage(errors));
    return;
  }

  next();
};
