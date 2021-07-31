import '../styles/globals.css'
import Layout from "../src/components/Layout/Layout";
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
      <>
          <Head>
              <meta name="viewport"/>
          </Head>
      <Layout>
      <Component {...pageProps} />
      </Layout>
      </>
  )
}

export default MyApp
