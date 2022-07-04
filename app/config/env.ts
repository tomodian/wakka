/**
 * Environment variables
 *
 * This module is a SSoT of NextJS flavored environment variables.
 * Always use this module to refer environment variables, to avoid
 * `process.env` spills out to entire codebase.
 */

/**
 * Publishable environment variables will be embedded into browser JavaScript,
 * therefore never include credentials here.
 *
 * Following NextJS idiom `NEXT_PUBLIC_*`.
 * https://nextjs.org/docs/basic-features/environment-variables#exposing-environment-variables-to-the-browser
 */
interface Publishable {
  // App hostname.
  appHostname: string

  // App hostname decorated as URL.
  appUrl: (suffix?: string) => string

  environment: string

  // Stripe publishable API key
  stripePublicKey: string

  // Boolean to determine Stripe mocking.
  stripeShouldMock: boolean
}

const publishable: Publishable = {
  appHostname: process.env.NEXT_PUBLIC_APP_HOSTNAME!,

  appUrl: (suffix) => {
    if (!suffix) {
      return `https://${process.env.NEXT_PUBLIC_APP_HOSTNAME!}`
    }

    if (suffix.startsWith('/')) {
      return `https://${process.env.NEXT_PUBLIC_APP_HOSTNAME!}${suffix}`
    }

    return `https://${process.env.NEXT_PUBLIC_APP_HOSTNAME!}/${suffix}`
  },

  environment: process.env.NEXT_PUBLIC_ENV!,

  stripePublicKey: process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!,

  stripeShouldMock: process.env.NEXT_PUBLIC_ENV === 'test' ? true : false,
}

/**
 * Secret environment variables are only for server side.
 * Keep credentials here.
 */
interface Secret {
  stripeSecretKey: string
}

const secret: Secret = {
  stripeSecretKey: process.env.STRIPE_SECRET_KEY!,
}

export default {
  publishable,
  secret,
}
