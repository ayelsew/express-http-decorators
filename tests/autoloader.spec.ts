import { Router } from 'express'
import { ControllerBase } from '../src';
import autoloader from '../src/autoloader';
import { Method } from '../src/declarations';

import Example from './__mocks__/controller'

describe('autoloader check', () => {
  it('Return router', () => {
    const router = 'router';

    expect(autoloader([], router as unknown as Router)).toEqual('router')
  })

  it('Add endpoint', () => {
    const router = () => {
      const route = [];
      return {
        get: (path, middleware, controller) => {
          route.push({ path, middleware, controller })
        },
        route
      }
    }

    expect(JSON.stringify(autoloader([Example], router() as unknown as Router).route))
      .toEqual(`[{\"path\":\"/example/world\",\"middleware\":[]}]`)
  })

  it('Isn\'t instace of ControllerBase', () => {
    const router = () => {
      const route = [];
      return {
        get: (path, middleware, controller) => {
          route.push({ path, middleware, controller })
        },
        route
      }
    }

    expect(() => autoloader([class A { }], router() as unknown as Router)).toThrowError(`The class A isn't instanceof ControllerBase`)
  })


  it('Throw unknown method router', () => {
    const router = () => {
      const route = [];
      return {
        get: (path, middleware, controller) => {
          route.push({ path, middleware, controller })
        },
        route
      }
    }

    class A extends ControllerBase { 
      anything() {
      }
    }

    Object.defineProperty(A.prototype, 'resourceName', {
      value: 'a',
      writable: true,
    });

    Object.defineProperty(A.prototype, 'resourceIdentifier', {
      value: [
        {
          method: 'test' as unknown as Method,
          middleware: [],
          name: 'anything',
          path: '/'
        },
      ],
      writable: true,
    });

    expect(() => autoloader([A], router() as unknown as Router)).toThrowError(`router[method] is not a function`)
  })
})
