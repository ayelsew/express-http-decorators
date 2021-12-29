import type { Middleware, Method } from '@/declarations';

export function factory(method: Method, path?: string, middleware: Middleware[] = []) {
  return (target: any, key: string): void => {
    const pathChosen = path || `/${key}`;

    Object.defineProperty(target, 'resourceIdentifier', {
      value: [
        ...target.resourceIdentifier || [],
        {
          method,
          path: pathChosen.toLowerCase(),
          middleware,
          name: key,
        },
      ],
      writable: true,
    });
  };
}

export default factory;
