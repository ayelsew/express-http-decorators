import { MethodParameters } from '../src/declarations';
import {
  Delete,
  Get,
  Patch,
  Post,
  Put
} from '../src/decorators/methods';

describe('methods check', () => {
  const parameters: MethodParameters = {
    middleware: [],
    path: '/'
  }
  it('decorator delete is function', () => {
    const deleteDecorator = Delete(parameters);
    expect(typeof deleteDecorator).toBe('function');
    expect(deleteDecorator({}, '')).toBeUndefined()
  })

  it('decorator get is function', () => {
    const getDecorator = Get(parameters);
    expect(typeof getDecorator).toBe('function');
    expect(getDecorator({}, '')).toBeUndefined()
  })

  it('decorator Patch is function', () => {
    const patchDecorator = Patch(parameters);
    expect(typeof patchDecorator).toBe('function');
    expect(patchDecorator({}, '')).toBeUndefined()
  })

  it('decorator Post is function', () => {
    const postDecorator = Post(parameters);
    expect(typeof postDecorator).toBe('function');
    expect(postDecorator({}, '')).toBeUndefined()
  })

  it('decorator Put is function', () => {
    const putDecorator = Put(parameters);
    expect(typeof putDecorator).toBe('function');
    expect(putDecorator({}, '')).toBeUndefined()
  })
});
