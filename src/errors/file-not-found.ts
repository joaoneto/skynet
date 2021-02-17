import BaseError from './base';

export const FILE_NOT_FOUND_ERROR = 'FILE_NOT_FOUND_ERROR';

export class FileNotFoundError extends BaseError {
  constructor(message = 'File not found', code = FILE_NOT_FOUND_ERROR) {
    super(message, code);
  }
}
