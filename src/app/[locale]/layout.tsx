import {NextIntlClientProvider} from 'next-intl';
import {getLocale, getMessages, setRequestLocale} from 'next-intl/server';
// import localFont from 'next/font/local';
import Script from 'next/script';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';

import '@/app/globals.css'
import { Metadata } from 'next';
 
// const geistSans = localFont({
//   src: "../../fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "../../fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: {
    default: 'Nathanaël Cherrier',
    template: '%s',
  },
  metadataBase: new URL('https://nathanaelcherrier.dev'),
}

export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  type Locale = typeof routing.defaultLocale
  const locale = await getLocale() as Locale;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  setRequestLocale(locale);

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
 
  return (
    <html lang={locale}>
      <head>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Nath Dev" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
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
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}