import { useState } from 'react'

export const Counter = () => {
  const [counter, setCounter] = useState(0)
  return (
    <>
      <h1>Counter</h1>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </>
  )
}
