import { getLocale, getTranslations } from 'next-intl/server'
import Head from 'next/head'
import { Metadata } from 'next'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { FreelanceSVG } from '@/components/illustrations/FreelanceSVG'
import { MobileSVG } from '@/components/illustrations/MobileSVG'
import { WebSVG } from '@/components/illustrations/WebSVG'
import { Link } from '@/i18n/routing'
import { rawHTMLDefaults } from '@/i18n/utils'

import styles from './trainer.module.css'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('TrainerPage')

  return {
    title: t('meta.title'),
    description: t('meta.desc'),
  }
}

async function TrainerPage() {
  const t = await getTranslations('TrainerPage')
  const locale = await getLocale();
  const experiences = await getExperiences(locale)
  const feedbacks = await getFeedbacks(locale)

  const callURL = "https://cal.com/nathanael-cherrier/formation"

  return (
    <div className={styles.container}>
      <Head>
        <link rel="alternate" hrefLang="fr" href="/fr/trainer" />
        <link rel="alternate" hrefLang="en" href="/en/trainer" />
        <link rel="alternate" hrefLang="x-default" href="/en/trainer" />
      </Head>

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
            <MobileSVG />
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
            <WebSVG />
          </div>
        </section>
        <section className={styles.sectionLight}>
          <div className={styles.sectionResume}>
            <h2>{t('experience.title')}</h2>
            {experiences.map((exp, index) => {
              const start = new Date(exp.start)
              const end = new Date(exp.end)

              const interval = end.getTime() - start.getTime()
              const months = Math.floor((interval / 1000 / 3600 / 24 / 30) % 12) + 1
              const years = Math.floor(interval / 1000 / 3600 / 24 / 30 / 12)

              return (
                <div className={styles.sectionCard} key={index}>
                  <h3>
                    {exp.title} · {exp.company}
                  </h3>
                  <p className={styles.meta}>
                    {formatDate(start, locale)} - {formatDate(end, locale)} ·{' '}
                    {t('experience.duration', { years, months })}
                  </p>
                  {exp.description.map((paragraph, pIndex) => (
                    <p key={pIndex}>{paragraph}</p>
                  ))}
                  <p>
                    <span className={styles.skillLabel}>{t('experience.skills')}</span>{' '}
                    {exp.skills.join(' · ')}
                  </p>
                </div>
              )
            })}
            {experiences.length < 1 && (
              <p className={styles.call2ActionText}>{t('experience.fallback')}</p>
            )}
            <p className={styles.call2ActionText}>{t('experience.callToAction.text')}</p>
            <div className={styles.actions}>
              <Link href="https://linkedin.com/in/mindsers/" className="button inverse">
                {t('experience.callToAction.fallback')}
              </Link>
              <Link href={callURL} className="button inverse">
                {t('experience.callToAction.button')}
              </Link>
            </div>
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
            <FreelanceSVG />
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
          </div>
        </section>
        <Footer />
      </main>
    </div>
  )
}

export default TrainerPage

