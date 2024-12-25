import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <img src="/NT.svg" alt="Netlify Logo" className={styles.logo} />
      </footer>
    </>
  )
}
