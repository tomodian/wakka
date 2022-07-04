import { GetServerSideProps } from 'next'
import { User } from '@prisma/client'
import type { ReactElement } from 'react'

import List from '../../../components/admin/users/List'
import user from '../../../models/user'

type Props = {
  users: User[]
}

const Page = (props: Props) => {
  return <List users={props.users} />
}

Page.getLayout = (page: ReactElement) => {
  return page
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      users: await user.all(),
    },
  }
}

export default Page
