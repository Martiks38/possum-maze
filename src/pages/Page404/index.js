import React from 'react'
import styles from './error.module.css'

function Page404() {
  return (
    <>
      <h1 className={styles.title}>Error 404</h1>
      <p className={styles.msg}>Laxy no sabe dónde empezar a buscar.</p>
      <img src="/error.webp" alt="Ruta no encontrada" className={styles.img} />
    </>
  )
}

export default Page404
