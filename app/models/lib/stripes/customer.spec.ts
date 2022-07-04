import Stripe from 'stripe'

import * as users from '../../../prisma/seeds/users'
import customer from './customer'
import type { CreateInput, FindByCustomerIdInput } from './customer'

describe('create', () => {
  test('should fail with broken inputs', async () => {
    const patterns: any[] = [
      // List insane values here.
      null,
      NaN,
      () => {},
      '',
    ]

    await Promise.all(
      patterns.map(async (p) => {
        await expect(customer.create(p)).rejects.toThrow()
      }),
    )
  })

  test('should fail with invalid inputs', async () => {
    const patterns: CreateInput[] = [
      {
        id: 0, // Wrong
        email: users.yamadaTaro.email,
        name: users.yamadaTaro.name,
      },
      {
        id: 1,
        email: 'foo', // Wrong
        name: users.yamadaTaro.name,
      },
      {
        id: 1,
        email: users.yamadaTaro.email,
        name: 'a', // Wrong
      },
    ]

    await Promise.all(
      patterns.map(async (p) => {
        await expect(customer.create(p)).rejects.toThrow()
      }),
    )
  })

  test('should succeed with valid input', async () => {
    const patterns: CreateInput[] = [
      {
        id: 1,
        email: users.yamadaTaro.email,
        name: users.yamadaTaro.name,
      },
    ]

    await Promise.all(
      patterns.map(async (p) => {
        await expect(customer.create(p)).resolves.not.toThrow()
      }),
    )
  })
})

describe('findByCustomerId', () => {
  test('should fail with broken inputs', async () => {
    const patterns: any[] = [
      // List insane values here.
      null,
      NaN,
      () => {},
      '',
      'foo_123',
    ]

    await Promise.all(
      patterns.map(async (p) => {
        await expect(customer.findByCustomerId(p)).rejects.toThrow()
      }),
    )
  })

  test('should fail when Stripe Customer ID does not exist', async () => {
    const patterns: FindByCustomerIdInput[] = [
      // Tips: Do not add `cus_*` here, Stripe mock server will treat as correct response.
      'broken',
    ]

    await Promise.all(
      patterns.map(async (p) => {
        await expect(customer.findByCustomerId(p)).rejects.toThrow()
      }),
    )
  })

  test('should succeed when Stripe Customer ID exists', async () => {
    const id = 'cus_foobar'
    const got = await customer.findByCustomerId(id)

    expect(got.id).toEqual(id)
  })
})
