// Type for only one error.
export type ErrorExtensions = {
  field: string | null;
  message: string;
};

// Type for many errors.
export type AppError = {
  statusCode: number;
  extensions: ErrorExtensions[];
};
