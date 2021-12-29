import type { MethodParamters, Middleware } from '@/declarations';
import { factory } from './factory';

export function Post(methodParamters?: MethodParamters) {
  let path: string;
  let middleware: Middleware[];

  if (typeof methodParamters === 'object' && methodParamters !== null) {
    path = methodParamters.path;
    middleware = methodParamters.middleware;
  }

  return factory('post', path, middleware);
}

export default Post;
