import { User } from '@prisma/client'
import db from './lib/db'

const all = async (): Promise<User[]> => {
  const got = await db.user.findMany({})

  if (!got) {
    return []
  }

  return JSON.parse(JSON.stringify(got))
}

const find = async (id: number): Promise<User> => {
  const got = await db.user.findUnique({
    where: {
      id: id
    }
  })

  if (!got) {
    throw new Error(`could not find user ${id}`)
  }

  return JSON.parse(JSON.stringify(got))
}

export default {
  all,
  find
}
