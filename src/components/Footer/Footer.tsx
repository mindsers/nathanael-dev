'use client'
import { useTranslations } from 'next-intl'
import { Link, usePathname } from '@/i18n/routing'

import styles from './Footer.module.css'

export function Footer() {
  const t = useTranslations('Footer')
  const pathname = usePathname()

  return (
    <footer className={styles.footer}>
      <p>
        <Link href={pathname} locale="fr">
          🇫🇷 French
        </Link>
         - 
        <Link href={pathname} locale="en">
          🇺🇸 English
        </Link>
      </p>
      <p>&copy;{t('copyright')}</p>
    </footer>
  )
}
