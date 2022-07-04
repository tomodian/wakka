import { User } from '@prisma/client'

import db from './lib/db'
import stripes from './lib/stripes'
import type { CustomerWithMetadata } from './lib/stripes/customer'

/**
 * Find all users.
 */
const all = async (): Promise<User[]> => {
  const got = await db.user.findMany({})

  if (!got) {
    return []
  }

  return JSON.parse(JSON.stringify(got))
}

/**
 * Find user by app-generated id.
 */
const find = async (id: number): Promise<User> => {
  const got = await db.user.findUnique({
    where: {
      id: id,
    },
  })

  if (!got) {
    throw new Error(`could not find user ${id}`)
  }

  return JSON.parse(JSON.stringify(got))
}

/**
 * Find or create Stripe Customer.
 */
const findOrCreateStripeCustomer = async (input: User): Promise<CustomerWithMetadata> => {
  if (!input.stripe_customer_id) {
    const cus = await stripes.customer.create(input)

    // Persist to database.
    await db.user.update({
      where: {
        id: input.id,
      },
      data: {
        stripe_customer_id: cus.id,
      },
    })

    return cus
  }

  // TODO: Avoid permanent crash
  // This code will permanently crash when user has customer id in database,
  // and mistakenly removed Stripe Customer.
  return await stripes.customer.findByCustomerId(input.stripe_customer_id)
}

/**
 * Find or create Stripe Customer Portal URL.
 */
const findOrCreatePortalUrl = async (input: User): Promise<string> => {
  const cus = await findOrCreateStripeCustomer(input)

  const got = await stripes.portal.create({
    customerId: cus.id,
  })

  return got.url
}

export default {
  all,
  find,
  findOrCreateStripeCustomer,
  findOrCreatePortalUrl,
}
