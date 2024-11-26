"use client";
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'

import Footer from '@/components/Footer'
import ExpertSVG from '@/components/illustrations/ExpertSVG'
import SocialSVG from '@/components/illustrations/SocialSVG'
import ExperienceSVG from '@/components/illustrations/ExperienceSVG'
import Header from '@/components/Header'

import styles from './home.module.css'
import { Link } from '@/i18n/routing';
import { rawHTMLDefaults } from '@/i18n/utils';

function HomePage() {
  const [menuOpacity, setMenuOpacity] = useState(0)
  const t = useTranslations('Home')

  useEffect(() => {
    function updateOpacity() {
      setMenuOpacity(window.pageYOffset - window.innerHeight + 130)
    }

    window.addEventListener('scroll', updateOpacity, { passive: true })

    return () => window.removeEventListener('scroll', updateOpacity)
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.desc')} />
        <link rel="icon" href="/favicon.ico" />

        <link rel="alternate" hrefLang="fr" href="/fr/" />
        <link rel="alternate" hrefLang="en" href="/" />
        <link rel="alternate" hrefLang="x-default" href="/" />
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
              <li>
                <Link href={`/developer/`}>{t('menu.developer')}</Link>
              </li>
              {/* <li>
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
              </li> */}
              <li>
                <Link href={`/influencer/`}>{t('menu.influencer')}</Link>
              </li>
            </ul>
          </div>
        </section>
        <div>
          <section className={styles.section}>
            <div>
              <h2>{t('experienceSection.title')}</h2>
              {t.rich('experienceSection.text', rawHTMLDefaults)}
              <p className={styles.actions}>
                <Link className={styles.action} href={`/developer/`}>
                  {t('experienceSection.linkText')}
                </Link>
              </p>
            </div>
            <div className={styles.svgContainer}>
              <ExperienceSVG />
            </div>
          </section>
          <section className={styles.section}>
            <div>
              <h2>{t('communitySection.title')}</h2>
              {t.rich('communitySection.text', rawHTMLDefaults)}
              <p className={styles.actions}>
                <Link className={styles.action} href={`/influencer/`}>
                  {t('communitySection.linkText')}
                </Link>
              </p>
            </div>
            <div className={styles.svgContainer}>
              <SocialSVG />
            </div>
          </section>
          <section className={styles.section}>
            <div>
              <h2>{t('coachingSection.title')}</h2>
              <p>{t('coachingSection.text')}</p>
              <p className={styles.actions}>
                <Link
                  className={styles.action}
                  href={`https://cal.com/nathanael-cherrier/coaching`}
                >
                  {t('coachingSection.linkText')}
                </Link>
              </p>
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

export default HomePage
