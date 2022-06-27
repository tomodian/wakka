import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/globals.css'

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function Page({ Component, pageProps }: AppPropsWithLayout) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />)
  }

  return (
    <div className="mx-auto bg-gray-100 bg-opacity-75">
      <Header />

      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-2">
        <Component {...pageProps} />
      </div>

      <Footer />
    </div>
  )
}

export default Page
