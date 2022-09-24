import React from 'react';
import { SessionProvider } from 'next-auth/react';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '../assets/css/global.css';
import NavBar from '@components/NavBar';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      {Component.auth ? (
        <Auth>
          <NavBar />
          <Component {...pageProps} />
        </Auth>
      ) : (
        <>
          <NavBar />
          <Component {...pageProps} />
        </>
      )}
    </SessionProvider>
  )
}

function Auth({ children }) {
  const { status } = useSession({ required: true })

  if (status === "loading") {
    return <div>Loading...</div>
  }

  return children
}