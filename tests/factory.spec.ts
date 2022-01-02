import { Method } from '../src/declarations'
import { factory } from '../src/decorators/factory'

describe('factory check', () => {
  it('path is defined', () => {
    const decorator = factory(Method.get, '/', [])
    expect(decorator({}, 'test')).toBeUndefined()
  })

  it('path is undefined', () => {
    const decorator = factory(Method.get, undefined, [])
    expect(decorator({}, 'test')).toBeUndefined()
  })
})
