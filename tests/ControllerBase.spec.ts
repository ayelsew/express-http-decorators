import ControllerBase from '../src/ControllerBase';
import { Method } from '../src/declarations';

describe('ControllerBase check', () => {
  it('Get resrouce name', () => {
    class Test extends ControllerBase { }

    expect(new Test().getResourceName()).toBe('')
  })

  it('Get resrouces', () => {
    class Test extends ControllerBase { }

    const test = new Test();
    const resource = {
      method: Method.get,
      middleware: [],
      name: '',
      path: ''
    }

    test.setResourceIdentifier(resource);

    expect(test.getAllResourceIdentifier()).toEqual([resource]);
    expect(test.getResourceIdentifier(0)).toEqual(resource);
    expect(test.getResourceIdentifier(1)).toBeUndefined();
  })
})
