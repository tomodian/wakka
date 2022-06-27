import type { ReactElement } from 'react'

import type { NextPageWithLayout } from '../../_app'
import AdminSignIn from '../../../components/layouts/AdminSignIn'

const Page: NextPageWithLayout = () => {
  return <AdminSignIn />
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>
}

export default Page
