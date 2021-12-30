# express-decorator

Decorator typescript for express controlers/router

## How to use

```ts
// Controller example

import { Request, Response } from 'express'
import { ControllerBase, Controller, Get } from 'express-decorator';

@Controller(/* 'Example' Name here is optional*/)
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
```
```ts
// Express app example

import express, { Router } from 'express';
import { autoloader } from 'express-decorator';
import Example from './controllers/Example';

const app = express();

app.use(autoloader([Example], Router()))

app.listen(8888, () => {
    console.log('Express decorator on air at 127.0.0.1:8888')
})

```

## For development or test

 - 1) Download the repository
 - 2) `npm install` To install dependecies
 - 3) `npm link && npm link express-decorator` To link this project as module in node_modules directory
 - 4) `npm run dev` To run code in example directory

# License
[MIT](/LICENSE)