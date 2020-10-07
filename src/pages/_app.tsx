import React from 'react'
import { AppProps } from 'next/app'

import ThemeContainer from '../contexts/theme/ThemeContainer'

import GlobalStyles from '../styles'
import DashboardLayout from '../_layouts/Dashboard'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeContainer>
      <DashboardLayout>
        <Component {...pageProps} />
      </DashboardLayout>
      <GlobalStyles />
    </ThemeContainer>
  )
}

export default App
