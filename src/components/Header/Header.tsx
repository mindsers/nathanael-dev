import { useTranslations } from 'next-intl'

import styles from './Header.module.css'
import { Link } from '@/i18n/routing'

export function Header() {
  const t = useTranslations('Header')
  return (
    <div className={styles.menu}>
      <p className={styles.logo}>
        <Link href={'/'}>Nathanaël Cherrier</Link>
      </p>
      <nav>
        <ul>
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
            <a>{t('menu.coach')}</a>
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
      </nav>
    </div>
  )
}
