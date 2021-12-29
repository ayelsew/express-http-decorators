import type { Method, MethodParameters, Middleware } from '@/declarations';
import { factory } from './factory';

export function Crud(name: string, methodParamters?: MethodParameters) {
  let path: string = '';
  let middleware: Middleware[] = [];
  
  if (typeof methodParamters === 'object' && methodParamters !== null) {
    path = methodParamters.path;
    middleware = methodParamters.middleware;
  }

  return factory(name as Method, path, middleware);
}

export default Crud;
