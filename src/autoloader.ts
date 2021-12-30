import type { Router } from 'express';
import type { ControllerBase } from './ControllerBase';
import type { ResourceIdentifier } from './declarations';

import { ControllerException } from './ControllerException'

export function autoloader(controllers: ControllerBase[], router: Router): Router {

  Object.keys(controllers).forEach((ControllerName: string) => {
    let controller: ControllerBase;
    const resoruceIdentifier: ResourceIdentifier[] = [];

    try {
      controller = controllers[ControllerName]();
    } catch (error) {
      throw new ControllerException(error);
    }

    resoruceIdentifier.push(...controller.getAllResourceIdentifier())

    resoruceIdentifier.forEach((identifier: ResourceIdentifier) => {
      const {
        method, path, middleware, name,
      } = identifier;

      const newPath: string = `/${controller.getResourceName()}${path}`;

      console.log(`${method.toUpperCase()} ${name} ${newPath}`);

      try {
        router[method](newPath, middleware, controller[name]);
      } catch (error) {
        throw new ControllerException(error);
      }
    });
  });

  return router;
}

export default autoloader;
