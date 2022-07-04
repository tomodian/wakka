import { ReactNode } from 'react'

import Header from './Header'
import Footer from '../Footer'

export default (props: any) => {
  return (
    <div className="mx-auto bg-gray-100 bg-opacity-75">
      <Header />

      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-2">{props}</div>

      <Footer />
    </div>
  )
}
