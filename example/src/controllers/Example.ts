import { Request, Response } from 'express'
import { ControllerBase, Controller, Get, Post } from 'express-http-decorators';

@Controller()
export class Example extends ControllerBase {
    @Get({ path: '/world' })
    world(request: Request, response: Response) {
        response.send('Hello World');
    }

    @Post({ path: '/hello' })
    hello(request: Request, response: Response) {
        response.send('Hello World');
    }
}

export default Example;
