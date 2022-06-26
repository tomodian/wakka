import db from './db'

test('connect and disconnect', async () => {
  expect.assertions(2)

  expect(async () => await db.$connect()).not.toThrow()
  expect(async () => await db.$disconnect()).not.toThrow()
})
