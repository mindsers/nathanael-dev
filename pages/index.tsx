import type { GetStaticPropsContext, NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'
import ExpertSVG from '../components/illustrations/ExpertSVG'
import SocialSVG from '../components/illustrations/SocialSVG'
import ExperienceSVG from '../components/illustrations/ExperienceSVG'
import Header from '../components/Header'
import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'

function Home() {
  const [menuOpacity, setMenuOpacity] = useState(0)
  const t = useTranslations('Home')

  function updateOpacity() {
    setMenuOpacity(window.pageYOffset - window.innerHeight + 130)
  }

  useEffect(() => {
    window.addEventListener('scroll', updateOpacity, { passive: true })

    return () => window.removeEventListener('scroll', updateOpacity)
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.desc')} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <header className={styles.header} style={{ opacity: menuOpacity }}>
          <Header />
        </header>
        <section className={styles.hero}>
          <div>
            <p className={styles.title}>
              Nathanaël Cherrier.
              <br /> {t('title')}
            </p>
          </div>
          <div>
            <ul className={styles.menu}>
              {/* <li>
                <Link href={`/developer/`}>{t('menu.developer')}</Link>
              </li>
              <li>
                <a>{t('menu.entrepreneur')}</a>
              </li>
              <li>
                <a>{t('menu.writter')}</a>
              </li>
              <li>
                <a>{t('menu.coach')}</a>
              </li>
              <li>
                <a>{t('menu.blogger')}</a>
              </li>
              <li>
                <Link href={`/influencer/`}>{t('menu.influencer')}</Link>
              </li> */}
            </ul>
          </div>
        </section>
        <div>
          <section className={styles.section}>
            <div>
              <h2>{t('experienceSection.title')}</h2>
              {t.rich('experienceSection.text')}
              {/* <p className={styles.actions}>
                <Link className={styles.action} href={`/developer/`}>
                  {t('experienceSection.linkText')}
                </Link>
              </p> */}
            </div>
            <div className={styles.svgContainer}>
              <ExperienceSVG />
            </div>
          </section>
          <section className={styles.section}>
            <div>
              <h2>{t('communitySection.title')}</h2>
              {t.rich('communitySection.text')}
              {/* <p className={styles.actions}>
                <Link className={styles.action} href={`/influencer/`}>
                  {t('communitySection.linkText')}
                </Link>
              </p> */}
            </div>
            <div className={styles.svgContainer}>
              <SocialSVG />
            </div>
          </section>
          <section className={styles.section}>
            <div>
              <h2>{t('coachingSection.title')}</h2>
              <p>{t('coachingSection.text')}</p>
              {/* <p className={styles.actions}>
                <a className={styles.action}>{t('coachingSection.linkText')}</a>
              </p> */}
            </div>
            <div className={styles.svgContainer}>
              <ExpertSVG />
            </div>
          </section>
        </div>
        <Footer />
      </main>
    </div>
  )
}

export default Home

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      // You can get the messages from anywhere you like. The recommended
      // pattern is to put them in JSON files separated by language.
      messages: (await import(`../messages/${locale}.ts`)).default,
    },
  }
}
