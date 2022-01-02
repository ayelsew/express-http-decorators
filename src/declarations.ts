import { Request, Response, NextFunction } from 'express';

export enum Method {
  delete = 'delete',
  get = 'get',
  patch = 'patch',
  post = 'post',
  put = 'put',
}

export type Middleware = (request: Request, response: Response, next: NextFunction) => void;

export interface ResourceIdentifier {
  method: Method;
  path: string;
  middleware: Middleware[],
  name: string
}

export interface MethodParameters {
  path?: string;
  middleware?: Middleware[];
}
