import type { Method, MethodParameters, Middleware } from '../declarations';
import { factory } from './factory';

export function HTTPFactory(name: Method, methodParameters?: MethodParameters) {
  let path: string = '';
  let middleware: Middleware[] = [];
  console.log('testando GET')
  
  if (typeof methodParameters === 'object' && methodParameters !== null) {
    path = methodParameters.path;
    middleware = methodParameters.middleware;
  }

  return factory(name, path, middleware);
}

export default HTTPFactory;
