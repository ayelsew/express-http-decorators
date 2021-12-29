import type { MethodParamters, Middleware } from '@/declarations';
import { factory } from './factory';

export function Patch(methodParamters?: MethodParamters) {
  let path: string;
  let middleware: Middleware[];

  if (typeof methodParamters === 'object' && methodParamters !== null) {
    path = methodParamters.path;
    middleware = methodParamters.middleware;
  }

  return factory('patch', path, middleware);
}

export default Patch;
