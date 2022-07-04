import { GetServerSideProps } from 'next'
import { User } from '@prisma/client'

import List from '../../components/users/List'
import user from '../../models/user'

type Props = {
  users: User[]
}

const Page = (props: Props) => {
  return <List users={props.users} />
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      users: await user.all(),
    },
  }
}

export default Page
