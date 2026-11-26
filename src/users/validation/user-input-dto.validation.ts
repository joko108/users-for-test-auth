import { body } from 'express-validator';

export const loginValidation = body('login')
  .exists()
  .withMessage('Login is required')
  .isString()
  .withMessage('Login must be a string')
  .trim()
  .isLength({ min: 3, max: 10 })
  .withMessage('Invalid length of login');

export const passwordValidation = body('password')
  .exists()
  .withMessage('Password is required')
  .isString()
  .withMessage('Password must be a string')
  .trim()
  .isLength({ min: 6, max: 20 })
  .withMessage('Password in not correct');

export const emailValidation = body('email')
  .exists()
  .withMessage('Email is required')
  .isString()
  .withMessage('Email must be a string')
  .isEmail()
  .withMessage('Email must be email type ');

export const userInputDtoValidation = [
  loginValidation,
  passwordValidation,
  emailValidation,
];