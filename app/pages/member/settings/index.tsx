import type { GetServerSideProps } from 'next'
import type { ReactElement } from 'react'

import type { Props } from '../../../components/member/settings/List'
import * as users from '../../../prisma/seeds/users'
import user from '../../../models/user'
import List from '../../../components/member/settings/List'

const Page = (props: Props) => {
  return <List user={props.user} portalUrl={props.portalUrl} />
}

Page.getLayout = function getLayout(page: ReactElement) {
  return page
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const u = await user.find(users.saitoJun.id!)
  const portalUrl = await user.findOrCreatePortalUrl(u)

  return {
    props: {
      user: u,
      portalUrl,
    },
  }
}

export default Page
