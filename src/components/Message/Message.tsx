import { useState } from 'react'
import styles from './Message.module.css'

export default function Message() {
  const [isBlue, setIsBlue] = useState(true)

  return (
    <div className={isBlue ? styles.messageBlue : styles.messageGreen}>
      <p className={styles.text}>Welcome to React</p>
      <button className={styles.button} onClick={() => setIsBlue(!isBlue)}>
        Change Color
      </button>
    </div>
  )
}
