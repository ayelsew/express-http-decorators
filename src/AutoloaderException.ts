export class AutoloaderException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'AutoloaderException';
  }
}

export default AutoloaderException;
