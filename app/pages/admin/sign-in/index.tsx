import type { ReactElement } from 'react'

import type { NextPageWithLayout } from '../../_app'
import SignIn from '../../../components/admin/auth/SignIn'

const Page: NextPageWithLayout = () => {
  return <SignIn />
}

Page.getLayout = (page: ReactElement) => {
  return page
}

export default Page
