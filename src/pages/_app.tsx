import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { useStore } from '../store'
import { ThemeProvider } from 'next-themes'
function MyApp({ Component, pageProps }: AppProps) {
  const store = useStore(pageProps.initialReduxState)

  return (
    <ThemeProvider attribute="class" >
      <Provider store={store} >
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  )
}
export default MyApp
