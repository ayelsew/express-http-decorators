# express-decorator

Decorator typescript para express controlers/router

Se você não sabe sobre methodos HTTP veja: [HTTP request methods at MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)

## Como usar

```ts
// Exemplo de controller

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
// Exemplo de API Express 

import express, { Router } from 'express';
import { autoloader } from 'express-decorator';
import Example from './controllers/Example';

const app = express();

app.use(autoloader([Example], Router()))

app.listen(8888, () => {
    console.log('Express decorator on air at 127.0.0.1:8888')
})

```

## Funções

Função para carregar controllers e montar endpoints 
- `autoloader(array: Array<class extends ControlerBase>, router: Express.Router, verbose: (ResourceIdentifier) => void): Express.Router`: Essa função recebe um array de classes `"controller"` que extende `ControlerBase` e conecta ao roteador do express  
    - `array: Array<class extends ControlerBase>`: Array de classes que extende `ControllerBase`  
    - `router: Express.Router`: O roteador (router) do express  
    - `verbose: (ResourceIdentifier) => void`: Função de retornor que é chamada a cada nova endpoint conectada ao router ao roteador (Com fins de debug)  

Métodos HTTP disponíveis: `Post`, `Get`, `Put`, `Patch`, `Delete`
- `@<decorator name>(methodParameters?: MethodParameters)`: Com esse decorator você sinaliza um étodos na classe como endpoint
    - `MethodParameters.path`: Nome customizado para endpoint, Se não especificado, será o nome do método da classe
    - `MethodParameters.middleware`: Array de middlewares express

Decorator para classe controller. A classe controller sempre deve extender `ControllerBase`.
- `@Controller(name?: string)`: Esse decorator define o nome base da endpoint veja o exemplo acima. Se não definido o nome da classe será usado be the name of class

## Para desenvolvimento ou testes

 - 1) Baixe o repositório
 - 2) `npm install` Para instalar as dependências
 - 3) `npm link && npm link express-decorator` Para criar referência desse projeto como módulo no diretório node_modules
 - 4) `npm run dev` Para executar o código no diretório example

# Licença
[MIT](/LICENSE)