import type { ReactElement } from 'react'

import type { NextPageWithLayout } from '../../_app'
import SignIn from '../../../components/member/auth/SignIn'

const Page: NextPageWithLayout = () => {
  return <SignIn />
}

Page.getLayout = function getLayout(page: ReactElement) {
  return page
}

export default Page
