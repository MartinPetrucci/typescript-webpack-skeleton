import styles from './months.module.scss'

const Month = () => {
    const arrow = '<'
    return (
        <div className={styles.month}>
            <span className={styles.date}>Agosto 2022</span>
            <div>
              <span style={{fontSize: "2rem"}}>{arrow}</span>          
            </div>
        </div>
    )
}


export const Months = () => {
  return (
    <div className={styles.months}>
        <Month />
        <Month />
        <Month />
        <Month />
        <Month />
        <Month />
        <Month />
    </div>
  )
}
