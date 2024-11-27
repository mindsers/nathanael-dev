import { NextPage } from 'next'
import { useTranslations } from 'next-intl'
import Head from 'next/head'
import Image from 'next/image'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { CommunitySVG } from '@/components/illustrations/CommunitySVG'
import { InstagramSVG } from '@/components/illustrations/InstagramSVG'
import { Link } from '@/i18n/routing'
import { rawHTMLDefaults } from '@/i18n/utils'

import f1Logo from '@/../public/f1.svg'
import awsLogo from '@/../public/aws.svg'
import benqLogo from '@/../public/benq.svg'
import rapydLogo from '@/../public/rapyd.svg'
import ocushieldLogo from '@/../public/ocushield.png'
import whooshLogo from '@/../public/whoosh.jpg'
import gridstudioLogo from '@/../public/gridstudio.jpg'

import styles from './influencer.module.css'

const InfluencerPage: NextPage = () => {
  const t = useTranslations('InfluencerPage')
  const quoteURL = 'https://www.passionfroot.me/mindsers'

  const instagramProducts = [
    {
      id: 'instagramPost',
      price: 150,
    },
    {
      id: 'instagramStory',
      price: 70,
    },
    {
      id: 'instagramReel',
      price: 190,
    },
  ]
  const blogProducts = [
    {
      id: 'linkInsertion',
      price: 50,
    },
    {
      id: 'guestPost',
      price: 150,
    },
    {
      id: 'sponsoredPost',
      price: 300,
    },
  ]

  return (
    <div className={styles.container}>
      <Head>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.desc')} />
        
        <link rel="icon" type="image/png" href="/public/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/public/favicon.svg" />
        <link rel="shortcut icon" href="/public/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/public/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Nath Dev" />
        <link rel="manifest" href="/public/site.webmanifest" />

        <link rel="alternate" hrefLang="fr" href="/fr/influencer" />
        <link rel="alternate" hrefLang="en" href="/en/influencer" />
        <link rel="alternate" hrefLang="x-default" href="/en/influencer" />
      </Head>

      <main className={styles.main}>
        <header>
          <Header />
          <h1 className={styles.title}>{t('title')}</h1>
          <div className={styles.socials}>
            <Link href="https://instagram.com/mindsers.codes/" className={styles.socialLink}>
              <svg xmlns="http://www.w3.org/2000/svg" height={30} viewBox="0 0 448 512">
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </Link>
            <Link href="https://mindsers.blog/" className={styles.socialLink}>
              <svg xmlns="http://www.w3.org/2000/svg" height={30} viewBox="0 0 512 512">
                <path d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 21 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z" />
              </svg>
            </Link>
            <Link href="https://twitch.tv/mindserslive/" className={styles.socialLink}>
              <svg xmlns="http://www.w3.org/2000/svg" height={30} viewBox="0 0 512 512">
                <path d="M391.17,103.47H352.54v109.7h38.63ZM285,103H246.37V212.75H285ZM120.83,0,24.31,91.42V420.58H140.14V512l96.53-91.42h77.25L487.69,256V0ZM449.07,237.75l-77.22,73.12H294.61l-67.6,64v-64H140.14V36.58H449.07Z" />
              </svg>
            </Link>
            <Link href="https://twitter.com/MindsersCodes/" className={styles.socialLink}>
              <svg xmlns="http://www.w3.org/2000/svg" height={30} viewBox="0 0 512 512">
                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
              </svg>
            </Link>
            <Link href="https://linkedin.com/in/mindsers/" className={styles.socialLink}>
              <svg xmlns="http://www.w3.org/2000/svg" height={30} viewBox="0 0 448 512">
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
              </svg>
            </Link>
            <div className={styles.verticalSeparator} />
            <Link href={quoteURL} className="button">
              {t('callToAction')}
            </Link>
          </div>
        </header>
        <section className={styles.section}>
          <div className={styles.sectionColumn}>
            <div className={styles.insights}>{t.rich('instagramSection.insight', rawHTMLDefaults)}</div>
            {t.rich('instagramSection.text', rawHTMLDefaults)}
            <p className={styles.actions}>
              <Link className={'button'} href={quoteURL}>
                {t('instagramSection.callToAction')}
              </Link>
            </p>
          </div>
          <div className={styles.svgContainer}>
            <InstagramSVG />
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.svgContainer}>
            <CommunitySVG />
          </div>
          <div className={styles.sectionColumn}>
            <div className={styles.insights}>{t.rich('engagementSection.insight', rawHTMLDefaults)}</div>
            {t.rich('engagementSection.text', rawHTMLDefaults)}
            <p className={styles.actions}>
              <Link className={'button'} href={quoteURL}>
                {t('engagementSection.callToAction')}
              </Link>
            </p>
          </div>
        </section>
        <section className={styles.sectionLight}>
          <div className={styles.brandSection}>
            <h2>{t('brands.title')}</h2>
            <p>{t('brands.description')}</p>
            <div className={styles.brandGrid}>
              <div className={styles.brandContainer}>
                <span className={styles.logoContainer}>
                  <Image className={styles.logo} src={f1Logo} alt="Formula 1" />
                </span>
                Formula 1
              </div>
              <div className={styles.brandContainer}>
                <span className={styles.logoContainer}>
                  <Image className={styles.logo} src={awsLogo} alt="Amazon Web Services" />
                </span>
                Amazon Web Services
              </div>
              <div className={styles.brandContainer}>
                <span className={styles.logoContainer}>
                  <Image className={styles.logo} src={benqLogo} alt="BenQ Lighting" />
                </span>
                BenQ Lighting
              </div>
              <div className={styles.brandContainer}>
                <span className={styles.logoContainer}>
                  <Image className={styles.logo} src={rapydLogo} alt="Rapyd" />
                </span>
                Rapyd
              </div>
              <div className={styles.brandContainer}>
                <span className={styles.logoContainer}>
                  <Image className={styles.logo} src={ocushieldLogo} alt="Ocushield" />
                </span>
                Ocushield
              </div>
              <div className={styles.brandContainer}>
                <span className={styles.logoContainer}>
                  <Image className={styles.logo} src={whooshLogo} alt="Whoosh!" />
                </span>
                Whoosh!
              </div>
              <div className={styles.brandContainer}>
                <span className={styles.logoContainer}>
                  <Image className={styles.logo} src={gridstudioLogo} alt="GridStudio CC" />
                </span>
                GridStudio CC
              </div>
            </div>
            <p className={styles.actions}>
              <Link className={'button inverse'} href={quoteURL}>
                {t('brands.callToAction')}
              </Link>
            </p>
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.pricingSection}>
            <header>
              <h2>{t('pricing.title')}</h2>
            </header>
            <div className={styles.twoColumnGrid}>
              <ul className={styles.instagram}>
                {instagramProducts.map(product => (
                  <li key={product.id} className={styles.priceLine}>
                    <div>
                      <p>
                        <strong>{t(`pricing.products.${product.id}.title`)}</strong>
                      </p>
                      <p>{t(`pricing.products.${product.id}.text`)}</p>
                    </div>
                    <div>{t('pricing.price', { price: product.price })}</div>
                  </li>
                ))}
              </ul>
              <ul className={styles.mindsersBlog}>
                {blogProducts.map(product => (
                  <li key={product.id} className={styles.priceLine}>
                    <div>
                      <p>
                        <strong>{t(`pricing.products.${product.id}.title`)}</strong>
                      </p>
                      <p>{t(`pricing.products.${product.id}.text`)}</p>
                    </div>
                    <div>{t('pricing.price', { price: product.price })}</div>
                  </li>
                ))}
              </ul>
            </div>
            <p className={styles.details}>{t('pricing.legals1')}</p>
            <p className={styles.details}>{t('pricing.legals2')}</p>
            <p className={styles.actions}>
              <Link className={'button'} href={quoteURL}>
                {t('pricing.callToAction')}
              </Link>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default InfluencerPage
