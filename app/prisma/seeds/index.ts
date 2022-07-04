import { PrismaClient } from '@prisma/client'

import users from './users'
;(async () => {
  const client = new PrismaClient()

  await client.user.createMany({
    data: users,
    skipDuplicates: true,
  })
})()
