import { Months } from '../../components/Months/Months'
import { TotalBalanceCard } from '../../components/TotalBalanceCard/TotalBalanceCard'
import styles from './main.module.scss'
export const Main = () => {
  return (
    <main className={styles.main}>
      <div className={`${styles['main-content']} content`}>
      <TotalBalanceCard />
      <Months />
      </div>
    </main>
  )
}
