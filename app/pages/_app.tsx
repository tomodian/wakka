import '../styles/globals.css'
import type { AppProps } from 'next/app'

function Page({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default Page
