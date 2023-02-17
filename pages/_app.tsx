import '../styles/globals.css'
import { useEffect } from 'react'
import type { AppProps } from 'next/app'
import { NextIntlProvider } from 'next-intl'
import Script from 'next/script'

import enUS from '../messages/en-US'
import fr from '../messages/fr'

export default function App({ Component, pageProps, router }: AppProps) {
  let messages = enUS
  if (router.locale?.includes('fr')) {
    messages = fr
  }

  useEffect(() => {
    const handleRouteChange = (url: string) =>
      (window as unknown as any).gtag('config', 'G-4XN2GMWCWT', {
        page_path: url,
      })

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => router.events.off('routeChangeComplete', handleRouteChange)
  }, [router.events])

  return (
    <NextIntlProvider
      messages={messages}
      timeZone="Europe/Paris"
      defaultTranslationValues={{
        p: children => <p>{children}</p>,
        strong: children => <strong>{children}</strong>,
      }}
    >
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-4XN2GMWCWT"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-4XN2GMWCWT');
          `,
        }}
      />

      <Component {...pageProps} />
    </NextIntlProvider>
  )
}
