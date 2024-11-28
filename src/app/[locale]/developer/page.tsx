import { getLocale, getTranslations } from 'next-intl/server'
import Head from 'next/head'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { FreelanceSVG } from '@/components/illustrations/FreelanceSVG'
import { MobileSVG } from '@/components/illustrations/MobileSVG'
import { WebSVG } from '@/components/illustrations/WebSVG'
import { Link } from '@/i18n/routing'
import { rawHTMLDefaults } from '@/i18n/utils'

import styles from './developer.module.css'

async function DeveloperPage() {
  const t = await getTranslations('DeveloperPage')
  const locale = await getLocale();
  const experiences = await getExperiences(locale)
  const feedbacks = await getFeedbacks(locale)

  const callURL = "https://cal.com/nathanael-cherrier/development"

  return (
    <div className={styles.container}>
      <Head>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.desc')} />

        <link rel="alternate" hrefLang="fr" href="/fr/developer" />
        <link rel="alternate" hrefLang="en" href="/en/developer" />
        <link rel="alternate" hrefLang="x-default" href="/en/developer" />
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
            <Link href={callURL} className="button">
              {t('callToAction1')}
            </Link>
          </div>
        </header>
        <section className={styles.section}>
          <div className={styles.sectionColumn}>
            <div className={styles.insights}>{t.rich('webSection.insight', rawHTMLDefaults)}</div>
            {t.rich('webSection.text', rawHTMLDefaults)}
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
            <div className={styles.insights}>{t.rich('mobileSection.insight', rawHTMLDefaults)}</div>
            {t.rich('mobileSection.text', rawHTMLDefaults)}
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
            <p className={styles.call2ActionText}>{t('feedbacks.callToAction.text')}</p>
            <p className={styles.actions}>
              <Link className={'button inverse'} href={callURL}>
                {t('feedbacks.callToAction.button')}
              </Link>
            </p>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  )
}

export default DeveloperPage

