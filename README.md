# express-decorator

Decorator typescript for express controlers/router

If you don't known about HTTP methods see [HTTP request methods at MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)

## How to use

```ts
// Controller example

import { Request, Response } from 'express'
import { ControllerBase, Controller, Get } from 'express-decorator';

@Controller() // /example
export class Example extends ControllerBase {
    @Get({ path: '/world' }) // /example/world
    world(request: Request, response: Response) {
        response.send('Hello World');
    }

    @Post({ path: '/hello' }) // /example/hello
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

## Functions

Function to load and make endpoint
- `autoloader(array: Array<class extends ControlerBase>, router: Express.Router, verbose: (ResourceIdentifier) => void): Express.Router`: This function recives an array of class `"controller"` that extends `ControlerBase` and bind to router of express  
    - `array: Array<class extends ControlerBase>`: Array of class that extends `ControllerBase`  
    - `router: Express.Router`: The router of express  
    - `verbose: (ResourceIdentifier) => void`: Function callback that is call every new endpoint binded to router (for debug)

HTTP methods decorators available: `Post`, `Get`, `Put`, `Patch`, `Delete`
- `@<decorator name>(methodParameters?: MethodParameters)`: With this decorator you can make a method at class as endpoint
    - `MethodParameters.path`: Custom name to endpoint, if not setted, will be the name of class method
    - `MethodParameters.middleware`: Array of middlewares express

Decorator for class controller. The class controller aways must be extends `ControllerBase`.
- `@Controller(name?: string)`: This decorator defines the base name to endpoint see example above, if not setted, will be the name of class

## For development or test

 - 1) Download the repository
 - 2) `npm install` To install dependecies
 - 3) `npm link && npm link express-decorator` To link this project as module in node_modules directory
 - 4) `npm run dev` To run code in example directory

# License
[MIT](/LICENSE)