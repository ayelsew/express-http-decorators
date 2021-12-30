import { Request, Response, NextFunction } from 'express';

declare namespace ExpressDecorators {

  export function Get(methodParameters?: MethodParameters): DecoratorResult;
  export function Delete(methodParameters?: MethodParameters): DecoratorResult;
  export function Patch(methodParameters?: MethodParameters): DecoratorResult;
  export function Post(methodParameters?: MethodParameters): DecoratorResult;
  export function Put(methodParameters?: MethodParameters): DecoratorResult;

  interface MethodParameters {
    path?: string;
    middleware?: Middleware[];
  }

  interface ResourceIdentifier {
    method: Method;
    path: string;
    middleware: Middleware[],
    name: string
  }

  type Middleware = (request: Request, response: Response, next: NextFunction) => void;

  type DecoratorResult = (target: any, key: string) => void;
  
  enum Method {
    delete = 'delete',
    get = 'get',
    patch = 'patch',
    post = 'post',
    put = 'put',
  }

}

export = ExpressDecorators;