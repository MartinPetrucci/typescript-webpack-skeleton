import styles from './total.module.scss'

export const TotalBalanceCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.balance}>
        <span>Balance actual</span>
        <span>$2345546</span>
      </div>
      <div className={styles['add-buttons']}>
        <button className={`${styles['add-button']} ${styles.income} `}>Agregar ingreso</button>
        <button className={`${styles['add-button']} ${styles.expense} `}>Agregar gasto</button>
      </div>
    </div>
  )
}
