import { AppError } from '../types/app-error';
import { HttpStatus } from '../types/http-statuses';

// For 404.
export const notFoundError = (
  message: string = 'Not found',
  field: string | null = null
): AppError => {
  return {
    statusCode: HttpStatus.NotFound_404,
    extensions: [{ field, message }],
  };
};

// For 401......

// For 403......
