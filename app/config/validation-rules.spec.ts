import validationRules from './validation-rules'

test('zodStripe', async () => {
  {
    const got = validationRules.zodStripe.customerId.safeParse('foo')
    expect(got.success).toBeFalsy()
  }

  {
    const got = validationRules.zodStripe.customerId.safeParse('cus_foobar')
    expect(got.success).toBeTruthy()
  }
})
