import type { Method, MethodParameters, Middleware } from '../declarations';
import { factory } from './factory';

export function HTTPFactory(name: Method, methodParameters?: MethodParameters) {
  let path: string = '';
  let middleware: Middleware[] = [];
  
  if (methodParameters) {
    path = methodParameters.path;
    middleware = methodParameters.middleware;
  }

  return factory(name, path, middleware);
}

export default HTTPFactory;
