import { Request, Response, NextFunction } from 'express';

export type Method = 'get' | 'post' | 'patch' | 'delete';

export type Middleware = (request: Request, response: Response, next: NextFunction) => void;

export interface ResourceIdentifier {
  method: Method;
  path: string;
  middleware: Middleware[],
  name: string
}

export interface MethodParamters {
  path?: string;
  middleware?: Middleware[];
}
