import { NextPage } from 'next'
import { useTranslations } from 'next-intl'
import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'

import styles from '../styles/activities.module.css'

const InfluencerPage: NextPage = () => {
  const t = useTranslations('InfluencerPage')

  return (
    <div className={styles.container}>
      <Head>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.desc')} />
        <link rel="icon" href="/favicon.ico" />

        <link rel="alternate" hrefLang="fr" href="/fr/influencer" />
        <link rel="alternate" hrefLang="en" href="/influencer" />
        <link rel="alternate" hrefLang="x-default" href="/influencer" />
      </Head>

      <main className={styles.main}>
        <header>
          <Header />
          <h1 className={styles.title}>{t('title')}</h1>
        </header>
        {/* <section className={styles.section}>
          <div className={styles.sectionColumn}>
            <div className={styles.insights}>
              <p>
                10k followers
                <br /> on Instagram
              </p>
              <p>
                more than 15 %<br /> engament rate
              </p>
            </div>
            <p>
              I design, code and maintain applications using JavaScript since 2015 and the ES6
              tsunami in the JavaScript world. I&apos;m used to work on small app using VanillaJS
              and larger cloud native application that need to scale.
            </p>
            <p>
              I believe that JavaScript is the language who can suit most of the issue my client
              enconter. That&apos;s why I learnt and tried to master it either on the frontend and
              the backend side of things.
            </p>
          </div>
          <div className={styles.sectionColumn} />
        </section> */}
      </main>
      <Footer />
    </div>
  )
}

export default InfluencerPage
