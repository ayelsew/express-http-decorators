import {
  Controller, ControllerBase,
  Delete,Get,Patch,Post,Put,
  autoloader
} from '../src';
import { factory } from '../src/decorators/factory'

describe('Index check', () => {
  it('imported autoloader', () => {
    expect(typeof autoloader).toBe('function')
  })

  it('imported decorator Put', () => {
    expect(typeof Put).toBe('function')
  })

  it('imported decorator Post', () => {
    expect(typeof Post).toBe('function')
  })

  it('imported decorator Patch', () => {
    expect(typeof Patch).toBe('function')
  })

  it('imported decorator Delete', () => {
    expect(typeof Delete).toBe('function')
  })

  it('imported decorator Get', () => {
    expect(typeof Get).toBe('function')
  })

  it('imported decorator Controller', () => {
    expect(typeof Controller).toBe('function')
  })

  it('imported decorator factory', () => {
    expect(typeof factory).toBe('function')
  })

  it('imported class ControllerBase', () => {
    class Test extends ControllerBase { }
    expect(new Test()).toBeInstanceOf(ControllerBase)
  })
});
