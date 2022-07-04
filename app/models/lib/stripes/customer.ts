import Stripe from 'stripe'
import { z } from 'zod'

import validationRules from '../../../config/validation-rules'
import client from './client'

const CreateInput = z.object({
  // Application user id.
  id: z.number().gt(0),
  email: z.string().email(),
  name: z.string().min(2),
})

export type CreateInput = z.infer<typeof CreateInput>

/**
 * Create Stripe Customer.
 * https://stripe.com/docs/api/customers/create?lang=node
 */
const create = async (input: CreateInput): Promise<CustomerWithMetadata> => {
  CreateInput.parse(input)

  const got = await client().customers.create({
    email: input.email,
    name: input.name,
    metadata: {
      id: input.id,
      email: input.email,
    },
  })

  if (!got) {
    throw new Error(`failed to create customer for user ${input.id}, email ${input.email}`)
  }

  // Hacky workaround to make Stripe metadata to app flavored metadata.
  const out = <CustomerWithMetadata>{}
  return Object.assign(out, got)
}

/**
 * CustomerWithMetadata is Stripe.Customer with typed metadata.
 * See findByCustomerId how it's used.
 */
export type CustomerWithMetadata = Omit<Stripe.Customer, 'metadata'> & {
  metadata: {
    id: string
    email: string
  }
}

// Only takes Stripe Customer ID.
const FindByCustomerIdInput = validationRules.zodStripe.customerId

export type FindByCustomerIdInput = z.infer<typeof FindByCustomerIdInput>

/**
 * Get active customer by Stripe Customer ID.
 * This function guarantees the returned customer is active.
 *
 * @returns Get
 */
const findByCustomerId = async (id: FindByCustomerIdInput): Promise<CustomerWithMetadata> => {
  FindByCustomerIdInput.parse(id)

  const got = await client().customers.retrieve(id)

  if (!got) {
    throw new Error(`could not find customer ${id}`)
  }

  if (got.deleted) {
    throw new Error(`customer ${id} has been deleted`)
  }

  // Hacky workaround to make Stripe metadata to app flavored metadata.
  const out = <CustomerWithMetadata>{}
  return Object.assign(out, got)
}

export default {
  create,
  findByCustomerId,
}
