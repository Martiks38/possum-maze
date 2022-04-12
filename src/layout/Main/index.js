import React from 'react'
import styles from './main.module.css'

function Main({ children }) {
  return (
    <main className={styles.main}>
      <img src="/presentacion.webp" alt="logo" className={styles.img} />
      {children}
    </main>
  )
}

export default Main
