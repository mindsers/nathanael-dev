import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { MobileSVG } from '../components/illustrations/MobileSVG'
import { WebSVG } from '../components/illustrations/WebSVG'

import styles from '../styles/DeveloperPage.module.css'

const DeveloperPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nathanaël Cherrier – Developer, Coder</title>
        <meta
          name="description"
          content="Nathanaël is a software engineer, passionate about code, business and coffee."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <header>
          <Header />
          <h1 className={styles.title}>
            A full stack developer specialized in frontend and mobile dev
          </h1>
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
          </div>
        </header>
        <section className={styles.section}>
          <div className={styles.sectionColumn}>
            <div className={styles.insights}>
              <p>More than 7 years of experience</p>
              <p>Master JavaScript in backend and frontend app</p>
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
          <div className={styles.svgContainer}>
            <WebSVG />
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.svgContainer}>
            <MobileSVG />
          </div>
          <div className={styles.sectionColumn}>
            <div className={styles.insights}>
              <p>5 iOS app developed for leading tech companies</p>
              <p>Master Swift in backend and frontend app</p>
            </div>
            <p>
              I'm primarily an iOS application developer. I first learned Objective-C and then
              switched to Swift when Apple released it.
            </p>
            <p>
              Let's make things clear: I know JavaScript but when it comes to mobile application, I
              believe in the superiority of native languages like Swift and Java. That's why I
              recommend my client to go for native technologies rather than hybrid languages.
            </p>
            <p>
              I really love this language (Swift) which was build on the best of python, C/C++ and
              JavaScript with all the Objective-C legacy. It is so great that I decided to learn it
              as a backend language too.
            </p>
          </div>
        </section>
        <section className={styles.sectionLight}>
          <div className={styles.sectionResume}>
            <h2>Previous Experiences</h2>
            <div>
              <h3>Lead Software Engineer · Ferpection</h3>
              <p className={styles.meta}>sept. 2018 - mars 2023 · 4 ans 7 mois</p>
              <p>
                Dévelopement de la plateforme de recherche en test utilisateur ansi que les outils
                interne avec les technos: ES6+, ReactJS, VictoryJS
              </p>
              <p>
                <span className={styles.skillLabel}>Compétences :</span> Anglais · React.js · Apollo
                GraphQL · Architecture logicielle · JavaScript
              </p>
            </div>
            <div>
              <h3>Javascript & iOS Software Engineer, DevOps · Econocom</h3>
              <p className={styles.meta}>nov. 2015 - août 2018 · 2 ans 10 mois</p>
              <p>
                Dev : Référent mobilité et technologies Javascript du centre de service Econocom,
                j'interviens sur les phases de conception, de chiffrage, d'architecture et de
                développement des projets iOS et des projets front/back/full Javascript.
              </p>
              <p>
                DevOps: Mise en place des plateformes d'intégration / déploiement continue.
                Automatisation des tâches. Accompagnement des développeurs sur les technologies Git,
                Docker, GitLab CI, etc...
              </p>
              <p>
                <span className={styles.skillLabel}>Compétences :</span> Anglais · React.js · Apollo
                GraphQL · Architecture logicielle · JavaScript
              </p>
            </div>
            <div>
              <h3>Formateur Javascript · ORT Lyon</h3>
              <p className={styles.meta}>févr. 2017 - juin 2018 · 1 an 5 mois</p>
              <p>
                Formateur d'une classe de 14 élèves en 3Csi (Concepteur de systèmes d’Information -
                Bac +3). Ecriture des supports de cours. Examens & évaluation des notions acquises.
              </p>
              <p>
                <span className={styles.skillLabel}>Technologies enseignées :</span> Javascript
                ES3-5 · Javascript ES6+ · jQuery · AngularJS · NodeJS · Docker · ExpressJS · Pug
                (Jade)
              </p>
            </div>
            <div>
              <h3>Web Developer, Software & Embedded System Developer · Winciel</h3>
              <p className={styles.meta}>août 2013 - oct. 2015 · 2 ans 3 mois</p>
              <p>
                Développement de modules Php, C, M.Access, Vb, autour de la solution principale
                vendu par l'entreprise. Développement d'applications spécifiques pour certains
                clients. Co-développement sur un projet concernant le création d'un système embarqué
                pour les chaudières d'immeuble.
              </p>
              <p>
                <span className={styles.skillLabel}>Compétences :</span> PHP · Javascript · Java ·
                C11 · Python
              </p>
            </div>
            <div>
              <h3>Web Developer, Web Designer · Crédit Agricole</h3>
              <p className={styles.meta}>févr. 2012 - mars. 2013 · 1 an 2 mois</p>
              <p>
                Déploiement et amélioration du site dédiée aux sociétaires. Création du site
                https://societaire-reunion.fr
              </p>
              <p>
                Création d'une bibliothèque de bannière publicitaire, de site web en collaboration
                avec le service marketing, d'affiche publicitaire destinées a l'impression.
                Modification et participation à la vie du site https://ca-reunion.fr
              </p>
              <p>
                <span className={styles.skillLabel}>Compétences :</span> PHP · Javascript ·
                WordPress · Photoshop · InDesign
              </p>
            </div>
            <div className={styles.actions}>
              <Link href="https://linkedin.com/in/mindsers/" className="button inverse">
                See more on LinkedIn
              </Link>
              <Link href="https://linkedin.com/in/mindsers/" className="button inverse">
                Work with me
              </Link>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  )
}

export default DeveloperPage
