import Stripe from 'stripe'

import * as users from '../../../prisma/seeds/users'
import env from '../../../config/env'
import customer from './customer'
import client from './client'
import portal from './portal'
import type { CreateInput } from './portal'

describe('create', () => {
  test('should fail with broken inputs', async () => {
    const patterns: any[] = [null, NaN, () => {}, '']

    await Promise.all(
      patterns.map(async (p) => {
        await expect(portal.create(p)).rejects.toThrow()
      }),
    )
  })

  test('should fail with invalid inputs', async () => {
    const patterns: CreateInput[] = [
      {
        customerId: 'foo', // Wrong
        returnUrl: env.publishable.appUrl(),
      },
      {
        customerId: 'cus_12345',
        returnUrl: '', // Wrong
      },
    ]

    await Promise.all(
      patterns.map(async (p) => {
        await expect(portal.create(p)).rejects.toThrow()
      }),
    )
  })

  test('should succeed with valid input', async () => {
    const params = {
      customerId: `cus_${users.yamadaTaro.id}`,
      returnUrl: env.publishable.appUrl('/foo'),
    }

    const got = await portal.create(params)

    expect(got.return_url).toBeTruthy()
    expect(got.return_url!.startsWith(params.returnUrl)).toBeTruthy()
    expect(got.url.startsWith('https://billing.stripe.com/session/')).toBeTruthy()
  })
})
