import React from 'react'
import { Link } from 'wouter'
import styles from './navbar.module.css'

function Navbar() {
  return (
    <>
      <nav>
        <ul className={styles.menu}>
          <li>
            <Link href="/canciones" className={styles.linkBtn}>
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/canciones" className={styles.linkBtn}>
              Canciones
            </Link>
          </li>
          <li>
            <Link href="/series" className={styles.linkBtn}>
              Series
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
