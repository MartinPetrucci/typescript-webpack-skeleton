import { useState } from 'react'
import styles from './counter.module.scss'
export const Counter = () => {

  const [counter, setCounter] = useState(0)
  return (
    <div className={styles.container}>
      <h1>Counter</h1>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  )
}
