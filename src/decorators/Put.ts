import type { MethodParamters, Middleware } from '@/declarations';
import { factory } from './factory';

export function Put(methodParamters?: MethodParamters) {
  let path: string;
  let middleware: Middleware[];

  if (typeof methodParamters === 'object' && methodParamters !== null) {
    path = methodParamters.path;
    middleware = methodParamters.middleware;
  }

  return factory('put', path, middleware);
}

export default Put;
