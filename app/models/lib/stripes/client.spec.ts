import client from './client'

test('client', async () => {
  const got = client()

  expect(got).toBeTruthy()
})
