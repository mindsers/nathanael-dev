import {
  NextPage,
  GetStaticPropsContext,
  GetStaticPropsResult,
  InferGetStaticPropsType,
} from 'next'
import { useTranslations } from 'next-intl'
import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { FreelanceSVG } from '../components/illustrations/FreelanceSVG'
import { MobileSVG } from '../components/illustrations/MobileSVG'
import { WebSVG } from '../components/illustrations/WebSVG'

import styles from '../styles/activities.module.css'

function DeveloperPage({
  experiences,
  locale,
  feedbacks,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const t = useTranslations('DeveloperPage')

  return (
    <div className={styles.container}>
      <Head>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.desc')} />
        <link rel="icon" href="/favicon.ico" />

        <link rel="alternate" hrefLang="fr" href="/fr/developer" />
        <link rel="alternate" hrefLang="en" href="/developer" />
        <link rel="alternate" hrefLang="x-default" href="/developer" />
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
            <Link href="https://github.com/mindsers/" className={styles.socialLink}>
              <svg xmlns="http://www.w3.org/2000/svg" height={30} viewBox="0 0 496 512">
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
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
            <Link href={t('experience.callToAction.maltURL')} className="button">
              {t('callToAction1')}
            </Link>
          </div>
        </header>
        <section className={styles.section}>
          <div className={styles.sectionColumn}>
            <div className={styles.insights}>{t.rich('webSection.insight')}</div>
            {t.rich('webSection.text')}
          </div>
          <div className={styles.svgContainer}>
            <WebSVG />
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.svgContainer}>
            <MobileSVG />
          </div>
          <div className={styles.sectionColumn}>
            <div className={styles.insights}>{t.rich('mobileSection.insight')}</div>
            {t.rich('mobileSection.text')}
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
                    {exp.title} ?? {exp.company}
                  </h3>
                  <p className={styles.meta}>
                    {formatDate(start, locale)} - {formatDate(end, locale)} ??{' '}
                    {t('experience.duration', { years, months })}
                  </p>
                  {exp.description.map((paragraph, pIndex) => (
                    <p key={pIndex}>{paragraph}</p>
                  ))}
                  <p>
                    <span className={styles.skillLabel}>{t('experience.skills')}</span>{' '}
                    {exp.skills.join(' ?? ')}
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
              <Link href={t('experience.callToAction.maltURL')} className="button inverse">
                {t('experience.callToAction.button')}
              </Link>
            </div>
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.sectionColumn}>
            <div className={styles.insights}>{t.rich('TJMSection.insight')}</div>
            {t.rich('TJMSection.text')}
            <p className={styles.actions}>
              <Link className={'button'} href={t('experience.callToAction.maltURL')}>
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
                      {feedback.author} ?? {feedback.role}
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

export default DeveloperPage

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const needFrench = locale === 'fr'
  const englishSkillLabel = needFrench ? 'Anglais' : 'English'
  const architectureSkillLabel = needFrench ? 'Architecture logicielle' : 'Software Architecture'

  return {
    props: {
      locale,
      experiences: [
        {
          title: `Lead Software Engineer`,
          company: `Ferpection`,
          description: needFrench
            ? [
                ` D??velopement de la plateforme de recherche en test utilisateur ansi que les outils interne avec les technos: ES6+, ReactJS, VictoryJS`,
              ]
            : [
                `Built the frontend of the user research platform and some of the internal tools used at Ferpection.`,
                `Built no-code automations using Zapier.`,
              ],
          skills: [
            englishSkillLabel,
            'React.js',
            'Apollo GraphQL',
            architectureSkillLabel,
            'JavaScript',
          ],
          start: new Date(2018, 8).toISOString(),
          end: new Date(2023, 2).toISOString(),
        },
        {
          title: `Javascript & iOS Software Engineer, DevOps`,
          company: `Econocom`,
          description: needFrench
            ? [
                `Dev : R??f??rent mobilit?? et technologies Javascript du centre de service Econocom,
            j'interviens sur les phases de conception, de chiffrage, d'architecture et de
            d??veloppement des projets iOS et des projets front/back/full Javascript.`,
                `DevOps: Mise en place des plateformes d'int??gration / d??ploiement continue.
            Automatisation des t??ches. Accompagnement des d??veloppeurs sur les technologies Git,
            Docker, GitLab CI, etc...`,
              ]
            : [
                `Dev : Mobility and Javascript technologies referent at the Econocom service center, I work on the design, costing, architecture and development phases of iOS projects and front/back/full Javascript projects.`,
                `DevOps: Implementation of continuous integration / deployment platforms. Automation of tasks. Support for developers on Git, Docker, GitLab CI technologies, etc...`,
              ],
          skills: ['Angular', 'Swift', 'Objective-C', architectureSkillLabel, 'JavaScript'],
          start: new Date(2015, 10).toISOString(),
          end: new Date(2018, 7).toISOString(),
        },
        {
          title: needFrench ? `Formateur Javascript` : `JavaScript Trainer`,
          company: `ORT Lyon`,
          description: needFrench
            ? [
                `Formateur d'une classe de 14 ??l??ves en 3Csi (Concepteur de syst??mes d???Information -
              Bac +3). Ecriture des supports de cours. Examens & ??valuation des notions acquises.`,
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
          ],
          start: new Date(2017, 1).toISOString(),
          end: new Date(2018, 0).toISOString(),
        },
        {
          title: `Web Developer, Software & Embedded System Developer`,
          company: `Winciel`,
          description: needFrench
            ? [
                `D??veloppement de modules Php, C, M.Access, Vb, autour de la solution principale
            vendu par l'entreprise. D??veloppement d'applications sp??cifiques pour certains
            clients. Co-d??veloppement sur un projet concernant le cr??ation d'un syst??me embarqu??
            pour les chaudi??res d'immeuble.`,
              ]
            : [
                `Development of Php, C, M.Access, Vb modules, around the main solution sold by the company. Development of specific applications for certain customers. Co-development on a project concerning the creation of an embedded system for building boilers.`,
              ],
          skills: ['PHP', 'JavaScript', 'Java', 'C11', 'Python'],
          start: new Date(2013, 7).toISOString(),
          end: new Date(2015, 9).toISOString(),
        },
        {
          title: `Web Developer, Web Designer`,
          company: `Cr??dit Agricole`,
          description: needFrench
            ? [
                `D??ploiement et am??lioration du site d??di??e aux soci??taires. Cr??ation du site
            https://societaire-reunion.fr`,
                `Cr??ation d'une biblioth??que de banni??re publicitaire, de site web en collaboration
            avec le service marketing, d'affiche publicitaire destin??es a l'impression.
            Modification et participation ?? la vie du site https://ca-reunion.fr`,
              ]
            : [
                `Deployment and improvement of the site dedicated to members. Creation of the website https://societaire-reunion.fr`,
                `Creation of a library of advertising banners, websites in collaboration with the marketing department, advertising posters intended for printing. Modification and participation in the life of the site https://ca-reunion.fr`,
              ],
          skills: ['PHP', 'JavaScript', 'WordPress', 'Photoshop', 'InDesign'],
          start: new Date(2012, 1).toISOString(),
          end: new Date(2013, 2).toISOString(),
        },
      ],
      feedbacks: [
        {
          text: needFrench
            ? [
                `"Nathana??l a effectu?? le d??veloppement de mon site internet, la migration des donn??es et l'installation de serveur s??curis?? dans le cloud.`,
                `La prestation a ??t?? effectu??e rapidement, la communication a ??t?? facile et mes attentes bien prises en compte m??me pour des changements de derni??re minute.`,
                `Nathana??l sait s'adapter au client!"`,
              ]
            : [
                `Nathana??l carried out the development of my website, the migration of data and the installation of a secure server in the cloud.`,
                `The service was carried out quickly, communication was easy and my expectations were well taken into account, even for last minute changes.`,
                `Nathana??l knows how to adapt to the customer!"`,
              ],
          author: `Ma??va`,
          role: `CEO Travel & Food`,
        },
        {
          text: needFrench
            ? [
                `"Nathana??l est un d??veloppeur comme on n'en fait plus : passionn??, pr??cis, et d'une grande maturit??. Tr??s p??dagogue, il a su m'encadrer pendant mon stage, et me permettre de monter en comp??tence rapidement et efficacement.`,
                `En ne perdant jamais de vue les bonnes pratiques, il permet ?? toute l'??quipe d'atteindre un code de qualit??, et d'utiliser au mieux tous les outils.`,
                `Ressource pour toute l'??quipe et m??me pour d'autres ??quipes, il prend le temps de toujours faire bien, et a ?? c??ur la r??ussite des projets."`,
              ]
            : [
                `"Nathana??l is a developer like no other: passionate, precise, and very mature. Very pedagogical, he knew how to supervise me during my internship, and allowed me to develop my skills quickly and efficiently.`,
                `By never losing sight of good practices, he allows the whole team to achieve quality code, and to make the best use of all the tools.`,
                `A resource for the whole team and even for other teams, he takes the time to always do well, and takes the success of projects to heart."`,
              ],
          author: `Clementine`,
          role: `Software Engineer`,
        },
        {
          text: needFrench
            ? [
                `"D??veloppeur rare, qui regarde et comprend comment fonctionnent les diff??rentes technos et les frameworks. Pourquoi choisir un d??veloppeur qui utilise b??tement une techno quand on peut en choisir un qui la comprend pleinement ?"`,
              ]
            : [
                `Rare developer, who watches and understands how different technologies and frameworks work. Why choose a developer who stupidly uses technology when you can choose one who fully understands it?`,
              ],
          author: `Sasha`,
          role: `Frontend Developer`,
        },
        {
          text: needFrench
            ? [
                `"Nathana??l est une personne passionn??e par son m??tier, p??dagogue et tr??s
            sympathique. J'ai travaill?? avec lui sur plusieurs projets. Il t??moigne d'une
            grande curiosit??, m??me en design.`,
                `Son calme, ses connaissances approfondies et sa bonne humeur en font un coll??gue
            appr??ci??.`,
                `Une collaboration designer-d??veloppeur comme on en souhaite !"`,
              ]
            : [
                `"Nathana??l is a person passionate about his job, a teacher and very friendly. I worked with him on several projects. He shows great curiosity, even in design.`,
                `His calm, in-depth knowledge and good humor make him a valued colleague.`,
                `A designer-developer collaboration as we wish!"`,
              ],
          author: `Sayuli`,
          role: `UX Designer`,
        },
        {
          text: needFrench
            ? [
                `"Nathana??l est un d??veloppeur passionn?? avec un tr??s haut niveau d'exigence et des
            capacit??s hors norme. J'ai ??t?? ravi de travailler avec lui."`,
              ]
            : [
                `"Nathana??l is a passionate developer with very high standards and exceptional abilities. I was delighted to work with him."`,
              ],
          author: `Antonio`,
          role: `Senior Developer`,
        },
        {
          text: needFrench
            ? [
                `"Un honneur d???avoir pu travailler avec lui. Une personne avec qui j???ai ??norm??ment appris.`,
                `Que cela soit sur le plan technique ou organisationnel, Nathanael m???a fait ??voluer.`,
                `Une personne tr??s professionnelle qui va au bout de ses missions et que j???ai eu plaisir ?? rencontrer et qui enrichit une ??quipe. Toujours de bons conseils pour aller de l???avant sur un projet."`,
              ]
            : [
                `"An honor to have been able to work with him. A person with whom I learned a lot.`,
                `Whether on a technical or organizational level, Nathana??l made me evolve.`,
                `A very professional person who goes to the end of his missions and whom I had the pleasure of meeting and who enriches a team. Always good advice to move forward on a project."`,
              ],
          author: `Paul`,
          role: `Backend Developer`,
        },
        {
          text: needFrench
            ? [
                `"Travailler avec Nathana??l est un immense plaisir : curieux, passionn??, garant des bonnes pratiques, il pousse toute une ??quipe ?? son meilleur.`,
                `Rapidement au sein d'Econocom, il est devenu indispensable sur tous les sujets transverses comme l'int??gration continue, le versionning, les tests automatis??s.`,
                `Excellent d??veloppeur iOS et JS, n'h??sitez pas ?? lire son blog qui est une p??pite technique."`,
              ]
            : [
                `"Working with Nathana??l is an immense pleasure: curious, passionate, guarantor of good practices, he pushes an entire team to its best.`,
                `Quickly within Econocom, he became essential on all cross-functional topics such as continuous integration, versioning, automated testing.`,
                `Excellent iOS and JS developer, do not hesitate to read his blog which is a technical nugget."`,
              ],
          author: `Coline`,
          role: `Lead Developer`,
        },
      ],
    },
  }
}

function formatDate(date: Date, locale = 'fr') {
  return date.toLocaleDateString(locale, {
    month: 'short',
    year: 'numeric',
  })
}
