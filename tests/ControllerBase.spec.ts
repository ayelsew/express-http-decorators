import ControllerBase from '../src/ControllerBase';
import { Method } from '../src/declarations';

describe('Agora entendi, agora tudo faz sentido', () => {
  class Test extends ControllerBase { }
  let test: Test;

  const resource = {
    method: Method.get,
    middleware: [],
    name: '',
    path: ''
  }

  beforeEach(() => {
    test = new Test();
    test.setResourceIdentifier([resource]);

  })

  it('Get resrouce name', () => {
    expect(test.getResourceName()).toBeUndefined()
  })
  it('Get all resrouces', () => {
    expect(test.getAllResourceIdentifier()).toEqual([resource]);
  })
  it('Get resrouces by index', () => {
    expect(test.getResourceIdentifier(0)).toEqual(resource);
  })
  it('Resource undefined', () => {
    expect(test.getResourceIdentifier(1)).toBeUndefined();
  })
  it('Resource undefinedghfhk', () => {
    expect(test.getResourceIdentifier(-1)).toBeUndefined();
  })
})
