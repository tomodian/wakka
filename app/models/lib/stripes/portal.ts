import Stripe from 'stripe'
import { z } from 'zod'

import validationRules from '../../../config/validation-rules'
import client from './client'

const CreateInput = z.object({
  customerId: validationRules.zodStripe.customerId,
  returnUrl: z.optional(z.string().url()),
})

export type CreateInput = z.infer<typeof CreateInput>

/**
 * Create Stripe Customer Portal session.
 * https://stripe.com/docs/api/customer_portal/sessions/create?lang=node
 *
 * Tips:
 * You can’t create a portal session in test mode until you save your customer portal settings in test mode at
 * https://dashboard.stripe.com/test/settings/billing/portal
 */
const create = async (input: CreateInput): Promise<Stripe.BillingPortal.Session> => {
  CreateInput.parse(input)

  const got = await client().billingPortal.sessions.create({
    customer: input.customerId,
    return_url: input.returnUrl,
  })

  if (!got) {
    throw new Error(`failed to create Customer Portal session for customer ${input.customerId}`)
  }

  return got
}

export default {
  create,
}
