import { useMovements } from '../../services/queries'
import { Month } from '../Month/Month'
import styles from './months.module.scss'




export const Months = () => {
  return (
    <div className={styles.months}>
        <Month />
        <Month />
        <Month />
        <Month />
        <Month />
    </div>
  )
}
