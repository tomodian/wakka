import env from './env'

test('publishable', async () => {
  expect(env.publishable).toBeTruthy()

  expect(env.publishable.appHostname).toBeTruthy()

  expect(env.publishable.appUrl()).toEqual('https://wakka.test')
  expect(env.publishable.appUrl('/foo')).toEqual('https://wakka.test/foo')
  expect(env.publishable.appUrl('foo')).toEqual('https://wakka.test/foo')

  expect(env.publishable.environment).toEqual('test')

  expect(env.publishable.stripePublicKey).toBeTruthy()
  expect(env.publishable.stripeShouldMock).toBeTruthy()
})

test('secret', async () => {
  expect(env.secret).toBeTruthy()
  expect(env.secret.stripeSecretKey).toBeTruthy()
})
