import { Months } from '../../components/Months/Months'
import { TotalBalanceCard } from '../../components/TotalBalanceCard/TotalBalanceCard'
import { useBalance } from '../../services/queries'
import styles from './main.module.scss'
export const Main = () => {

  const {total, isFetching} = useBalance()
  console.log({total})

  if (isFetching) {
    return <div>Loading...</div>
  }

  return (
    <main className={styles.main}>
      <div className={`${styles['main-content']} content`}>
      <TotalBalanceCard total={total.balance}/>
      <Months />
      </div>
    </main>
  )
}
