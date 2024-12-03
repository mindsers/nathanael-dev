import { getLocale, getTranslations } from 'next-intl/server'

import Footer from '@/components/Footer'
import ExpertSVG from '@/components/illustrations/ExpertSVG'
import SocialSVG from '@/components/illustrations/SocialSVG'
import ExperienceSVG from '@/components/illustrations/ExperienceSVG'
import StickyHeader from '@/components/StickyHeader/sticky-header';
import { rawHTMLDefaults } from '@/i18n/utils';
import { Link } from '@/i18n/routing';

import styles from './home.module.css'
import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Home')
  const locale = await getLocale();

  return {
    title: t('meta.title'),
    description: t('meta.desc'),
    alternates: {
      canonical: `/${locale}/`,
      languages: {
        'en': '/en/',
        'fr': '/fr/',
        'x-default': '/en/'
      },
    },
  }
}

async function HomePage() {
  const t = await getTranslations('Home')

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <StickyHeader />
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
              <li>
                <Link href={`/trainer/`}>{t('menu.trainer')}</Link>
              </li>
              {/* <li>
                <a>{t('menu.entrepreneur')}</a>
                </li>
                <li>
                <a>{t('menu.writter')}</a>
                </li>
                <li>
                <a>{t('menu.blogger')}</a>
                </li> */}
              <li>
                <Link href={`/influencer/`}>{t('menu.influencer')}</Link>
              </li>
              <li>
                <Link href={`/mentor/`}>{t('menu.mentor')}</Link>
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
                  href={`/mentor/`}
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
