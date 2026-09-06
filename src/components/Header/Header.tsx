import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>My React Application</h1>
      <p className={styles.subtitle}>Learning Components and CSS</p>
    </header>
  )
}
