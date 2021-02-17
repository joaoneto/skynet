import BaseError from './base';

export const UNEXPECTED_ERROR = 'UNEXPECTED_ERROR';

export class UnexpectedError extends BaseError {
  constructor(message = 'Unexpected error', code = UNEXPECTED_ERROR) {
    super(message, code);
  }
}
