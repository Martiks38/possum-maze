import React from 'react'
import { Link } from 'wouter'
import styles from './menuMovil.module.css'

function MenuMovil() {
  return (
    <>
      <details className={styles.detail} open data-list>
        <summary></summary>
        <nav>
          <Link className={styles.item} to="/">
            Inicio
          </Link>
          <Link className={styles.item} to="/canciones">
            Canciones
          </Link>
          <Link className={styles.item} to="/series">
            Series
          </Link>
        </nav>
      </details>
    </>
  )
}

export default MenuMovil
