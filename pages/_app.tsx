import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NextIntlProvider } from 'next-intl'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextIntlProvider
      messages={pageProps.messages}
      timeZone="Europe/Paris"
      defaultTranslationValues={{
        p: children => <p>{children}</p>,
        strong: children => <strong>{children}</strong>,
      }}
    >
      <Component {...pageProps} />
    </NextIntlProvider>
  )
}