async function getExperiences(locale = 'en') {
  const needFrench = locale === 'fr'
  const conferenceSkillLabel = needFrench ? 'Conférences' : 'Talks'
  const workshopSkillLabel = needFrench ? 'Atelier' : 'Workshop'
  const trainingSkillLabel = needFrench ? 'Formation' : 'Training'
  const coursSkillLabel = needFrench ? 'Cours' : 'Lecture'

  return [
        {
          title: needFrench ? `Formateur React Native` : `React Native Trainer`,
          company: `École Hexagone`,
          description: needFrench
            ? [
                `Formateur React Native pour des classes de Bac +3. Ecriture des supports de cours. Examens & évaluation des notions acquises.`,
              ]
            : [
                `React Native Trainer for Bachelor of Science (Computer Science) students.
            Writing of course materials. Reviews & evaluation of acquired knowledge.`,
              ],
          skills: [
            'React Native',
            'Expo',
            coursSkillLabel,
            trainingSkillLabel
          ],
          start: new Date(2024, 5).toISOString(),
          end: new Date().toISOString(),
        },
        {
          title: needFrench ? `Formateur React` : `React Trainer`,
          company: `UCLy`,
          description: needFrench
            ? [
                `Formateur React.js et React Native pour des classes de Bac +2 et Bac +3. Ecriture des supports de cours. Examens & évaluation des notions acquises.`,
              ]
            : [
                `React and React Native Trainer for Associate of Science and Bachelor of Science (Computer Science) students.
            Writing of course materials. Reviews & evaluation of acquired knowledge.`,
              ],
          skills: [
            'React.js',
            'React Native',
            'NodeJS',
            'Docker',
            coursSkillLabel,
            trainingSkillLabel
          ],
          start: new Date(2022, 12).toISOString(),
          end: new Date(2024, 8).toISOString(),
        },
        {
          title: `Javascript Trainer & Mentor`,
          company: `Econocom`,
          description: needFrench
            ? [
                `Rataché à la direction technique du centre de service lyonnais, je participais à la formation continue 
                des développeurs via des atelier, mini-conférence, contenu technique et des formation organisé autour des sujets lié au JavaScript, à l'intégration continue, etc`,
              ]
            : [
                `I was in charge of helping developers learn and grow in their expertise using workshops, technical content and training about JavaScript, continuous integration, etc.`,
              ],
          skills: [
            'CI/CD', 
            'JavaScript', 
            'Docker',
            trainingSkillLabel,
            workshopSkillLabel,
            conferenceSkillLabel,
          ],
          start: new Date(2017, 10).toISOString(),
          end: new Date(2018, 7).toISOString(),
        },
        {
          title: needFrench ? `Formateur Javascript` : `JavaScript Trainer`,
          company: `ORT Lyon`,
          description: needFrench
            ? [
                `Formateur d'une classe de 14 élèves en 3Csi (Concepteur de systèmes d’Information -
              Bac +3). Ecriture des supports de cours. Examens & évaluation des notions acquises.`,
              ]
            : [
                `Trainer of a class of 14 students in Bachelor of Science (Computer Science).
            Writing of course materials. Reviews & evaluation of acquired knowledge.`,
              ],
          skills: [
            'Javascript ES3-5',
            'Javascript ES6+',
            'jQuery',
            'AngularJS',
            'NodeJS',
            'Docker',
            'ExpressJS',
            'Pug (Jade)',
            coursSkillLabel,
            trainingSkillLabel
          ],
          start: new Date(2017, 1).toISOString(),
          end: new Date(2018, 0).toISOString(),
        },
      ]
}

async function getFeedbacks(locale = 'en') {
  const needFrench = locale === 'fr'

  return [
        {
          text: needFrench
            ? [
                `"Nathanaël est un développeur comme on n'en fait plus : passionné, précis, et d'une grande maturité. Très pédagogue, il a su m'encadrer pendant mon stage, et me permettre de monter en compétence rapidement et efficacement.`,
                `En ne perdant jamais de vue les bonnes pratiques, il permet à toute l'équipe d'atteindre un code de qualité, et d'utiliser au mieux tous les outils.`,
                `Ressource pour toute l'équipe et même pour d'autres équipes, il prend le temps de toujours faire bien, et a à cœur la réussite des projets."`,
              ]
            : [
                `"Nathanaël is a developer like no other: passionate, precise, and very mature. Very pedagogical, he knew how to supervise me during my internship, and allowed me to develop my skills quickly and efficiently.`,
                `By never losing sight of good practices, he allows the whole team to achieve quality code, and to make the best use of all the tools.`,
                `A resource for the whole team and even for other teams, he takes the time to always do well, and takes the success of projects to heart."`,
              ],
          author: `Clementine`,
          role: `Software Engineer`,
        },
        {
          text: needFrench
            ? [
                `"Nathanaël est une personne passionnée par son métier, pédagogue et très
            sympathique. J'ai travaillé avec lui sur plusieurs projets. Il témoigne d'une
            grande curiosité, même en design.`,
                `Son calme, ses connaissances approfondies et sa bonne humeur en font un collègue
            apprécié.`,
                `Une collaboration designer-développeur comme on en souhaite !"`,
              ]
            : [
                `"Nathanaël is a person passionate about his job, a teacher and very friendly. I worked with him on several projects. He shows great curiosity, even in design.`,
                `His calm, in-depth knowledge and good humor make him a valued colleague.`,
                `A designer-developer collaboration as we wish!"`,
              ],
          author: `Sayuli`,
          role: `UX Designer`,
        },
      ]
}

function formatDate(date: Date, locale = 'fr') {
  return date.toLocaleDateString(locale, {
    month: 'short',
    year: 'numeric',
  })
}
