import { useTranslations } from 'next-intl'
import Link from 'next/link'
import styles from './Footer.module.css'

export function Footer() {
  const t = useTranslations('Footer')
  return (
    <footer className={styles.footer}>
      <p>
        <Link href={''} locale="fr">
          🇫🇷 French
        </Link>
         - 
        <Link href={''} locale="en">
          🇺🇸 English
        </Link>
      </p>
      <p>&copy;{t('copyright')}</p>
    </footer>
  )
}
