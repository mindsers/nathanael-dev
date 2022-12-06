import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NextIntlProvider } from 'next-intl'

import enUS from '../messages/en-US'
import fr from '../messages/fr'

export default function App({ Component, pageProps, router }: AppProps) {
  let messages = enUS
  if (router.locale?.includes('fr')) {
    messages = fr
  }

  return (
    <NextIntlProvider
      messages={messages}
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
