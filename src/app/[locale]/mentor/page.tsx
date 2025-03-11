import { getLocale, getTranslations } from 'next-intl/server'
import type { Metadata } from 'next'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { SharingKnowledgeSVG } from '@/components/illustrations/SharingKnowledgeSVG'
import { SolutionMindsetSVG } from '@/components/illustrations/SolutionMindsetSVG'
import { FinancialDataSVG } from '@/components/illustrations/FinancialDataSVG'
import { Link } from '@/i18n/routing'
import { rawHTMLDefaults } from '@/i18n/utils'

import styles from './mentor.module.css'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('MentorPage')
  const locale = await getLocale();

  return {
    title: t('meta.title'),
    description: t('meta.desc'),
    alternates: {
      canonical: `/${locale}/mentor/`,
      languages: {
        'en': '/en/mentor/',
        'fr': '/fr/mentor/',
        'x-default': '/en/mentor/'
      },
    },
  }
}

async function MentorPage() {
  const t = await getTranslations('MentorPage')
  const locale = await getLocale();
  const feedbacks = await getFeedbacks(locale)

  const callURL = "https://cal.com/nathanael-cherrier/coaching"

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <header>
          <Header />
          <h1 className={styles.title}>{t('title')}</h1>
          <div className={styles.socials}>
            <Link href="https://linkedin.com/in/mindsers/" className={styles.socialLink}>
              <svg xmlns="http://www.w3.org/2000/svg" height={30} viewBox="0 0 448 512">
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
              </svg>
            </Link>
            <Link
              href="https://stackoverflow.com/users/3701067/mindsers/"
              className={styles.socialLink}
            >
              <svg xmlns="http://www.w3.org/2000/svg" height={30} viewBox="0 0 384 512">
                <path d="M290.7 311L95 269.7 86.8 309l195.7 41zm51-87L188.2 95.7l-25.5 30.8 153.5 128.3zm-31.2 39.7L129.2 179l-16.7 36.5L293.7 300zM262 32l-32 24 119.3 160.3 32-24zm20.5 328h-200v39.7h200zm39.7 80H42.7V320h-40v160h359.5V320h-40z" />
              </svg>
            </Link>
            <div className={styles.verticalSeparator} />
            <Link href={callURL} className="button">
              {t('callToAction1')}
            </Link>
          </div>
        </header>
        <section className={styles.section}>
          <div className={styles.svgContainer}>
            <SharingKnowledgeSVG />
          </div>
          <div className={styles.sectionColumn}>
            <div className={styles.insights}>{t.rich('teachingExpSection.insight', rawHTMLDefaults)}</div>
            {t.rich('teachingExpSection.text', rawHTMLDefaults)}
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.sectionColumn}>
            <div className={styles.insights}>{t.rich('topicSection.insight', rawHTMLDefaults)}</div>
            {t.rich('topicSection.text', rawHTMLDefaults)}
          </div>
          <div className={styles.svgContainer}>
            <SolutionMindsetSVG />
          </div>
        </section>
        <section className={styles.sectionLight}>
          <div className={styles.feedbackSection}>
            <h2>{t('feedbacks.title')}</h2>
            <div className={styles.threeColumnGrid}>
              {feedbacks.map((feedback, fIndex) => (
                <div
                  className={styles.sectionCard}
                  style={{ gridArea: `feedback${fIndex + 1}` }}
                  key={fIndex}
                >
                  {feedback.text.map((peragraph, pIndex) => (
                    <p key={pIndex}>{peragraph}</p>
                  ))}
                  <p className={styles.author}>
                    <strong>
                      {feedback.author} · {feedback.role}
                    </strong>
                  </p>
                </div>
              ))}
            </div>
            {feedbacks.length < 1 && (
              <p className={styles.call2ActionText}>{t('feedbacks.fallback')}</p>
            )}
            <p className={styles.call2ActionText}>{t('feedbacks.callToAction.text')}</p>
            <p className={styles.actions}>
              <Link className={'button inverse'} href={callURL}>
                {t('feedbacks.callToAction.button')}
              </Link>
            </p>
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.sectionColumn}>
            <div className={styles.insights}>{t.rich('TJMSection.insight', rawHTMLDefaults)}</div>
            {t.rich('TJMSection.text', rawHTMLDefaults)}
            <p className={styles.actions}>
              <Link className={'button'} href={callURL}>
                {t('TJMSection.callToAction')}
              </Link>
            </p>
          </div>
          <div className={styles.svgContainer}>
            <FinancialDataSVG />
          </div>
        </section>
        <Footer />
      </main>
    </div>
  )
}

export default MentorPage

async function getFeedbacks(locale = 'en') {
  const needFrench = locale === 'fr'

  return [
    {
      text: needFrench
        ? [
            `"J’ai eu le plaisir d’échanger avec Nathanaël Cherrier sur des sujets tech passionnants : 1/ le choix des technologies les plus adaptées à mon projet, 2/ l’architecture logicielle et ses impacts sur la scalabilité, 3/ aligner le code à 100 % avec les besoins du client. Ces discussions sont toujours enrichissantes et me permettent d’affiner mon expertise. Être entouré de développeurs qualifiés et bienveillants, c’est une vraie force pour progresser continuellement."`,
          ]
        : [
            `"I had the pleasure of discussing exciting tech topics with Nathanaël Cherrier: 1/ choosing the most suitable technologies for my project, 2/ exploring software architecture and its impact on scalability, 3/ aligning the code 100% with the client's needs. These discussions are always enriching and help me refine my expertise. Being surrounded by highly qualified and supportive developers is a true asset for continuous progress."`,
          ],
      author: "Vincent",
      role: "Freelance Developer",
    },
    {
      text: needFrench
        ? [
            `"J’ai beaucoup apprécié la session de mentoring. Je trouve que tu as su cerner la posture dans laquelle je suis dans l’équipe et l’environnement actuel."`,
          ]
        : [
            `"I really appreciated the mentoring session. I feel that you were able to understand my current role within the team and the surrounding environment."`,
          ],
      author: "Valérie",
      role: "Freelance Developer",
    },
  ]
}
