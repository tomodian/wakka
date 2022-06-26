import { GetServerSideProps } from 'next'
import { User } from '@prisma/client'

import user from '../../models/user'

type Props = {
  users: User[]
}

const Page = (props: Props) => {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>

      {props.users.map((u: User) => {
        return (
          <p>
            {u.id}
            {u.name}
            {u.email}
            {u.createdAt}
          </p>
        )
      })}
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      users: await user.all()
    }
  }
}

export default Page
