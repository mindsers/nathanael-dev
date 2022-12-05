import { useTranslations } from 'next-intl'
import styles from './Footer.module.css'

export function Footer() {
  const t = useTranslations(Footer.name)
  return <footer className={styles.footer}>&copy;{t('copyright')}</footer>
}
