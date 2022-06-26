import { PrismaClient } from '@prisma/client'
;(async () => {
  const client = new PrismaClient()

  await client.$executeRawUnsafe(`drop schema public cascade;`)
  await client.$executeRawUnsafe(`create schema public;`)
})()
