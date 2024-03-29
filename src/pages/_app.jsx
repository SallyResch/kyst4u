import 'sr/styles/globals.scss'
import Layout from './components/Layout.jsx'

export default function App({ Component, pageProps }) {
  return (
  <Layout>
  <Component {...pageProps} />
  </Layout>
  )
}
