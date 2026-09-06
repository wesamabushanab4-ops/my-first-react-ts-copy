import { useState } from 'react'
import styles from './Counter.module.css'

export default function Counter() {
  const [count, setCount] = useState(0)

  function handleIncrement() {
    setCount(count + 1)
  }

  function handleDecrement() {
    setCount(count - 1)
  }

  function handleReset() {
    setCount(0)
  }

  return (
    <section className={styles.counterBox}>
      <p className={styles.label}>Counter</p>
      <h3 className={styles.value}>{count}</h3>

      <div className={styles.actions}>
        <button className={styles.buttonSecondary} onClick={handleDecrement}>
          Decrement
        </button>
        <button className={styles.buttonPrimary} onClick={handleIncrement}>
          Increment
        </button>
        <button className={styles.buttonReset} onClick={handleReset}>
          Reset
        </button>
      </div>
    </section>
  )
}
