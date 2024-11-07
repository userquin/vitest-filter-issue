import { assert, expect, test } from 'vitest'

const testPath = expect.getState().testPath
if (!testPath || !testPath.includes('basic.test.ts')) {
  throw new Error(`testPath is not correct: ${testPath}`)
}

test('Math.sqrt()', async () => {
  assert.equal(Math.sqrt(4), 2)
  assert.equal(Math.sqrt(2), Math.SQRT2)
  expect(Math.sqrt(144)).toStrictEqual(12)
  // await new Promise(resolve => setTimeout(resolve, 3000))
})

test('JSON', () => {
  const input = {
    foo: 'hello',
    bar: 'world',
  }

  const output = JSON.stringify(input)

  expect(input).toEqual({
    foo: 'hello',
    bar: 'world',
  })
  expect(output).toEqual('{"foo":"hello","bar":"world"}')
  assert.deepEqual(JSON.parse(output), input, 'matches original')
})
