import BaseError from './base';

export const FILE_ACCESS_DENIED_ERROR = 'FILE_ACCESS_DENIED_ERROR';

export class FileAccessDeniedError extends BaseError {
  constructor(message = 'Access denied', code = FILE_ACCESS_DENIED_ERROR) {
    super(message, code);
  }
}
