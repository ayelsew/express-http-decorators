import { Request, Response } from 'express'
import { Controller, ControllerBase, Get } from '../../src';

@Controller()
export class Example extends ControllerBase {
  @Get({ path: '/world' })
  world(request: Request, response: Response) {
    response.send('Hello World');
  }
}

export default Example;
