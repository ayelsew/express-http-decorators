import type { MethodParamters, Middleware } from '@/declarations';
import { factory } from './factory';

export function Delete(methodParamters?: MethodParamters) {
  let path: string;
  let middleware: Middleware[];

  if (typeof methodParamters === 'object' && methodParamters !== null) {
    path = methodParamters.path;
    middleware = methodParamters.middleware;
  }

  return factory('delete', path, middleware);
}

export default Delete;
