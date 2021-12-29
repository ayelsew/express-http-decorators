export class ControllerException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ControllerException';
  }
}

export default ControllerException;
