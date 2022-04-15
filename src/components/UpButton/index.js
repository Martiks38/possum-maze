import React from 'react'
import styles from './button.module.css'

function UpButton() {
  const upward = () => {
    window.scrollTo(0, 0)
  }

  return (
    <button className={styles.button} onClick={upward}>
      <span>
        <img src="/arrow.png" alt="Subir al inicio de la página" />
      </span>
    </button>
  )
}

export default UpButton
