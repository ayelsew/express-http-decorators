import { ControllerBase, Controller, Get } from 'express-decorator';

@Controller()
export class Example extends ControllerBase {
    @Get({ path: '/world' })
    world() {

    }
}
