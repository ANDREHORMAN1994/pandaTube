import { ICustomError } from '../types';

class HandleError extends Error implements ICustomError {
  statusCode?: number;
  message: string;
  name: string;

  constructor(statusCode: number, message: string) {
    super();

    this.statusCode = statusCode;
    this.message = message;
    this.name = 'BadRequestError';
  }
}

export default HandleError;
