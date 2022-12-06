import { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'

import styles from '../styles/DeveloperPage.module.css'

const InfluencerPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nathanaël Cherrier – Tech influencer</title>
        <meta
          name="description"
          content="Nathanaël is a software engineer, passionate about code, business and coffee."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <header>
          <Header />
          <h1 className={styles.title}>A strong online community</h1>
        </header>
        <section className={styles.section}>
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
        </section>
        <section className={styles.section}>
          <div className={styles.sectionColumn} />
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
        </section>
      </main>
    </div>
  )
}

export default InfluencerPage
