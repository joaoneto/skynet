import BaseError from './base';

export default class UnexpectedError extends BaseError {
  constructor(message = 'Unexpected Error', code = 'unexpected_error') {
    super(message, code);
  }
}
