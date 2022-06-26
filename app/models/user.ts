import { User } from '@prisma/client'
import db from './lib/db'

const all = async (): Promise<User[]> => {
  const got = await db.user.findMany({})

  if (!got) {
    return []
  }

  return JSON.parse(JSON.stringify(got))
}

export default {
  all
}
