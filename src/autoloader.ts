import type { Router } from 'express';
import { ControllerBase } from './ControllerBase';
import type { ResourceIdentifier } from './declarations';

import AutoloaderException from './AutoloaderException'

export function autoloader<T>(controllers: Array<T>, router: Router, verbose: (identifier: ResourceIdentifier) => void = () => {}): Router {
  Object.keys(controllers).forEach((ControllerName: string) => {
    let controller: ControllerBase;
    const resoruceIdentifier: ResourceIdentifier[] = [];

    if (!(controllers[ControllerName].prototype instanceof ControllerBase)) {
      throw new AutoloaderException(`The class ${controllers[ControllerName].name} isn't instanceof ControllerBase`)
    }

    controller = controllers[ControllerName].prototype;

    resoruceIdentifier.push(...controller.getAllResourceIdentifier())

    resoruceIdentifier.forEach((identifier: ResourceIdentifier) => {
      const {
        method, path, middleware, name,
      } = identifier;

      const newPath: string = `/${controller.getResourceName()}${path}`;
      verbose({
        ...identifier,
        path: newPath
      });

      try {
        router[method](newPath, middleware, controller[name]);
      } catch (error) {
        throw new AutoloaderException(error);
      }
    });
  });

  return router;
}

export default autoloader;
