import { GetServerSideProps } from 'next'
import { User } from '@prisma/client'
import type { ReactElement } from 'react'

import Detail from '../../../components/admin/users/Detail'
import user from '../../../models/user'

type Props = {
  user: User
  customerPortalUrl: string
}

const Page = (props: Props) => {
  return <Detail user={props.user} customerPortalUrl={props.customerPortalUrl} />
}

Page.getLayout = (page: ReactElement) => {
  return page
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const u = await user.find(+context.params!.id!)
  const customerPortalUrl = await user.findOrCreatePortalUrl(u)

  return {
    props: {
      user: u,
      customerPortalUrl,
    },
  }
}

export default Page
