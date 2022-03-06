import { IErrors } from 'interfaces';
import { ValidationError } from 'yup';

export const getValidationErrors = (err: ValidationError): IErrors => {
  const validationErrors: IErrors = {};

  err.inner.forEach(error => {
    if (error.path) validationErrors[error.path] = error.message;
  });

  return validationErrors;
};
