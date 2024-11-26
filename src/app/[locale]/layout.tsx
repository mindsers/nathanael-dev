import {NextIntlClientProvider} from 'next-intl';
import {getLocale, getMessages, setRequestLocale} from 'next-intl/server';
// import localFont from 'next/font/local';
import Script from 'next/script';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';

import '@/app/globals.css'
 
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