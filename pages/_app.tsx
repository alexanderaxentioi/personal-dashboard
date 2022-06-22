import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { CacheProvider } from '@emotion/react'
import { ThemeProvider, CssBaseline } from '@mui/material'

import createEmotionCache from '../utility/createEmotionCache';
import lightTheme from '../styles/theme/lightTheme';

const clientSideEmotionCache = createEmotionCache()

function MyApp({ Component, pageProps }: AppProps) {

  const emotionCache = clientSideEmotionCache;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp
