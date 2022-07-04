import { z } from 'zod'

/**
 * Common validator rules to make codebase DRY.
 */

const zodStripe = {
  customerId: z.string().min(4).regex(/^cus_/),
}

export default {
  zodStripe,
}
