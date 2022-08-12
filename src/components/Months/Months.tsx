import { useMovements } from '../../services/queries'
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

  const {data, isFetching, movements} = useMovements()
  console.log('movements desde Months', movements)

  if(isFetching) {
    return <h1>Fetching...</h1>
  }

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
