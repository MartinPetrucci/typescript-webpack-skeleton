import styles from './header.module.scss'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles['header-content']} content`}>
        <p className={styles['brand-name']}>Brand name</p>
        <div className={styles.actions}>
            <button className={styles.button}>Martín Petrucci</button>
        </div>
      </div>
    </header>
  )
}
