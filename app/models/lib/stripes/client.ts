import Stripe from 'stripe'

import env from '../../../config/env'

/**
 * Initiate Stripe client.
 *
 * @returns Stripe
 */
const client = (): Stripe => {
  const apiVersion = '2020-08-27'

  if (env.publishable.stripeShouldMock) {
    return new Stripe(env.secret.stripeSecretKey, {
      apiVersion,
      // See docker-compose.yml for mock server configuration.
      host: 'stripe-mock',
      protocol: 'http',
      port: 12111,
    })
  }

  return new Stripe(env.secret.stripeSecretKey, {
    apiVersion,
  })
}

export default client
