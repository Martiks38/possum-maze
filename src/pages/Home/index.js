import React from 'react'
import LinkBtn from 'components/LinkButton'
import styles from './home.module.css'

function Home() {
  return (
    <>
      <img src="/presentacion.webp" alt="logo" className={styles.img} />
      <h1 className={styles.title}>
        <span>Laxy está lista para buscar sobre</span>
      </h1>
      <nav className={styles.nav}>
        <LinkBtn link={'/canciones'} styles={styles.button}>
          Canciones
        </LinkBtn>
        <LinkBtn link={'/series'} styles={styles.button}>
          Series
        </LinkBtn>
      </nav>
    </>
  )
}

export default Home