async function getExperiences(locale = 'en') {
  const needFrench = locale === 'fr'
  const englishSkillLabel = needFrench ? 'Anglais' : 'English'
  const architectureSkillLabel = needFrench ? 'Architecture logicielle' : 'Software Architecture'

  return [
        {
          title: `Chief Technology Officer`,
          company: `Steply`,
          description: needFrench ? [`Direction technique et développement de la plateforme Steply composé d'une application mobile native et de différents service web géré via Docker et Kubernetes.`] : [
            `Design and development of Steply. The full platform is composed of native mobile applications and sereval web services running on kubernetes`
          ],
          skills: [
            'Swift',
            'SwiftUI',
            'Kotlin',
            'Jetpack Compose',
            'React.js',
            architectureSkillLabel,
            'Remix'
          ],
          start: new Date(2023, 1).toISOString(),
          end: new Date().toISOString()
        },
        {
          title: `Lead Software Engineer`,
          company: `Ferpection`,
          description: needFrench
            ? [
                ` Dévelopement de la plateforme de recherche en test utilisateur ansi que les outils interne avec les technos: ES6+, ReactJS, VictoryJS`,
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
          end: new Date(2023, 0).toISOString(),
        },
        {
          title: `Javascript & iOS Software Engineer, DevOps`,
          company: `Econocom`,
          description: needFrench
            ? [
                `Dev : Référent mobilité et technologies Javascript du centre de service Econocom,
            j'interviens sur les phases de conception, de chiffrage, d'architecture et de
            développement des projets iOS et des projets front/back/full Javascript.`,
                `DevOps: Mise en place des plateformes d'intégration / déploiement continue.
            Automatisation des tâches. Accompagnement des développeurs sur les technologies Git,
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
          title: `Web Developer, Software & Embedded System Developer`,
          company: `Winciel`,
          description: needFrench
            ? [
                `Développement de modules Php, C, M.Access, Vb, autour de la solution principale
            vendu par l'entreprise. Développement d'applications spécifiques pour certains
            clients. Co-développement sur un projet concernant le création d'un système embarqué
            pour les chaudières d'immeuble.`,
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
          company: `Crédit Agricole`,
          description: needFrench
            ? [
                `Déploiement et amélioration du site dédiée aux sociétaires. Création du site
            https://societaire-reunion.fr`,
                `Création d'une bibliothèque de bannière publicitaire, de site web en collaboration
            avec le service marketing, d'affiche publicitaire destinées a l'impression.
            Modification et participation à la vie du site https://ca-reunion.fr`,
              ]
            : [
                `Deployment and improvement of the site dedicated to members. Creation of the website https://societaire-reunion.fr`,
                `Creation of a library of advertising banners, websites in collaboration with the marketing department, advertising posters intended for printing. Modification and participation in the life of the site https://ca-reunion.fr`,
              ],
          skills: ['PHP', 'JavaScript', 'WordPress', 'Photoshop', 'InDesign'],
          start: new Date(2012, 1).toISOString(),
          end: new Date(2013, 2).toISOString(),
        },
      ]
}

async function getFeedbacks(locale = 'en') {
  const needFrench = locale === 'fr'

  return [
        {
          text: needFrench
            ? [
                `"Nathanaël a effectué le développement de mon site internet, la migration des données et l'installation de serveur sécurisé dans le cloud.`,
                `La prestation a été effectuée rapidement, la communication a été facile et mes attentes bien prises en compte même pour des changements de dernière minute.`,
                `Nathanaël sait s'adapter au client!"`,
              ]
            : [
                `Nathanaël carried out the development of my website, the migration of data and the installation of a secure server in the cloud.`,
                `The service was carried out quickly, communication was easy and my expectations were well taken into account, even for last minute changes.`,
                `Nathanaël knows how to adapt to the customer!"`,
              ],
          author: `Maëva`,
          role: `CEO Travel & Food`,
        },
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
                `"Développeur rare, qui regarde et comprend comment fonctionnent les différentes technos et les frameworks. Pourquoi choisir un développeur qui utilise bêtement une techno quand on peut en choisir un qui la comprend pleinement ?"`,
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
        {
          text: needFrench
            ? [
                `"Nathanaël est un développeur passionné avec un très haut niveau d'exigence et des
            capacités hors norme. J'ai été ravi de travailler avec lui."`,
              ]
            : [
                `"Nathanaël is a passionate developer with very high standards and exceptional abilities. I was delighted to work with him."`,
              ],
          author: `Antonio`,
          role: `Senior Developer`,
        },
        {
          text: needFrench
            ? [
                `"Un honneur d’avoir pu travailler avec lui. Une personne avec qui j’ai énormément appris.`,
                `Que cela soit sur le plan technique ou organisationnel, Nathanael m’a fait évoluer.`,
                `Une personne très professionnelle qui va au bout de ses missions et que j’ai eu plaisir à rencontrer et qui enrichit une équipe. Toujours de bons conseils pour aller de l’avant sur un projet."`,
              ]
            : [
                `"An honor to have been able to work with him. A person with whom I learned a lot.`,
                `Whether on a technical or organizational level, Nathanaël made me evolve.`,
                `A very professional person who goes to the end of his missions and whom I had the pleasure of meeting and who enriches a team. Always good advice to move forward on a project."`,
              ],
          author: `Paul`,
          role: `Backend Developer`,
        },
        {
          text: needFrench
            ? [
                `"Travailler avec Nathanaël est un immense plaisir : curieux, passionné, garant des bonnes pratiques, il pousse toute une équipe à son meilleur.`,
                `Rapidement au sein d'Econocom, il est devenu indispensable sur tous les sujets transverses comme l'intégration continue, le versionning, les tests automatisés.`,
                `Excellent développeur iOS et JS, n'hésitez pas à lire son blog qui est une pépite technique."`,
              ]
            : [
                `"Working with Nathanaël is an immense pleasure: curious, passionate, guarantor of good practices, he pushes an entire team to its best.`,
                `Quickly within Econocom, he became essential on all cross-functional topics such as continuous integration, versioning, automated testing.`,
                `Excellent iOS and JS developer, do not hesitate to read his blog which is a technical nugget."`,
              ],
          author: `Coline`,
          role: `Lead Developer`,
        },
        {
          text: needFrench
            ? [
                `"Nathanael, au delà de ses compétences techniques, a la capacité à comprendre les enjeux business du produit et à les intégrer dans sa réflexion pour développer en prenant en compte l’ensemble des besoins clients/ utilisateurs mais aussi les enjeux liés à l’entreprise. Il sait prendre du recul sur son travail et notamment le faire challenger par les utilisateurs afin de l’améliorer en continu.`,
                `Il est force de proposition face à d’éventuelles difficultés et peu apporter un point de vue intéressant sur de nombreux sujets.`,
                `Son implication chez ferpection sur des sujets au delà de ses compétences techniques (financiers, RH, commerciaux) lui ont permis de prendre de la hauteur sur son travail grâce à cette vision plus globale. Ce qui n’a fait qu’augmenter la qualité de ce dernier.`,
                `Nathanael fait preuve de solidarité et d’entraide et il est agréable de travailler avec lui au quotidien.`,
                `Je recommande complètement Nathanael, il est pour moi, un véritable atout au sein d’une équipe."`,
              ]
            : [
                `"Nathanaël, beyond his technical skills, has the ability to understand the business challenges of a product and incorporate them into his thinking. He develops solutions that take into account not only customer/user needs but also the company’s objectives. He knows how to take a step back from his work and seeks feedback from users to continuously improve it.`,
                `He is proactive in addressing potential challenges and brings valuable insights to a variety of topics.`,
                `His involvement at Ferpection in areas beyond his technical expertise (finance, HR, sales) allowed him to gain a broader perspective on his work. This global vision has further enhanced the quality of his contributions.`,
                `Nathanaël demonstrates solidarity and a collaborative spirit, making him a pleasure to work with on a daily basis.`,
                `I wholeheartedly recommend Nathanaël; he is, in my opinion, a true asset to any team."`,
              ],
          author: `Manon`,
          role: `Head of Operation`,
        },
        {
          text: needFrench
            ? [
                `"Nathanaël est un excellent collègue. Il réfléchit avant de se lancer dans le code, il contribue à la conception des idées et apporte des solutions techniques.`,
                `Il a une vision globale, non seulement de la structure technique, mais aussi du projet et de la stratégie globale.`,
                `Ce fut un plaisir de travailler avec lui sur des projets de conception UX."`,
              ]
            : [
                `"Nathanaël is a great colleague. He thinks things through before leaping into code, he helps design ideas and brings technical solutions to the table.`,
                `He has an overall vision of not only the technical structure, but also of the project and global strategy.`,
                `It was a pleasure working with him on UX design projects."`,
              ],
          author: `Marie`,
          role: `Senior Product Designer`,
        },
        {
          text: needFrench
            ? [
                `"J'ai eu le plaisir de travailler avec Nathanaël durant quelques mois au sein de l'entreprise Ferpection.`,
                `C'est une personne à l'écoute, qui prend le temps de comprendre vos besoins afin de produire les systèmes/fonctionnalités qui y répondent au mieux. Il est également demandeur de retours sur son travail dans un souci d'amélioration continue, ce qui est très appréciable.`,
                `Je recommande vivement Nathanël, car c'est une personne de confiance avec qui il est agréable de travailler."`,
              ]
            : [
                `"I had the pleasure of working with Nathanaël for a few months at Ferpection.`,
                `He is a great listener who takes the time to understand your needs in order to deliver systems and features that best meet them. He actively seeks feedback on his work to continuously improve, which is highly appreciated.`,
                `I highly recommend Nathanaël as he is a trustworthy person and a pleasure to work with."`,
              ],
          author: `Clara`,
          role: `UX Research Consultant`,
        },
      ]
}

function formatDate(date: Date, locale = 'fr') {
  return date.toLocaleDateString(locale, {
    month: 'short',
    year: 'numeric',
  })
}
